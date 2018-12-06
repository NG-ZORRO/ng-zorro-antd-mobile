import { Component, ViewEncapsulation, HostListener } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ROUTER_LIST } from '../router';
import { IconHandler } from '../../../../components/core/util/icon';
import { concat } from 'rxjs';

@Component({
  selector: 'kitchen-sink',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './kitchen-sink.component.html',
  providers: [IconHandler]
})
export class KitchenSinkComponent {
  routerList = ROUTER_LIST;
  componentList = [];
  searchComponent = null;
  public currentIndex = 0;
  public bodyClassMap = {
    'category-open': false,
    'category-closed': true
  };

  public cateComponents = [];
  public listItemClass = '';

  constructor(private router: Router, private title: Title, private iconHandler: IconHandler) {
    this.iconHandler.load(); // 加载svg资源
  }

  toggle(component) {
    component.active = !component.active;
  }

  routerLink(content) {
    const component = content.path.split('/')[1];
    const path = `/#/components/${component}/${component}-demo`;
    window.location.href = window.location.origin + this.suffix(path);
  }

  combineName(content) {
    if (window.location.href.split('?').splice(-1)[0] === 'lang=zh-CN') {
      return content.label + ' ' + content.zh;
    } else {
      return content.label;
    }
  }

  combineCategory(content) {
    if (window.location.href.split('?').splice(-1)[0] === 'lang=zh-CN') {
      return content.zh + ' ' + content.name;
    } else {
      return content.name;
    }
  }

  suffix(url) {
    if (window.location.href.split('?').splice(-1)[0] === 'lang=zh-CN') {
      return url + '-zh';
    } else {
      return url + '-en';
    }
  }

  isZhCN(url) {
    if (window.location.href.split('?').splice(-1)[0] === 'lang=zh-CN') {
      return url.split('/').splice(-1)[0] === 'zh';
    } else {
      return url.split('/').splice(-1)[0] === 'en';
    }
  }

  subTitle() {
    if (window.location.href.split('?').splice(-1)[0] === 'lang=zh-CN') {
      return 'Ant Design Mobile Angular移动端组件库';
    } else {
      return 'Ant Design Mobile Angular Components';
    }
  }

  onTouchStart(event) {
    event.currentTarget.classList.add('am-list-item-active');
  }

  onTouchEnd(event) {
    event.currentTarget.classList.remove('am-list-item-active');
  }
}
