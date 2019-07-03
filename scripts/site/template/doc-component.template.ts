import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector     : 'nz-doc-{{component}}-{{language}}',
  templateUrl  : './{{component}}-{{language}}.html',
  preserveWhitespaces: false
})
export class NzDoc{{componentName}}Component implements OnInit {
  starCount: number = 0;

  constructor(private http: HttpClient) { }

  goLink(link: string) {
    window.location.hash = window.location.hash.split(';')[0] + ';' + link;
  }

  getStar() {
    this.http.get('https://api.github.com/repos/NG-ZORRO/ng-zorro-antd-mobile').subscribe((res: any) => {
      this.starCount = res.stargazers_count;
      (<HTMLElement>document.querySelector('.gh-count')).style.display = 'inline-block';
    })
  }

  ngOnInit() {
    const docName: string = '{{component}}';
    if (docName === 'introduce') {
      const isMobile = /Android|webOS|iPhone|iPod|BlackBerry/i.test(window.navigator.userAgent);
      if (!isMobile) {
        this.getStar();
      }
    }
  }
}
