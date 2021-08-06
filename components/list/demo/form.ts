import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'demo-list-form',
  template: `
    <form [formGroup]="registerForm">
      <List [renderHeader]="renderHeader" [renderFooter]="renderFooter">
        <InputItem
          [placeholder]="'please input account'"
          [error]="isError"
          [focus]="onFocus"
          [value]="formData.username"
          [clear]="true"
          [content]="'Account'"
          formControlName="username"
          id="username"
          (onErrorClick)="inputErrorClick($event)"
          (onChange)="inputChange($event)"
        >
        </InputItem>
        <InputItem
          id="password"
          formControlName="password"
          [placeholder]="'please input password'"
          [type]="'password'"
          [(ngModel)]="formData.password"
          [value]="formData.password"
          [content]="'Password'"
        >
        </InputItem>
        <ListItem [extra]="_switch">Confirm Infomation</ListItem>
        <ListItem>
          <Range
            style="padding: 7px"
            [defaultValue]="[20, 80]"
            [min]="0"
            [max]="100"
            (onAfterChange)="afterChange($event)"
          ></Range>
        </ListItem>
        <ListItem [extra]="_stepper">Number of Subscribers</ListItem>
        <ListItem>
          <a Button [type]="'primary'" [size]="'small'" [inline]="true" (onClick)="onSubmit()">
            Submit
          </a>
          <a Button style="margin-left: 2.5px;" [size]="'small'" [inline]="true" (onClick)="onReset()">
            Reset
          </a>
        </ListItem>
      </List>
    </form>
    <ng-template #_switch>
      <Switch class="oneui-mobile" [checked]="true" (onChange)="switchCheck($event)"></Switch>
    </ng-template>
    <ng-template #_stepper>
      <Stepper [value]="stepper_value" [min]="1" [showNumber]="true" (onChange)="setpperChange($event)"></Stepper>
    </ng-template>
  `,
  styles: [
    `
      :host ::ng-deep .my-list .spe .am-list-extra {
        flex-basis: initial;
      }
    `
  ]
})
export class DemoListFormComponent implements OnInit {
  renderFooter: Function;
  registerForm: FormGroup;
  stepper_value: number = 20;
  isError: boolean = false;

  onFocus: object = {
    focus: false
  };

  formErrors: any = {
    username: '',
    password: ''
  };

  formData: any = {
    username: '',
    password: ''
  };

  validationMessage: any = {
    username: {
      minlength: 'At least four characters for account',
      maxlength: 'At most ten characters for account',
      required: 'username requied'
    },
    password: {}
  };

  constructor() {}

  renderHeader() {
    return 'Form Validation';
  }

  bindRenderFooter() {
    return (this.formErrors && this.formErrors['username']) || '';
  }

  onClick() {
    console.log('click');
  }

  buildForm(): void {
    this.registerForm = new FormGroup({
      username: new FormControl(this.formData.username, [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(5)
      ]),
      password: new FormControl(this.formData.password, [])
    });

    this.registerForm.valueChanges.subscribe(data => this.onValueChanged(data));

    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.registerForm) {
      return;
    }
    const form = this.registerForm;

    for (const field in this.formErrors) {
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessage[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + '\n';
        }
      }
    }
  }

  beforeSubmit() {
    const form = this.registerForm;
    for (const field in this.formErrors) {
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && !control.valid) {
        const messages = this.validationMessage[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + '\n';
          if (field === 'username') {
            this.onFocus = {
              focus: true
            };
          }
        }
        return false;
      } else {
        return true;
      }
    }
  }

  switchCheck(value) {
    console.log('switch status:', value);
  }

  onSubmit() {
    if (this.beforeSubmit()) {
      console.log(this.registerForm.value);
      this.onReset();
    } else {
      alert('Validation failed');
    }
  }

  onReset() {
    this.registerForm.reset();
    this.formData = {
      ...{
        username: '',
        password: ''
      }
    };
    this.isError = false;
  }

  afterChange(event) {
    console.log(event, 'afterChange');
  }

  inputErrorClick(e) {
    alert('At least four charactors for account');
  }

  inputChange(e) {
    if (e.replace(/\s/g, '').length < 5 && e.replace(/\s/g, '').length > 0) {
      this.isError = true;
    } else {
      this.isError = false;
    }
    this.formData.username = e;
  }

  setpperChange($event) {
    console.log($event, 'change');
  }

  ngOnInit() {
    this.buildForm();
    this.renderFooter = this.bindRenderFooter.bind(this);
  }
}
