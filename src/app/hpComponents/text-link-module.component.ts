import { Component, OnInit, Input } from '@angular/core';
import { HpService } from '../hp.service';

@Component({
  selector: 'app-text-link-module',
  templateUrl: '../hpTemplateComponents/text-link-module.component.html'
})
export class TextLinkModuleComponent implements OnInit {
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
