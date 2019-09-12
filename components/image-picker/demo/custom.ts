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
  selector: 'demo-image-picker-custom',
  template: `
    <ImagePicker
      [files]="files"
      [multiple]="multiple"
      [selectable]="files.length < 5"
      (onChange)="fileChange($event)"
      (onImageClick)="imageClick($event)"
      (onAddImageClick)="addImageClick($event)"
    ></ImagePicker>
  `
})
export class DemoImagePickerCustomComponent {
  files = data.slice(0);
  multiple = false;

  fileChange(params) {
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
