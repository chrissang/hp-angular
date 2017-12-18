import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { HpService } from '../hp.service';

@Component({
  selector: 'app-hp-extended-story-module',
  templateUrl: '../hpTemplateComponents/extended-story-module.component.html'
})
export class ExtendedStoryModuleComponent implements OnInit {
  @HostBinding('class.background-color-off-white')
  @HostBinding('class.extended-story-module')
  @Input() componentData: any;
  @Input() viewPortSize: string;
  displayGroupViewPortSize: string;
  extendedStoryModulesSections: any[];

  constructor(private hpService: HpService) {}

  ngOnInit() {
    this.displayGroupViewPortSize = this.hpService.displayGroup(this.componentData.sections);
    this.extendedStoryModulesSections = this.componentData.sections;
  }
}
