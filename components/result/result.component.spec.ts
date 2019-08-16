import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ResultModule } from './result.module';
import { ButtonModule } from '../button/button.module';

describe('Result', () => {
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

    it('should img work', () => {
      fixture.detectChanges();
      expect(resultEle.nativeElement.querySelector('.img1')).toBeTruthy();
    });

    it('should message work', () => {
      fixture.detectChanges();
      expect(resultEle.nativeElement.querySelector('.message1')).toBeTruthy();
    });

    it('should text work', () => {
      fixture.detectChanges();
      expect(resultEle.nativeElement.querySelector('.am-result-title').innerText).toContain('支付成功');
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
        [img]="img1"
        [message]="message1"
        [title]="'支付成功'"
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
    </div>
  `
})
export class TestResultComponent {
  img: string = 'xs'; // 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  message: string = '';
  title: string = '';
  buttonText: string = '测试一下';
  buttonType: string = 'primary';
  clickCallback = jasmine.createSpy('buttonClick is callback');

  constructor() {}
}
