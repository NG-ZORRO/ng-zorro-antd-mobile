import { Component } from '@angular/core';

@Component({
  selector: 'demo-swipe-action-basic',
  template: `
    <NoticeBar
      *ngIf="!isMobile"
      style="margin-bottom: 10px"
      [option]="{ content: '该组件只支持Touch事件，请使用移动模式/设备打开此页。', marqueeProps: { fps: 100 } }"
    ></NoticeBar>
    <br />
    <List>
      <SwipeAction style="background-color: gray" [right]="right" [left]="left" (onOpen)="open()" (onClose)="close()">
        <ListItem [extra]="'More'" [arrow]="'horizontal'" (onClick)="click()">
          Have left and right buttons
        </ListItem>
      </SwipeAction>

      <SwipeAction
        style="background-color: gray"
        [autoClose]="true"
        [left]="left"
        (onOpen)="open()"
        (onClose)="close()"
      >
        <ListItem [extra]="'More'" [arrow]="'horizontal'" (onClick)="click()">
          Only left buttons
        </ListItem>
      </SwipeAction>

      <SwipeAction
        style="background-color: gray"
        [autoClose]="true"
        [right]="right"
        (onOpen)="open()"
        (onClose)="close()"
      >
        <ListItem [extra]="'More'" [arrow]="'horizontal'" (onClick)="click()">
          Only right buttons
        </ListItem>
      </SwipeAction>

      <SwipeAction
        style="background-color: gray"
        [autoClose]="true"
        [right]="rightDifferentWidth"
        (onOpen)="open()"
        (onClose)="close()"
      >
        <ListItem [extra]="'More'" [arrow]="'horizontal'" (onClick)="click()">
          Different button width
        </ListItem>
      </SwipeAction>

      <SwipeAction
        style="background-color: gray"
        [autoClose]="true"
        [right]="right"
        (onOpen)="open()"
        (onClose)="close()"
      >
        <ListItem [extra]="'More'" [arrow]="'horizontal'" (onClick)="itemClick()">
          List.Item with onClick
        </ListItem>
      </SwipeAction>
    </List>
  `,
  styles: [
    `
      :host ::ng-deep.btnClass {
        background-color: #f4333c;
        color: white;
      }
    `
  ]
})
export class DemoSwipeActionBasicComponent {
  isMobile = /Android|webOS|iPhone|iPod|BlackBerry/i.test(window.navigator.userAgent);
  right = [
    {
      text: 'Cancel',
      onPress: () => console.log('cancel'),
      style: { backgroundColor: '#ddd', color: 'white' }
    },
    {
      text: 'Delete',
      onPress: () => console.log('delete'),
      className: 'btnClass'
    }
  ];

  rightDifferentWidth = [
    {
      text: 'short',
      onPress: () => console.log('cancel'),
      style: { backgroundColor: '#ddd', color: 'white' }
    },
    {
      text: 'long text',
      onPress: () => console.log('delete'),
      className: 'btnClass'
    }
  ];

  left = [
    {
      text: 'Reply',
      onPress: () => console.log('reply'),
      style: { backgroundColor: '#108ee9', color: 'white' }
    },
    {
      text: 'Cancel',
      onPress: () => console.log('cancel'),
      style: { backgroundColor: '#ddd', color: 'white' }
    }
  ];

  open() {
    console.log('open');
  }

  close() {
    console.log('close');
  }

  click() {
    console.log('clicked!');
  }

  itemClick() {
    console.log('ListItem clicked!');
  }
}
