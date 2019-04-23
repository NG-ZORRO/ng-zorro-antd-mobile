import { LocaleProviderPipe } from './locale-provider.pipe';
import { LOCAL_PROVIDER_TOKEN } from './locale-provider.token';
import { LocaleProviderService } from './locale-provider.service';
import { ru_RU, zh_CN, en_US, sv_SE, da_DK } from './locale';

describe('Unit: Testing Services', function() {
  describe('Locale-provider Service:', function() {
    let service: LocaleProviderService;

    beforeEach(() => {
      service = new LocaleProviderService(LOCAL_PROVIDER_TOKEN);
      service.setLocale(zh_CN);
    });

    it('should create work', function() {
      service = new LocaleProviderService(null);
      expect(service.getLocale()).toEqual(zh_CN, 'default locale work');
    });

    it('should setLocale work', function() {
      expect(service.getLocale()).toEqual(zh_CN);
      expect(service.getLocaleId()).toEqual('zh_CN');

      service.setLocale(ru_RU);
      expect(service.getLocale()).toEqual(ru_RU);
      expect(service.getLocaleId()).toEqual('ru_RU');

      service.setLocale(en_US);
      expect(service.getLocale()).toEqual(en_US);
      expect(service.getLocaleId()).toEqual('en_US');

      service.setLocale(sv_SE);
      service.setLocale(sv_SE);
      expect(service.getLocale()).toEqual(sv_SE);
      expect(service.getLocaleId()).toEqual('sv_SE');

      service.setLocale(da_DK);
      expect(service.getLocale()).toEqual(da_DK);
      expect(service.getLocaleId()).toEqual('da_DK');
    });

    it('getLocaleId work when locale set wrong', function() {
      service.setLocale('wrong locale');
      expect(service.getLocaleId()).toEqual('');
    });

    it('should getLocaleValue work', function() {
      expect(service.getLocaleValue('Pagination.prevText')).toEqual('上一页');
      expect(service.getLocaleValue('Pagination.prev')).toEqual('');
    });

    it('should getLocaleSubObj work', function() {
      expect(service.getLocaleSubObj('Pagination')).toEqual(service.getLocale().Pagination);
      expect(service.getLocaleSubObj('Pagi')).toEqual(null);
      expect(service.getLocaleSubObj('Pagination.prevText.test.test')).toEqual(null);
    });
  });
});

describe('Pipe: LocaleProviderPipe', () => {
  let pipe: LocaleProviderPipe;

  beforeEach(() => {
    pipe = new LocaleProviderPipe(new LocaleProviderService(zh_CN));
  });

  it('tranform locale language', () => {
    expect(pipe.transform('Pagination.prevText')).toEqual('上一页');
  });
});
