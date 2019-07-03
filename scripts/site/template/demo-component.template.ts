import { AfterViewInit, Component, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import { NzCodeBoxComponent } from '../share/nz-codebox/nz-codebox.component';
//iframe使用
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector     : 'demo-{{component}}',
  preserveWhitespaces: false,
  templateUrl  : './{{language}}.html'
})
export class {{componentName}} implements OnInit, AfterViewInit, OnDestroy {
  expanded = false;
  public demoTitle = '{{demoTitleTemp}}';
  public protocol = window.location.origin;
  public path = '{{component}}';
  public demoUrl = `${this.protocol}/#/components/${this.path}/{{component}}-demo-{{language}}`;
  public safeUrl; // iframe 使用
  public mobileWrapperHeight = 620;

  public container;
  public wrapper;
  public codeDiv;
  public demoTop;
  public demoLeft;
  public demoScrollListener;
  public fixThreshold;

  @ViewChildren(NzCodeBoxComponent) codeBoxes: QueryList<NzCodeBoxComponent>;

  goLink(link: string) {
    window.location.hash = window.location.hash.split(';')[0] + ';' + link;
  }

  selectedCard(nzId) {
    this.codeBoxes.forEach((code, index) => {
      if (nzId === code.nzId) {
        code.nzSelected = true;
        if (this.codeBoxes.length > 1) {
          setTimeout(() => {
            if (window.frames['demoFrame'] && window.frames['demoFrame'].document) {
              const scrollContent = window.frames['demoFrame'].document.getElementById(`${this.path}-demo-${index}`);
              if (scrollContent) {
                scrollContent.scrollIntoView(true);
              }
            }}, 100);
        }
      } else {
        code.nzSelected = false;
      }
    });
  }

  expandAllCode(): void {
    this.expanded = !this.expanded;
    this.codeBoxes.forEach(code => {
      code.nzExpanded = this.expanded;
    });
  }

  {{code}};
  {{rawCode}};

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    if (window.location.href.split('/').splice(-1)[0] === 'en') {
      this.demoUrl  += '?lang=en-US';
    } else {
      this.demoUrl  += '?lang=zh-CN';
    }
    this.safeUrl =  this.sanitizer.bypassSecurityTrustResourceUrl(this.demoUrl);
    window['__zorro_mobile_url__'] = this.demoUrl;

    this.demoScrollListener = this.handleDemoScroll.bind(this);

  }


  ngAfterViewInit() {
    if (this.codeBoxes.length > 1) {
      this.container = <HTMLElement>document.querySelector('.demo-code-container');
      this.wrapper = <HTMLElement>document.querySelector('.mobile-wrapper');
      this.codeDiv = <HTMLElement>document.getElementById('demo-code').children[1].firstChild;
      this.demoTop = this.wrapper.getBoundingClientRect().top + window.pageYOffset;
      this.demoLeft = this.wrapper.getBoundingClientRect().left;
      this.container.classList.add('demo-code-container-mutli');
      this.fixThreshold = this.demoTop + this.container.clientHeight - this.mobileWrapperHeight;
      window.addEventListener('scroll', this.demoScrollListener );
      window.addEventListener('resize', () => {
        this.demoLeft = document.querySelector('.main-menu').clientWidth + this.container.firstElementChild.clientWidth + this.container.firstElementChild.offsetLeft;
        this.wrapper.style.left = this.demoLeft + 'px';
      });
    }
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.demoScrollListener);
  }

  handleDemoScroll() {
    const yOffset = window.pageYOffset;
    this.container.classList.add('demo-code-container-mutli');
    if (yOffset < this.demoTop) {
      this.codeDiv.style.paddingBottom = '0px';
      this.wrapper.style.top = '0px';
      this.wrapper.style.left = '0px';
      this.container.classList.remove('demo-code-container-fixed');
    } else if (yOffset < this.fixThreshold) {
      // 吸附顶部
      this.codeDiv.style.paddingBottom = '620px';
      this.container.classList.add('demo-code-container-fixed');
      this.wrapper.style.top = '0px';
      this.wrapper.style.left = this.demoLeft + 'px';
    } else if (yOffset < (this.fixThreshold + this.mobileWrapperHeight)) {
      // 跟随滑动
      this.codeDiv.style.paddingBottom = '620px';
      this.container.classList.add('demo-code-container-fixed');
      this.wrapper.style.top = (this.fixThreshold - yOffset) + 'px';
      this.wrapper.style.left = this.demoLeft + 'px';
    } else {
      this.container.classList.remove('demo-code-container-fixed');
      this.codeDiv.style.paddingBottom = '0px';
    }
  }
}
