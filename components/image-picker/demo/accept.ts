import { Component } from '@angular/core';
const data = [
  {
    url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg'
  },
  {
    url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg'
  }
];

@Component({
  selector: 'demo-image-picker-accept',
  template: `
    <ImagePicker [files]="files"
                 [selectable]="files.length < 5"
                 [multiple]="multiple"
                 [accept]="'image/gif,image/jpeg,image/jpg,image/png'"
                 (onImageClick)="imageClick($event)"
                 (onChange)="fileChange($event)"
                 (onImageChange)="ImageChange($event)"
    ></ImagePicker>
  `
})
export class DemoImagePickerAcceptComponent {
  files = data.slice(0);
  multiple = false;
  multipleTab = 0;

  changeMultiple(value: number) {
    this.multipleTab = value;
  }

  ImageChange(params) {
    const { files, type, index } = params;
    this.files = files;
  }

  fileChange(event) {
    console.log(event);
  }

  imageClick(params) {
    console.log(params);
  }
}
