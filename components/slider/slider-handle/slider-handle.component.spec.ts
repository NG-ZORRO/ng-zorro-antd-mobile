import { SliderHandleComponent } from './slider-handle.component';

describe('SliderHandleComponent release bounds', () => {
  it('clamps the rounded release to bounds changed during a drag', () => {
    const slider = new SliderHandleComponent({} as any, {} as any);
    slider.min = 0;
    slider.max = 100;
    slider.step = 40;
    slider.sliderLength = 100;
    slider.sliderStart = 0;
    slider['_minBound'] = 0;
    slider['_maxBound'] = 100;
    const afterChange = jasmine.createSpy('afterChange');
    slider.onAfterChange.subscribe(afterChange);
    slider.panstart({ changedTouches: [{ clientX: 100 }] });
    slider.max = 60;
    slider.panend({ preventDefault: () => {}, changedTouches: [{ clientX: 100 }] });
    expect(afterChange).toHaveBeenCalledWith(60);
    expect(slider.left).toBe(100);
  });
});
