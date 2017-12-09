import { Component, OnInit, Input } from '@angular/core';
import { HpFunctionsService } from '../hp-functions.service';

@Component({
  selector: 'app-large-feature-module',
  templateUrl: '../hpTemplateComponents/large-feature-module.component.html'
})
export class LargeFeatureModuleComponent implements OnInit {
  @Input() componentData: any;
  @Input() viewPort: string;
  hpFunctions: any;
  displayGroupViewPortSize: string;
  constructor(service: HpFunctionsService) {
    this.hpFunctions = service;
  }
  ngOnInit() {
    this.displayGroupViewPortSize = this.hpFunctions.displayGroup(this.componentData.sections);
    console.log(this.hpFunctions.displayOn(this.displayGroupViewPortSize, this.viewPort));
  }

  isVideo(video) {
    return video.split('.').pop() === 'mp4' ? true : false;
  }

  posterImage(videoFile) {
    return videoFile.split('.').shift() + '.jpg';
  }
}
