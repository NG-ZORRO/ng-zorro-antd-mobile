import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NavBarModule, IconModule } from '../..';

describe('NavBarComponent', () => {
  let component: TestNavBarBasicComponent;
  let fixture: ComponentFixture<TestNavBarBasicComponent>;
  let navBarEle;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TestNavBarBasicComponent],
      imports: [NavBarModule, IconModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestNavBarBasicComponent);
    component = fixture.componentInstance;
    navBarEle = fixture.debugElement.query(By.css('navbar'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('mode should work', () => {
    expect(navBarEle.nativeElement.classList).toContain('am-navbar-light', 'mode is light');
    component.mode = 'dark';
    fixture.detectChanges();
    expect(navBarEle.nativeElement.classList).toContain('am-navbar-dark', 'mode is dark');
  });

  it('icon should work', () => {
    expect(navBarEle.nativeElement.querySelector('.am-navbar-left-icon').classList).toBeTruthy('icon is work');
  });

  it('letfContent should work', () => {
    expect(navBarEle.nativeElement.querySelector('.am-navbar-left').classList).toBeTruthy('leftContent is work');
  });

  it('rightContent should work', () => {
    expect(navBarEle.nativeElement.querySelector('.am-navbar-right').classList).toBeTruthy('rightContent is work');
  });

  it('onLeftClick work', () => {
    component.onLeftClick = jasmine.createSpy('onLeftClick is callback');
    navBarEle.nativeElement.querySelector('.am-navbar-left').click();
    fixture.detectChanges();
    expect(component.onLeftClick).toHaveBeenCalledTimes(1);
  });
});

@Component({
  selector: 'test-nav-bar-basic',
  template: `
    <Navbar
      [icon]="icon"
      [mode]="mode"
      [leftContent]="leftContent"
      [rightContent]="rightContent"
      (onLeftClick)="onLeftClick()"
    >
      NavBar
    </Navbar>
    <Navbar [icon]="'left'" [leftContent]="'leftContent'" [rightContent]="'rightContent'">NavBar1</Navbar>

    <ng-template #icon>
      <Icon [type]="'left'"></Icon>
    </ng-template>
    <ng-template #leftContent>
      <Icon [type]="'ellipsis'"></Icon>
    </ng-template>
    <ng-template #rightContent>
      <Icon [ngStyle]="{ marginRight: '16px' }" [type]="'search'"></Icon>
      <Icon [type]="'ellipsis'"></Icon>
    </ng-template>
  `
})
export class TestNavBarBasicComponent {
  mode = 'light';

  onLeftClick() {
    console.log('onLeftClick');
  }
}
