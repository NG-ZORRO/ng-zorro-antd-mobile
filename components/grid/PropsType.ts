import { TemplateRef } from '@angular/core';

export interface GridDataItem {
  icon?: any;
  text?: any;
  [key: string]: any;
}

export interface GridPropsType {
  data?: Array<GridDataItem | undefined>;
  hasLine?: boolean;
  columnNum?: number;
  isCarousel?: boolean;
  carouselMaxRow?: number;
  itemStyle?: any;
  onClick?: (dataItem: GridDataItem | undefined, itemIndex: number) => void;
  renderItem?: (dataItem: GridDataItem | undefined, itemIndex: number) => TemplateRef<any>;
}
