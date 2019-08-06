import { Component } from '@angular/core';

@Component({
  selector: 'demo-card-basic',
  template: `
    <WingBlank [size]="'lg'">
      <Card>
        <CardHeader
          [title]="'This is title'"
          [extra]="extra"
          [thumb]="'https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg'"
          [thumbStyle]="thumbStyle"
        >
          <ng-template #extra>
            <span>this is extra</span>
          </ng-template>
        </CardHeader>
        <CardBody>
          <div>This is content of Card</div>
        </CardBody>
        <CardFooter [content]="'footer content'" [extra]="footerExtra">
          <ng-template #footerExtra>
            <div>extra footer content</div>
          </ng-template>
        </CardFooter>
      </Card>
    </WingBlank>
  `
})
export class DemoCardBasicComponent {
  thumbStyle = {
    width: '32px',
    height: '32px'
  };
}
