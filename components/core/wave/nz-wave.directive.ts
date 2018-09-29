import { Directive, ElementRef, Input, NgZone, OnDestroy, OnInit } from '@angular/core';
import { NzWaveRenderer } from './nz-wave-renderer';

@Directive({
  selector: '[nz-wave]'
})
export class NzWaveDirective implements OnInit, OnDestroy {

  private waveRenderer: NzWaveRenderer;

  @Input() nzWaveExtraNode = false;

  constructor(private _ngZone: NgZone, private _elementRef: ElementRef) {
  }

  ngOnDestroy(): void {
    if (this.waveRenderer) {
      this.waveRenderer.destroy();
    }
  }

  ngOnInit(): void {
    if (this._elementRef.nativeElement) {
      this.waveRenderer = new NzWaveRenderer(this._elementRef.nativeElement, this._ngZone, this.nzWaveExtraNode);
    }
  }
}
