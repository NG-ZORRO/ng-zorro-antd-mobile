import { ModuleWithProviders, NgModule } from '@angular/core';

import { ActivityIndicatorModule } from './activity-indicator/activity-indicator.module';
import { CardModule } from './card/card.module';
import { BadgeModule } from './badge/badge.module';
import { InputItemModule } from './input-item/input-item.module';
import { ButtonModule } from './button/button.module';
import { SwitchModule } from './switch/switch.module';
import { SearchBarModule } from './search-bar/search-bar.module';
import { StepperModule } from './stepper/stepper.module';
import { StepsModule } from './steps/steps.module';
import { CarouselModule } from './carousel/carousel.module';
import { CheckboxModule } from './checkbox/checkbox.module';
import { RadioModule } from './radio/radio.module';
import { ProgressModule } from './progress/progress.module';
import { AccordionModule } from './accordion/accordion.module';
import { NoticeBarModule } from './notice-bar/notice-bar.module';
import { IconModule } from './icon/icon.module';
import { ToastModule } from './toast/toast.module';
import { ModalModule } from './modal/modal.module';
import { PopoverModule } from './popover/popover.module';
import { NavBarModule } from './nav-bar/nav-bar.module';
import { ListModule } from './list/list.module';
import { CalendarModule } from './calendar/calendar.module';
import { PopoverItemModule } from './popover/popover-item/popover-item.module';
import { FlexModule } from './flex/flex.module';
import { GridModule } from './grid/grid.module';
import { ActionSheetModule } from './action-sheet/action-sheet.module';
import { SegmentedControlModule } from './segmented-control/segmented-control.module';

import { TextareaItemModule } from './textarea-item/textarea-item.module';
import { NgZorroAntdMobilePipesModule } from './pipes/ng-zorro-antd-mobile.pipes.module';
import { TabsModule } from './tabs/tabs.module';
import { TabBarModule } from './tab-bar/tab-bar.module';
import { PickerModule } from './picker/picker.module';
import { PickerViewModule } from './picker-view/picker-view.module';
import { ImagePickerModule } from './image-picker/image-picker.module';
import { ResultModule } from './result/result.module';
import { WhiteSpaceModule } from './white-space/white-space.module';
import { WingBlankModule } from './wing-blank/wing-blank.module';
import { RangeModule } from './range/range.module';
import { SliderModule } from './slider/slider.module';
import { PaginationModule } from './pagination/pagination.module';
import { TagModule } from './tag/tag.module';
import { MenuModule } from './menu/menu.module';
import { DatePickerModule } from './date-picker/date-picker.module';
import { DatePickerViewModule } from './date-picker-view/date-picker-view.module';
import { DrawerModule } from './drawer/drawer.module';
import { SwipeActionModule } from './swipe-action/swipe-action.module';
import { PullToRefreshModule } from './pull-to-refresh/pull-to-refresh.module';
import { LocaleProviderModule } from './locale-provider/locale-provider.module';

import { Toast } from './toast/toast.service';
import { Modal } from './modal/modal.service';
import { ActionSheet } from './action-sheet/action-sheet.service';
import { Picker } from './picker/picker.service';

export * from './tag';
export * from './card';
export * from './flex';
export * from './grid';
export * from './icon';
export * from './list';
export * from './menu';
export * from './tabs';
export * from './badge';
export * from './modal';
export * from './pipes';
export * from './radio';
export * from './range';
export * from './steps';
export * from './toast';
export * from './button';
export * from './drawer';
export * from './picker';
export * from './result';
export * from './slider';
export * from './switch';
export * from './nav-bar';
export * from './popover';
export * from './stepper';
export * from './tab-bar';
export * from './calendar';
export * from './carousel';
export * from './checkbox';
export * from './progress';
export * from './accordion';
export * from './input-item';
export * from './notice-bar';
export * from './pagination';
export * from './search-bar';
export * from './wing-blank';
export * from './date-picker';
export * from './white-space';
export * from './picker-view';
export * from './action-sheet';
export * from './swipe-action';
export * from './textarea-item';
export * from './locale-provider';
export * from './pull-to-refresh';
export * from './date-picker-view';
export * from './segmented-control';
export * from './activity-indicator';

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
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgZorroAntdMobileModule
    };
  }
}
