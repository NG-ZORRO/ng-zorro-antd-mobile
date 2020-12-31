import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BadgeModule } from './badge.module';

describe('BadgeComponent', () => {
  let component: TestBadgeComponent;
  let fixture: ComponentFixture<TestBadgeComponent>;
  let badgeEle;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TestBadgeComponent],
      imports: [BadgeModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestBadgeComponent);
    component = fixture.componentInstance;
    badgeEle = fixture.debugElement.query(By.css('Badge'));
    fixture.detectChanges();
  });

  it('should size work', () => {
    expect(badgeEle.nativeElement.querySelector('.am-badge-corner-large')).toBeNull('corner is small');
    expect(badgeEle.nativeElement.classList).not.toContain(
      'am-badge-corner-wrapper-large',
      'am-badge-corner-wrapper-large'
    );
  });
  it('should corner work ', () => {
    component.text = 'corner is false';
    fixture.detectChanges();
    expect(badgeEle.nativeElement.querySelector('.am-badge-text').innerText.trim()).toBe(
      'corner is false',
      'dot is false,corner is false'
    );

    component.corner = true;
    fixture.detectChanges();
    expect(badgeEle.nativeElement.querySelector('.am-badge-text')).toBeNull('dot=false,corner is true');
    expect(badgeEle.nativeElement.querySelector('.am-badge-corner').innerText.trim()).toBe(
      'corner is false',
      'dot is false,corner is true'
    );
    expect(badgeEle.nativeElement.classList).toContain('am-badge-corner-wrapper', 'am-badge-corner-wrapper');

    component.size = 'large';
    fixture.detectChanges();
    expect(badgeEle.nativeElement.querySelector('.am-badge-corner-large').innerText.trim()).toBe(
      'corner is false',
      'dot is false,corner is true'
    );
    expect(badgeEle.nativeElement.classList).toContain(
      'am-badge-corner-wrapper-large',
      'am-badge-corner-wrapper-large'
    );
  });
  it('when dot=true ,should  text work', () => {
    component.text = 'test';
    component.dot = true;
    fixture.detectChanges();
    expect(badgeEle.nativeElement.querySelector('.am-badge-text')).toBeNull('dot=true,text is display');
    expect(badgeEle.nativeElement.children[1].classList).toContain('am-badge-dot', 'dot=true,dot is show');
  });
  it('when dot=false ,should  text work', () => {
    component.dot = false;
    component.text = 'test';
    fixture.detectChanges();
    expect(badgeEle.nativeElement.querySelector('.am-badge-text').innerText.trim()).toBe(
      'test',
      'dot=false,text is show'
    );
  });
  it('when text is number,should overflowCount work', () => {
    component.text = 11;
    fixture.detectChanges();
    expect(badgeEle.nativeElement.querySelector('.am-badge-text').innerText.trim()).toBe('11', 'test is 11');

    component.text = 35;
    fixture.detectChanges();
    expect(badgeEle.nativeElement.querySelector('.am-badge-text').innerText.trim()).toBe('33+', 'test is 33+');
  });
  it('should hot work', () => {
    expect(badgeEle.nativeElement.querySelector('.am-badge-hot')).toBeNull('hot is false');
    component.hot = true;
    fixture.detectChanges();
    expect(badgeEle.nativeElement.classList).toContain('am-badge-hot', 'hot is true');
  });
});

@Component({
  selector: 'test-badge-child',
  template: `
    <Badge [dot]="dot" [hot]="hot" [size]="size" [text]="text" [corner]="corner" [overflowCount]="overflowCount">
      <span style="width:26px ; height: 26px; background:#ddd; display:inline-block"></span>
    </Badge>
  `
})
export class TestBadgeComponent {
  size = 'small';
  text;
  corner = false;
  dot = false;
  overflowCount = 33;
  hot = false;

  constructor() {}
}
