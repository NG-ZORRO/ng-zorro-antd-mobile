import {
  Component,
  Input,
  ChangeDetectorRef,
  Output,
  EventEmitter,
  ViewEncapsulation,
  HostBinding,
  TemplateRef
} from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { AccordionService } from '../accordion.service';
import { isTemplateRef } from '../../core/util/check';
@Component({
  selector: 'AccordionPanel, nzm-accordion-panel',
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
  header: string | TemplateRef<void>;
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
  isTemplateRef = isTemplateRef;

  @HostBinding('class.am-accordion-item') public amItem = true;
  @HostBinding('class.am-accordion-item-active') public isActive = this.isOpened;
  @HostBinding('class.addon') public addon = true;

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
      setTimeout(() => {
        this.isShowChild = false;
      }, 0);
    }
  }
}
