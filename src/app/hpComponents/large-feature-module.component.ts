import { Component, OnInit, Input } from '@angular/core';
import { HpService } from '../hp.service';
// import { Subscription } from 'rxjs/Subscription';
// import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-large-feature-module',
  templateUrl: '../hpTemplateComponents/large-feature-module.component.html'
})
export class LargeFeatureModuleComponent implements OnInit {
  @Input() componentData: any;
  // hpService: any;
  displayGroupViewPortSize: string;
  viewPortSize: any;

  constructor(private hpService: HpService) {}

  ngOnInit() {
    // this.displayGroupViewPortSize = this.service.displayGroup(this.componentData.sections);
    // this subscribes works
    // this.hpService.onResize$
    // .subscribe(size => {
    //   console.log('asadsa ', size);
    //   this.viewPortSize = size;
    // });
  }

  // this.hpService.breakpointValue().subscribe(res => {
  //   this.updatedViewPortSize = res;
  //   console.log('updatedViewPortSize ', this.updatedViewPortSize);
  // });

  // isVideo(video) {
  //   return video.split('.').pop() === 'mp4' ? true : false;
  // }

  // posterImage(videoFile) {
  //   return videoFile.split('.').shift() + '.jpg';
  // }

  // this.hpService.breakpointValue().subscribe(res => {
  //   this.updatedViewPortSize = res;
  //   console.log('updatedViewPortSize ', this.updatedViewPortSize);
  // });
}
