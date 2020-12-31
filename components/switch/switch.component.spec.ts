import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ComponentFixture, TestBed, fakeAsync, flush, waitForAsync } from '@angular/core/testing';
import { SwitchModule } from './switch.module';
import { IconModule } from '../icon/icon.module';
import { By } from '@angular/platform-browser';

describe('SwitchComponent', () => {
  let component: TestSwitchComponent;
  let fixture: ComponentFixture<TestSwitchComponent>;
  let switchEle;
  let inputEle;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TestSwitchComponent],
      imports: [SwitchModule, IconModule, FormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSwitchComponent);
    component = fixture.componentInstance;
    switchEle = fixture.debugElement.query(By.css('switch'));
    fixture.detectChanges();
  });

  it('should ngModel work', fakeAsync(() => {
    component.checked = false;
    fixture.detectChanges();
    flush();
    fixture.detectChanges();
  }));

  // it('should checked work', fakeAsync(() => {
  //   component.checked = true;
  //   fixture.detectChanges();
  //   inputEle = switchEle.nativeElement.querySelector('input');
  //   expect(inputEle.value).toBe('true', 'checked is true');

  //   component.checked = false;
  //   fixture.detectChanges();
  //   inputEle = switchEle.nativeElement.querySelector('input');
  //   expect(inputEle.value).toBe('false', 'checked is false');
  // }));

  it('should disabled work', () => {
    expect(switchEle.nativeElement.querySelector('.checkbox').classList).toContain(
      'checkbox-disabled',
      'disabled is true'
    );

    component.disabled = false;
    fixture.detectChanges();
    expect(switchEle.nativeElement.querySelector('.checkbox').classList).not.toContain(
      'checkbox-disabled',
      'disabled is false'
    );
  });

  it('should platform work', () => {
    expect(switchEle.nativeElement.querySelector('.am-switch').classList).not.toContain(
      'am-switch-android',
      'platform is ios'
    );

    component.platform = 'android';
    fixture.detectChanges();
    expect(switchEle.nativeElement.querySelector('.am-switch').classList).toContain(
      'am-switch-android',
      'platform is androi'
    );
  });

  it('should color work', () => {
    expect(switchEle.nativeElement.querySelector('.checkbox').style.background).toBe(
      'rgb(255, 0, 0)',
      'color is #ff0000'
    );

    component.color = '#000000';
    component.checked = true;
    fixture.detectChanges();
    expect(switchEle.nativeElement.querySelector('.checkbox').style.background).toBe(
      'rgb(0, 0, 0)',
      'color is #000000'
    );
  });

  it('should onChange work', () => {
    component.disabled = false;
    fixture.detectChanges();
    component.check = jasmine.createSpy('onChange is callback');
    switchEle.nativeElement.querySelector('input').click();
    fixture.detectChanges();
    expect(component.check).toHaveBeenCalledTimes(1);
  });

  it('should onClick work', () => {
    component.disabled = false;
    fixture.detectChanges();
    component.onClick = jasmine.createSpy('onClick is callback');
    switchEle.nativeElement.querySelector('.checkbox').click();
    fixture.detectChanges();
    expect(component.onClick).toHaveBeenCalledTimes(1);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({
  selector: 'test-switch',
  template: `
    <Switch
      [color]="color"
      [checked]="checked"
      [(ngModel)]="checked"
      [disabled]="disabled"
      [platform]="platform"
      (onChange)="check($event)"
      (onClick)="onClick($event)"
    ></Switch>
  `
})
export class TestSwitchComponent {
  checked = true;
  disabled = true;
  platform = 'ios';
  color = '#ff0000';

  constructor() {}

  check(event) {
    console.log(event);
  }

  onClick(event) {
    console.log(event);
  }
}
