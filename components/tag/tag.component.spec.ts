import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TagModule } from './tag.module';

describe('tag', () => {
  let component;
  let fixture: ComponentFixture<TestTagComponent>;
  let tagEle;
  let closeButton;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TestTagComponent],
      imports: [TagModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTagComponent);
    component = fixture.componentInstance;
    tagEle = fixture.debugElement.query(By.css('tag'));
    fixture.detectChanges();
    closeButton = tagEle.nativeElement.querySelector('.am-tag-close');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should small work', () => {
    expect(tagEle.nativeElement.querySelector('.am-tag').classList).not.toContain('am-tag-small', 'size is not small');
    component.small = true;
    fixture.detectChanges();
    expect(tagEle.nativeElement.querySelector('.am-tag').classList).toContain('am-tag-small', 'size is small');
  });

  it('should disabled work', () => {
    expect(tagEle.nativeElement.querySelector('.am-tag').classList).not.toContain(
      'am-tag-disabled',
      'tag is not disabled'
    );
    component.disabled = true;
    fixture.detectChanges();
    expect(tagEle.nativeElement.querySelector('.am-tag').classList).toContain('am-tag-disabled', 'tag is disabled');
  });

  it('should closable work', () => {
    expect(tagEle.nativeElement.querySelector('.am-tag').classList).not.toContain(
      'am-tag-closable',
      'tag is not closable'
    );
    component.closable = true;
    fixture.detectChanges();
    closeButton = tagEle.nativeElement.querySelector('.am-tag-close');
    expect(tagEle.nativeElement.querySelector('.am-tag').classList).toContain('am-tag-closable', 'tag is closable');
  });

  it('should selected work', () => {
    expect(tagEle.nativeElement.querySelector('.am-tag').classList).not.toContain(
      'am-tag-active',
      'tag is not selected'
    );
    component.selected = true;
    fixture.detectChanges();
    expect(tagEle.nativeElement.querySelector('.am-tag').classList).toContain('am-tag-active', 'tag is selected');
  });

  it('should onChange not work when disabled', () => {
    let tag = tagEle.nativeElement.querySelector('.am-tag');
    component.disabled = true;
    fixture.detectChanges();
    component.onChange = jasmine.createSpy('onChange callback');
    tag.click();
    fixture.detectChanges();
    expect(component.onChange).toHaveBeenCalledTimes(0);
  });

  it('should onChange work', () => {
    let tag = tagEle.nativeElement.querySelector('.am-tag');
    component.disabled = false;
    component.small = false;
    component.closable = false;
    component.selected = false;
    component.onChange = jasmine.createSpy('onChange callback');
    fixture.detectChanges();
    tag.click();
    fixture.detectChanges();
    expect(component.onChange).toHaveBeenCalledTimes(1);
  });

  it('should onClose work', () => {
    component.closable = true;
    fixture.detectChanges();
    closeButton = tagEle.nativeElement.querySelector('.am-tag-close');
    component.onClose = jasmine.createSpy('onClose is callback');
    closeButton.click();
    fixture.detectChanges();
    expect(component.onClose).toHaveBeenCalledTimes(1);
    expect(component.closable).toBe(true, 'tag is closed');
  });

  it('should afterClose work', () => {
    component.closable = true;
    fixture.detectChanges();
    component.afterClose = jasmine.createSpy('afterClose is callback');
    closeButton = tagEle.nativeElement.querySelector('.am-tag-close');
    closeButton.click();
    expect(component.afterClose).toHaveBeenCalledTimes(1);
  });
});

@Component({
  selector: 'test-tag',
  template: `
    <Tag
      [small]="small"
      [closable]="closable"
      [disabled]="disabled"
      [selected]="selected"
      (onClose)="onClose()"
      (afterClose)="afterClose()"
      (onChange)="onChange($event)"
    ></Tag>
  `
})
export class TestTagComponent {
  small = false;
  disabled = false;
  closable = false;
  selected = false;

  constructor() {}

  onChange(selected) {
    console.log(`tag selected: ${selected}`);
  }

  onClose() {
    console.log('onClose');
  }

  afterClose() {
    console.log('afterClose');
  }
}
