import { Component } from '@angular/core';
import { LocaleProviderService } from 'ng-zorro-antd-mobile';
import { en_US, ru_RU, zh_CN, sv_SE, da_DK } from 'ng-zorro-antd-mobile';

@Component({
  selector: 'demo-locale-provider-basic',
  styles: [],
  template: `
    <WingBlank>
      <ListItem
        Picker
        [arrow]="'horizontal'"
        [cols]="1"
        [extra]="locale"
        [(ngModel)]="lang"
        [data]="languages"
        (ngModelChange)="onChange($event)"
      >
        Choose language
      </ListItem>
      <WhiteSpace [size]="'xl'"></WhiteSpace>
      <WhiteSpace [size]="'xl'"></WhiteSpace>
      <div>
        <Pagination [total]="5" [current]="1"></Pagination>
        <WhiteSpace></WhiteSpace>
        <List class="date-picker-list" style="background-color: white">
          <ListItem DatePicker [arrow]="'horizontal'" [mode]="'date'" [title]="'Select date'">datePicker </ListItem>
          <ListItem Picker [arrow]="'horizontal'" [data]="seasons" [cascade]="false">
            picker
          </ListItem>
        </List>
        <WhiteSpace></WhiteSpace>
        <SearchBar [placeholder]="'Search'" [showCancelButton]="true"></SearchBar>
        <WhiteSpace></WhiteSpace>
        <InputItem [type]="'money'" [placeholder]="'money input'"></InputItem>
      </div>
    </WingBlank>
  `,
  providers: []
})
export class DemoLocaleProviderBasicComponent {
  lang = [
    {
      value: '中文',
      label: '中文',
      language: zh_CN
    }
  ];
  locale = '中文';
  data = [
    {
      value: '1',
      label: 'Food'
    },
    {
      value: '2',
      label: 'Supermarket'
    },
    {
      value: '3',
      label: 'Extra',
      isLeaf: true
    }
  ];
  seasons = [
    {
      label: '2013',
      children: [
        {
          label: '春',
          children: []
        },
        {
          label: '夏',
          children: []
        }
      ]
    },
    {
      label: '2014',
      children: [
        {
          label: '春'
        },
        {
          label: '夏'
        }
      ]
    }
  ];
  languages = [
    {
      value: '中文',
      label: '中文',
      language: zh_CN
    },
    {
      value: 'English',
      label: 'English',
      language: en_US
    },
    {
      value: 'Русский',
      label: 'Русский',
      language: ru_RU
    },
    {
      value: 'Swedish',
      label: 'Swedish',
      language: sv_SE
    },
    {
      value: 'Danish',
      label: 'Danish',
      language: da_DK
    }
  ];

  constructor(private _localeProviderService: LocaleProviderService) {}

  onChange = item => {
    this.locale = item[0].value;
    const currentLocale = this.languages.find(i => i.value === this.locale).language;
    this._localeProviderService.setLocale(currentLocale);
  }
}
