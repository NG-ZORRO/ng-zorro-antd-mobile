import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'demo-search-bar-basic',
  template: `
    <div class="am-demo-page">
      <div class="am-demo-bd">
        <div class="am-wingblank am-wingblank-lg">
          <div class="sub-title">Normal</div>
        </div>
        <div style="border-bottom: 1px solid #ddd;">
          <SearchBar [placeholder]="'Search'" [maxLength]="8"></SearchBar>
        </div>
        <div class="am-whitespace am-whitespace-md"></div>
        <div class="am-wingblank am-wingblank-lg">
          <div class="sub-title">AutoFocus when enter page</div>
        </div>
        <div style="border-bottom: 1px solid #ddd;">
          <SearchBar [placeholder]="'自动获取光标'" [setFocus]="autoFocus"></SearchBar>
        </div>
        <div class="am-wingblank am-wingblank-lg">
          <div class="sub-title">Focus by operation</div>
        </div>
        <div style="border-bottom: 1px solid #ddd;">
          <SearchBar [placeholder]="'手动获取获取光标'" [setFocus]="focusObj"></SearchBar>
        </div>
        <a role="button" class="am-button" (click)="handleClick()"><span>click to focus</span></a>
        <div class="am-wingblank am-wingblank-lg">
          <div class="sub-title">Show cancel button</div>
        </div>
        <div style="border-bottom: 1px solid #ddd;">
          <SearchBar
            [(ngModel)]="value"
            [placeholder]="'Search'"
            [showCancelButton]="true"
            (onBlur)="blur()"
            (onFocus)="focus()"
            (onCancel)="cancel()"
            (onClear)="clear(value)"
            (onSubmit)="submit(value)"
            (onChange)="change($event)"
          ></SearchBar>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .am-search {
        border-bottom: 1px solid #ddd;
      }
      .sub-title {
        color: #888;
        font-size: 14px;
        padding: 30px 0 18px 0;
      }
      .am-wingblank .am-wingblank-lg {
        margin-left: 15px;
        margin-right: 15px;
      }

      .am-wingblank {
        margin-left: 8px;
        margin-right: 8px;
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
    `
  ]
})
export class DemoSearchBarBasicComponent {
  value: string = '美食';
  autoFocus = {
    focusValue: true
  };
  focusObj = {
    focusValue: false,
    date: new Date()
  };

  constructor(private _element: ElementRef, private _renderer: Renderer2) {}

  change($event) {
    console.log($event, 'onChange');
  }

  submit(value) {
    console.log(value, 'onSubmit');
  }

  clear(value) {
    console.log(value, 'onClear');
  }

  focus() {
    console.log('onFocus');
  }

  blur() {
    console.log('onBlur');
  }

  cancel() {
    console.log('onCancel');
  }

  handleClick() {
    this.focusObj = {
      focusValue: true,
      date: new Date()
    };
  }
}
