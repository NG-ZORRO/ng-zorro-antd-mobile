import { Injectable } from '@angular/core';

@Injectable()
export class ToastOptions {
  content: any;
  mask: boolean;
  iconType: string;
  position: string;
}
