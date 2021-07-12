import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentFixture, fakeAsync, tick, TestBed, flush, waitForAsync } from '@angular/core/testing';
import { ModalModule, WingBlankModule, ListModule, WhiteSpaceModule, ButtonModule, ModalRef } from '../..';
import { By } from '@angular/platform-browser';
import { ModalService, ModalServiceComponent, ModalComponent } from '../..';
import { ButtonComponent } from '../button/button.component';
import { dispatchTouchEvent } from '../core/testing';
import { ModalOptions, AlertOptions } from './modal-options.provider';
import { Overlay } from '@angular/cdk/overlay';
describe('ModalComponent', () => {
  let component: TestModalBasicComponent;
  let fixture: ComponentFixture<TestModalBasicComponent>;
  let modalEle;
  let buttons;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TestModalBasicComponent],
      imports: [
        ModalModule,
        WingBlankModule,
        ListModule,
        WhiteSpaceModule,
        ButtonModule,
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [Overlay, ModalOptions, AlertOptions]
    }).compileComponents();
    TestBed.overrideModule(ModalModule, {}).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestModalBasicComponent);
    component = fixture.componentInstance;
    modalEle = fixture.debugElement.query(By.css('modal'));
    buttons = fixture.debugElement.queryAll(By.directive(ButtonComponent));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should transparent work', fakeAsync(() => {
    component.modalServiceComponent.transitionName = null;
    component.modalServiceComponent.setTransitionName(true);
    component.state = true;
    fixture.detectChanges();
    flush();
    fixture.detectChanges();
    expect(modalEle.nativeElement.querySelector('.am-modal-transparent')).toBeTruthy('transparent is true');
    component.transparent = false;
    fixture.detectChanges();
    component.modalServiceComponent.inputChange('phone', '1234');

    expect(modalEle.nativeElement.querySelector('.am-modal-transparent')).toBeNull('transparent is false');
  }));

  it('should title work', fakeAsync(() => {
    component.state = true;
    fixture.detectChanges();
    flush();
    fixture.detectChanges();
    component.title = '123';
    fixture.detectChanges();

    expect(modalEle.nativeElement.querySelector('.am-modal-header').innerText.trim()).toBe('123', 'title is 123');
  }));

  it('should title work', fakeAsync(() => {
    component.state = true;
    fixture.detectChanges();
    flush();
    fixture.detectChanges();
    component.title = component.titleRef;
    fixture.detectChanges();

    expect(modalEle.nativeElement.querySelector('.am-modal-header').innerText.trim()).toBe('123', 'title is 123');
  }));

  it('should footer work', fakeAsync(() => {
    component.state = true;
    fixture.detectChanges();
    flush();
    fixture.detectChanges();
    expect(modalEle.nativeElement.querySelector('.am-modal-button')).toBeTruthy('footer is true');
    component.footer = [];
    fixture.detectChanges();

    expect(modalEle.nativeElement.querySelector('.am-modal-button')).toBeNull('footer is false');
  }));

  it('should popup work', fakeAsync(() => {
    component.state = true;
    fixture.detectChanges();
    flush();
    fixture.detectChanges();
    expect(modalEle.nativeElement.querySelector('.am-modal-wrap-popup')).toBeTruthy('popup is true');
  }));

  it('should popup work', fakeAsync(() => {
    component.state = true;
    fixture.detectChanges();
    flush();
    fixture.detectChanges();
    component.popup = false;
    fixture.detectChanges();
    expect(modalEle.nativeElement.querySelector('.am-modal-wrap-popup')).toBeNull('popup is false');
  }));

  it('should close work', fakeAsync(() => {
    component.state = true;
    fixture.detectChanges();
    flush();
    fixture.detectChanges();
    component.popup = true;
    fixture.detectChanges();
    modalEle.nativeElement.querySelector('.am-modal-wrap-popup').click();
  }));

  it('should animationType work', fakeAsync(() => {
    component.state = true;
    fixture.detectChanges();
    flush();
    fixture.detectChanges();
    expect(modalEle.nativeElement.querySelector('.am-modal-popup-slide-down')).toBeTruthy(
      'animationType is slide-down'
    );
    component.animationType = 'slide-up';
    fixture.detectChanges();

    expect(modalEle.nativeElement.querySelector('.am-modal-popup-slide-up')).toBeTruthy('animationType is slide-up');
  }));

  it('should platform work', fakeAsync(() => {
    component.state = true;
    fixture.detectChanges();
    flush();
    fixture.detectChanges();
    expect(modalEle.nativeElement.querySelector('.am-modal-android')).toBeTruthy('platform is android');
    component.platform = 'ios';
    fixture.detectChanges();

    expect(modalEle.nativeElement.querySelector('.am-modal-android')).toBeNull('platform is ios');
  }));

  it('should closable work', fakeAsync(() => {
    component.state = true;
    fixture.detectChanges();
    flush();
    fixture.detectChanges();
    expect(modalEle.nativeElement.querySelector('.am-modal-close')).toBeTruthy('closable is true');
    component.closable = false;
    fixture.detectChanges();

    expect(modalEle.nativeElement.querySelector('.am-modal-close')).toBeNull('closable is false');
  }));

  it('should closable work', fakeAsync(() => {
    component.state = true;
    fixture.detectChanges();
    flush();
    fixture.detectChanges();
    expect(modalEle.nativeElement.querySelector('.am-modal-close')).toBeTruthy('closable is true');
    component.closable = false;
    fixture.detectChanges();

    expect(modalEle.nativeElement.querySelector('.am-modal-close')).toBeNull('closable is false');
  }));

  it('should showOpeartion work', () => {
    const button = buttons[0].nativeElement;
    button.click();
    fixture.detectChanges();
  });

  it('should showAlert work', () => {
    const button = buttons[1].nativeElement;
    button.click();
    fixture.detectChanges();
  });

  it('should showPromptDefault work', () => {
    const button = buttons[2].nativeElement;
    button.click();
    fixture.detectChanges();
    const modal = document.querySelector('modalservice');
    const input = document.querySelector('modalservice').getElementsByClassName('am-modal-input')[0];
    const buttonOk = modal.querySelector('.am-modal-button');
    dispatchTouchEvent(buttonOk, 'touchend');
    fixture.detectChanges();
  });

  it('should showPromptPromise work', () => {
    const button = buttons[3].nativeElement;
    button.click();
    fixture.detectChanges();
    const modal = document.querySelector('modalservice');
    const buttonOk = modal.querySelector('.am-modal-button');
    dispatchTouchEvent(buttonOk, 'touchend');
    fixture.detectChanges();
  });

  it('should showSecure work', () => {
    const button = buttons[4].nativeElement;
    button.click();
    fixture.detectChanges();
    const modal = document.querySelector('modalservice');
    const buttonOk = modal.querySelector('.am-modal-button');
    dispatchTouchEvent(buttonOk, 'touchend');
    fixture.detectChanges();
  });

  it('should showCustom work', () => {
    const button = buttons[5].nativeElement;
    button.click();
    fixture.detectChanges();
    const modal = document.querySelector('modalservice');
    const buttonOk = modal.querySelector('.am-modal-button');
    dispatchTouchEvent(buttonOk, 'touchend');
    fixture.detectChanges();
  });

  it('should showLogin work', () => {
    const button = buttons[6].nativeElement;
    button.click();
    fixture.detectChanges();
    const modal = document.querySelector('modalservice');
    const buttonOk = modal.querySelector('.am-modal-button');
    dispatchTouchEvent(buttonOk, 'touchend');
    fixture.detectChanges();
  });
});

@Component({
  selector: 'demo-modal-basic',
  template: `
    <Modal
      [title]="title"
      [popup]="popup"
      [(ngModel)]="state"
      [actions]="actions"
      [placeholders]="'ccccc'"
      [type]="'dddd'"
      [defaultValue]="'yyyy'"
      [operation]="true"
      [footer]="footer"
      [closable]="closable"
      [maskClosable]="true"
      [platform]="platform"
      [wrapClassName]="'test-class'"
      [className]="'xxx'"
      [transparent]="transparent"
      [animationType]="animationType"
    >
      <div [ngStyle]="{ height: 100, overflow: 'scroll' }">
        scoll content...
        <br />
        scoll content... <br />
        scoll content... <br />
        scoll content... <br />
        scoll content... <br />
        scoll content...
        <br />
      </div>
    </Modal>
    <div Button (onClick)="showOpeartion()">operation</div>
    <div Button (onClick)="showAlert()">customized buttons</div>
    <div Button (onClick)="showPromptDefault()">defaultValue</div>
    <div Button (onClick)="showPromptPromise()">promise</div>
    <div Button (onClick)="showSecure()">secure-text</div>
    <div Button (onClick)="showCustom()">custom buttons</div>
    <div Button (onClick)="showLogin()">login-password</div>
    <ng-template #title>
      <div>123</div>
    </ng-template>
  `
})
export class TestModalBasicComponent {
  animationType = 'slide-down';
  platform = 'android';
  closable = true;
  popup = true;
  state = false;
  transparent = true;
  title: any = '456';
  actions = [
    { text: 'Cancel', onPress: () => console.log('cancel') },
    { text: 'OK', onPress: () => console.log('ok') }
  ];
  footer = [
    {
      text: 'Ok',
      onPress: () => {
        console.log('ok');
        this.onClose('modal1');
      }
    }
  ];
  @ViewChild('title') titleRef: ViewChild;
  @ViewChild(ModalComponent) modalServiceComponent: ModalComponent;
  templateOpenSpy = jasmine.createSpy('template afterOpen spy');
  templateCloseSpy = jasmine.createSpy('template afterClose spy');
  constructor(private _modal: ModalService) {
    const ref: ModalRef = this._modal.alert('Delete', 'Are you sure ?', [
      { text: 'Cancel', onPress: () => console.log('cancel') },
      { text: 'OK', onPress: () => console.log('ok') }
    ]);
    ref.getInstance();
    ref.getElement();
    ref.triggerCancel();
    ref.afterOpen.subscribe(this.templateOpenSpy);
    ref.afterClose.subscribe(this.templateCloseSpy);
    ref.destroy();
  }

  onClose(key) {
    this.state = false;
  }

  showOpeartion() {
    this._modal.operation([
      { text: '标为未读', onPress: () => console.log('标为未读被点击了') },
      { text: '置顶聊天', onPress: () => console.log('置顶聊天被点击了') }
    ]);
  }

  showAlert() {
    const ref: ModalRef = this._modal.alert('Delete', 'Are you sure ?', [
      { text: 'Cancel', onPress: () => console.log('cancel') },
      { text: 'OK', onPress: () => console.log('ok') }
    ]);
    ref.triggerOk();
  }

  showPromptPromise() {
    this._modal.prompt(
      'input name',
      'please input your name',
      [
        {
          text: 'Close',
          onPress: value =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve(value);
                console.log(`value:${value}`);
              }, 1000);
            })
        },
        {
          text: 'Hold on',
          onPress: value =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                // reject();
                console.log(`value:${value}`);
              }, 1000);
            })
        }
      ],
      'default',
      null,
      ['input your name']
    );
  }

  showPromptDefault() {
    this._modal.prompt(
      'defaultValue',
      'defaultValue for prompt',
      [{ text: 'Cancel' }, { text: 'Submit', onPress: value => console.log(`输入的内容:${value}`) }],
      'default',
      ['100']
    );
  }

  showSecure() {
    this._modal.prompt('Password', 'Password Message', password => console.log(`password: ${password}`), 'secure-text');
  }

  showCustom() {
    this._modal.prompt(
      'Password',
      'You can custom buttons',
      [{ text: '取消' }, { text: '提交', onPress: password => console.log(`密码为:${password}`) }],
      'secure-text'
    );
  }

  showLogin() {
    this._modal.prompt(
      'Login',
      'Please input login information',
      (login, password) => console.log(`login: ${login}, password: ${password}`),
      'login-password',
      null,
      ['Please input name', 'Please input password']
    );
  }
}
