import {
  ContentChildren,
  Component,
  QueryList,
  Input,
  forwardRef,
  AfterContentInit,
  OnDestroy,
  HostListener,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  HostBinding
} from '@angular/core';
import { AccordionService } from './accordion.service';
import { AccordionGroupComponent } from './accordion-group/accordion-group.component';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'Accordion, nzm-accordion',
  templateUrl: './accordion.component.html',
  providers: [AccordionService]
})
export class AccordionComponent implements AfterContentInit, OnDestroy, OnChanges {
  private _oldGroups: AccordionGroupComponent[];
  private _subscription: Subscription;

  @ContentChildren(forwardRef(() => AccordionGroupComponent))
  groups: QueryList<AccordionGroupComponent>;

  @Input()
  expandAll = false;
  @Input()
  activeKey: Array<string> | string;
  @Input()
  defaultActiveKey: string;
  @Input()
  openAnimation = {};
  @Input()
  accordion = false;
  @Output()
  onChange: any = new EventEmitter();

  @HostBinding('class.am-accordion')
  amAccordion: boolean = true;

  @HostListener('click', ['$event'])
  click(event) {
    let result: any = [];
    this.groups.toArray().forEach(group => {
      if (group.isOpened) {
        if (this.accordion) {
          result = group.key;
        } else {
          result.push(group.key);
        }
      }
    });
    this.onChange.emit(result);
  }

  constructor(private _accordionService: AccordionService) {
    this._accordionService.getComponent(this);
  }

  closeAll() {
    this.groups.toArray().forEach(group => {
      group.isOpened = false;
    });
  }

  init () {
    if (this.expandAll && this.groups && this.groups.length > 0) {
      this._oldGroups = this.groups.toArray();
      this._oldGroups.forEach((group, index) => {
        group.openOnInitialization();
      });
      this._subscription = this.groups.changes.subscribe(change => {
        const newGroups = this.groups.toArray().filter(group => {
          return this._oldGroups.indexOf(group) === -1;
        });
        newGroups.forEach(group => {
          group.openOnInitialization();
        });
        this._oldGroups = this.groups.toArray();
      });
    }

    let currentActiveKey = [];
    if (this.activeKey !== undefined && this.activeKey.length > 0 && !this.accordion && this.groups && this.groups.length > 0) {
      currentActiveKey = this.toArray(this.activeKey);
      this.groups.forEach((group, index) => {
        currentActiveKey.forEach(key => {
          if (index === parseInt(key, 0)) {
            setTimeout(() => {
              group.isOpened = true;
            }, 0);
          }
        });
      });
    } else if (this.defaultActiveKey !== undefined && !this.expandAll && !this.accordion && this.groups && this.groups.length > 0) {
      this.groups.forEach((group, index) => {
        if (index === parseInt(this.defaultActiveKey, 0)) {
          setTimeout(() => {
            group.isOpened = true;
          }, 0);
        }
      });
    }
  }

  toArray(activeKey) {
    let currentActiveKey = activeKey;
    if (!Array.isArray(currentActiveKey)) {
      currentActiveKey = currentActiveKey !== undefined && currentActiveKey !== '' ? [currentActiveKey] : [];
    }
    return currentActiveKey;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.accordion) {
      this._accordionService.getComponent(this);
    }

    if (changes.expandAll || changes.accordion) {
      this.init();
    }
  }

  ngAfterContentInit() {
    this.init();
  }

  ngOnDestroy() {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }
}
