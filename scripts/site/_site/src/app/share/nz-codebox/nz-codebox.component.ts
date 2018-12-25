import { DOCUMENT } from '@angular/common';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Component, ElementRef, Inject, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';
import sdk from '@stackblitz/sdk';

@Component({
  selector     : 'nz-code-box',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './nz-codebox.component.html',
  styleUrls    : [
    './nz-codebox.less'
  ]
})
export class NzCodeBoxComponent implements OnInit {
  _code: string;
  _copied = false;
  _commandCopied = false;
  showIframe: boolean;
  simulateIFrame: boolean;
  iframe: SafeUrl;
  nzWidth = window.innerWidth  * 0.8;
  @Input() nzTitle: string;
  @Input() nzExpanded = false;
  @Input() nzSelected = false;
  @Input() nzHref: string;
  @Input() nzLink: string;
  @Input() nzId: string;
  @Input() nzIframeHeight = 360;
  @Input() nzRawCode = '';
  @Input() nzComponentName = '';
  @Input() nzSelector = '';
  @Input() nzGenerateCommand = '';

  @Input() set nzIframeSource(value: string) {
    this.showIframe = (value != 'null') && environment.production;
    this.simulateIFrame = (value != 'null') && !environment.production;
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

    const promise = new Promise<string>(
      (resolve, reject): void => {
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
      }
    );

    return (promise);

  }

  /** bug here https://github.com/stackblitz/core/issues/311 **/
  openOnStackBlitz() {
    sdk.openProject({
      files: {
        'angular.json'   : `{
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
              "aot": true,
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
        'src/index.html'          : `<${this.nzSelector}>loading</${this.nzSelector}>`,
        'src/main.ts'             : `import './polyfills';

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
        'src/polyfills.ts'        : `/**
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
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */

/***************************************************************************************************
 * BROWSER POLYFILLS
 */

/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/set';

/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run \`npm install --save classlist.js\`.

/** IE10 and IE11 requires the following to support \`@angular/animation\`. */
// import 'web-animations-js';  // Run \`npm install --save web-animations-js\`.


/** Evergreen browsers require these. **/
import 'core-js/es6/reflect';
import 'core-js/es7/reflect';


/** ALL Firefox browsers require the following to support \`@angular/animation\`. **/
// import 'web-animations-js';  // Run \`npm install --save web-animations-js\`.



/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
import 'zone.js/dist/zone';  // Included with Angular CLI.


/***************************************************************************************************
 * APPLICATION IMPORTS
 */

/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
 */
// import 'intl';  // Run \`npm install --save intl\`.`,
        'src/app/app.component.ts': this.nzRawCode,
        'src/app/app.module.ts'   : `import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdMobileModule, ModalServiceComponent, ToastComponent, ActionSheetComponent } from 'ng-zorro-antd-mobile';

import { ${this.nzComponentName} } from './app.component';

import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
registerLocaleData(en);
@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule, NgZorroAntdMobileModule.forRoot(), BrowserAnimationsModule ],
  declarations: [ ${this.nzComponentName} ],
  bootstrap:    [ ${this.nzComponentName} ],
  entryComponents: [ModalServiceComponent, ToastComponent, ActionSheetComponent]
})
export class AppModule { }
`,
        'src/styles.css'         : `/* Add application styles & imports to this file! */;`
      },

      title       : 'Dynamically Generated Project',
      description : 'Created with <3 by the StackBlitz SDK!',
      template    : 'angular-cli',
      dependencies: {
        'rxjs'                             : '^6.0.0',
        "rxjs-compat"                      : "^6.2.0",
        '@angular/cdk'                     : '^6.0.0',
        '@angular/core'                    : '^6.0.0',
        '@angular/forms'                   : '^6.0.0',
        '@angular/http'                    : '^6.0.0',
        '@angular/language-service'        : '^6.0.0',
        '@angular/platform-browser'        : '^6.0.0',
        '@angular/platform-browser-dynamic': '^6.0.0',
        '@angular/common'                  : '^6.0.0',
        '@angular/router'                  : '^6.0.0',
        '@angular/animations'              : '^6.0.0',
        'date-fns'                         : '^1.29.0',
        'ng-zorro-antd-mobile'             : '^0.9.0'
      },
      tags        : [ 'stackblitz', 'sdk' ]
    });
  }

  constructor(@Inject(DOCUMENT) private dom: Document, private sanitizer: DomSanitizer, private _el: ElementRef, private activatedRoute: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
  }
}
