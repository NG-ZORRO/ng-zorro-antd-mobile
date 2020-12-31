import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IconModule } from './icon.module';

describe('IconComponent', () => {
  let component: TestIconComponent;
  let fixture: ComponentFixture<TestIconComponent>;
  let iconEle;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TestIconComponent],
      imports: [IconModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestIconComponent);
    component = fixture.componentInstance;
    iconEle = fixture.debugElement.query(By.css('icon'));
    fixture.detectChanges();
  });

  it('should type work', () => {
    expect(iconEle.nativeElement.querySelector('.am-icon').classList).toContain('am-icon-cross', 'type is cross');
    component.type = 'check';
    fixture.detectChanges();
    expect(iconEle.nativeElement.querySelector('.am-icon').classList).toContain('am-icon-check', 'type is check');
  });

  it('should size work', () => {
    expect(iconEle.nativeElement.querySelector('.am-icon').classList).toContain('am-icon-md', 'size is md');
    component.size = 'xxs';
    fixture.detectChanges();
    expect(iconEle.nativeElement.querySelector('.am-icon').classList).toContain('am-icon-xxs', 'type is xxs');
  });

  it('should color work', () => {
    expect(iconEle.nativeElement.querySelector('.am-icon').style.color).toBe('rgb(0, 0, 0)', 'size is #000');
    component.color = '#f00';
    fixture.detectChanges();
    expect(iconEle.nativeElement.querySelector('.am-icon').style.color).toBe('rgb(255, 0, 0)', 'type is #f00');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({
  selector: 'test-icon',
  template: `
    <Icon [type]="type" [size]="size" [color]="color"></Icon>
  `
})
export class TestIconComponent {
  size = 'md';
  type = 'cross';
  color = '#000';

  constructor() {}
}
