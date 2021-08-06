import { DOCUMENT } from '@angular/common';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Component, ElementRef, Inject, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';
import sdk from '@stackblitz/sdk';

@Component({
  selector: 'nz-code-box',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './nz-codebox.component.html',
  styleUrls: ['./nz-codebox.less']
})
export class NzCodeBoxComponent implements OnInit {
  _code: string;
  _copied = false;
  _commandCopied = false;
  showIframe: boolean;
  simulateIFrame: boolean;
  iframe: SafeUrl;
  nzWidth = window.innerWidth * 0.8;
  @Input() nzTitle: string;
  @Input() nzExpanded = false;
  @Input() nzSelected = false;
  @Input() nzHref: string;
  @Input() nzLink: string;
  @Input() nzId: string;
  @Input() nzIframeHeight = 360;
  @Input() nzRawCode = { default: '' };
  @Input() nzComponentName = '';
  @Input() nzSelector = '';
  @Input() nzGenerateCommand = '';

  @Input() set nzIframeSource(value: string) {
    this.showIframe = value != 'null' && environment.production;
    this.simulateIFrame = value != 'null' && !environment.production;
    this.iframe = this.sanitizer.bypassSecurityTrustResourceUrl(value);
  }

  @Input()
  get nzCode(): string {
    return this._code;
  }

  set nzCode(value: string) {
    this._code = value;
  }

  navigateToFragment() {
    // window.location.hash = this.nzLink;
  }

  copyCode(code) {
    this.copy(code).then(() => {
      this._copied = true;
      setTimeout(() => {
        this._copied = false;
      }, 1000);
    });
  }

  handleCancel(): void {
    this.nzExpanded = false;
  }

  handleOk(): void {
    this.nzExpanded = false;
  }

  nzOkText() {
    if (window.location.href.split('/').splice(-1)[0] === 'zh') {
      return '返回';
    } else {
      return 'Back';
    }
  }

  copyGenerateCommand(command) {
    this.copy(command).then(() => {
      this._commandCopied = true;
      setTimeout(() => {
        this._commandCopied = false;
      }, 1000);
    });
  }

  copy(value: string): Promise<string> {
    const promise = new Promise<string>((resolve, reject): void => {
      let copyTextArea = null as HTMLTextAreaElement;
      try {
        copyTextArea = this.dom.createElement('textarea');
        copyTextArea.style.height = '0px';
        copyTextArea.style.opacity = '0';
        copyTextArea.style.width = '0px';
        this.dom.body.appendChild(copyTextArea);
        copyTextArea.value = value;
        copyTextArea.select();
        this.dom.execCommand('copy');
        resolve(value);
      } finally {
        if (copyTextArea && copyTextArea.parentNode) {
          copyTextArea.parentNode.removeChild(copyTextArea);
        }
      }
    });

    return promise;
  }

  /** bug here https://github.com/stackblitz/core/issues/311 **/
  openOnStackBlitz() {
    sdk.openProject({
      files: {
        'angular.json': `{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "newProjectRoot": "projects",
  "projects": {
    "demo": {
      "root": "",
      "sourceRoot": "src",
      "projectType": "application",
      "prefix": "app",
      "schematics": {},
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:browser",
          "options": {
            "outputPath": "dist/demo",
            "index": "src/index.html",
            "main": "src/main.ts",
            "polyfills": "src/polyfills.ts",
            "tsConfig": "src/tsconfig.app.json",
            "aot": true,
            "assets": [
              "src/favicon.ico",
              "src/assets"
            ],
            "styles": [
              "node_modules/ng-zorro-antd-mobile/src/ng-zorro-antd-mobile.min.css",
              "src/styles.css"
            ],
            "scripts": []
          },
          "configurations": {
            "production": {
              "fileReplacements": [
                {
                  "replace": "src/environments/environment.ts",
                  "with": "src/environments/environment.prod.ts"
                }
              ],
              "optimization": true,
              "outputHashing": "all",
              "sourceMap": false,
              "extractCss": true,
              "namedChunks": false,
              "extractLicenses": true,
              "vendorChunk": false,
              "buildOptimizer": true
            }
          }
        },
        "serve": {
          "builder": "@angular-devkit/build-angular:dev-server",
          "options": {
            "browserTarget": "demo:build"
          },
          "configurations": {
            "production": {
              "browserTarget": "demo:build:production"
            }
          }
        },
        "extract-i18n": {
          "builder": "@angular-devkit/build-angular:extract-i18n",
          "options": {
            "browserTarget": "demo:build"
          }
        },
        "test": {
          "builder": "@angular-devkit/build-angular:karma",
          "options": {
            "main": "src/test.ts",
            "polyfills": "src/polyfills.ts",
            "tsConfig": "src/tsconfig.spec.json",
            "karmaConfig": "src/karma.conf.js",
            "styles": [
              "styles.css"
            ],
            "scripts": [],
            "assets": [
              "src/favicon.ico",
              "src/assets"
            ]
          }
        },
        "lint": {
          "builder": "@angular-devkit/build-angular:tslint",
          "options": {
            "tsConfig": [
              "src/tsconfig.app.json",
              "src/tsconfig.spec.json"
            ],
            "exclude": [
              "**/node_modules/**"
            ]
          }
        }
      }
    },
    "demo-e2e": {
      "root": "e2e/",
      "projectType": "application",
      "architect": {
        "e2e": {
          "builder": "@angular-devkit/build-angular:protractor",
          "options": {
            "protractorConfig": "e2e/protractor.conf.js",
            "devServerTarget": "demo:serve"
          }
        },
        "lint": {
          "builder": "@angular-devkit/build-angular:tslint",
          "options": {
            "tsConfig": "e2e/tsconfig.e2e.json",
            "exclude": [
              "**/node_modules/**"
            ]
          }
        }
      }
    }
  },
  "defaultProject": "demo"
}`,
        'src/index.html': `<${this.nzSelector}>loading</${this.nzSelector}>`,
        'src/main.ts': `import './polyfills';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
  // Ensure Angular destroys itself on hot reloads.
  if (window['ngRef']) {
    window['ngRef'].destroy();
  }
  window['ngRef'] = ref;

  // Otherwise, log the boot error
}).catch(err => console.error(err));`,
        'src/polyfills.ts': `/**
* This file includes polyfills needed by Angular and is loaded before the app.
* You can add your own extra polyfills to this file.
*
* This file is divided into 2 sections:
*   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
*   2. Application imports. Files imported after ZoneJS that should be loaded before your main
*      file.
*
* The current setup is for so-called "evergreen" browsers; the last versions of browsers that
* automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
* Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
*
* Learn more in https://angular.io/guide/browser-support
*/

/***************************************************************************************************
* BROWSER POLYFILLS
*/

/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run \`npm install --save classlist.js\`.

/**
* Web Animations \`@angular/platform-browser/animations\`
* Only required if AnimationBuilder is used within the application and using IE/Edge or Safari.
* Standard animation support in Angular DOES NOT require any polyfills (as of Angular 6.0).
*/
// import 'web-animations-js';  // Run \`npm install --save web-animations-js\`.

/**
* By default, zone.js will patch all possible macroTask and DomEvents
* user can disable parts of macroTask/DomEvents patch by setting following flags
* because those flags need to be set before \`zone.js\` being loaded, and webpack
* will put import in the top of bundle, so user need to create a separate file
* in this directory (for example: zone-flags.ts), and put the following flags
* into that file, and then add the following code before importing zone.js.
* import './zone-flags';
*
* The flags allowed in zone-flags.ts are listed here.
*
* The following flags will work for all browsers.
*
* (window as any).__Zone_disable_requestAnimationFrame = true; // disable patch requestAnimationFrame
* (window as any).__Zone_disable_on_property = true; // disable patch onProperty such as onclick
* (window as any).__zone_symbol__UNPATCHED_EVENTS = ['scroll', 'mousemove']; // disable patch specified eventNames
*
*  in IE/Edge developer tools, the addEventListener will also be wrapped by zone.js
*  with the following flag, it will bypass \`zone.js\` patch for IE/Edge
*
*  (window as any).__Zone_enable_cross_context_check = true;
*
*/

/***************************************************************************************************
* Zone JS is required by default for Angular itself.
*/
import 'zone.js';  // Included with Angular CLI.


/***************************************************************************************************
* APPLICATION IMPORTS
*/`,
        'src/app/app.component.ts': this.nzRawCode.default,
        'src/app/app.module.ts': `import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';

import { ${this.nzComponentName} } from './app.component';

import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
registerLocaleData(en);

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule, NgZorroAntdMobileModule, BrowserAnimationsModule ],
  declarations: [ ${this.nzComponentName} ],
  bootstrap:    [ ${this.nzComponentName} ]
})
export class AppModule { }
        `,
        'src/styles.css': `/* Add application styles & imports to this file! */;`
      },
      title: 'Dynamically Generated Project',
      description: 'Created with <3 by the StackBlitz SDK!',
      template: 'angular-cli',
      dependencies: {
        '@angular/animations': '^12.1.1',
        '@angular/cdk': '^12.1.1',
        '@angular/common': '^12.1.1',
        '@angular/compiler': '^12.1.1',
        '@angular/core': '^12.1.1',
        '@angular/forms': '^12.1.1',
        '@angular/platform-browser': '^12.1.1',
        '@angular/platform-browser-dynamic': '^12.1.1',
        '@angular/router': '^12.1.1',
        '@ant-design/icons-angular': '^12.0.3',
        rxjs: '~6.6.2',
        'zone.js': '~0.11.4',
        'ng-zorro-antd-mobile': '5.0.0'
      },
      tags: ['stackblitz', 'sdk']
    });
  }

  constructor(
    @Inject(DOCUMENT) private dom: Document,
    private sanitizer: DomSanitizer,
    private _el: ElementRef,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {}
}
