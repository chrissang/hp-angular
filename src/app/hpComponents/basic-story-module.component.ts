import { Component, OnInit, Input } from '@angular/core';
import { HpService } from '../hp.service';

@Component({
  selector: 'app-hp-basic-story-module',
  templateUrl: '../hpTemplateComponents/basic-story-module.component.html'
})
export class BasicStoryModuleComponent implements OnInit {
  @Input() componentData: any;
  @Input() viewPortSize: string;
  displayGroupViewPortSize: string;
  basicStoryModulesSections: any[];

  constructor(private hpService: HpService) {}

  ngOnInit() {
    this.displayGroupViewPortSize = this.hpService.displayGroup(this.componentData.sections);
    this.basicStoryModulesSections = this.componentData.sections;
  }
}
