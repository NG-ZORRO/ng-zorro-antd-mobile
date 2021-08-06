import { Component } from '@angular/core';

@Component({
  selector: 'demo-list-basic',
  template: `
    <List [className]="'my-list'" [renderHeader]="renderHeader">
      <ListItem [extra]="'extra content'">Title</ListItem>
    </List>
    <List [className]="'my-list'" [renderHeader]="renderHeader1">
      <ListItem multipleLine [arrow]="'horizontal'" (onClick)="onClick()">
        Title
        <Brief>subtitle</Brief>
      </ListItem>
      <ListItem multipleLine [arrow]="'horizontal'" [platform]="'android'" (onClick)="onClick()">
        ListItem （Android）
        <Brief>
          There may have water ripple effect of
          <br />
          material if you set the onClick event.
        </Brief>
      </ListItem>
      <ListItem
        [arrow]="'horizontal'"
        [thumb]="'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png'"
        multipleLine
        (onClick)="onClick()"
      >
        Title
        <Brief>subtitle</Brief>
      </ListItem>
    </List>
    <List [className]="'my-list'" [renderHeader]="renderHeader2">
      <ListItem>Title</ListItem>
      <ListItem [arrow]="'horizontal'" (onClick)="onClick()">Title</ListItem>
      <ListItem [extra]="'extra content'" [arrow]="'horizontal'" (onClick)="onClick()">Title</ListItem>
      <ListItem
        [extra]="'10:30'"
        [align]="'top'"
        [thumb]="'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png'"
        multipleLine
      >
        Title
        <Brief>subtitle</Brief>
      </ListItem>
    </List>
    <List [className]="'my-list'" [renderHeader]="renderHeader3">
      <ListItem multipleLine [extra]="'extra content'">
        Title
        <Brief>subtitle</Brief>
      </ListItem>
    </List>
    <List [renderHeader]="renderHeader4">
      <ListItem
        [thumb]="'https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png'"
        [arrow]="'horizontal'"
        (onClick)="onClick()"
      >
        My wallet
      </ListItem>
      <ListItem
        [thumb]="'https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png'"
        (onClick)="onClick()"
        [arrow]="'horizontal'"
      >
        My Cost Ratio
      </ListItem>
    </List>
    <List [className]="'my-list'" [renderHeader]="renderHeader5">
      <ListItem data-seed="logId">Single line，long text will be hidden with ellipsis；</ListItem>
      <ListItem wrap>
        Multiple line，long text will wrap；Long Text Long Text Long Text Long Text Long Text Long Text
      </ListItem>
      <ListItem [extra]="'extra content'" multipleLine [align]="'top'" wrap>
        Multiple line and long text will wrap. Long Text Long Text Long Text
      </ListItem>
      <ListItem [extra]="'no arrow'" [arrow]="'empty'" [className]="'spe'" wrap>
        In rare cases, the text of right side will wrap in the single line with long text. long text long text long text
      </ListItem>
    </List>
    <List [className]="'my-list'" [renderHeader]="renderHeader6">
      <ListItem [disabled]="disabled" [extra]="" (click)="onDisableClick()">Click to disable</ListItem>
      <ListItem>
        <select>
          <option [value]="'1'">Html select element</option>
          <option [value]="'2'" disabled>Unable to select</option>
          <option [value]="'3'">option 3</option>
        </select>
      </ListItem>
    </List>
  `,
  styles: [
    `
      :host ::ng-deep .my-list .spe .am-list-extra {
        flex-basis: initial;
      }
    `
  ]
})
export class DemoListBasicComponent {
  disabled: boolean = false;
  renderFooter: Function;

  constructor() {}

  renderHeader() {
    return 'Basic Style';
  }

  renderHeader1() {
    return 'Subtitle';
  }

  renderHeader2() {
    return 'Customized Right Side（Empty Content / Text / Image）';
  }

  renderHeader3() {
    return 'Align Vertical Center';
  }

  renderHeader4() {
    return 'Icon in the left';
  }

  renderHeader5() {
    return 'Text Wrapping';
  }

  renderHeader6() {
    return 'Other';
  }

  onClick() {
    console.log('click');
  }

  switchCheck(value) {
    console.log('switch status:', value);
  }

  onDisableClick() {
    console.log('click', this.disabled);
    this.disabled = true;
  }
}
