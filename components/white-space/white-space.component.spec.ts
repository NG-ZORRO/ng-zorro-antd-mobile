import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WhiteSpaceModule } from './white-space.module';

describe('WhiteSpace', () => {
  let component: TestWhiteSpace;
  let fixture: ComponentFixture<TestWhiteSpace>;
  let WhiteSpaceEle;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [WhiteSpaceModule],
      declarations: [TestWhiteSpace]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestWhiteSpace);
    component = fixture.componentInstance;
    WhiteSpaceEle = fixture.debugElement.query(By.css('WhiteSpace'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // !!obj
  });

  it('should size work', () => {
    expect(WhiteSpaceEle.nativeElement.classList.contains('am-whitespace-md')).toBe(false);
    component.size = 'md';
    fixture.detectChanges();
    expect(WhiteSpaceEle.nativeElement.classList.contains('am-whitespace-md')).toBe(true);
  });
});

@Component({
  selector: 'test-white-space-child',
  template: `
    <div>
      <WhiteSpace [ngClass]="class" [size]="size"></WhiteSpace>
    </div>
  `
})
export class TestWhiteSpace {
  size = 'xs'; // 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  class = '';

  constructor() {}
}
