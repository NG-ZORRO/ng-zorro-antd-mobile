import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ResultModule } from './result.module';
import { ButtonModule } from '../button/button.module';

describe('Result', () => {
  describe('spec', () => {
    let component: TestResultComponent;
    let fixture: ComponentFixture<TestResultComponent>;
    let results;

    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [ResultModule, ButtonModule],
        declarations: [TestResultComponent]
      }).compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(TestResultComponent);
      component = fixture.componentInstance;
      results = fixture.debugElement.queryAll(By.css('Result'));
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should buttonText work', () => {
      fixture.detectChanges();
      const button = results[0].nativeElement.querySelector('.am-result-button');
      expect(button.querySelector('a').innerText).toContain('测试一下');
    });

    it('should img work', () => {
      fixture.detectChanges();
      expect(results[0].nativeElement.querySelector('.img1')).toBeTruthy();
    });

    it('should message string work', () => {
      fixture.detectChanges();
      expect(results[1].nativeElement.querySelector('.am-result-message').innerText).toContain('测试');
    });

    it('should message template work', () => {
      fixture.detectChanges();
      expect(results[0].nativeElement.querySelector('.message1')).toBeTruthy();
    });

    it('should title string work', () => {
      fixture.detectChanges();
      expect(results[0].nativeElement.querySelector('.am-result-title').innerText).toContain('支付成功');
    });

    it('should title template work', () => {
      fixture.detectChanges();
      expect(results[1].nativeElement.querySelector('.title1').innerText).toContain('支付失败');
    });

    it('should buttonType work', () => {
      fixture.detectChanges();
      const button = results[0].nativeElement.querySelector('.am-result-button');
      expect(button.querySelector('[type=primary]')).toBeTruthy();
    });

    it('onClick work', () => {
      fixture.detectChanges();
      let nzmButton = results[0].nativeElement.querySelector('a[type=primary]');
      nzmButton.click();
      expect(component.clickCallback).toHaveBeenCalled();
    });
  });
});

@Component({
  selector: 'test-white-space-child',
  template: `
    <div class="result-example">
      <Result
        [img]="img1"
        [message]="message1"
        [title]="'支付成功'"
        [buttonText]="buttonText"
        [buttonType]="buttonType"
        (onButtonClick)="clickCallback()"
      ></Result>
      <Result
        [imgUrl]="imgUrl"
        [message]="'测试'"
        [title]="title1"
        [buttonText]="buttonText"
        [buttonType]="buttonType"
        (onButtonClick)="clickCallback()"
      ></Result>
      <ng-template #img1>
        <img
          src="https://gw.alipayobjects.com/zos/rmsportal/pdFARIqkrKEGVVEwotFe.svg"
          class="spe am-icon am-icon-md img1"
          alt=""
        />
      </ng-template>
      <ng-template #message1>
        <div class="message1">998.00元 <del>1098元</del></div>
      </ng-template>
      <ng-template #title1>
        <div class="title1">支付失败</div>
      </ng-template>
    </div>
  `
})
export class TestResultComponent {
  title: string = '';
  message: string = '';
  img: string = 'xs'; // 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  buttonText: string = '测试一下';
  buttonType: string = 'primary';
  clickCallback = jasmine.createSpy('buttonClick is callback');
  imgUrl: string = 'https://img.alicdn.com/tfs/TB1oy4uGDtYBeNjy1XdXXXXyVXa-393-401.png';

  constructor() {}
}
