import { Component, ContentChild, OnInit, TemplateRef } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IconModule } from '../icon/icon.module';
import { NoticeBarModule } from './notice-bar.module';

describe('NoticeBarComponent', () => {
  let component: TestNoticeBarComponent;
  let fixture: ComponentFixture<TestNoticeBarComponent>;
  let noticeBarEle;

  beforeEach(waitForAsync(() => {
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

  it('should option work', () => {
    component.option = {
      content:
        '我是小黄条，小黄条的小，小黄条的黄，小黄条的条，请多多关照！！！我是小黄条，小黄条的小，小黄条的黄，小黄条的条，请多多关照！！！',
      fontSize: '14px',
      icon: component.icon,
      action: component.action,
      mode: 'closable',
      scrolling: false,
      marqueeProps: { loop: false, leading: 500, trailing: 8000, fps: 200, style: {} }
    };
    fixture.detectChanges();
    expect(noticeBarEle.nativeElement.querySelector('.am-notice-bar-operation').classList).toContain(
      'am-notice-bar-operation',
      'mode is work'
    );
  });

  it('onClick work', () => {
    fixture.detectChanges();
    component.onClick = jasmine.createSpy('onClick is callback');
    noticeBarEle.nativeElement.querySelector('.am-notice-bar').click();
    fixture.detectChanges();
    expect(component.onClick).toHaveBeenCalledTimes(1);
  });
});

@Component({
  selector: 'demo-notice-bar-basic',
  template: `
    <NoticeBar [option]="option" (onClick)="onClick()">
      <ng-template #iconDom>
        <Icon [type]="'check-circle-o'" [size]="'xxs'"></Icon>
      </ng-template>
      <ng-template #action>
        <div style="color: #a1a1a1">不再提示</div>
      </ng-template>
    </NoticeBar>
  `
})
export class TestNoticeBarComponent implements OnInit {
  @ContentChild('iconDom')
  icon: TemplateRef<void>;
  @ContentChild('action')
  action: TemplateRef<void>;
  option: any;

  ngOnInit() {
    this.option = {
      content:
        '我是小黄条，小黄条的小，小黄条的黄，小黄条的条，请多多关照！！！我是小黄条，小黄条的小，小黄条的黄，小黄条的条，请多多关照！！！',
      fontSize: '24px',
      icon: this.icon,
      action: this.action,
      mode: 'closable',
      scrolling: true,
      marqueeProps: { loop: true, leading: 500, trailing: 8000, fps: 200, style: {} }
    };
  }

  onClick() {
    console.log('1');
  }
}
