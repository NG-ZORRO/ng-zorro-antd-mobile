import { Component, ViewChild, ApplicationRef } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ToastService } from './toast.service';
import { ToastModule } from './toast.module';
import { IconModule, ButtonModule } from '../..';
import { ButtonComponent } from '../button/button.component';

describe('ToastComponent', () => {
  let component: TestToastComponent;
  let fixture: ComponentFixture<TestToastComponent>;
  let toastEle;
  let toastEle1;
  let buttons;
  let appRef: ApplicationRef;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TestToastComponent],
      imports: [IconModule, ToastModule, ButtonModule],
      providers: [ApplicationRef]
    }).compileComponents();
    TestBed.overrideModule(ToastModule, {}).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestToastComponent);
    appRef = TestBed.inject(ApplicationRef);
    component = fixture.componentInstance;
    toastEle = fixture.debugElement.query(By.css('toast'));
    buttons = fixture.debugElement.queryAll(By.directive(ButtonComponent));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('content should work', () => {
    expect(toastEle.nativeElement.querySelector('.am-toast-text-info').innerText).toContain('123', 'content is 123');
    component.content = '456';
    fixture.detectChanges();
    expect(toastEle.nativeElement.querySelector('.am-toast-text-info').innerText).toContain('456', 'content is 456');
    component.content = '';
    fixture.detectChanges();
    component.content = component.contentTpl;
    fixture.detectChanges();
    expect(toastEle.nativeElement.querySelector('.am-toast-text').innerText).toContain('contentTpl', 'content is 456');
  });

  it('iconType should work', () => {
    component.iconType = 'cross';
    fixture.detectChanges();
    expect(toastEle.nativeElement.querySelector('.am-icon').classList).toContain('am-icon-cross', 'content is 123');
    component.iconType = 'check';
    fixture.detectChanges();
    expect(toastEle.nativeElement.querySelector('.am-icon').classList).toContain('am-icon-check', 'content is 456');
  });

  it('mask should work', () => {
    expect(toastEle.nativeElement.classList).toContain('am-toast-mask', 'mask is true');
    component.mask = false;
    fixture.detectChanges();
    expect(toastEle.nativeElement.classList).toContain('am-toast-nomask', 'mask is false');
  });

  it('position should work', () => {
    expect(toastEle.nativeElement.classList).toContain('am-toast-mask-middle');
    component.position = 'top';
    fixture.detectChanges();
    expect(toastEle.nativeElement.classList).toContain('am-toast-mask-top');
    component.position = 'bottom';
    fixture.detectChanges();
    expect(toastEle.nativeElement.classList).toContain('am-toast-mask-bottom');
    component.mask = false;
    component.position = 'top';
    fixture.detectChanges();
    expect(toastEle.nativeElement.classList).toContain('am-toast-nomask-top');
    component.position = 'middle';
    fixture.detectChanges();
    expect(toastEle.nativeElement.classList).toContain('am-toast-nomask-middle');
    component.position = 'bottom';
    fixture.detectChanges();
    expect(toastEle.nativeElement.classList).toContain('am-toast-nomask-bottom');
  });

  it('should showToast work', async () => {
    const button = buttons[0].nativeElement;
    button.click();
    fixture.detectChanges();
    await appRef.isStable;
    
    toastEle1 = document.querySelector('toast');
    expect(toastEle1.querySelector('.am-toast-text-info').innerText).toContain(
      'This is a toast tips !!!',
      'showToast work'
    );
  });

  it('should showToastNoMask work', async () => {
    const button = buttons[1].nativeElement;
    button.click();
    fixture.detectChanges();
    await appRef.isStable;

    toastEle1 = document.querySelector('toast');
    expect(toastEle1.querySelector('.am-toast-text-info').innerText).toContain(
      'Toast without mask !!!',
      'showToastNoMask work'
    );
  });

  it('should showCustomIcon work', async () => {
    const button = buttons[2].nativeElement;
    button.click();
    fixture.detectChanges();
    await appRef.isStable;
    
    toastEle1 = document.querySelector('toast');
    expect(toastEle1.innerText).toContain('toast的内容', 'showCustomIcon work');
  });

  it('should successToast work', async () => {
    const button = buttons[3].nativeElement;
    button.click();
    fixture.detectChanges();
    await appRef.isStable;
    
    toastEle1 = document.querySelector('toast');
    expect(toastEle1.querySelector('.am-toast-text-info').innerText).toContain('Load success !!!', 'successToast work');
  });

  it('should failToast work', async () => {
    const button = buttons[4].nativeElement;
    button.click();
    fixture.detectChanges();
    await appRef.isStable;
    
    toastEle1 = document.querySelector('toast');
    expect(toastEle1.querySelector('.am-toast-text-info').innerText).toContain('Load failed !!!', 'failToast work');
  });

  it('should offline work', async () => {
    const button = buttons[5].nativeElement;
    button.click();
    fixture.detectChanges();
    await appRef.isStable;
    
    toastEle1 = document.querySelector('toast');
    expect(toastEle1.querySelector('.am-toast-text-info').innerText).toContain(
      'Network connection failed !!!',
      'offline work'
    );
  });

  it('should loadingToast work', async () => {
    const button = buttons[6].nativeElement;
    button.click();
    fixture.detectChanges();
    await appRef.isStable;
    
    toastEle1 = document.querySelector('toast');
    expect(toastEle1.querySelector('.am-toast-text-info').innerText).toContain('Loading...', 'loadingToast work');
  });
});

@Component({
  selector: 'test-toast',
  template: `
    <Toast [content]="content" [iconType]="iconType" [mask]="mask" [position]="position"></Toast>
    <div Button (onClick)="showToast()">text only</div>
    <div Button (onClick)="showToastNoMask()">without mask</div>
    <div Button (onClick)="showCustomIcon(content1)">custom content</div>
    <div Button (onClick)="successToast()">success</div>
    <div Button (onClick)="failToast()">fail</div>
    <div Button (onClick)="offline()">network failure</div>
    <div Button (onClick)="loadingToast()">loading</div>

    <ng-template #content1>
      <p>toast的内容</p>
      <p>toast的内容</p>
    </ng-template>

    <ng-template #contentTpl>
      contentTpl
    </ng-template>
  `
})
export class TestToastComponent {
  content: any = '123';
  iconType = '';
  mask = true;
  position = 'middle';

  @ViewChild('contentTpl')
  contentTpl: ViewChild;

  constructor(private _toast: ToastService) { }

  showToast() {
    this._toast.show('This is a toast tips !!!', 0, true, this.position);
    setTimeout(() => {
      this._toast.hide();
    }, 3000);
  }

  showToastNoMask() {
    this._toast.info('Toast without mask !!!', 4000, null, false);
  }

  showCustomIcon(event) {
    this._toast.info(event);
  }

  successToast() {
    this._toast.success('Load success !!!', 3000, () => {
      this.onClose();
    });
  }

  onClose() {
    console.log('success');
  }

  failToast() {
    this._toast.fail('Load failed !!!', 1000);
  }

  offline() {
    this._toast.offline('Network connection failed !!!', 1000);
  }

  loadingToast() {
    this._toast.loading('Loading...', 3000, () => {
      console.log('Load complete !!!');
    });
  }
}
