import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CardModule } from './card.module';

describe('CardComponent', () => {
  let component;
  let fixture: ComponentFixture<TestCardComponent>;
  let cardEle;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TestCardComponent],
      imports: [CardModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCardComponent);
    component = fixture.componentInstance;
    cardEle = fixture.debugElement.query(By.css('Card'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('full work', () => {
    expect(cardEle.nativeElement.classList).toContain('am-card');
    component.full = true;
    fixture.detectChanges();
    expect(cardEle.nativeElement.classList).toContain('am-card-full');
  });

  it('header title work', () => {
    expect(cardEle.nativeElement.querySelector('.am-card-header-content').innerText).toEqual(component.title);
  });

  it('header thumb work', () => {
    expect(cardEle.nativeElement.querySelector('img').src).toEqual(component.thumb);
  });

  it('header thumbStyle work', () => {
    expect(cardEle.nativeElement.querySelector('img').style.width).toContain(component.thumbStyle.width);
  });

  it('header extra work', () => {
    expect(cardEle.nativeElement.querySelector('.am-card-header-extra').firstElementChild.innerText).toContain(
      'this is extra'
    );
  });

  it('footer content work', () => {
    expect(cardEle.nativeElement.querySelector('.am-card-footer-content').innerText).toEqual(component.content);
  });

  it('footer extra work', () => {
    expect(cardEle.nativeElement.querySelector('.am-card-footer-extra').firstElementChild.innerText).toContain(
      'extra footer content'
    );
  });
});

@Component({
  selector: 'test-card',
  template: `
    <Card [full]="full">
      <CardHeader [title]="title" [thumb]="thumb" [thumbStyle]="thumbStyle" [extra]="extra">
        <ng-template #extra>
          <span>this is extra</span>
        </ng-template>
      </CardHeader>
      <CardBody>
        <div>This is content of Card</div>
      </CardBody>
      <CardFooter [content]="content" [extra]="footerExtra">
        <ng-template #footerExtra>
          <div>extra footer content</div>
        </ng-template>
      </CardFooter>
    </Card>
  `
})
export class TestCardComponent {
  full: boolean = false;
  title: string = 'This is title';
  thumb: string = 'https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg';
  thumbStyle: object = {
    width: '32px',
    height: '32px'
  };
  content: string = 'footer content';
}
