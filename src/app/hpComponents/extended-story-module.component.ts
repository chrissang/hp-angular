import { Component, OnInit, Input } from '@angular/core';
import { HpService } from '../hp.service';

@Component({
  selector: 'app-extended-story-module',
  templateUrl: '../hpTemplateComponents/extended-story-module.component.html'
})
export class ExtendedStoryModuleComponent implements OnInit {
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
