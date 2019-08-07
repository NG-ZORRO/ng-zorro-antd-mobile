import { Component } from '@angular/core';

@Component({
  selector: 'demo-flex-basic',
  template: `
    <div class="flex-container">
      <div className="sub-title">Basic</div>
      <Flex>
        <FlexItem>
          <ng-template [ngTemplateOutlet]="placeHolder"></ng-template>
        </FlexItem>
        <FlexItem>
          <ng-template [ngTemplateOutlet]="placeHolder"></ng-template>
        </FlexItem>
      </Flex>
      <br />
      <Flex>
        <FlexItem>
          <ng-template [ngTemplateOutlet]="placeHolder"></ng-template>
        </FlexItem>
        <FlexItem>
          <ng-template [ngTemplateOutlet]="placeHolder"></ng-template>
        </FlexItem>
        <FlexItem>
          <ng-template [ngTemplateOutlet]="placeHolder"></ng-template>
        </FlexItem>
      </Flex>
      <br />
      <Flex>
        <FlexItem>
          <ng-template [ngTemplateOutlet]="placeHolder"></ng-template>
        </FlexItem>
        <FlexItem>
          <ng-template [ngTemplateOutlet]="placeHolder"></ng-template>
        </FlexItem>
        <FlexItem>
          <ng-template [ngTemplateOutlet]="placeHolder"></ng-template>
        </FlexItem>
        <FlexItem>
          <ng-template [ngTemplateOutlet]="placeHolder"></ng-template>
        </FlexItem>
      </Flex>
      <br />
      <div className="sub-title">Wrap</div>
      <Flex [wrap]="'wrap'">
        <div class="placeholder inline">Block</div>
        <div class="placeholder inline">Block</div>
        <div class="placeholder inline">Block</div>
        <div class="placeholder inline">Block</div>
        <div class="placeholder inline">Block</div>
        <div class="placeholder inline">Block</div>
        <div class="placeholder inline">Block</div>
      </Flex>
      <div className="sub-title">Align</div>
      <Flex [justify]="'center'">
        <div class="placeholder inline">Block</div>
        <div class="placeholder inline">Block</div>
        <div class="placeholder inline">Block</div>
      </Flex>
      <br />
      <Flex [justify]="'end'">
        <div class="placeholder inline">Block</div>
        <div class="placeholder inline">Block</div>
        <div class="placeholder inline">Block</div>
      </Flex>
      <br />
      <Flex [justify]="'between'">
        <div class="placeholder inline">Block</div>
        <div class="placeholder inline">Block</div>
        <div class="placeholder inline">Block</div>
      </Flex>
      <br />
      <Flex [align]="'start'">
        <div class="placeholder inline">Block</div>
        <div class="placeholder inline small">Block</div>
        <div class="placeholder inline">Block</div>
      </Flex>
      <br />
      <Flex [align]="'end'">
        <div class="placeholder inline">Block</div>
        <div class="placeholder inline small">Block</div>
        <div class="placeholder inline">Block</div>
      </Flex>
      <br />
      <Flex [align]="'baseline'">
        <div class="placeholder inline">Block</div>
        <div class="placeholder inline small">Block</div>
        <div class="placeholder inline">Block</div>
      </Flex>
    </div>

    <ng-template #placeHolder>
      <div class="placeholder">Block</div>
    </ng-template>
  `,
  styles: [
    `
      .flex-container {
        margin: 0 15px;
      }
      .inline {
        width: 80px !important;
        margin: 9px 9px 9px 0;
      }
      .small {
        height: 20px !important;
        line-height: 20px !important;
      }
      .sub-title {
        color: #888;
        font-size: 14px;
        padding: 30px 0 18px 0;
      }
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
export class DemoFlexBasicComponent {}
