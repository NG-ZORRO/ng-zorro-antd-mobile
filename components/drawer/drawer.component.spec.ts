import { Component, ViewChild } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DrawerModule } from './drawer.module';
import { ListModule } from '../list/list.module';
import { DrawerComponent } from './drawer.component';
import { dispatchTouchEvent } from '../core/testing';

describe('drawer', () => {
  let component;
  let fixture: ComponentFixture<TestDrawerComponent>;
  let drawerEle;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TestDrawerComponent],
      imports: [DrawerModule, ListModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDrawerComponent);
    component = fixture.componentInstance;
    drawerEle = fixture.debugElement.query(By.css('Drawer'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('overlayStyle work', () => {
    expect(drawerEle.nativeElement.querySelector('.am-drawer-overlay').style).toContain('color');
  });

  it('sidebarStyle work', () => {
    expect(drawerEle.nativeElement.querySelector('.am-drawer-sidebar').style).toContain('color');
  });

  it('contentStyle work', () => {
    expect(drawerEle.nativeElement.querySelector('.am-drawer-content').style).toContain('color');
  });

  it('dragHandleStyle work', () => {
    if (drawerEle.nativeElement.querySelector('.am-drawer-draghandler') != null) {
      expect(drawerEle.nativeElement.querySelector('.am-drawer-draghandler').style).toContain('color');
    }
  });

  it('open work', () => {
    expect(drawerEle.nativeElement.classList).toContain('am-drawer-open');
    component.open = false;
    fixture.detectChanges();
    expect(drawerEle.nativeElement.classList).not.toContain('am-drawer-open');
  });

  it('docked work when position is top', () => {
    component.position = 'top';
    component.docked = false;
    expect(drawerEle.nativeElement.classList).not.toContain('am-drawer-docked');
    component.docked = true;
    fixture.detectChanges();
    expect(drawerEle.nativeElement.classList).toContain('am-drawer-docked');
  });

  it('docked work when position is left', () => {
    component.position = 'left';
    component.docked = false;
    expect(drawerEle.nativeElement.classList).not.toContain('am-drawer-docked');
    component.docked = true;
    fixture.detectChanges();
    expect(drawerEle.nativeElement.classList).toContain('am-drawer-docked');
  });

  it('position work', () => {
    component.position = 'left';
    expect(drawerEle.nativeElement.classList).toContain('am-drawer-left');
    component.position = 'right';
    fixture.detectChanges();
    expect(drawerEle.nativeElement.classList).toContain('am-drawer-right');
    component.position = 'top';
    fixture.detectChanges();
    expect(drawerEle.nativeElement.classList).toContain('am-drawer-top');
    component.position = 'bottom';
    fixture.detectChanges();
    expect(drawerEle.nativeElement.classList).toContain('am-drawer-bottom');
  });

  it('transitions work', () => {
    expect(drawerEle.nativeElement.querySelector('.am-drawer-sidebar').style.transition).not.toContain('none');
    component.transitions = false;
    fixture.detectChanges();
    expect(drawerEle.nativeElement.querySelector('.am-drawer-sidebar').style.transition).toContain('none');
  });

  it('sidebar work', () => {
    expect(drawerEle.nativeElement.querySelector('.am-drawer-sidebar').children.length).toBeGreaterThanOrEqual(1);
  });

  it('touch work', () => {
    component.docked = false;
    component.open = false;
    component.enableDragHandle = true;
    component.drawer.touchSupported = true;
    fixture.detectChanges();
    expect(drawerEle.nativeElement.querySelector('.am-drawer-draghandle')).toBeTruthy();
    component.touch = false;
    fixture.detectChanges();
    expect(drawerEle.nativeElement.querySelector('.am-drawer-draghandle')).toBeFalsy();
  });

  it('enableDragHandle work', () => {
    component.docked = false;
    component.open = false;
    component.touch = true;
    component.drawer.touchSupported = true;
    fixture.detectChanges();
    expect(drawerEle.nativeElement.querySelector('.am-drawer-draghandle')).toBeTruthy();
    component.enableDragHandle = false;
    fixture.detectChanges();
    expect(drawerEle.nativeElement.querySelector('.am-drawer-draghandle')).toBeFalsy();
  });

  it('onOpenChange work', () => {
    component.open = true;
    fixture.detectChanges();
    let overlay = drawerEle.nativeElement.querySelector('.am-drawer-overlay');
    component.onOpenChange = jasmine.createSpy('onOpenChange is callback');
    overlay.click();
    fixture.detectChanges();
    expect(component.onOpenChange).toHaveBeenCalledTimes(1);

    component.open = false;
    fixture.detectChanges();
    overlay.click();
    fixture.detectChanges();
    expect(component.onOpenChange).toHaveBeenCalledTimes(1);
  });

  it('dragToggleDistance work when position = left', () => {
    component.docked = false;
    component.open = false;
    component.touch = true;
    component.drawer.touchSupported = true;
    component.enableDragHandle = true;
    component.position = 'left';
    fixture.detectChanges();

    const dragHandler = drawerEle.nativeElement.querySelector('.am-drawer-draghandle');
    dispatchTouchEvent(dragHandler, 'touchstart');
    fixture.detectChanges();
    dispatchTouchEvent(dragHandler, 'touchmove', 20);
    fixture.detectChanges();
    dispatchTouchEvent(dragHandler, 'touchend');
    fixture.detectChanges();
    expect(drawerEle.nativeElement.classList).not.toContain('am-drawer-open');

    dispatchTouchEvent(dragHandler, 'touchstart');
    fixture.detectChanges();
    dispatchTouchEvent(dragHandler, 'touchmove', 200);
    fixture.detectChanges();
    dispatchTouchEvent(dragHandler, 'touchend');
    fixture.detectChanges();
    expect(drawerEle.nativeElement.classList).toContain('am-drawer-open');
  });

  it('dragToggleDistance work when position = right', () => {
    component.docked = false;
    component.open = false;
    component.touch = true;
    component.drawer.touchSupported = true;
    component.enableDragHandle = true;
    component.position = 'right';
    fixture.detectChanges();

    const dragHandler = drawerEle.nativeElement.querySelector('.am-drawer-draghandle');
    dispatchTouchEvent(dragHandler, 'touchstart', window.innerWidth, 0);
    fixture.detectChanges();
    dispatchTouchEvent(dragHandler, 'touchmove', window.innerWidth - 20);
    fixture.detectChanges();
    dispatchTouchEvent(dragHandler, 'touchend');
    fixture.detectChanges();
    expect(drawerEle.nativeElement.classList).not.toContain('am-drawer-open');

    dispatchTouchEvent(dragHandler, 'touchstart', window.innerWidth, 0);
    fixture.detectChanges();
    dispatchTouchEvent(dragHandler, 'touchmove', window.innerWidth - 200);
    fixture.detectChanges();
    dispatchTouchEvent(dragHandler, 'touchend');
    fixture.detectChanges();
    expect(drawerEle.nativeElement.classList).toContain('am-drawer-open');
  });

  it('dragToggleDistance work when position = top', () => {
    component.docked = false;
    component.open = false;
    component.touch = true;
    component.drawer.touchSupported = true;
    component.enableDragHandle = true;
    component.position = 'top';
    fixture.detectChanges();

    const dragHandler = drawerEle.nativeElement.querySelector('.am-drawer-draghandle');
    dispatchTouchEvent(dragHandler, 'touchstart', 0, dragHandler.offsetTop);
    fixture.detectChanges();
    dispatchTouchEvent(dragHandler, 'touchmove', 0, dragHandler.offsetTop + 20);
    fixture.detectChanges();
    dispatchTouchEvent(dragHandler, 'touchend');
    fixture.detectChanges();
    expect(drawerEle.nativeElement.classList).not.toContain('am-drawer-open');

    dispatchTouchEvent(dragHandler, 'touchstart', 0, dragHandler.offsetTop);
    fixture.detectChanges();
    dispatchTouchEvent(dragHandler, 'touchmove', 0, dragHandler.offsetTop + 200);
    fixture.detectChanges();
    dispatchTouchEvent(dragHandler, 'touchend');
    fixture.detectChanges();
    expect(drawerEle.nativeElement.classList).toContain('am-drawer-open');
  });

  it('dragToggleDistance work when position = bottom', () => {
    component.docked = false;
    component.open = false;
    component.touch = true;
    component.drawer.touchSupported = true;
    component.enableDragHandle = true;
    component.position = 'bottom';
    fixture.detectChanges();

    const dragHandler = drawerEle.nativeElement.querySelector('.am-drawer-draghandle');
    const height = drawerEle.nativeElement.clientHeight + drawerEle.nativeElement.offsetTop;
    dispatchTouchEvent(dragHandler, 'touchstart', 0, height);
    fixture.detectChanges();
    dispatchTouchEvent(dragHandler, 'touchmove', 0, height - 20);
    fixture.detectChanges();
    dispatchTouchEvent(dragHandler, 'touchend');
    fixture.detectChanges();
    expect(drawerEle.nativeElement.classList).not.toContain('am-drawer-open');

    dispatchTouchEvent(dragHandler, 'touchstart', 0, height);
    fixture.detectChanges();
    dispatchTouchEvent(dragHandler, 'touchmove', 0, height - 200);
    fixture.detectChanges();
    dispatchTouchEvent(dragHandler, 'touchend');
    fixture.detectChanges();
    expect(drawerEle.nativeElement.classList).toContain('am-drawer-open');
  });

  it('sidebar drag work when position = left', () => {
    component.open = true;
    component.touch = true;
    component.drawer.touchSupported = true;
    component.enableDragHandle = true;
    component.position = 'left';
    fixture.detectChanges();

    const sidebar = drawerEle.nativeElement.querySelector('.am-drawer-sidebar');
    dispatchTouchEvent(sidebar, 'touchstart', 100, 0);
    fixture.detectChanges();
    dispatchTouchEvent(sidebar, 'touchmove', 80, 0);
    fixture.detectChanges();
    dispatchTouchEvent(sidebar, 'touchend');
    fixture.detectChanges();
    expect(drawerEle.nativeElement.classList).toContain('am-drawer-open');

    dispatchTouchEvent(sidebar, 'touchstart', 100, 0);
    fixture.detectChanges();
    dispatchTouchEvent(sidebar, 'touchmove', 120, 0);
    fixture.detectChanges();
    dispatchTouchEvent(sidebar, 'touchend');
    fixture.detectChanges();
    expect(drawerEle.nativeElement.classList).toContain('am-drawer-open');
  });

  it('sidebar drag work when position = right', () => {
    component.open = true;
    component.touch = true;
    component.drawer.touchSupported = true;
    component.enableDragHandle = true;
    component.position = 'right';
    fixture.detectChanges();

    const sidebar = drawerEle.nativeElement.querySelector('.am-drawer-sidebar');
    dispatchTouchEvent(sidebar, 'touchstart', 100);
    fixture.detectChanges();
    dispatchTouchEvent(sidebar, 'touchmove', 120);
    fixture.detectChanges();
    dispatchTouchEvent(sidebar, 'touchend');
    fixture.detectChanges();
    expect(drawerEle.nativeElement.classList).toContain('am-drawer-open');

    dispatchTouchEvent(sidebar, 'touchstart', 100);
    fixture.detectChanges();
    dispatchTouchEvent(sidebar, 'touchmove', 80);
    fixture.detectChanges();
    dispatchTouchEvent(sidebar, 'touchend');
    fixture.detectChanges();
    expect(drawerEle.nativeElement.classList).toContain('am-drawer-open');
  });

  it('sidebar drag work when position = top', () => {
    component.open = true;
    component.touch = true;
    component.drawer.touchSupported = true;
    component.enableDragHandle = true;
    component.position = 'top';
    fixture.detectChanges();

    const sidebar = drawerEle.nativeElement.querySelector('.am-drawer-sidebar');
    dispatchTouchEvent(sidebar, 'touchstart', 0, sidebar.offsetTop + 100);
    fixture.detectChanges();
    dispatchTouchEvent(sidebar, 'touchmove', 0, sidebar.offsetTop + 80);
    fixture.detectChanges();
    dispatchTouchEvent(sidebar, 'touchend');
    fixture.detectChanges();
    expect(drawerEle.nativeElement.classList).toContain('am-drawer-open');

    dispatchTouchEvent(sidebar, 'touchstart', 0, sidebar.offsetTop + 100);
    fixture.detectChanges();
    dispatchTouchEvent(sidebar, 'touchmove', 0, sidebar.offsetTop + 150);
    fixture.detectChanges();
    dispatchTouchEvent(sidebar, 'touchend');
    fixture.detectChanges();
    expect(drawerEle.nativeElement.classList).toContain('am-drawer-open');
  });

  it('sidebar drag work when position = bottom', () => {
    component.open = true;
    component.touch = true;
    component.drawer.touchSupported = true;
    component.enableDragHandle = true;
    component.position = 'bottom';
    fixture.detectChanges();

    const sidebar = drawerEle.nativeElement.querySelector('.am-drawer-sidebar');
    dispatchTouchEvent(sidebar, 'touchstart', 0, sidebar.offsetTop + 100);
    fixture.detectChanges();
    dispatchTouchEvent(sidebar, 'touchmove', 0, sidebar.offsetTop + 120);
    fixture.detectChanges();
    dispatchTouchEvent(sidebar, 'touchend');
    fixture.detectChanges();
    expect(drawerEle.nativeElement.classList).toContain('am-drawer-open');

    dispatchTouchEvent(sidebar, 'touchstart', 0, sidebar.offsetTop + 100);
    fixture.detectChanges();
    dispatchTouchEvent(sidebar, 'touchmove', 0, sidebar.offsetTop + 80);
    fixture.detectChanges();
    dispatchTouchEvent(sidebar, 'touchend');
    fixture.detectChanges();
    expect(drawerEle.nativeElement.classList).toContain('am-drawer-open');
  });
});

@Component({
  selector: 'test-drawer',
  template: `
    <Drawer
      [enableDragHandle]="enableDragHandle"
      [sidebar]="sidebar"
      [open]="open"
      [position]="position"
      [contentStyle]="contentStyle"
      [sidebarStyle]="sidebarStyle"
      [overlayStyle]="overlayStyle"
      [dragHandleStyle]="dragHandleStyle"
      [touch]="touch"
      [transitions]="transitions"
      [docked]="docked"
      [dragToggleDistance]="dragToggleDistance"
      (onOpenChange)="onOpenChange($event)"
    >
      Click upper-left corner
    </Drawer>

    <ng-template #sidebar>
      <List>
        <ListItem [multipleLine]="true" [thumb]="'https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png'">
          Category
        </ListItem>
        <ListItem
          *ngFor="let num of [1, 2, 3, 4, 5]; let i = index"
          [thumb]="'https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png'"
        >
          Category{{ i + 1 }}
        </ListItem>
      </List>
    </ng-template>
  `
})
export class TestDrawerComponent {
  enableDragHandle = true;
  open = true;
  position = 'left';
  docked = false;
  transitions = true;
  dragToggleDistance = 30;
  contentStyle = { color: '#A6A6A6' };
  sidebarStyle = { color: '#A6A6A7' };
  overlayStyle = { color: '#A6A6A8' };
  dragHandleStyle = { color: '#A6A6A9' };
  touch = true;

  @ViewChild(DrawerComponent)
  drawer: DrawerComponent;

  onOpenChange(value) {
    this.open = value;
    console.log(`onOpenChange: ${value}`);
  }
}
