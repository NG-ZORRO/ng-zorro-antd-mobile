import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CustomInputComponent } from './custom-input.component';
import { InputItemModule } from '../input-item.module';
import { CustomInputService } from './custom-input.service';
import { LocaleProviderModule } from '../../locale-provider/locale-provider.module';

describe('custom-input', () => {
  let component: CustomInputComponent;
  let fixture: ComponentFixture<CustomInputComponent>;
  let keyboard;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [InputItemModule, LocaleProviderModule],
      providers: [CustomInputService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should blur work, when custom-input is clicked', () => {
    const ev = {
      target: {
        localName: 'custominput',
        className: ''
      }
    };
    component.value = 'haha';
    fixture.detectChanges();
    component.doBlur(ev);
    component.onBlur.subscribe(value => {
      expect(value).toBe('haha');
    });
  });

  it('should maxLength work, when custom-keyboard is clicked', () => {
    const ev = {
      target: {
        localName: 'customkeyboard',
        className: ''
      }
    };
    component.focus = true;
    component.maxLength = 4;
    component.value = '23232';
    fixture.detectChanges();
    CustomInputService.clickValue = '3';
    fixture.detectChanges();
    component.doBlur(ev);
    expect(component.value).toBe('2323');
  });

  it('should blur work, when click delete', () => {
    const ev = {
      target: {
        localName: 'customkeyboard',
        className: ''
      }
    };
    component.focus = true;
    component.value = '122';
    fixture.detectChanges();
    CustomInputService.clickValue = 'delete';
    fixture.detectChanges();
    component.doBlur(ev);
    expect(component.value).toBe('12');
  });

  it('should blur work, when click confirm', () => {
    const ev = {
      target: {
        localName: 'customkeyboard',
        className: ''
      }
    };
    component.focus = true;
    component.value = '122';
    fixture.detectChanges();
    CustomInputService.clickValue = 'confirm';
    fixture.detectChanges();
    component.doBlur(ev);
    component.onBlur.subscribe(value => {
      expect(value).toBe('122');
    });
    component.onChange.subscribe(value => {
      expect(value).toBe('122');
    });
  });
  it('should blur work, when click hide', () => {
    const ev = {
      target: {
        localName: 'customkeyboard',
        className: ''
      }
    };
    component.focus = true;
    component.value = '122';
    fixture.detectChanges();
    CustomInputService.clickValue = 'hide';
    fixture.detectChanges();
    component.doBlur(ev);
    component.onBlur.subscribe(value => {
      expect(value).toBe('122');
    });
  });

  it('should service work, when custom-keyboard is clicked', () => {
    CustomInputService.showKeyboard();
    fixture.detectChanges();
    keyboard = document.querySelector('.am-number-keyboard-item');
    keyboard.click();
    expect(CustomInputService.clickValue).toBe(1);
  });
});
