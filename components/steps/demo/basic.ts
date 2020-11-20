import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-steps-basic',
  template: `
    <div class="am-demo-page">
      <div style="padding: 15px;font-size: 16px;">步骤条</div>
      <div class="am-demo-bd am-wingblank am-wingblank-lg">
        <div>
          <div class="sub-title">Small size</div>
        </div>
        <div>
          <Steps [size]="'small'" [current]="1">
            <Step [title]="'Finished'" [description]="'This is description'"></Step>
            <Step [title]="'In Progress'" [description]="'This is description'"></Step>
            <Step [title]="'Waiting'" [description]="'This is description'"></Step>
          </Steps>
        </div>
        <div>
          <div class="sub-title">Small size, single line text</div>
        </div>
        <div>
          <Steps [size]="'small'" [current]="1">
            <Step [title]="'Finished'"></Step>
            <Step [title]="'In Progress'"></Step>
            <Step [title]="'Waiting'"></Step>
          </Steps>
        </div>
        <div>
          <div class="sub-title">Default size</div>
        </div>
        <div>
          <Steps>
            <Step [status]="'process'" [title]="'Finished'" [description]="'This is description'"></Step>
            <Step [status]="'error'" [title]="'Error'" [description]="'This is description'"></Step>
            <Step [title]="'Waiting'" [description]="'This is description'"></Step>
          </Steps>
        </div>
        <div>
          <div class="sub-title">Customized status</div>
        </div>
        <div>
          <Steps>
            <Step [status]="'finish'" [title]="'Step 1'" [icon]="'loading'"></Step>
            <Step [status]="'process'" [title]="'Step 2'" [icon]="customIcon"></Step>
            <Step [status]="'error'" [title]="'Step 3'" [icon]="customIcon"></Step>
          </Steps>
        </div>
        <div>
          <div class="sub-title">Customized icon</div>
        </div>
        <div>
          <Steps [current]="1">
            <Step [title]="'Step 1'" [icon]="customIcon" [description]="'This is description'"></Step>
            <Step [title]="'Step 2'" [icon]="customIcon" [description]="'This is description'"></Step>
            <Step [title]="customTitle" [icon]="customIcon" [description]="customDescription"></Step>
          </Steps>
        </div>
        <div>
          <div class="sub-title">Multiple Steps</div>
        </div>
        <div>
          <Steps [current]="1">
            <Step [title]="'Step 1'" [icon]="customIcon"></Step>
            <Step [title]="'Step 2'" [icon]="customIcon"></Step>
            <Step [title]="'Step 3'" [icon]="customIcon" [status]="'error'"></Step>
            <Step [title]="'Step 4'" [icon]="customIcon"></Step>
          </Steps>
        </div>
      </div>
      <div style="padding: 15px;font-size: 16px;">水平方向的步骤条</div>
      <div class="am-demo-bd am-wingblank am-wingblank-lg">
        <div>
          <div class="sub-title">Horizontal small size</div>
        </div>
        <div>
          <Steps [size]="'small'" [current]="1" [direction]="'horizontal'">
            <Step *ngFor="let v of steps" [title]="v.title" [description]="v.description"></Step>
          </Steps>
        </div>
        <div>
          <div class="sub-title">Horizontal default size</div>
        </div>
        <div>
          <Steps [current]="1" [direction]="'horizontal'">
            <Step *ngFor="let v of steps" [title]="v.title" [description]="v.description"></Step>
          </Steps>
        </div>
        <div>
          <div class="sub-title">Horizontal customized icon</div>
        </div>
        <div>
          <Steps [direction]="'horizontal'">
            <Step [title]="'Step 1'" [icon]="customIcon"></Step>
            <Step [title]="'Step 2'" [status]="'error'" [icon]="customIcon"></Step>
            <Step [title]="'Step 3'" [icon]="customIcon"></Step>
          </Steps>
        </div>
        <div>
          <div class="sub-title">Switch Step</div>
        </div>
        <div>
          <Steps [direction]="'horizontal'" [current]="current">
            <Step [title]="'Finished'"></Step>
            <Step [title]="'In Progress'"></Step>
            <Step [title]="'Waiting'"></Step>
          </Steps>
        </div>
        <div class="steps-content">{{ index }}</div>
        <div class="steps-action">
          <button nz-button nzType="default" (click)="pre()" *ngIf="current > 0">
            <span>Previous</span>
          </button>
          <button nz-button nzType="default" (click)="next()" *ngIf="current < 2">
            <span>Next</span>
          </button>
          <button nz-button nzType="primary" (click)="done()" *ngIf="current === 2">
            <span>Done</span>
          </button>
        </div>
      </div>
    </div>

    <ng-template #customTitle>
      <div>Step 3</div>
    </ng-template>

    <ng-template #customDescription>
      <div>'This is description'</div>
    </ng-template>

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
  `,
  styles: [
    `
      .sub-title {
        color: #888;
        font-size: 14px;
        padding: 30px 0 18px 0;
      }
      .am-wingblank,
      .am-wingblank-lg {
        margin-left: 15px;
        margin-right: 15px;
      }

      .am-button {
        display: block;
        outline: 0 none;
        -webkit-appearance: none;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        padding: 0;
        text-align: center;
        font-size: 18px;
        height: 47px;
        line-height: 47px;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-word;
        white-space: nowrap;
        color: #000;
        background-color: #fff;
        border: 1px solid #ddd;
        border-radius: 5px;
        margin: 0 15px 15px 15px;
      }
      .steps-content {
        margin-top: 16px;
        border: 1px dashed #e9e9e9;
        border-radius: 6px;
        background-color: #fafafa;
        min-height: 200px;
        text-align: center;
        padding-top: 80px;
      }

      .steps-action {
        margin-top: 24px;
      }

      button {
        margin-right: 8px;
      }
    `
  ]
})
export class DemoStepsBasicComponent implements OnInit {
  steps = [];
  current = 0;
  index = 'First-content';

  constructor() { }

  ngOnInit() {
    this.steps = [
      {
        title: 'Finished',
        description: 'This is description'
      },
      {
        title: 'In Progress',
        description: 'This is description'
      },
      {
        title: 'Waiting',
        description: 'This is description'
      }
    ];
  }

  pre(): void {
    this.current -= 1;
    this.changeContent();
  }

  next(): void {
    this.current += 1;
    this.changeContent();
  }

  done(): void {
    console.log('done');
  }

  changeContent(): void {
    switch (this.current) {
      case 0: {
        this.index = 'First-content';
        break;
      }
      case 1: {
        this.index = 'Second-content';
        break;
      }
      case 2: {
        this.index = 'third-content';
        break;
      }
      default: {
        this.index = 'error';
      }
    }
  }
}
