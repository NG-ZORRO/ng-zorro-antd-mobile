import { ModuleWithProviders, NgModule } from '@angular/core';

import { ActivityIndicatorModule } from 'ng-zorro-antd-mobile/activity-indicator';
import { CardModule } from 'ng-zorro-antd-mobile/card';
import { BadgeModule } from 'ng-zorro-antd-mobile/badge';
import { InputItemModule } from 'ng-zorro-antd-mobile/input-item';
import { ButtonModule } from 'ng-zorro-antd-mobile/button';
import { SwitchModule } from 'ng-zorro-antd-mobile/switch';
import { SearchBarModule } from 'ng-zorro-antd-mobile/search-bar';
import { StepperModule } from 'ng-zorro-antd-mobile/stepper';
import { StepsModule } from 'ng-zorro-antd-mobile/steps';
import { CarouselModule } from 'ng-zorro-antd-mobile/carousel';
import { CheckboxModule } from 'ng-zorro-antd-mobile/checkbox';
import { RadioModule } from 'ng-zorro-antd-mobile/radio';
import { ProgressModule } from 'ng-zorro-antd-mobile/progress';
import { AccordionModule } from 'ng-zorro-antd-mobile/accordion';
import { NoticeBarModule } from 'ng-zorro-antd-mobile/notice-bar';
import { IconModule } from 'ng-zorro-antd-mobile/icon';
import { ToastModule } from 'ng-zorro-antd-mobile/toast';
import { ModalModule } from 'ng-zorro-antd-mobile/modal';
import { PopoverModule } from 'ng-zorro-antd-mobile/popover';
import { NavBarModule } from 'ng-zorro-antd-mobile/nav-bar';
import { ListModule } from 'ng-zorro-antd-mobile/list';
import { CalendarModule } from 'ng-zorro-antd-mobile/calendar';
import { PopoverItemModule } from 'ng-zorro-antd-mobile/popover';
import { FlexModule } from 'ng-zorro-antd-mobile/flex';
import { GridModule } from 'ng-zorro-antd-mobile/grid';
import { ActionSheetModule } from 'ng-zorro-antd-mobile/action-sheet';
import { SegmentedControlModule } from 'ng-zorro-antd-mobile/segmented-control';

import { TextareaItemModule } from 'ng-zorro-antd-mobile/textarea-item';
import { NgZorroAntdMobilePipesModule } from 'ng-zorro-antd-mobile/pipes';
import { TabsModule } from 'ng-zorro-antd-mobile/tabs';
import { TabBarModule } from 'ng-zorro-antd-mobile/tab-bar';
import { PickerModule } from 'ng-zorro-antd-mobile/picker';
import { PickerViewModule } from 'ng-zorro-antd-mobile/picker-view';
import { ImagePickerModule } from 'ng-zorro-antd-mobile/image-picker';
import { ResultModule } from 'ng-zorro-antd-mobile/result';
import { WhiteSpaceModule } from 'ng-zorro-antd-mobile/white-space';
import { WingBlankModule } from 'ng-zorro-antd-mobile/wing-blank';
import { RangeModule } from 'ng-zorro-antd-mobile/range';
import { SliderModule } from 'ng-zorro-antd-mobile/slider';
import { PaginationModule } from 'ng-zorro-antd-mobile/pagination';
import { TagModule } from 'ng-zorro-antd-mobile/tag';
import { MenuModule } from 'ng-zorro-antd-mobile/menu';
import { DatePickerModule } from 'ng-zorro-antd-mobile/date-picker';
import { DatePickerViewModule } from 'ng-zorro-antd-mobile/date-picker-view';
import { DrawerModule } from 'ng-zorro-antd-mobile/drawer';
import { SwipeActionModule } from 'ng-zorro-antd-mobile/swipe-action';
import { PullToRefreshModule } from 'ng-zorro-antd-mobile/pull-to-refresh';
import { LocaleProviderModule } from 'ng-zorro-antd-mobile/locale-provider';

export * from 'ng-zorro-antd-mobile/tag';
export * from 'ng-zorro-antd-mobile/card';
export * from 'ng-zorro-antd-mobile/flex';
export * from 'ng-zorro-antd-mobile/grid';
export * from 'ng-zorro-antd-mobile/icon';
export * from 'ng-zorro-antd-mobile/list';
export * from 'ng-zorro-antd-mobile/menu';
export * from 'ng-zorro-antd-mobile/tabs';
export * from 'ng-zorro-antd-mobile/badge';
export * from 'ng-zorro-antd-mobile/modal';
export * from 'ng-zorro-antd-mobile/pipes';
export * from 'ng-zorro-antd-mobile/radio';
export * from 'ng-zorro-antd-mobile/range';
export * from 'ng-zorro-antd-mobile/steps';
export * from 'ng-zorro-antd-mobile/toast';
export * from 'ng-zorro-antd-mobile/button';
export * from 'ng-zorro-antd-mobile/drawer';
export * from 'ng-zorro-antd-mobile/picker';
export * from 'ng-zorro-antd-mobile/result';
export * from 'ng-zorro-antd-mobile/slider';
export * from 'ng-zorro-antd-mobile/switch';
export * from 'ng-zorro-antd-mobile/nav-bar';
export * from 'ng-zorro-antd-mobile/popover';
export * from 'ng-zorro-antd-mobile/stepper';
export * from 'ng-zorro-antd-mobile/tab-bar';
export * from 'ng-zorro-antd-mobile/calendar';
export * from 'ng-zorro-antd-mobile/carousel';
export * from 'ng-zorro-antd-mobile/checkbox';
export * from 'ng-zorro-antd-mobile/progress';
export * from 'ng-zorro-antd-mobile/accordion';
export * from 'ng-zorro-antd-mobile/input-item';
export * from 'ng-zorro-antd-mobile/notice-bar';
export * from 'ng-zorro-antd-mobile/pagination';
export * from 'ng-zorro-antd-mobile/search-bar';
export * from 'ng-zorro-antd-mobile/wing-blank';
export * from 'ng-zorro-antd-mobile/date-picker';
export * from 'ng-zorro-antd-mobile/white-space';
export * from 'ng-zorro-antd-mobile/picker-view';
export * from 'ng-zorro-antd-mobile/action-sheet';
export * from 'ng-zorro-antd-mobile/image-picker';
export * from 'ng-zorro-antd-mobile/swipe-action';
export * from 'ng-zorro-antd-mobile/textarea-item';
export * from 'ng-zorro-antd-mobile/locale-provider';
export * from 'ng-zorro-antd-mobile/pull-to-refresh';
export * from 'ng-zorro-antd-mobile/date-picker-view';
export * from 'ng-zorro-antd-mobile/segmented-control';
export * from 'ng-zorro-antd-mobile/activity-indicator';

@NgModule({
  providers: [],
  exports: [
    ActivityIndicatorModule,
    CardModule,
    TabsModule,
    TabBarModule,
    ButtonModule,
    SwitchModule,
    SearchBarModule,
    StepperModule,
    StepsModule,
    CheckboxModule,
    ProgressModule,
    SegmentedControlModule,
    BadgeModule,
    CarouselModule,
    ActionSheetModule,
    AccordionModule,
    NoticeBarModule,
    IconModule,
    ToastModule,
    RadioModule,
    ModalModule,
    PopoverModule,
    PopoverItemModule,
    NavBarModule,
    ListModule,
    CalendarModule,
    InputItemModule,
    FlexModule,
    GridModule,
    RangeModule,
    SliderModule,
    TextareaItemModule,
    NgZorroAntdMobilePipesModule,
    PickerModule,
    PickerViewModule,
    ImagePickerModule,
    ResultModule,
    WhiteSpaceModule,
    WingBlankModule,
    LocaleProviderModule,
    NgZorroAntdMobilePipesModule,
    PaginationModule,
    TagModule,
    MenuModule,
    DatePickerModule,
    DatePickerViewModule,
    DrawerModule,
    PullToRefreshModule,
    SwipeActionModule
  ]
})
export class NgZorroAntdMobileModule {
  static forRoot(): ModuleWithProviders<NgZorroAntdMobileModule> {
    return {
      ngModule: NgZorroAntdMobileModule
    };
  }
}
