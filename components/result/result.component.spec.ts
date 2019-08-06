import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ResultModule } from './result.module';
import { IconModule } from '../icon/icon.module';
import { ButtonModule } from '../button/button.module';
import { DemoResultBasicComponent } from './demo/basic';

describe('Result', () => {
  describe('basic', () => {
    let component: DemoResultBasicComponent;
    let fixture: ComponentFixture<DemoResultBasicComponent>;
    let results;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [DemoResultBasicComponent],
        imports: [ResultModule, IconModule]
      }).compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(DemoResultBasicComponent);
      component = fixture.componentInstance;
      results = fixture.debugElement.queryAll(By.css('Result'));
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should img work', () => {
      fixture.detectChanges();
      expect(results[0].nativeElement.querySelector('.img1')).toBeTruthy();
    });

    it('should message work', () => {
      fixture.detectChanges();
      expect(results[0].nativeElement.querySelector('.message1')).toBeTruthy();
    });

    it('should text work', () => {
      fixture.detectChanges();
      expect(results[0].nativeElement.querySelector('.am-result-title').innerText).toContain('支付成功');
    });
  });

  describe('spec', () => {
    let component: TestResultComponent;
    let fixture: ComponentFixture<TestResultComponent>;
    let resultEle;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [ResultModule, ButtonModule],
        declarations: [TestResultComponent]
      }).compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(TestResultComponent);
      component = fixture.componentInstance;
      resultEle = fixture.debugElement.query(By.css('Result'));
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should buttonText work', () => {
      fixture.detectChanges();
      const button = resultEle.nativeElement.querySelector('.am-result-button');
      expect(button.querySelector('a').innerText).toContain('测试一下');
    });

    it('should buttonType work', () => {
      fixture.detectChanges();
      const button = resultEle.nativeElement.querySelector('.am-result-button');
      expect(button.querySelector('[type=primary]')).toBeTruthy();
    });

    it('onClick work', () => {
      fixture.detectChanges();
      let nzmButton = resultEle.nativeElement.querySelector('a[type=primary]');
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
        [imgUrl]="imgUrl"
        [message]="'测试'"
        [title]="'支付成功'"
        [buttonText]="buttonText"
        [buttonType]="buttonType"
        (onButtonClick)="clickCallback()"
      ></Result>
    </div>
  `
})
export class TestResultComponent {
  img: string = 'xs'; // 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  imgUrl: string = 'https://img.alicdn.com/tfs/TB1oy4uGDtYBeNjy1XdXXXXyVXa-393-401.png';
  message: string = '';
  title: string = '';
  buttonText: string = '测试一下';
  buttonType: string = 'primary';
  clickCallback = jasmine.createSpy('buttonClick is callback');

  constructor() {}
}
