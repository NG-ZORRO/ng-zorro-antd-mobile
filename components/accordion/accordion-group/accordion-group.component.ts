import { Component, Input, ChangeDetectorRef, Output, EventEmitter, ViewEncapsulation, HostBinding } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { AccordionService } from '../accordion.service';

@Component({
  selector: 'AccordionPanel',
  templateUrl: './accordion-group.component.html',
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('slide', [
      state('up', style({ height: 0 })),
      state('down', style({ height: '*' })),
      transition('down => up', [animate(200, style({ height: 0 }))]),
      transition('up => down', [
        animate(
          200,
          style({
            height: '*'
          })
        )
      ])
    ])
  ]
})
export class AccordionGroupComponent {
  isShowChild: boolean = true;

  @Input()
  key: string;
  @Input()
  header: string;
  @Input()
  isOpened: boolean = false;
  @Input()
  disabled: boolean = false;
  @Output()
  onOpen = new EventEmitter();
  @Output()
  onClose = new EventEmitter();
  @Output()
  onChange = new EventEmitter();

  @HostBinding('class.am-accordion-item') private _amItem = true;
  @HostBinding('class.am-accordion-item-active') private _isActive = this.isOpened;
  @HostBinding('class.addon') private _addon = true;

  constructor(private _accordionService: AccordionService, private _cdr: ChangeDetectorRef) {}

  checkAndToggle() {
    this.toggle();
  }

  get slide(): string {
    return this.isOpened ? 'down' : 'up';
  }

  toggle() {
    if (this.disabled) {
      return;
    }
    this.isShowChild = true;
    const isOpenedBeforeWeChange = this.isOpened;
    if (this._accordionService.accordion) {
      this._accordionService.component.closeAll();
    }
    this.isOpened = !isOpenedBeforeWeChange;
    if (this.isOpened) {
      this.onOpen.emit();
    } else {
      this.onClose.emit();
    }
    this.onChange.emit(this.isOpened);
  }

  openOnInitialization() {
    setTimeout(() => {
      this.isOpened = true;
      this._cdr.detectChanges();
    }, 0);
  }

  slideAnimationDoen(event) {
    if (event.fromState === 'down' && event.toState === 'up') {
      this.isShowChild = false;
    }
  }
}
