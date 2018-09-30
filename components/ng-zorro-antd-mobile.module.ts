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

export { ActivityIndicatorModule } from './activity-indicator/activity-indicator.module';
export { CardModule } from './card/card.module';
export { ResultModule } from './result/result.module';
export { WhiteSpaceModule } from './white-space/white-space.module';
export { WingBlankModule } from './wing-blank/wing-blank.module';
export { TabsModule } from './tabs/tabs.module';
export { TabBarModule } from './tab-bar/tab-bar.module';
export { BadgeModule } from './badge/badge.module';
export { InputItemModule } from './input-item/input-item.module';
export { ButtonModule } from './button/button.module';
export { SwitchModule } from './switch/switch.module';
export { SearchBarModule } from './search-bar/search-bar.module';
export { StepperModule } from './stepper/stepper.module';
export { StepsModule } from './steps/steps.module';
export { CarouselModule } from './carousel/carousel.module';
export { CheckboxModule } from './checkbox/checkbox.module';
export { RadioModule } from './radio/radio.module';
export { ProgressModule } from './progress/progress.module';
export { AccordionModule } from './accordion/accordion.module';
export { NoticeBarModule } from './notice-bar/notice-bar.module';
export { IconModule } from './icon/icon.module';
export { ToastModule } from './toast/toast.module';
export { ModalModule } from './modal/modal.module';
export { PopoverModule } from './popover/popover.module';
export { NavBarModule } from './nav-bar/nav-bar.module';
export { ListModule } from './list/list.module';
export { PopoverItemModule } from './popover/popover-item/popover-item.module';
export { FlexModule } from './flex/flex.module';
export { GridModule } from './grid/grid.module';
export { ActionSheetModule } from './action-sheet/action-sheet.module';
export { SegmentedControlModule } from './segmented-control/segmented-control.module';

export { TextareaItemModule } from './textarea-item/textarea-item.module';
export { NgZorroAntdMobilePipesModule } from './pipes/ng-zorro-antd-mobile.pipes.module';
export { RangeModule } from './range/range.module';
export { SliderModule } from './slider/slider.module';
export { PaginationModule } from './pagination/pagination.module';
export { TagModule } from './tag/tag.module';
export { MenuModule } from './menu/menu.module';
export { PickerModule } from './picker/picker.module';
export { PickerViewModule } from './picker-view/picker-view.module';
export { ImagePickerModule } from './image-picker/image-picker.module';
export { DatePickerModule } from './date-picker/date-picker.module';
export { DatePickerViewModule } from './date-picker-view/date-picker-view.module';
export { DrawerModule } from './drawer/drawer.module';
export { SwipeActionModule } from './swipe-action/swipe-action.module';
export { PullToRefreshModule } from './pull-to-refresh/pull-to-refresh.module';
export { LocaleProviderModule } from './locale-provider/locale-provider.module';
export { LocaleProviderService } from './locale-provider/locale-provider.service';
export { LocaleProviderPipe } from './locale-provider/locale-provider.pipe';
export * from './locale-provider/languages';

import { Toast } from './toast/toast.service';
import { Modal } from './modal/modal.service';
import { ActionSheet } from './action-sheet/action-sheet.service';

export { Toast } from './toast/toast.service';
export { ToastComponent } from './toast/toast.component';
export { Modal } from './modal/modal.service';
export { ModalComponent } from './modal/modal.component';
export { ActionSheet } from './action-sheet/action-sheet.service';
export { ActionSheetComponent } from './action-sheet/action-sheet.component';

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
      ngModule: NgZorroAntdMobileModule,
      providers: [
        ActionSheet,
        Toast,
        Modal
      ]
    };
  }
}
