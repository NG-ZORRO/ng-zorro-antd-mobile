import { Component, Input, Output, EventEmitter, ViewChild, ViewContainerRef } from '@angular/core';

export interface ElementType {
  type: string; // 'img' | 'select' | 'white'
  backgroundImage: string;
  transform: string;
}

@Component({
  selector: 'ImagePicker, nzm-image-picker',
  templateUrl: './image-picker.component.html'
})
export class ImagePickerComponent {
  prefixCls: string = 'am-image-picker';
  flexEl: ElementType[][] = [];

  private _accept: string = 'image/*';
  private _count: number = 4;
  private _selectable: boolean = true;
  private _files: Array<any> = [];
  private _multiple: boolean = false;

  @ViewChild('fileSelectorInput', { read: ViewContainerRef })
  private _fileSelectorInput: ViewContainerRef;

  @Input() capture: boolean | string = false;
  @Input() disableDelete: boolean = false;
  @Input()
  get files() {
    return this._files;
  }
  set files(value: Array<any>) {
    this._files = value;
    this.sortItem();
  }
  @Input()
  get accept(): string {
    return this._accept;
  }
  set accept(value: string) {
    this._accept = value;
    this.sortItem();
  }
  @Input()
  get length(): number {
    return this._count;
  }
  set length(value: number) {
    if (value > 0) {
      this._count = value;
    } else {
      this._count = 4;
    }
    this.sortItem();
  }
  @Input()
  get multiple(): boolean {
    return this._multiple;
  }
  set multiple(value: boolean) {
    this._multiple = value;
    this.sortItem();
  }
  @Input()
  get selectable(): boolean {
    return this._selectable;
  }
  set selectable(value: boolean) {
    this._selectable = value;
    this.sortItem();
  }
  @Output()
  onFail: EventEmitter<any> = new EventEmitter();
  @Output()
  onChange: EventEmitter<any> = new EventEmitter();
  @Output()
  onImageClick: EventEmitter<any> = new EventEmitter();
  @Output()
  onAddImageClick: EventEmitter<any> = new EventEmitter();

  constructor() {}

  sortItem() {
    if (!this._files) {
      return;
    }
    let count = parseInt('' + this._count, 10);
    if (count <= 0) {
      count = 4;
    }
    let allEl: ElementType[] = this._files.map(item => {
      return {
        type: 'img',
        backgroundImage: 'url(' + item.url + ')',
        transform: 'rotate(' + this.getRotation(item.orientation) + 'deg)'
      };
    });
    if (this._selectable) {
      allEl.push({
        type: 'select',
        backgroundImage: '',
        transform: ''
      });
    }
    const length = allEl.length;
    if (length !== 0 && length % count !== 0) {
      const blankCount = count - (length % count);
      const fillBlankEl: any[] = [];
      for (let i = 0; i < blankCount; i++) {
        fillBlankEl.push({
          type: 'white',
          backgroundImage: '',
          transform: ''
        });
      }
      allEl = allEl.concat(fillBlankEl);
    }
    this.flexEl = [];
    for (let i = 0; i < allEl.length / count; i++) {
      const rowEl = allEl.slice(i * count, i * count + count);
      this.flexEl.push(rowEl);
    }
  }

  addImage(imgItem: any) {
    this._files.push({
      type: 'img',
      url: imgItem.url,
      orientation: imgItem.orientation
    });
    this.sortItem();
    this.onChange.emit({
      files: this._files,
      operationType: 'add',
      index: this._files.length - 1
    });
  }

  removeImage(index: number) {
    this._files.splice(index, 1);
    this.sortItem();
    this.onChange.emit({
      files: this._files,
      operationType: 'remove',
      index: index
    });
  }

  imageClick(index: number) {
    this.onImageClick.emit({
      index: index,
      files: this._files
    });
  }

  addImageClick(e) {
    this.onAddImageClick.emit(e);
  }

  parseFile(file: any, index: number) {
    const reader = new FileReader();
    reader.onload = e => {
      const dataURL = (e.target as any).result;
      if (!dataURL) {
        this.onFail.emit(`Fail to get the ${index} image`);
        return;
      }

      let orientation = 1;
      this.getOrientation(file, res => {
        // -2: not jpeg , -1: not defined
        if (res > 0) {
          orientation = res;
        }
        this.addImage({
          url: dataURL,
          orientation,
          file
        });
      });
    };
    reader.readAsDataURL(file);
  }

  fileChange(event) {
    const fileList: FileList = event.target.files;
    if (fileList && fileList.length) {
      for (let i = 0; i < fileList.length; i++) {
        this.parseFile(fileList[i], i);
      }
    }
  }

  getRotation(orientation = 1) {
    let imgRotation = 0;
    switch (orientation) {
      case 3:
        imgRotation = 180;
        break;
      case 6:
        imgRotation = 90;
        break;
      case 8:
        imgRotation = 270;
        break;
      default:
    }
    return imgRotation;
  }

  // https://stackoverflow.com/questions/7584794/accessing-jpeg-exif-rotation-data-in-javascript-on-the-client-side
  getOrientation(file: any, callback: (_: number) => void) {
    const reader = new FileReader();
    reader.onload = e => {
      const view = new DataView((e.target as any).result);
      if (view.getUint16(0, false) !== 0xffd8) {
        return callback(-2);
      }
      const length = view.byteLength;
      let offset = 2;
      while (offset < length) {
        const marker = view.getUint16(offset, false);
        offset += 2;
        if (marker === 0xffe1) {
          const tmp = view.getUint32((offset += 2), false);
          if (tmp !== 0x45786966) {
            return callback(-1);
          }
          const little = view.getUint16((offset += 6), false) === 0x4949;
          offset += view.getUint32(offset + 4, little);
          const tags = view.getUint16(offset, little);
          offset += 2;
          for (let i = 0; i < tags; i++) {
            if (view.getUint16(offset + i * 12, little) === 0x0112) {
              return callback(view.getUint16(offset + i * 12 + 8, little));
            }
          }
        } else if ((marker & 0xff00) !== 0xff00) {
          break;
        } else {
          offset += view.getUint16(offset, false);
        }
      }
      return callback(-1);
    };
    reader.readAsArrayBuffer(file.slice(0, 64 * 1024));
  }
}
