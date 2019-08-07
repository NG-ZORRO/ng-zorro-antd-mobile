import { Component } from '@angular/core';

@Component({
  selector: 'demo-button-basic',
  template: `
    <WingBlank>
      <div Button [type]="'dashed'" (onClick)="onClick()">dashed</div>
      <WhiteSpace></WhiteSpace>
      <div Button (onClick)="onClick()">default</div>
      <WhiteSpace></WhiteSpace>
      <div Button [disabled]="true">default diasbled</div>
      <WhiteSpace></WhiteSpace>
      <div Button [type]="'primary'">primary</div>
      <WhiteSpace></WhiteSpace>
      <div Button [type]="'primary'" [disabled]="true">primary diasbled</div>
      <WhiteSpace></WhiteSpace>
      <div Button [type]="'warning'">warning</div>
      <WhiteSpace></WhiteSpace>
      <div Button [type]="'warning'" [disabled]="true">warning</div>
      <WhiteSpace></WhiteSpace>
      <div Button [loading]="true">loading</div>
      <WhiteSpace></WhiteSpace>
      <div Button [icon]="'check-circle-o'">with icon</div>
      <WhiteSpace></WhiteSpace>
      <div Button [icon]="img">
        with custom icon
      </div>

      <ng-template #img>
        <img src="https://gw.alipayobjects.com/zos/rmsportal/jBfVSpDwPbitsABtDDlB.svg" alt="" />
      </ng-template>

      <WhiteSpace></WhiteSpace>
      <div Button style="margin-right: 4px" [type]="'primary'" [inline]="true">inline primary</div>
      <div Button [type]="'ghost'" [inline]="true">inline ghost</div>
      <WhiteSpace></WhiteSpace>
      <div Button style="margin-right: 4px" [type]="'primary'" [inline]="true" [size]="'small'">primary</div>
      <div Button [type]="'primary'" [inline]="true" [disabled]="true" [size]="'small'">primary diasbled</div>
      <WhiteSpace></WhiteSpace>
      <div Button style="margin-right: 4px" [type]="'ghost'" [inline]="true" [size]="'small'">ghost</div>
      <div Button [type]="'ghost'" [inline]="true" [disabled]="true" [size]="'small'">ghost diasbled</div>
    </WingBlank>

    <List className="my-list">
      <ListItem [extra]="ghost" [arrow]="'horizontal'">
        Regional manager
        <Brief>Can be collected, refund, discount management, view data and other operations</Brief>
      </ListItem>
      <ListItem [extra]="primary" [arrow]="'horizontal'">
        Regional manager
        <Brief>Can be collected, refund, discount management, view data and other operations</Brief>
      </ListItem>
    </List>

    <ng-template #ghost>
      <div Button [type]="'ghost'" [inline]="true" style="margin-right: 4px" [size]="'small'">small</div>
    </ng-template>

    <ng-template #primary>
      <div Button [type]="'primary'" [inline]="true" style="margin-right: 4px" [size]="'small'">small</div>
    </ng-template>
  `
})
export class DemoButtonBasicComponent {
  onClick() {
    console.log('click');
  }
}
