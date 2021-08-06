import { Component } from '@angular/core';

@Component({
  selector: 'demo-badge-basic',
  template: `
    <List [renderHeader]="renderHeader">
      <ListItem [extra]="'extra content'" [arrow]="'horizontal'">
        <Badge [dot]="true" [text]="77" class="dot-badge">
          <span style="width:26px ; height: 26px; background:#ddd; display:inline-block"></span>
        </Badge>
        <span style="margin-left:12px">Dot badge</span>
      </ListItem>
      <ListItem
        [thumb]="'https://zos.alipayobjects.com/rmsportal/faMhXAxhCzLvveJ.png'"
        [extra]="customBadage"
        [arrow]="'horizontal'"
        >Content
      </ListItem>
      <ListItem>
        <Badge [text]="'促'" [corner]="true">
          <div class="corner-badge">Use corner prop</div>
        </Badge>
      </ListItem>
      <ListItem [className]="'special-badge'" [extra]="customSpecialBadage">
        Custom corner
      </ListItem>
      <ListItem [extra]="'extra'" [arrow]="'horizontal'">
        <Badge [text]="0">Text number 0</Badge>
        <Badge [text]="'new'" style="margin-left:12px;"></Badge>
      </ListItem>
      <ListItem>
        Marketing:
        <Badge [text]="'减'" [hot]="true" style="margin-left:12px;"></Badge>
        <Badge [text]="'惠'" [hot]="true" style="margin-left:12px;"></Badge>
        <Badge [text]="'免'" [hot]="true" style="margin-left:12px;"></Badge>
        <Badge [text]="'反'" [hot]="true" style="margin-left:12px;"></Badge>
        <Badge [text]="'HOT'" [hot]="true" style="margin-left:12px;"></Badge>
      </ListItem>
      <ListItem>
        Customize
        <Badge class="quan" [text]="'券'" [setStyle]="quanStyle"></Badge>
        <Badge class="new" [text]="'NEW'" [setStyle]="newStyle"></Badge>
        <Badge class="autopay" [text]="'自动缴费'" [setStyle]="autopayStyle"></Badge>
      </ListItem>
    </List>
    <ng-template #customBadage>
      <Badge [text]="77" [overflowCount]="55"></Badge>
    </ng-template>
    <ng-template #customSpecialBadage>
      <Badge [text]="'促'" [size]="'large'"></Badge>
    </ng-template>
  `,
  styles: [
    `
      :host ::ng-deep .dot-badge .am-badge-dot {
        right: -8px;
      }
      .corner-badge {
        height: 50px;
        width: 200px;
        text-align: left;
        font-size: 17px;
        color: #000;
      }
      :host ::ng-deep .special-badge .am-list-line {
        padding-right: 0;
      }
      :host ::ng-deep .special-badge .am-list-line .am-list-extra {
        padding: 0;
        height: 44px;
      }
      :host ::ng-deep .special-badge .am-badge {
        transform: rotate(45deg);
        transform-origin: right bottom;
        right: 0px;
        top: 13px;
        width: 50px;
      }
      :host ::ng-deep .special-badge .am-badge-text {
        border-radius: 1px;
      }

      :host ::ng-deep .am-badge {
        text-align: right;
        font-size: 17px;
        color: #000;
      }
    `
  ]
})
export class DemoBadgeBasicComponent {
  quanStyle = {
    'margin-left': '12px',
    padding: '0 3px',
    'background-color': '#f19736',
    'border-radius': '2px'
  };
  newStyle = {
    'margin-left': '12px',
    padding: '0 3px',
    'background-color': '#21b68a',
    'border-radius': '2px'
  };
  autopayStyle = {
    'margin-left': '12px',
    padding: '0 3px',
    'background-color': '#fff',
    'border-radius': '2px',
    color: '#f19736',
    border: '1px solid #f19736'
  };

  renderHeader() {
    return 'Basic';
  }
}
