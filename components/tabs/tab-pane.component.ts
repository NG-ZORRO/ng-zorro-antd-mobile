import { Component, Input, HostBinding, TemplateRef } from '@angular/core';
import { trigger, state, style } from '@angular/animations';

export type TabPanelPositionState =
  | 'center-with-animation'
  | 'center-without-animation'
  | 'top-with-animation'
  | 'top-with-animation-with-higher-zindex'
  | 'top-without-animation'
  | 'left-with-animation'
  | 'left-with-animation-with-higher-zindex'
  | 'left-without-animation'
  | 'bottom-with-animation'
  | 'bottom-with-animation-with-higher-zindex'
  | 'bottom-without-animation'
  | 'right-with-animation'
  | 'right-with-animation-with-higher-zindex'
  | 'right-without-animation';

@Component({
  selector: 'TabPane, nzm-tab-pane',
  templateUrl: './tab-pane.component.html',
  host: {
    '[@translateTabPane]': 'position',
    '(@translateTabPane.start)': 'onTranslateTabStarted($event)',
    '(@translateTabPane.done)': 'onTranslateTabComplete($event)'
  },
  animations: [
    trigger('translateTabPane', [
      state(
        'left-with-animation',
        style({
          'touch-action': 'auto',
          transform: 'translate3d(-100%, 0, 0)',
          transition: '.3s cubic-bezier(0.35, 0, 0.25, 1)'
        })
      ),
      state(
        'left-with-animation-with-higher-zindex',
        style({
          'z-index': 100,
          'touch-action': 'auto',
          transform: 'translate3d(-100%, 0, 0)',
          transition: '.3s cubic-bezier(0.35, 0, 0.25, 1)'
        })
      ),
      state('left-without-animation', style({ 'touch-action': 'auto', transform: 'translate3d(-100%, 0, 0)' })),
      state(
        'right-with-animation',
        style({
          'touch-action': 'auto',
          transform: 'translate3d(100%, 0, 0)',
          transition: '.3s cubic-bezier(0.35, 0, 0.25, 1)'
        })
      ),
      state(
        'right-with-animation-with-higher-zindex',
        style({
          'z-index': 100,
          'touch-action': 'auto',
          transform: 'translate3d(100%, 0, 0)',
          transition: '.3s cubic-bezier(0.35, 0, 0.25, 1)'
        })
      ),
      state('right-without-animation', style({ 'touch-action': 'auto', transform: 'translate3d(100%, 0, 0)' })),
      state(
        'top-with-animation',
        style({
          'touch-action': 'auto',
          transform: 'translate3d(0, -100%, 0)',
          transition: '.3s cubic-bezier(0.35, 0, 0.25, 1)'
        })
      ),
      state(
        'top-with-animation-with-higher-zindex',
        style({
          'z-index': 100,
          'touch-action': 'auto',
          transform: 'translate3d(0, -100%, 0)',
          transition: '.3s cubic-bezier(0.35, 0, 0.25, 1)'
        })
      ),
      state('top-without-animation', style({ 'touch-action': 'auto', transform: 'translate3d(0, -100%, 0)' })),
      state(
        'bottom-with-animation',
        style({
          'touch-action': 'auto',
          transform: 'translate3d(0, 100%, 0)',
          transition: '.3s cubic-bezier(0.35, 0, 0.25, 1)'
        })
      ),
      state(
        'bottom-with-animation-with-higher-zindex',
        style({
          'z-index': 100,
          'touch-action': 'auto',
          transform: 'translate3d(0, 100%, 0)',
          transition: '.3s cubic-bezier(0.35, 0, 0.25, 1)'
        })
      ),
      state('bottom-without-animation', style({ 'touch-action': 'auto', transform: 'translate3d(0, 100%, 0)' })),
      state(
        'center-with-animation',
        style({
          'z-index': 100,
          'touch-action': 'auto',
          transform: 'translate3d(0, 0, 0)',
          transition: '.3s cubic-bezier(0.35, 0, 0.25, 1)'
        })
      ),
      state('center-without-animation', style({ 'touch-action': 'auto', transform: 'translate3d(0, 0, 0)' }))
    ])
  ]
})
export class TabPane {
  prefixCls: string = 'am-tabs-pane';
  tintColor: string = '#108ee9';
  unselectedTintColor: string = '#888';
  active: boolean = true;
  isTitleString: boolean = true;
  showTabPanelContent: boolean = false;
  position: TabPanelPositionState;

  private _title: string | TemplateRef<void>;

  @Input()
  get title(): string | TemplateRef<void> {
    return this._title;
  }
  set title(value: string | TemplateRef<void>) {
    this.isTitleString = !(value instanceof TemplateRef);
    this._title = value;
  }

  @HostBinding('class.am-tabs-pane-wrap')
  paneWrap: boolean = true;
  @HostBinding('class.am-tabs-pane-wrap-active')
  get wrapActive(): boolean {
    return this.active;
  }
  @HostBinding('class.am-tabs-pane-wrap-inactive')
  get wrapInactive(): boolean {
    return !this.active;
  }

  constructor() {}

  onTranslateTabStarted(e: any) {
    if (
      (e.toState == 'center-with-animation' ||
        e.toState == 'center-without-animation' ||
        e.toState == 'left-with-animation-with-higher-zindex' ||
        e.toState == 'right-with-animation-with-higher-zindex' ||
        e.toState == 'top-with-animation-with-higher-zindex' ||
        e.toState == 'bottom-with-animation-with-higher-zindex') &&
      (this.position == 'center-with-animation' ||
        this.position == 'center-without-animation' ||
        this.position == 'left-with-animation-with-higher-zindex' ||
        this.position == 'right-with-animation-with-higher-zindex' ||
        this.position == 'top-with-animation-with-higher-zindex' ||
        this.position == 'bottom-with-animation-with-higher-zindex')
    ) {
      this.showTabPanelContent = true;
    }
  }

  onTranslateTabComplete(e: any) {
    if (
      e.toState !== 'center-with-animation' &&
      e.toState !== 'center-without-animation' &&
      e.toState !== 'left-with-animation-with-higher-zindex' &&
      e.toState !== 'right-with-animation-with-higher-zindex' &&
      e.toState !== 'top-with-animation-with-higher-zindex' &&
      e.toState !== 'bottom-with-animation-with-higher-zindex' &&
      this.position !== 'center-with-animation' &&
      this.position !== 'center-without-animation' &&
      this.position !== 'left-with-animation-with-higher-zindex' &&
      this.position !== 'right-with-animation-with-higher-zindex' &&
      this.position !== 'top-with-animation-with-higher-zindex' &&
      this.position !== 'bottom-with-animation-with-higher-zindex'
    ) {
      this.showTabPanelContent = false;
    }
  }
}
