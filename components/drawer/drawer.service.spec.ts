import { TestBed } from '@angular/core/testing';

import { Drawer } from './drawer.service';

describe('DrawerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Drawer = TestBed.get(Drawer);
    expect(service).toBeTruthy();
  });
});
