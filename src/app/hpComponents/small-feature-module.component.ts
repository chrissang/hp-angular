import { Component, OnInit, Input } from '@angular/core';
import { HpService } from '../hp.service';

@Component({
  selector: 'app-small-feature-module',
  templateUrl: '../hpTemplateComponents/small-feature-module.component.html'
})
export class SmallFeatureModuleComponent implements OnInit {
  @Input() componentData: any;
  @Input() viewPortSize: string;
  displayGroupViewPortSize: string;
  smModulesSections: object;

  constructor(private hpService: HpService) {}

  ngOnInit() {
    this.displayGroupViewPortSize = this.hpService.displayGroup(this.componentData.sections);
    this.smModulesSections = this.componentData.sections;
  }
}
