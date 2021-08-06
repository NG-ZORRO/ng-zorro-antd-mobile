import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { ROUTER_LIST } from './router';
import { environment } from '../environments/environment';
declare const docsearch: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, AfterViewInit {
  color = `#1890ff`;
  lessLoaded = false;
  hide = true;
  routerList = ROUTER_LIST;
  componentList = [];
  searchComponent = null;
  docsearch = null;
  kitchenUrl = window.location.origin + '/#/kitchen-sink?lang=zh-CN';
  language = 'zh';
  versionList = [
    '0.12.x',
    '1.0.1',
    '1.0.2',
    '1.0.3',
    '1.0.4',
    '1.0.5',
    '1.0.6',
    '2.0.1',
    '2.0.3',
    '2.0.7',
    '3.0.3',
    '4.0.0',
    '5.0.0'
  ];
  versionMap = {
    '0.12.x': '0.12.5',
    '1.x': '2001.0.6',
    '2.x': '2012.0.7',
    '3.0.3': '2013.0.3',
    '4.0.0': '2014.0.0',
    '5.0.0': '2015.0.0'
  };
  currentVersion = '5.0.0';
  isHomeURL = true;
  isKitchenURL = false;
  demoTitle = '';
  qrcode: string = '';

  private listenerQRCode: any;

  constructor(private router: Router, private title: Title) {}

  get useDocsearch(): boolean {
    return true; //window && window.location.href.indexOf('/version') === -1;
  }

  switchLanguage(language) {
    const url = this.router.url.split('/');
    url.splice(-1);
    this.router.navigateByUrl(url.join('/') + '/' + language);
  }

  toggleHide() {
    this.hide = !this.hide;
  }

  navigateToPage(url) {
    if (url) {
      if (url.includes('/kitchen-sink')) {
        const href = window.location.href;
        this.isKitchenURL = true;
        if (href.includes('-en')) {
          url = '?lang=en-US';
        } else {
          url = '?lang=zh-CN';
        }
        this.kitchenUrl = window.location.origin + '/#/kitchen-sink' + url;
        window.location.href = window.location.origin + '/#/kitchen-sink' + url;
      } else {
        this.isKitchenURL = false;
        this.router.navigateByUrl(url);
      }
    }
  }

  navigateToVersion(version) {
    if (version !== this.currentVersion) {
      window.location.href = window.location.origin + `/version/` + this.versionMap[version];
    } else {
      window.location.href = window.location.origin;
    }
    this.currentVersion = version;
  }

  initDocsearch() {
    this.loadScript('https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js').then(() => {
      this.docsearch = docsearch({
        appId: 'HJT534L0Q7',
        apiKey: 'a2b6ce695bdb11db826d43d983d418e4',
        indexName: 'dev_ng_zorro_mobile',
        inputSelector: '#search-box input',
        algoliaOptions: { hitsPerPage: 5, facetFilters: [`tags:${this.language}`] },
        transformData(hits) {
          hits.forEach((hit) => {
            hit.url = hit.url.replace('ng.mobile.ant.design', location.host);
            hit.url = hit.url.replace('https:', location.protocol);
          });
          return hits;
        },
        debug: false
      });
    });
  }

  initColor() {
    const node = document.createElement('link');
    node.rel = 'stylesheet/less';
    node.type = 'text/css';
    node.href = '/assets/color.less';
    document.getElementsByTagName('head')[0].appendChild(node);
  }

  changeColor(res: any) {
    const changeColor = () => {
      (window as any).less
        .modifyVars({
          '@primary-color': res.color.hex
        })
        .then(() => {
          // this.msg.success(`应用成功`);
          this.color = res.color.hex;
          window.scrollTo(0, 0);
        });
    };

    const lessUrl = 'https://cdnjs.cloudflare.com/ajax/libs/less.js/2.7.2/less.min.js';

    if (this.lessLoaded) {
      changeColor();
    } else {
      (window as any).less = {
        async: true
      };
      this.loadScript(lessUrl).then(() => {
        this.lessLoaded = true;
        changeColor();
      });
    }
  }

  loadScript(src: string) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = src;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  ngOnInit(): void {
    this.routerList.components.forEach((group) => {
      this.componentList = this.componentList.concat([...group.children]);
    });
    this.router.events.subscribe((event) => {
      if (
        event &&
        event['url'] &&
        (event['url'].indexOf('demo-zh') >= 0 ||
          event['url'].indexOf('demo-en') >= 0 ||
          event['url'].indexOf('/kitchen-sink') >= 0)
      ) {
        this.isHomeURL = false;
      }

      if (event && event['url'] && event['url'].includes('/kitchen-sink')) {
        this.isKitchenURL = true;
      }

      if (event && event['url'] && event['url'].split('/')[2]) {
        const demoTitleArray = event['url'].split('/')[2].split('-');
        this.demoTitle = '';
        for (let i = 0; i < demoTitleArray.length; ++i) {
          this.demoTitle += demoTitleArray[i].substring(0, 1).toUpperCase() + demoTitleArray[i].substring(1);
        }
      }
      if (event instanceof NavigationEnd) {
        const currentDemoComponent = this.componentList.find((component) => `/${component.path}` === this.router.url);
        if (currentDemoComponent) {
          this.title.setTitle(`${currentDemoComponent.zh} ${currentDemoComponent.label} - NG-ZORRO-MOBILE`);
        }
        const currentIntroComponent = this.routerList.intro.find(
          (component) => `/${component.path}` === this.router.url
        );
        if (currentIntroComponent) {
          this.title.setTitle(`${currentIntroComponent.label} - NG-ZORRO-MOBILE`);
        }
        if (this.router.url !== '/' + this.searchComponent) {
          this.searchComponent = null;
        }
        this.language = this.router.url.split('/')[this.router.url.split('/').length - 1].split('#')[0].split(';')[0];
        // this.nzI18nService.setLocale(this.language === 'en' ? en_US : zh_CN);
        if (this.docsearch) {
          this.docsearch.algoliaOptions = { hitsPerPage: 5, facetFilters: [`tags:${this.language}`] };
        }
        if (environment.production) {
          window.scrollTo(0, 0);
        }
        setTimeout(() => {
          const toc = this.router.parseUrl(this.router.url).fragment || '';
          if (toc) {
            document.querySelector(`#${toc}`).scrollIntoView();
          }
        }, 200);

        // 锚点功能
        if (!this.isKitchenURL) {
          setTimeout(() => {
            const anchor = this.router.url.split(';')[1];
            if (anchor) {
              const dom = decodeURIComponent(anchor.split('=')[1]);
              dom && document.querySelector(`#${dom}`).scrollIntoView();
            }
          }, 500);
        }

        setTimeout(() => {
          if (this.listenerQRCode) {
            this.listenerQRCode = null;
          }

          this.listenerQRCode =
            document.querySelector('span.edit-button') &&
            document.querySelector('span.edit-button').addEventListener(
              'mouseenter',
              function () {
                setTimeout(() => {
                  if (document.querySelector('#qrcode')) {
                    this.qrcode = new window['QRCode'](document.querySelector('#qrcode'), {
                      text: window['__zorro_mobile_url__'],
                      width: 140,
                      height: 140
                    });
                  }
                }, 180);
              },
              false
            );
        }, 500);
      }
    });
    this.initColor();
    const self = this;
    window.addEventListener('hashchange', function (event) {
      if (event && event['newURL'] && event['newURL'].indexOf('/kitchen-sink') >= 0) {
        self.isKitchenURL = true;
      } else {
        self.isKitchenURL = false;
      }
    });
  }

  ngAfterViewInit(): void {
    // if (this.useDocsearch && this.isHomeURL) {
    //   this.initDocsearch();
    // }
  }
}
