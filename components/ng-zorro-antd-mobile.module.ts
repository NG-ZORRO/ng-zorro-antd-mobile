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

export * from './tag/public-api';
export * from './card/public-api';
export * from './flex/public-api';
export * from './grid/public-api';
export * from './icon/public-api';
export * from './list/public-api';
export * from './menu/public-api';
export * from './tabs/public-api';
export * from './badge/public-api';
export * from './modal/public-api';
export * from './pipes/public-api';
export * from './radio/public-api';
export * from './range/public-api';
export * from './steps/public-api';
export * from './toast/public-api';
export * from './button/public-api';
export * from './drawer/public-api';
export * from './picker/public-api';
export * from './result/public-api';
export * from './slider/public-api';
export * from './switch/public-api';
export * from './nav-bar/public-api';
export * from './popover/public-api';
export * from './stepper/public-api';
export * from './tab-bar/public-api';
export * from './calendar/public-api';
export * from './carousel/public-api';
export * from './checkbox/public-api';
export * from './progress/public-api';
export * from './accordion/public-api';
export * from './input-item/public-api';
export * from './notice-bar/public-api';
export * from './pagination/public-api';
export * from './search-bar/public-api';
export * from './wing-blank/public-api';
export * from './date-picker/public-api';
export * from './white-space/public-api';
export * from './picker-view/public-api';
export * from './action-sheet/public-api';
export * from './image-picker/public-api';
export * from './swipe-action/public-api';
export * from './textarea-item/public-api';
export * from './locale-provider/public-api';
export * from './pull-to-refresh/public-api';
export * from './date-picker-view/public-api';
export * from './segmented-control/public-api';
export * from './activity-indicator/public-api';

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
