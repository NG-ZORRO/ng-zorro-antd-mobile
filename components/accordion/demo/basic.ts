import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';

@Component({
  selector: 'demo-accordion-basic',
  template: `
    <Accordion [defaultActiveKey]="'0'" [activeKey]="activeKey" (onChange)="onChange($event)">
      <AccordionPanel
        *ngFor="let item of accordions; let i = index"
        [key]="i"
        [header]="item.title"
        [disabled]="item.inactive"
      >
        <List className="my-list">
          <ListItem *ngFor="let content of item.child">
            {{ content }}
          </ListItem>
        </List>
      </AccordionPanel>
    </Accordion>
    <ng-template #title1>
      <div>Title 1</div>
    </ng-template>
    <ng-template #title2>
      <img src="/assets/img/logo.svg" style="width:36px"/>
    </ng-template>
  `
})
export class DemoAccordionBasicComponent implements OnInit {
  @ViewChild('title1', { static: true }) title1: ViewChild;
  @ViewChild('title2', { static: true }) title2: ViewChild;
  accordions: Array<any> = [];

  activeKey = [0, 1];

  onChange(event) {
    console.log(event);
  }

  ngOnInit() {
    this.accordions = [
      { title: this.title1, child: ['content 1', 'content 1', 'content 1'] },
      {
        title: this.title2,
        child: ['content 2', 'content 2', 'content 2'],
        inactive: false
      },
      { title: 'Title 3', child: ['content 3', 'content 3', 'content 3'], inactive: true }
    ];
  }
}
