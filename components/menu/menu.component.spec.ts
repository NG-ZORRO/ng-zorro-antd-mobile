import { Component, ViewChild } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MenuModule } from './menu.module';
import { MenuComponent } from './menu.component';
import { LocaleProviderModule } from '../locale-provider/locale-provider.module';
import { dispatchTouchEvent } from '../core/testing';

describe('MenuComponent', () => {
  let component: TestMenuComponent;
  let fixture: ComponentFixture<TestMenuComponent>;
  let menuEle;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TestMenuComponent],
      imports: [MenuModule, LocaleProviderModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMenuComponent);
    component = fixture.componentInstance;
    menuEle = fixture.debugElement.query(By.css('Menu'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('height work', () => {
    expect(menuEle.nativeElement.firstElementChild.style.height).toBeTruthy();
  });

  it('value work', () => {
    component.level = 2;
    component.multiSelect = true;
    fixture.detectChanges();

    const leftListEle = fixture.debugElement.query(By.css('List'));
    const menuItem = leftListEle.nativeElement.firstElementChild.children[0];
    expect(menuItem.classList).toContain('am-menu-selected');

    const rightListEle = fixture.debugElement.query(By.css('SubMenu'));
    expect(rightListEle.nativeElement.querySelector('.am-list-body').children[1].classList).toContain(
      'am-sub-menu-item-selected'
    );
  });

  it('multiSelect work', () => {
    expect(menuEle.nativeElement.querySelector('.am-multi-select-btns')).toBeFalsy('is not multiSelect');
    component.multiSelect = true;
    fixture.detectChanges();
    expect(menuEle.nativeElement.querySelector('.am-multi-select-btns')).toBeTruthy('is multiSelect');
  });

  it('level work', () => {
    component.level = 2;
    expect(menuEle.nativeElement.querySelector('.am-menu-select-container').children.length).toBe(2, 'level = 2');
    component.level = 1;
    fixture.detectChanges();
    expect(menuEle.nativeElement.querySelector('.am-menu-select-container').children.length).toBe(1, 'level = 1');
  });

  it('onOk work', () => {
    component.level = 2;
    component.multiSelect = true;
    fixture.detectChanges();

    const ok = menuEle.nativeElement.querySelector('.am-multi-select-btns').lastElementChild;
    component.onOk = jasmine.createSpy('onOk is callback');
    dispatchTouchEvent(ok, 'touchend');
    ok.click();
    fixture.detectChanges();
    expect(component.onOk).toHaveBeenCalledTimes(1);
  });

  it('onCancle work', () => {
    component.level = 1;
    component.multiSelect = true;
    fixture.detectChanges();

    const cancel = menuEle.nativeElement.querySelector('.am-multi-select-btns').firstElementChild;
    component.onCancel = jasmine.createSpy('onCancel is callback');
    cancel.click();
    fixture.detectChanges();
    expect(component.onCancel).toHaveBeenCalledTimes(1);
  });

  it('onChange not emit when onClickFirstLevelItem and data is not leaf', () => {
    component.level = 2;
    component.multiSelect = false;
    fixture.detectChanges();

    const leftListEle = fixture.debugElement.query(By.css('List'));
    const menuItem = leftListEle.nativeElement.firstElementChild.children[1];
    component.onChange = jasmine.createSpy('onChange is callback');
    menuItem.click();
    fixture.detectChanges();
    expect(component.onChange).toHaveBeenCalledTimes(0);
  });

  it('onChange emit when onClickFirstLevelItem and data is leaf', () => {
    component.level = 2;
    component.multiSelect = false;
    fixture.detectChanges();

    const leftListEle = fixture.debugElement.query(By.css('List'));
    const menuItem = leftListEle.nativeElement.firstElementChild.children[2];
    component.onChange = jasmine.createSpy('onChange is callback');
    menuItem.click();
    fixture.detectChanges();
    expect(component.onChange).toHaveBeenCalledTimes(1);
  });

  it('onClickSubMenuItem work when level = 2 and multiSelect = true', () => {
    component.level = 2;
    component.multiSelect = true;
    fixture.detectChanges();

    const rightListEle = fixture.debugElement.query(By.css('SubMenu'));
    const radio = rightListEle.nativeElement.querySelector('.am-list-extra').firstElementChild;
    radio.click();
    fixture.detectChanges();
    expect(rightListEle.nativeElement.querySelector('.am-list-body').firstElementChild.classList).toContain(
      'am-sub-menu-item-selected'
    );

    radio.click();
    fixture.detectChanges();
    expect(rightListEle.nativeElement.querySelector('.am-list-body').firstElementChild.classList).not.toContain(
      'am-sub-menu-item-selected'
    );
  });

  it('onClickSubMenuItem work when level = 2 and multiSelect = false', () => {
    component.level = 2;
    component.multiSelect = false;
    fixture.detectChanges();

    const rightListEle = fixture.debugElement.query(By.css('SubMenu'));
    const radio = rightListEle.nativeElement.querySelector('.am-list-extra').firstElementChild;
    radio.click();
    fixture.detectChanges();
    expect(rightListEle.nativeElement.querySelector('.am-list-body').firstElementChild.classList).toContain(
      'am-sub-menu-item-selected'
    );
  });

  it('onClickSubMenuItem work when level = 1 and multiSelect = false', () => {
    component.level = 1;
    component.multiSelect = false;
    fixture.detectChanges();

    const rightListEle = fixture.debugElement.query(By.css('SubMenu'));
    const radio = rightListEle.nativeElement.querySelector('.am-list-extra').firstElementChild;
    radio.click();
    fixture.detectChanges();
    expect(rightListEle.nativeElement.querySelector('.am-list-body').firstElementChild.classList).toContain(
      'am-sub-menu-item-selected'
    );
  });

  it('onClickSubMenuItem work when level = 1 and multiSelect = true', () => {
    component.level = 1;
    component.multiSelect = true;
    component.value = ['2'];

    fixture.detectChanges();

    const rightListEle = fixture.debugElement.query(By.css('SubMenu'));
    const radio = rightListEle.nativeElement.querySelector('.am-list-extra').firstElementChild;
    radio.click();
    fixture.detectChanges();
    expect(rightListEle.nativeElement.querySelector('.am-list-body').firstElementChild.classList).toContain(
      'am-sub-menu-item-selected'
    );
  });

  it('getSelectValue work', () => {
    const item = {
      label: 'All Foods',
      value: '1',
      disabled: false
    };

    component.level = 2;
    component.multiSelect = true;
    component.menu.firstLevelSelectValue = '2';
    component.menu.value = ['1', '2'];
    fixture.detectChanges();
    expect(component.menu.getSelectValue(item)).toEqual(['2', ['1']]);

    component.level = 1;
    component.multiSelect = true;
    component.menu.value = ['1'];
    fixture.detectChanges();
    expect(component.menu.getSelectValue(item)).toEqual([]);

    component.menu.value = null;
    component.level = 1;
    component.multiSelect = true;
    fixture.detectChanges();
    expect(component.menu.getSelectValue(item)).toEqual(['1']);

    component.menu.value = null;
    component.level = 2;
    component.multiSelect = true;
    component.menu.firstLevelSelectValue = '2';
    fixture.detectChanges();
    expect(component.menu.getSelectValue(item)).toEqual(['2', ['1']]);
  });
});

@Component({
  selector: 'test-menu',
  template: `
    <Menu
      [data]="data"
      [level]="level"
      [value]="value"
      [height]="height"
      [multiSelect]="multiSelect"
      (onChange)="onChange($event)"
      (onCancel)="onCancel()"
      (onOk)="onOk($event)"
    ></Menu>

    <Menu [data]="data2" [level]="level" [height]="height" [multiSelect]="multiSelect"></Menu>

    <Menu></Menu>
  `
})
export class TestMenuComponent {
  data = [
    {
      value: '1',
      label: 'Food',
      children: [
        {
          label: 'All Foods',
          value: '1',
          disabled: false
        },
        {
          label: 'Chinese Food',
          value: '2'
        },
        {
          label: 'Hot Pot',
          value: '3'
        },
        {
          label: 'Buffet',
          value: '4'
        },
        {
          label: 'Fast Food',
          value: '5'
        },
        {
          label: 'Snack',
          value: '6'
        },
        {
          label: 'Bread',
          value: '7'
        },
        {
          label: 'Fruit',
          value: '8'
        },
        {
          label: 'Noodle',
          value: '9'
        },
        {
          label: 'Leisure Food',
          value: '10'
        }
      ]
    },
    {
      value: '2',
      label: 'Supermarket',
      children: [
        {
          label: 'All Supermarkets',
          value: '1'
        },
        {
          label: 'Supermarket',
          value: '2',
          disabled: true
        },
        {
          label: 'C-Store',
          value: '3'
        },
        {
          label: 'Personal Care',
          value: '4'
        }
      ]
    },
    {
      value: '3',
      label: 'Extra',
      isLeaf: true,
      children: [
        {
          label: 'you can not see',
          value: '1'
        }
      ]
    }
  ];
  data2 = [
    {
      value: '1',
      label: 'Food'
    },
    {
      value: '2',
      label: 'Supermarket'
    },
    {
      value: '3',
      label: 'Extra',
      isLeaf: true
    }
  ];
  level = 2;
  value = ['1', '2'];
  height = document.documentElement.clientHeight / 2;
  multiSelect = false;

  @ViewChild(MenuComponent)
  menu: MenuComponent;

  constructor() {}

  onChange(item) {
    console.log(`onChange: ${item}`);
  }

  onCancel() {
    console.log('onCancel');
  }

  onOk(item) {
    console.log('onOk', item);
  }
}
