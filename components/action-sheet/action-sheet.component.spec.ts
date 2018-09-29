import { Component, ViewChild } from '@angular/core';
import { By } from '@angular/platform-browser';
import { dispatchTouchEvent } from '../core/testing';
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ActionSheetComponent } from './action-sheet.component';
import { ActionSheet, ActionSheetModule, ButtonModule } from '../..';
import { NgZorroAntdMobilePipesModule } from '../pipes/ng-zorro-antd-mobile.pipes.module';

describe('ActionSheetComponent', () => {
  let component: TestActionSheetBasicComponent;
  let fixture: ComponentFixture<TestActionSheetBasicComponent>;
  let buttons;
  let actionSheetEle;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestActionSheetBasicComponent],
      imports: [NgZorroAntdMobilePipesModule, ActionSheetModule, ButtonModule],
      providers: [ActionSheet]
    }).compileComponents();
    TestBed.overrideModule(ActionSheetModule, {
      set: { entryComponents: [ActionSheetComponent, TestActionSheetBasicComponent] }
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestActionSheetBasicComponent);
    component = fixture.componentInstance;
    buttons = fixture.debugElement.queryAll(By.css('nzm-button'));
    fixture.detectChanges();
  });

  it('should actionsheet work', () => {
    const button = buttons[0].nativeElement;
    dispatchTouchEvent(button, 'touchend');
    fixture.detectChanges();
    actionSheetEle = document.querySelector('actionsheet');
    expect(actionSheetEle.querySelector('.am-action-sheet-wrap').classList).toContain(
      'am-action-sheet-wrap',
      'actionsheet is work'
    );
  });

  it('should options work', () => {
    expect(actionSheetEle.querySelector('.am-action-sheet-button-list').children.length).toBe(
      component.dataList.length,
      'options is work'
    );
  });

  it('should title work', () => {
    expect(actionSheetEle.querySelector('.am-action-sheet-destructive-button').innerText).toBe(
      'Delete',
      'Delete is work'
    );
  });

  it('should title work', () => {
    expect(actionSheetEle.querySelector('.am-action-sheet-cancel-button').innerText).toBe('Cancel', 'Cancel is work');
  });

  it('should maskClosable work', () => {
    expect(actionSheetEle.querySelector('.am-action-sheet-mask').classList).toContain(
      'am-action-sheet-mask',
      'maskClosable is work'
    );
  });

  it('should shareActionSheet work', () => {
    const button = buttons[1].nativeElement;
    dispatchTouchEvent(button, 'touchend');
    fixture.detectChanges();
    actionSheetEle = document.querySelector('actionsheet');
    expect(actionSheetEle.querySelector('.am-action-sheet-share-list')).toBeTruthy('shareactionsheet is work');
  });

  it('should shareActionSheetMulpitleLine work', () => {
    const button = buttons[2].nativeElement;
    dispatchTouchEvent(button, 'touchend');
    fixture.detectChanges();
    actionSheetEle = document.querySelector('actionsheet');
    expect(actionSheetEle.querySelector('.am-action-sheet-share-content').children.length).toBe(
      3,
      'shareActionSheetMulpitleLine is work'
    );
  });

  it('should close work', () => {
    const button = buttons[1].nativeElement;
    dispatchTouchEvent(button, 'touchend');
    fixture.detectChanges();
    actionSheetEle = document.querySelector('actionsheet');
    actionSheetEle.querySelector('.am-action-sheet-share-list-item').click();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({
  selector: 'test-actionSheet-basic',
  template: `
  <nzm-button (onClick)="showActionSheet(message)">showActionSheet</nzm-button>
  <nzm-button (onClick)="showShareActionSheet()">showShareActionSheet</nzm-button>
  <nzm-button (onClick)="showShareActionSheetMulpitleLine()">showShareActionSheetMulpitleLine</nzm-button>

  <ng-template #message>
    <div class="am-action-sheet-message">123</div>
  </ng-template>
  `,
  providers: [ActionSheet],
  entryComponents: [ActionSheetComponent]
})
export class TestActionSheetBasicComponent {
  dataList = [
    { url: 'OpHiXAcYzmPQHcdlLFrc', title: '发送给朋友' },
    { url: 'wvEzCMiDZjthhAOcwTOu', title: '新浪微博' },
    { url: 'cTTayShKtEIdQVEMuiWt', title: '生活圈' },
    { url: 'umnHwvEgSyQtXlZjNJTt', title: '微信好友' },
    { url: 'SxpunpETIwdxNjcJamwB', title: 'QQ' }
  ].map(obj => ({
    icon: `<img src="https://gw.alipayobjects.com/zos/rmsportal/${obj.url}.png" style="width:36px"/>`,
    title: obj.title
  }));

  @ViewChild('message')
  message: ViewChild;

  constructor(private _actionSheet: ActionSheet) {}

  showActionSheet = message => {
    const BUTTONS = ['Operation1', 'Operation2', 'Operation2', 'Delete', 'Cancel'];
    ActionSheet.showActionSheetWithOptions(
      {
        options: BUTTONS,
        cancelButtonIndex: BUTTONS.length - 1,
        destructiveButtonIndex: BUTTONS.length - 2,
        title: 'action-title',
        message: message,
        maskClosable: true
      },
      buttonIndex => {
        console.log(buttonIndex);
      }
    );
  }

  showShareActionSheet = () => {
    ActionSheet.showShareActionSheetWithOptions(
      {
        options: this.dataList,
        title: 'action-title',
        message: 'I am description, description, description'
      },
      buttonIndex => {
        return new Promise(resolve => {
          setTimeout(resolve, 1000);
        });
      }
    );
  }

  showShareActionSheetMulpitleLine = () => {
    const data = [[...this.dataList, this.dataList[2]], [this.dataList[3], this.dataList[4]]];
    ActionSheet.showShareActionSheetWithOptions(
      {
        options: data,
        message: 'I am description, description, description'
      },
      (buttonIndex, rowIndex) => {
        console.log(buttonIndex);
      }
    );
  }
}
