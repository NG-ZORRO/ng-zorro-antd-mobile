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
  selector: 'demo-image-picker-length',
  template: `
    <ImagePicker
      [files]="files"
      [length]="6"
      [selectable]="files.length < 7"
      (onImageClick)="imageClick($event)"
      (onImageChange)="imageChange($event)"
      (onAddImageClick)="addImageClick($event)"
    ></ImagePicker>
  `
})
export class DemoImagePickerLengthComponent {
  files = data.slice(0);
  multiple = false;

  imageChange(params) {
    const { files, type, index } = params;
    this.files = files;
  }

  addImageClick(e) {
    e.preventDefault();
    this.files = this.files.concat({
      url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg'
    });
  }

  imageClick(params) {
    console.log(params);
  }
}
