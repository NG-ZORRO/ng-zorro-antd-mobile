/* tslint:disable:no-unused-variable */
import { Component, OnInit, OnDestroy } from '@angular/core';
import { By } from '@angular/platform-browser';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { ButtonComponent } from './button.component';
import { ButtonModule } from './button.module';
import { IconModule, WingBlankModule, WhiteSpaceModule, ListModule } from '../..';
import { dispatchTouchEvent } from '../core/testing';

describe('button', () => {
  let component;
  let fixture;

  describe('basic', () => {
    let buttons;
    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [TestButtonComponent],
        imports: [ButtonModule, IconModule, WingBlankModule, WhiteSpaceModule, ListModule]
      }).compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(TestButtonComponent);
      component = fixture.componentInstance;
      buttons = fixture.debugElement.queryAll(By.directive(ButtonComponent));
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should have correct style', () => {
      fixture.detectChanges();
      expect(buttons[0].nativeElement.classList.contains('am-button')).toBe(true);
      expect(buttons[1].nativeElement.classList.contains('am-button-disabled')).toBe(true);
      expect(buttons[2].nativeElement.classList.contains('am-button-primary')).toBe(true);
      expect(buttons[3].nativeElement.classList.contains('am-button-primary')).toBe(true);
      expect(buttons[3].nativeElement.classList.contains('am-button-disabled')).toBe(true);
      expect(buttons[4].nativeElement.classList.contains('am-button-warning')).toBe(true);
      expect(buttons[5].nativeElement.classList.contains('am-button-warning')).toBe(true);
      expect(buttons[5].nativeElement.classList.contains('am-button-disabled')).toBe(true);
      expect(buttons[6].nativeElement.classList.contains('am-button-loading')).toBe(true);
      expect(buttons[7].nativeElement.classList.contains('am-button-icon')).toBe(true);
      expect(buttons[8].nativeElement.classList.contains('am-button-icon')).toBe(true);
      expect(buttons[9].nativeElement.classList.contains('am-button-primary')).toBe(true);
      expect(buttons[9].nativeElement.classList.contains('am-button-inline')).toBe(true);

      expect(buttons[10].nativeElement.classList.contains('am-button-ghost')).toBe(true);
      expect(buttons[10].nativeElement.classList.contains('am-button-inline')).toBe(true);

      expect(buttons[11].nativeElement.classList.contains('am-button-primary')).toBe(true);
      expect(buttons[11].nativeElement.classList.contains('am-button-inline')).toBe(true);
      expect(buttons[11].nativeElement.classList.contains('am-button-small')).toBe(true);

      expect(buttons[12].nativeElement.classList.contains('am-button-primary')).toBe(true);
      expect(buttons[12].nativeElement.classList.contains('am-button-inline')).toBe(true);
      expect(buttons[12].nativeElement.classList.contains('am-button-small')).toBe(true);
      expect(buttons[12].nativeElement.classList.contains('am-button-disabled')).toBe(true);

      expect(buttons[13].nativeElement.classList.contains('am-button-ghost')).toBe(true);
      expect(buttons[13].nativeElement.classList.contains('am-button-inline')).toBe(true);
      expect(buttons[13].nativeElement.classList.contains('am-button-small')).toBe(true);

      expect(buttons[14].nativeElement.classList.contains('am-button-ghost')).toBe(true);
      expect(buttons[14].nativeElement.classList.contains('am-button-inline')).toBe(true);
      expect(buttons[14].nativeElement.classList.contains('am-button-small')).toBe(true);
      expect(buttons[14].nativeElement.classList.contains('am-button-disabled')).toBe(true);
    });

    it('should touchstart work', () => {
      dispatchTouchEvent(buttons[0].nativeElement, 'touchstart');
      fixture.detectChanges();
    });

    it('should mousedown work', () => {
      dispatchTouchEvent(buttons[0].nativeElement, 'mousedown');
      fixture.detectChanges();
    });

    it('should touchend work', () => {
      dispatchTouchEvent(buttons[0].nativeElement, 'touchend');
      fixture.detectChanges();
      dispatchTouchEvent(buttons[0].nativeElement, 'mouseup');
      fixture.detectChanges();
    });

    it('should touchstart disable work', () => {
      dispatchTouchEvent(buttons[1].nativeElement, 'touchstart');
      fixture.detectChanges();
      dispatchTouchEvent(buttons[1].nativeElement, 'mousedown');
      fixture.detectChanges();
    });

    it('should loading work', () => {
      dispatchTouchEvent(buttons[6].nativeElement, 'touchstart');
      component.loading = false;
      fixture.detectChanges();
      expect(buttons[6].nativeElement.classList.contains('am-button-loading')).toBe(false);
      dispatchTouchEvent(buttons[6].nativeElement, 'mousedown');
      fixture.detectChanges();
    });

    it('should touchend disable work', () => {
      dispatchTouchEvent(buttons[1].nativeElement, 'touchend');
      fixture.detectChanges();
      dispatchTouchEvent(buttons[1].nativeElement, 'mouseup');
      fixture.detectChanges();
    });
  });
});

@Component({
  selector: 'test-button',
  template: `
    <WingBlank>
      <div Button (onClick)="onClick()">default</div>
      <WhiteSpace></WhiteSpace>
      <div Button [disabled]="true">default diasbled</div>
      <WhiteSpace></WhiteSpace>
      <div Button [type]="'primary'">primary</div>
      <WhiteSpace></WhiteSpace>
      <div Button [type]="'primary'" [disabled]="true">primary diasbled</div>
      <WhiteSpace></WhiteSpace>
      <div Button [type]="'warning'">warning</div>
      <WhiteSpace></WhiteSpace>
      <div Button [type]="'warning'" [disabled]="true">warning</div>
      <WhiteSpace></WhiteSpace>
      <div Button [loading]="loading">loading</div>
      <WhiteSpace></WhiteSpace>
      <div Button [icon]="'check-circle-o'">with icon</div>
      <WhiteSpace></WhiteSpace>
      <div Button [icon]="img">
        with custom icon
      </div>

      <ng-template #img>
        <img src="https://gw.alipayobjects.com/zos/rmsportal/jBfVSpDwPbitsABtDDlB.svg" alt="" />
      </ng-template>

      <WhiteSpace></WhiteSpace>
      <div Button style="margin-right: 4px" [type]="'primary'" [inline]="true">inline primary</div>
      <div Button [type]="'ghost'" [inline]="true">inline ghost</div>
      <WhiteSpace></WhiteSpace>
      <div Button style="margin-right: 4px" [type]="'primary'" [inline]="true" [size]="'small'">primary</div>
      <div Button [type]="'primary'" [inline]="true" [disabled]="true" [size]="'small'">primary diasbled</div>
      <WhiteSpace></WhiteSpace>
      <div Button style="margin-right: 4px" [type]="'ghost'" [inline]="true" [size]="'small'">ghost</div>
      <div Button [type]="'ghost'" [inline]="true" [disabled]="true" [size]="'small'">ghost diasbled</div>
    </WingBlank>

    <List className="my-list">
      <ListItem [extra]="ghost" [arrow]="'horizontal'"
        >Regional manager
        <Brief>Can be collected, refund, discount management, view data and other operations</Brief>
      </ListItem>
      <ListItem [extra]="primary" [arrow]="'horizontal'"
        >Regional manager
        <Brief>Can be collected, refund, discount management, view data and other operations</Brief>
      </ListItem>
    </List>

    <ng-template #ghost>
      <div Button [type]="'ghost'" [inline]="true" style="margin-right: 4px" [size]="'small'">small</div>
    </ng-template>

    <ng-template #primary>
      <div Button [type]="'primary'" [inline]="true" style="margin-right: 4px" [size]="'small'">small</div>
    </ng-template>
  `
})
export class TestButtonComponent implements OnInit, OnDestroy {
  type = 'primary';
  size = 'small';
  inline = true;
  disabled = true;
  loading = true;
  closeTimer;

  constructor() {}

  onClick() {
    console.log('click');
  }

  ngOnInit() {}

  ngOnDestroy() {
    clearTimeout(this.closeTimer);
  }
}
