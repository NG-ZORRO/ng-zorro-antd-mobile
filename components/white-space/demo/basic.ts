import { Component, ContentChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'demo-white-space-basic',
  template: `
    <div>
      <WhiteSpace [size]="'xs'"></WhiteSpace>
      <ng-template [ngTemplateOutlet]="placeHolder"></ng-template>

      <WhiteSpace [size]="'sm'"></WhiteSpace>
      <ng-template [ngTemplateOutlet]="placeHolder"></ng-template>

      <WhiteSpace></WhiteSpace>
      <ng-template [ngTemplateOutlet]="placeHolder"></ng-template>

      <WhiteSpace [size]="'lg'"></WhiteSpace>
      <ng-template [ngTemplateOutlet]="placeHolder"></ng-template>

      <WhiteSpace [size]="'xl'"></WhiteSpace>
      <ng-template [ngTemplateOutlet]="placeHolder"></ng-template>

      <ng-template #placeHolder>
        <div class="placeholder">Block</div>
      </ng-template>
    </div>
  `,
  styles: [
    `
      .placeholder {
        background-color: #ebebef;
        color: #bbb;
        text-align: center;
        height: 30px;
        line-height: 30px;
        width: 100%;
      }
    `
  ]
})
export class DemoWhiteSpaceBasicComponent {}
