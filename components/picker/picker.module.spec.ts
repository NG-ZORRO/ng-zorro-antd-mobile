import { PickerModule } from './picker.module';

describe('PickerModule', () => {
  let pickerModule: PickerModule;

  beforeEach(() => {
    pickerModule = new PickerModule();
  });

  it('should create an instance', () => {
    expect(pickerModule).toBeTruthy();
  });
});
