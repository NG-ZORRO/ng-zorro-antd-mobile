import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { PopoverComponentOptions } from './popover-component-options.provider';
import { PopoverModule, IconModule, PopoverItemModule } from '../..';
import { dispatchTouchEvent } from '../core/testing';
import { PopoverOptions } from './popover-options.provider';

describe('PopoverComponent', () => {
  let component: TestPopoverComponent;
  let fixture: ComponentFixture<TestPopoverComponent>;
  let button;
  let popoverEle;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TestPopoverComponent],
      providers: [PopoverComponentOptions, PopoverOptions],
      imports: [PopoverModule, PopoverItemModule, IconModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPopoverComponent);
    component = fixture.componentInstance;
    button = fixture.debugElement.query(By.css('.popover')).nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show popover', () => {
    button.click();
    fixture.detectChanges();
    popoverEle = document.querySelector('popover');
    expect(popoverEle.childElementCount).toBeGreaterThan(0, 'popover is show');
  });

  it('should appendToBody work', () => {
    component.state.appendToBody = false;
    button.click();
    fixture.detectChanges();
    popoverEle = document.querySelector('popover');
  });

  it('should mask work', () => {
    component.state.mask = false;
    button.click();
    fixture.detectChanges();
    popoverEle = document.querySelector('popover');
    expect(popoverEle.querySelector('.am-popover-mask')).toBe(null);
  });

  it('should mask work', () => {
    component.state.mask = true;
    fixture.detectChanges();
    button.click();
    fixture.detectChanges();
    popoverEle = document.querySelector('popover');
    expect(popoverEle.querySelector('.am-popover-mask').classList).toContain('am-popover-mask', 'mask is true');
  });

  it('should popover close', () => {
    component.state.visible = false;
    fixture.detectChanges();
    popoverEle = document.querySelector('popover');
    expect(popoverEle).toBe(null, 'popover is close');
    button.click();
    fixture.detectChanges();
  });

  it('should palcement work', () => {
    component.state.visible = false;
    fixture.detectChanges();
    component.state.placement = 'topLeft';
    fixture.detectChanges();
    button.click();
    fixture.detectChanges();
    popoverEle = document.querySelector('popover');
    expect(popoverEle.querySelector('.am-popover').classList).toContain(
      'am-popover-placement-topLeft',
      'palcement is topLeft'
    );
    button.click();
    fixture.detectChanges();

    component.state.placement = 'topRight';
    fixture.detectChanges();
    button.click();
    fixture.detectChanges();
    popoverEle = document.querySelector('popover');
    expect(popoverEle.querySelector('.am-popover').classList).toContain(
      'am-popover-placement-topRight',
      'palcement is topRight'
    );
    button.click();
    fixture.detectChanges();

    component.state.placement = 'bottomLeft';
    fixture.detectChanges();
    button.click();
    fixture.detectChanges();
    popoverEle = document.querySelector('popover');
    expect(popoverEle.querySelector('.am-popover').classList).toContain(
      'am-popover-placement-bottomLeft',
      'palcement is bottomLeft'
    );
    button.click();
    fixture.detectChanges();

    component.state.placement = 'leftTop';
    fixture.detectChanges();
    button.click();
    fixture.detectChanges();
    popoverEle = document.querySelector('popover');
    expect(popoverEle.querySelector('.am-popover').classList).toContain(
      'am-popover-placement-leftTop',
      'palcement is leftTop'
    );
    button.click();
    fixture.detectChanges();

    component.state.placement = 'leftBottom';
    fixture.detectChanges();
    button.click();
    fixture.detectChanges();
    popoverEle = document.querySelector('popover');
    expect(popoverEle.querySelector('.am-popover').classList).toContain(
      'am-popover-placement-leftBottom',
      'palcement is leftBottom'
    );
    button.click();
    fixture.detectChanges();

    component.state.placement = 'rightTop';
    fixture.detectChanges();
    button.click();
    fixture.detectChanges();
    popoverEle = document.querySelector('popover');
    expect(popoverEle.querySelector('.am-popover').classList).toContain(
      'am-popover-placement-rightTop',
      'palcement is rightTop'
    );
    button.click();
    fixture.detectChanges();

    component.state.placement = 'rightBottom';
    fixture.detectChanges();
    button.click();
    fixture.detectChanges();
    popoverEle = document.querySelector('popover');
    expect(popoverEle.querySelector('.am-popover').classList).toContain(
      'am-popover-placement-rightBottom',
      'palcement is rightBottom'
    );
    button.click();
    fixture.detectChanges();

    component.state.placement = 'fullScreen';
    fixture.detectChanges();
    button.click();
    fixture.detectChanges();
    popoverEle = document.querySelector('popover');
    expect(popoverEle.querySelector('.am-popover').classList).toContain(
      'am-popover-placement-fullScreen',
      'palcement is fullScreen'
    );
    button.click();
    fixture.detectChanges();

    component.state.placement = 'landScape';
    fixture.detectChanges();
    button.click();
    fixture.detectChanges();
    popoverEle = document.querySelector('popover');
    expect(popoverEle.querySelector('.am-popover').classList).toContain(
      'am-popover-placement-landScape',
      'palcement is landScape'
    );
    button.click();
    fixture.detectChanges();

    component.state.placement = 'custom';
    fixture.detectChanges();
    button.click();
    fixture.detectChanges();
    popoverEle = document.querySelector('popover');
    expect(popoverEle.querySelector('.am-popover').classList).toContain(
      'am-popover-placement-custom',
      'palcement is custom'
    );
    button.click();
    fixture.detectChanges();
  });

  it('should item click', () => {
    button.click();
    fixture.detectChanges();
    popoverEle = document.querySelector('popover');
    const item = popoverEle.querySelector('popoveritem');
    item.click();
    fixture.detectChanges();
    popoverEle = document.querySelector('popover');
    expect(popoverEle).toBe(null, 'item click');
  });

  it('should item touchstart', () => {
    button.click();
    fixture.detectChanges();
    popoverEle = document.querySelector('popover');
    let item = popoverEle.querySelector('popoveritem');
    dispatchTouchEvent(item, 'touchstart');
    fixture.detectChanges();
    popoverEle = document.querySelector('popover');
    item = popoverEle.querySelector('popoveritem');
    expect(item.classList).toContain('am-popover-item-active', 'item touchstart');
  });
});

@Component({
  selector: 'test-popover',
  template: `
    <div
      Popover
      class="popover"
      style="height:80px; width:80px"
      [ngStyle]="{ height: '100%', display: 'flex', 'align-items': 'center' }"
      [mask]="state.mask"
      [overlay]="overlay"
      [visible]="state.visible"
      [placement]="state.placement"
      [showArrow]="state.showArrow"
      [appendToBody]="state.appendToBody"
      (onSelect)="onSelect($event)"
      (onVisibleChange)="onVisibleChange($event)"
    ></div>

    <ng-template #overlay>
      <PopoverItem [icon]="icon1">Scan</PopoverItem>
      <PopoverItem [ngStyle]="{ whiteSpace: 'nowrap' }" [icon]="icon2" [disabled]="false">My Qrcode</PopoverItem>
      <PopoverItem [style]="{ marginRight: 5 }" [icon]="icon3">
        <span [ngStyle]="{ marginRight: 5 }">Help</span>
      </PopoverItem>
    </ng-template>

    <ng-template #icon1>
      <Icon [src]="'https://gw.alipayobjects.com/zos/rmsportal/tOtXhkIWzwotgGSeptou.svg'" [size]="'xs'"></Icon>
    </ng-template>
    <ng-template #icon2>
      <Icon [src]="'https://gw.alipayobjects.com/zos/rmsportal/PKAgAqZWJVNwKsAJSmXd.svg'" [size]="'xs'"></Icon>
    </ng-template>
    <ng-template #icon3>
      <Icon [src]="'https://gw.alipayobjects.com/zos/rmsportal/uQIYTFeRrjPELImDRrPt.svg'" [size]="'xs'"></Icon>
    </ng-template>
  `
})
export class TestPopoverComponent {
  state = {
    mask: false,
    showArrow: false,
    visible: false,
    selected: '',
    appendToBody: true,
    placement: 'bottomRight'
  };

  constructor() {}

  onSelect(event) {
    console.log(event);
  }

  onVisibleChange(event) {
    console.log(event);
  }
  onLeftClick() {
    console.log('onLeftClick');
  }
}
