import { TemplateRef, Type, EventEmitter } from '@angular/core';
export type DrawerPlacement = 'left' | 'right' | 'top' | 'bottom';

// tslint:disable-next-line:no-any
export interface DrawerOptions<T = any, D = any> {
    sidebar: any;
    styleFinal?: { [k: string]: any };
    sidebarStyle?: { [k: string]: any };
    contentStyle?: { [k: string]: any };
    overlayStyle?: { [k: string]: any };
    dragHandleStyle?: { [k: string]: any };
    transitions?: boolean;
    touch?: boolean;
    enableDragHandle?: boolean;
    dragToggleDistance?: number;
    docked?: boolean;
    open?: boolean;
    position?: 'left' | 'right' | 'top' | 'bottom';
    content?: any;
}
