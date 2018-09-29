import { Component, ContentChild, TemplateRef } from '@angular/core';
import { By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IconModule } from '../icon/icon.module';
import { NoticeBarModule } from './notice-bar.module';

describe('NoticeBarComponent', () => {
  let component: TestNoticeBarComponent;
  let fixture: ComponentFixture<TestNoticeBarComponent>;
  let noticeBarEle;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestNoticeBarComponent],
      imports: [IconModule, NoticeBarModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestNoticeBarComponent);
    component = fixture.componentInstance;
    noticeBarEle = fixture.debugElement.query(By.css('noticebar'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should mode work', () => {
    expect(noticeBarEle.nativeElement.querySelector('.am-notice-bar-operation').classList).toContain(
      'am-notice-bar-operation',
      'mode is not set'
    );
    component.mode = 'closable';
    fixture.detectChanges();
    expect(noticeBarEle.nativeElement.querySelector('.am-notice-bar-operation').classList).toContain(
      'am-notice-bar-operation',
      'mode is work'
    );
  });

  it('should icon work', () => {
    expect(noticeBarEle.nativeElement.querySelector('.am-notice-bar-icon').classList).toContain(
      'am-notice-bar-icon',
      'icon is work'
    );
    component.icon = null;
    fixture.detectChanges();
    expect(noticeBarEle.nativeElement.querySelector('.am-notice-bar-icon')).toBeNull('icon is not set');
  });

  it('OnClick work', () => {
    fixture.detectChanges();
    component.onClick = jasmine.createSpy('OnClick is callback');
    noticeBarEle.nativeElement.querySelector('.am-notice-bar').click();
    fixture.detectChanges();
    expect(component.onClick).toHaveBeenCalledTimes(1);
  });
});

@Component({
  selector: 'demo-notice-bar-basic',
  template: `
    <NoticeBar [icon]="icon"
                [action]="action"
                [mode]="'closable'"
                [stopScrolling]="stopScrolling"
                [noticeBarcontent]= "noticeBarcontent"
                (onClick)="onClick()"
    >
      <ng-template #iconDom>
        <Icon [type]="'check-circle-o'" [size]="'xxs'"></Icon>
      </ng-template>
      <ng-template #action>
        <div style="color: #a1a1a1">不再提示</div>
      </ng-template>
    </NoticeBar>
  `
})
export class TestNoticeBarComponent {
  mode = 'link';
  stopScrolling = true;
  noticeBarcontent = '我是小黄条，小黄条的小，小黄条的黄，小黄条的条，请多多关照！！！我是小黄条，小黄条的小，小黄条的黄，小黄条的条，请多多关照！！！';

  @ContentChild('iconDom')
  icon: TemplateRef<void>;
  @ContentChild('action')
  action: TemplateRef<void>;

  onClick() {
    console.log('1');
  }
}
