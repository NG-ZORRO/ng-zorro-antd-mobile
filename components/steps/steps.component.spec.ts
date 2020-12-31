import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed, fakeAsync, tick, waitForAsync } from '@angular/core/testing';
import { StepsModule } from './steps.module';
import { StepStatusEnum, StepDirectionEnum } from './step/step.component';

describe('StepsComponent', () => {
  let component: TestStepsComponent;
  let fixture: ComponentFixture<TestStepsComponent>;
  let stepsEle;
  let stepList;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [TestStepsComponent],
      imports: [StepsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestStepsComponent);
    component = fixture.componentInstance;
    stepsEle = fixture.debugElement.query(By.css('Steps'));
    stepList = stepsEle.nativeElement.querySelectorAll('Step');
    fixture.detectChanges();
  });

  it('should size work', () => {
    expect(stepsEle.nativeElement.classList).toContain('am-steps-small', 'small');

    component.size = 'big';
    fixture.detectChanges();
    expect(stepsEle.nativeElement.classList).not.toContain('am-steps-small', 'big');
  });

  it('should direction work', () => {
    expect(stepsEle.nativeElement.classList).toContain('am-steps-vertical', 'vertical');
    component.direction = StepDirectionEnum.HORIZONTAL;
    fixture.detectChanges();
    expect(stepsEle.nativeElement.classList).toContain('am-steps-label-vertical', 'horizontal');
  });

  it('should step.title work', () => {
    expect(stepList[0].querySelector('.am-steps-item-title').innerText).toBe('start', 'title is start');

    component.title = 'finish';
    fixture.detectChanges();
    expect(stepList[0].querySelector('.am-steps-item-title').innerText).toBe('finish', 'title is start');
  });

  it('should step.description work', () => {
    expect(stepList[0].querySelector('.am-steps-item-description').innerText).toBe('this is test', 'description 1');

    component.description = 'this is description';
    fixture.detectChanges();
    expect(stepList[0].querySelector('.am-steps-item-description').innerText).toBe(
      'this is description',
      'description 2'
    );
  });

  it('should current work', () => {
    component.current = 0;
    fixture.detectChanges();
    expect(stepList[0].querySelector('.am-steps-icon').innerText).toBe('1', 'current 1');
    component.current = 1;
    fixture.detectChanges();
    expect(stepList[1].querySelector('.am-steps-icon').innerText).toBe('2', 'current 2');
  });

  it('should step change work', fakeAsync(() => {
    component.isChange = true;
    fixture.detectChanges();
    tick(100);
  }));
});

@Component({
  selector: 'test-steps',
  template: `
    <Steps [size]="size" [current]="current" [status]="status" [direction]="direction">
      <Step [title]="title" [description]="description"></Step>
      <Step [title]="'In Progress'" [description]="'This is description'"></Step>
      <Step [title]="'Waiting'" [description]="'This is description'"></Step>
      <Step [title]="'ERROR'" [status]="'error'" [description]="'This is description'"></Step>
      <Step [title]="'Waiting'" [icon]="customIcon" [description]="'This is description'"></Step>
      <Step *ngIf="isChange" [title]="'Waiting'" [icon]="customIcon" [description]="'This is description'"></Step>
    </Steps>

    <ng-template #customIcon>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42 42" class="am-icon am-icon-md">
        <g fillRule="evenodd" stroke="transparent" strokeWidth="4">
          <path d="M21 0C9.402 0 0 9.402 0 21c0 11.6 9.402 21 21 21s21-9.4 21-21C42 9.402 32.598 0 21 0z" />
          <path
            fill="#FFF"
            d="M29 18.73c0-.55-.447-1-1-1H23.36l4.428-5.05c.407-.46.407-1.208 0-1.668-.407-.46-1.068-.46-1.476 0l-5.21 5.89-5.21-5.89c-.406-.46-1.067-.46-1.475 0-.406.46-.406 1.207 0 1.667l4.43 5.05H14.23c-.55 0-.998.45-.998 1 0 .554.448.97 1 .97h5.9v3.942h-5.9c-.552 0-1 .448-1 1s.448.985 1 .985h5.9v4.896c0 .552.448 1 1 1 .55 0 .968-.284.968-.836v-5.06H28c.553 0 1-.433 1-.985s-.447-1-1-1h-5.9v-3.94H28c.553 0 1-.418 1-.97z"
          />
        </g>
      </svg>
    </ng-template>
  `
})
export class TestStepsComponent {
  current = 1;
  size = 'small';
  status = StepStatusEnum.PROCESS;
  direction = StepDirectionEnum.VERTICAL;
  title = 'start';
  description = 'this is test';
  stepStatus;
  isChange = false;

  constructor() {}
}
