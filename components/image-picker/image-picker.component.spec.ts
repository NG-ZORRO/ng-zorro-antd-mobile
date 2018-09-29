import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ImagePickerModule } from './image-picker.module';

const data = [
  {
    url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg'
  },
  {
    url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg'
  }
];

describe('ImagePicker', () => {
  let component: TestImagePicker;
  let fixture: ComponentFixture<TestImagePicker>;
  let ImagePickers;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ImagePickerModule],
      declarations: [TestImagePicker]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestImagePicker);
    component = fixture.componentInstance;
    ImagePickers = fixture.debugElement.queryAll(By.css('ImagePicker'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should files work', () => {
    const imageDiv = ImagePickers[0].nativeElement.querySelector('.am-image-picker-item-content');
    expect(imageDiv.style['background-image']).toBe(
      'url("https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg")'
    );
  });

  it('should imageClick work', () => {
    const imageDiv = ImagePickers[0].nativeElement.querySelector('.am-image-picker-item-content');
    imageDiv.click();
    expect(component.imageClickCallback).toHaveBeenCalled();
  });

  it('should imageChange work', () => {
    const removeDiv = ImagePickers[0].nativeElement.querySelector('.am-image-picker-item-remove');
    removeDiv.click();
    fixture.detectChanges();
    expect(component.imageChangeCallback).toHaveBeenCalled();
  });

  it('should selectable work', () => {
    const inputBtn = ImagePickers[0].nativeElement.querySelector('input[type=file]');
    expect(inputBtn).toBeTruthy();
    const inputBtn2 = ImagePickers[1].nativeElement.querySelector('input[type=file]');
    expect(inputBtn2).toBeNull();
  });

  it('should multiple work', () => {
    //
  });

  it('should addImageClick2 work', () => {
    // 自定义选择图片的方法
    const inputBtn = ImagePickers[2].nativeElement.querySelector('input[type=file]');
    inputBtn.click();
    fixture.detectChanges();
    expect(component.files2.length).toBe(3);
  });

  it('should accept work', () => {
    // 自定义文件类型
  });

  it('should length work', () => {
    // 自定义长度
    const flexBox = ImagePickers[4].nativeElement.querySelector('.am-flexbox');
    const flexItem = flexBox.querySelectorAll('.am-flexbox-item');
    fixture.detectChanges();
    expect(flexItem.length).toBe(6);
  });
});

@Component({
  selector: 'test-image-picker-child',
  template: `
  <div class="am-demo-page">
    <div class="demo-preview-item">
      <div class="demo-title">单选图片选择组件</div>
      <div class="demo-container">
        <ImagePicker [files]="files1"
                     [multiple]="false"
                     [selectable]="true"
                     (onChange)="imageChangeCallback()"
                     (onImageClick)="imageClickCallback()"
        >
        </ImagePicker>
      </div>
    </div>
    <div class="demo-preview-item">
      <div class="demo-title">多选图片选择组件</div>
      <div class="demo-container">
        <ImagePicker [files]="files2"
                     [multiple]="true"
                     [selectable]="false"
        >
        </ImagePicker>
      </div>
    </div>
    <div class="demo-preview-item">
      <div class="demo-title">自定义选择图片的方法</div>
      <div class="demo-container">
      <ImagePicker [files]="files2"
                   [multiple]="multiple2"
                   [selectable]="files2.length < 5"
                   (onChange)="fileChange2($event)"
                   (onImageClick)="imageClick($event)"
                   (onAddImageClick)="addImageClick2($event)"
        >
        </ImagePicker>
      </div>
    </div>
    <div class="demo-preview-item">
      <div class="demo-title">自定义文件类型</div>
      <div class="demo-container">
        <ImagePicker [files]="files3"
                     [multiple]="multiple3"
                     [selectable]="files3.length < 5"
                     [accept]="'image/gif,image/jpeg,image/jpg,image/png'"
                     (onChange)="fileChange3($event)"
                     (onImageClick)="imageClick($event)"
        >
        </ImagePicker>
      </div>
    </div>
    <div class="demo-preview-item">
      <div class="demo-title">自定义数量</div>
      <div class="demo-container">
        <ImagePicker [files]="files4"
                     [length]="6"
                     [selectable]="files4.length < 7"
                     (onImageClick)="imageClick($event)"
        >
        </ImagePicker>
      </div>
    </div>
  </div>
 `
})
export class TestImagePicker {
  files1 = data.slice(0);
  files2 = data.slice(0);
  files3 = data.slice(0);
  files4 = data.slice(0);
  imageChangeCallback = jasmine.createSpy('imageChangeCallback is callback');
  imageClickCallback = jasmine.createSpy('imageClickCallback is callback');

  constructor() {}

  addImageClick2(e) {
    e.preventDefault();
    this.files2 = this.files2.concat({
      url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg'
    });
  }
}
