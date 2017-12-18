import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { HpService } from '../hp.service';

@Component({
  selector: 'app-hp-large-feature-module',
  templateUrl: '../hpTemplateComponents/large-feature-module.component.html'
})
export class LargeFeatureModuleComponent implements OnInit {
  @HostBinding('class.background-color-off-white')
  @HostBinding('class.large-feature-module')
  @Input() componentData: any;
  @Input() viewPortSize: string;
  displayGroupViewPortSize: string;

  constructor(private hpService: HpService) {}

  ngOnInit() {
    this.displayGroupViewPortSize = this.hpService.displayGroup(this.componentData.sections);
  }

  isVideo(video) {
    return video.split('.').pop() === 'mp4' ? true : false;
  }

  posterImage(videoFile) {
    return videoFile.split('.').shift() + '.jpg';
  }
}
