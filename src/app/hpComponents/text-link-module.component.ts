import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { HpService } from '../hp.service';

@Component({
  selector: 'app-hp-text-link-module',
  templateUrl: '../hpTemplateComponents/text-link-module.component.html'
})
export class TextLinkModuleComponent implements OnInit {
  @HostBinding('class.background-color-off-white')
  @HostBinding('class.text-link-module')
  @Input() componentData: any;
  @Input() viewPortSize: string;
  displayGroupViewPortSize: string;
  section: object;
  textLinkModuleSections: object;

  constructor(private hpService: HpService) {}

  ngOnInit() {
    this.displayGroupViewPortSize = this.hpService.displayGroup(this.componentData.sections);
    this.section = this.componentData.section;
    this.textLinkModuleSections = this.componentData.sections;
  }
}
