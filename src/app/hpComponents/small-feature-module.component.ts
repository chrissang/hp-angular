import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { HpService } from '../hp.service';

@Component({
  selector: 'app-hp-small-feature-module',
  templateUrl: '../hpTemplateComponents/small-feature-module.component.html'
})
export class SmallFeatureModuleComponent implements OnInit {
  @HostBinding('class.background-color-white')
  @HostBinding('class.small-feature-module')
  @Input() componentData: any;
  @Input() viewPortSize: string;
  displayGroupViewPortSize: string;
  smModulesSections: any[];

  constructor(private hpService: HpService) {}

  ngOnInit() {
    this.displayGroupViewPortSize = this.hpService.displayGroup(this.componentData.sections);
    this.smModulesSections = this.componentData.sections;
  }
}
