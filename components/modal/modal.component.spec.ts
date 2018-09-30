import { Component } from '@angular/core';
import { async, ComponentFixture, fakeAsync, tick, TestBed } from '@angular/core/testing';
import { ModalModule, WingBlankModule, ListModule, WhiteSpaceModule, ButtonModule } from '../..';
import { By } from '@angular/platform-browser';
import { Modal, ModalComponent } from '../..';
import { Button } from '../button/button.component';
import { dispatchTouchEvent } from '../core/testing';

describe('ModalComponent', () => {
  let component: TestModalBasicComponent;
  let fixture: ComponentFixture<TestModalBasicComponent>;
  let modalEle;
  let buttons;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestModalBasicComponent],
      imports: [ModalModule, WingBlankModule, ListModule, WhiteSpaceModule, ButtonModule],
      providers: [Modal]
    }).compileComponents();
    TestBed.overrideModule(ModalModule, {
      set: { entryComponents: [ModalComponent] }
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestModalBasicComponent);
    component = fixture.componentInstance;
    modalEle = fixture.debugElement.query(By.css('modal'));
    buttons = fixture.debugElement.queryAll(By.directive(Button));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should visable work', fakeAsync(() => {
    expect(modalEle.nativeElement.children.length).toBe(1, 'visable is true');
    component.state = false;
    fixture.detectChanges();
    tick(200);
    fixture.detectChanges();
    expect(modalEle.nativeElement.children.length).toBe(0, 'visable is false');
  }));

  it('should transparent work', () => {
    expect(modalEle.nativeElement.querySelector('.am-modal-transparent')).toBeTruthy('transparent is true');
    component.transparent = false;
    fixture.detectChanges();

    expect(modalEle.nativeElement.querySelector('.am-modal-transparent')).toBeNull('transparent is false');
  });

  it('should title work', () => {
    expect(modalEle.nativeElement.querySelector('.am-modal-title').innerText).toBe('Title', 'title is Title');
    component.title = '123';
    fixture.detectChanges();

    expect(modalEle.nativeElement.querySelector('.am-modal-title').innerText).toBe('123', 'title is 123');
  });

  it('should footer work', () => {
    expect(modalEle.nativeElement.querySelector('.am-modal-button')).toBeTruthy('footer is true');
    component.footer = [];
    fixture.detectChanges();

    expect(modalEle.nativeElement.querySelector('.am-modal-button')).toBeNull('footer is false');
  });

  it('should popup work', () => {
    expect(modalEle.nativeElement.querySelector('.am-modal-wrap-popup')).toBeTruthy('popup is true');
    component.popup = false;
    fixture.detectChanges();

    expect(modalEle.nativeElement.querySelector('.am-modal-wrap-popup')).toBeNull('popup is false');
  });

  it('should animationType work', () => {
    expect(modalEle.nativeElement.querySelector('.am-modal-popup-slide-down')).toBeTruthy(
      'animationType is slide-down'
    );
    component.animationType = 'slide-up';
    fixture.detectChanges();

    expect(modalEle.nativeElement.querySelector('.am-modal-popup-slide-up')).toBeTruthy('animationType is slide-up');
  });

  it('should platform work', () => {
    expect(modalEle.nativeElement.querySelector('.am-modal-android')).toBeTruthy('platform is android');
    component.platform = 'ios';
    fixture.detectChanges();

    expect(modalEle.nativeElement.querySelector('.am-modal-android')).toBeNull('platform is ios');
  });

  it('should closable work', () => {
    expect(modalEle.nativeElement.querySelector('.am-modal-close')).toBeTruthy('closable is true');
    component.closable = false;
    fixture.detectChanges();

    expect(modalEle.nativeElement.querySelector('.am-modal-close')).toBeNull('closable is false');
  });

  it('should closable work', () => {
    expect(modalEle.nativeElement.querySelector('.am-modal-close')).toBeTruthy('closable is true');
    component.closable = false;
    fixture.detectChanges();

    expect(modalEle.nativeElement.querySelector('.am-modal-close')).toBeNull('closable is false');
  });

  it('should showOpeartion work', () => {
    const button = buttons[0].nativeElement;
    dispatchTouchEvent(button, 'touchend');
    fixture.detectChanges();
    const modal = document.querySelector('modal');
    const buttonOk =  modal.querySelector('.am-modal-button');
    dispatchTouchEvent(buttonOk, 'touchend');
    fixture.detectChanges();
  });

  it('should showAlert work', () => {
    const button = buttons[1].nativeElement;
    dispatchTouchEvent(button, 'touchend');
    fixture.detectChanges();
  });

  it('should showPromptDefault work', () => {
    const button = buttons[2].nativeElement;
    dispatchTouchEvent(button, 'touchend');
    fixture.detectChanges();
    const modal = document.querySelector('modal');
    const buttonOk =  modal.querySelector('.am-modal-button');
    dispatchTouchEvent(buttonOk, 'touchend');
    fixture.detectChanges();
  });

  it('should showPromptPromise work', () => {
    const button = buttons[3].nativeElement;
    dispatchTouchEvent(button, 'touchend');
    fixture.detectChanges();
    const modal = document.querySelector('modal');
    const buttonOk =  modal.querySelector('.am-modal-button');
    dispatchTouchEvent(buttonOk, 'touchend');
    fixture.detectChanges();
  });

  it('should showSecure work', () => {
    const button = buttons[4].nativeElement;
    dispatchTouchEvent(button, 'touchend');
    fixture.detectChanges();
    const modal = document.querySelector('modal');
    const buttonOk =  modal.querySelector('.am-modal-button');
    dispatchTouchEvent(buttonOk, 'touchend');
    fixture.detectChanges();
  });

  it('should showCustom work', () => {
    const button = buttons[5].nativeElement;
    dispatchTouchEvent(button, 'touchend');
    fixture.detectChanges();
    const modal = document.querySelector('modal');
    const buttonOk =  modal.querySelector('.am-modal-button');
    dispatchTouchEvent(buttonOk, 'touchend');
    fixture.detectChanges();
  });

  it('should showLogin work', () => {
    const button = buttons[6].nativeElement;
    dispatchTouchEvent(button, 'touchend');
    fixture.detectChanges();
    const modal = document.querySelector('modal');
    const buttonOk =  modal.querySelector('.am-modal-button');
    dispatchTouchEvent(buttonOk, 'touchend');
    fixture.detectChanges();
  });
});

@Component({
  selector: 'demo-modal-basic',
  template: `
  <Modal [title]="title"
         [popup]="popup"
         [visible]="state"
         [footer]="footer"
         [closable]="closable"
         [platform]="platform"
         [transparent]="transparent"
         [animationType]="animationType"
  >
    <div [ngStyle]="{ height: 100, overflow: 'scroll' }">
      scoll content...
      <br /> scoll content...
      <br /> scoll content...
      <br /> scoll content...
      <br /> scoll content...
      <br /> scoll content...
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
  `
})
export class TestModalBasicComponent {
  animationType = 'slide-down';
  platform = 'android';
  closable = true;
  popup = true;
  state = true;
  transparent = true;
  title = 'Title';
  footer = [
    {
      text: 'Ok',
      onPress: () => {
        console.log('ok');
        this.onClose('modal1');
      }
    }
  ];

  constructor(private _modal: Modal) {}

  onClose(key) {
    this.state = false;
  }

  showOpeartion() {
    Modal.operation([
      { text: '标为未读', onPress: () => console.log('标为未读被点击了') },
      { text: '置顶聊天', onPress: () => console.log('置顶聊天被点击了') }
    ]);
  }

  showAlert() {
    Modal.alert('Delete', 'Are you sure ?', [
      { text: 'Cancel', onPress: () => console.log('cancel') },
      { text: 'OK', onPress: () => console.log('ok') }
    ]);
  }

  showPromptPromise() {
    Modal.prompt(
      'input name',
      'please input your name',
      [
        {
          text: 'Close',
          onPress: value =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
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
    Modal.prompt(
      'defaultValue',
      'defaultValue for prompt',
      [{ text: 'Cancel' }, { text: 'Submit', onPress: value => console.log(`输入的内容:${value}`) }],
      'default',
      '100'
    );
  }

  showSecure() {
    Modal.prompt('Password', 'Password Message', password => console.log(`password: ${password}`), 'secure-text');
  }

  showCustom() {
    Modal.prompt(
      'Password',
      'You can custom buttons',
      [{ text: '取消' }, { text: '提交', onPress: password => console.log(`密码为:${password}`) }],
      'secure-text'
    );
  }

  showLogin() {
    Modal.prompt(
      'Login',
      'Please input login information',
      (login, password) => console.log(`login: ${login}, password: ${password}`),
      'login-password',
      null,
      ['Please input name', 'Please input password']
    );
  }
}
