import { Component } from '@angular/core';

@Component({
  selector: 'demo-accordion-accordion',
  template: `
    <Accordion [accordion]="true" [defaultActiveKey]="'0'" [activeKey]="activeKey" (onChange)="onChange($event)">
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
  `
})
export class DemoAccordionAccordionComponent {
  activeKey = [1];
  accordions: Array<any> = [
    { title: 'Title 1', child: ['content 1', 'content 1', 'content 1'] },
    { title: 'Title 2', child: ['content 2', 'content 2', 'content 2'] },
    { title: 'Title 3', child: ['content 3', 'content 3', 'content 3'] }
  ];

  onChange(event) {
    console.log(event);
  }
}
