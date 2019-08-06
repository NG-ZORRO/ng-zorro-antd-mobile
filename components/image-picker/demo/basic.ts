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
  selector: 'demo-image-picker-basic',
  template: `
    <div class="ip-segment-wrapper">
      <div class="ip-segment-btn" [ngClass]="{ selected: multipleTab === 0 }" (click)="changeMultiple(0)">
        切换到单选
      </div>
      <div class="ip-segment-btn" [ngClass]="{ selected: multipleTab === 1 }" (click)="changeMultiple(1)">
        切换到多选
      </div>
    </div>
    <ImagePicker
      [files]="files"
      [multiple]="multipleTab === 1"
      [selectable]="files.length < 5"
      (onChange)="fileChange($event)"
      (onImageClick)="imageClick($event)"
    ></ImagePicker>
  `,
  styles: [
    `
      .ip-segment-wrapper {
        display: flex;
        border-radius: 5px;
        overflow: hidden;
        min-height: 27px;
        opacity: 1;
      }
      .ip-segment-btn {
        display: flex;
        flex: 1;
        justify-content: center;
        align-items: center;
        color: #108ee9;
        font-size: 14px;
        line-height: 1;
        -webkit-transition: background 0.2s;
        transition: background 0.2s;
        position: relative;
        border: 1px solid #108ee9;
        width: 100%;
        box-sizing: border-box;
        border-left-width: 0;
      }
      .ip-segment-btn.selected {
        background: #108ee9;
        color: #fff;
      }
      .ip-segment-btn:nth-child(1) {
        border-left-width: 1px;
        border-radius: 5px 0 0 5px;
      }
      .ip-segment-btn:nth-child(2) {
        border-left-width: 1px;
        border-radius: 0 5px 5px 0;
      }
    `
  ]
})
export class DemoImagePickerBasicComponent {
  files = data.slice(0);
  multiple = false;
  multipleTab = 0;

  changeMultiple(value: number) {
    this.multipleTab = value;
  }

  fileChange(params) {
    console.log(params);
    const { files, type, index } = params;
    this.files = files;
  }

  imageClick(params) {
    console.log(params);
  }
}
