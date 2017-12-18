import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { HpService } from '../hp.service';

@Component({
  selector: 'app-hp-image-link-double-module',
  templateUrl: '../hpTemplateComponents/image-link-double-module.component.html'
})
export class ImageLinkDoubleModuleComponent implements OnInit {
  @HostBinding('class.background-color-off-white')
  @HostBinding('class.image-link-double-module')
  @Input() componentData: any;
  @Input() viewPortSize: string;
  displayGroupViewPortSize: string;
  section: object;
  imageLinkDoubleModuleSections: any[];

  constructor(private hpService: HpService) {}

  ngOnInit() {
    this.displayGroupViewPortSize = this.hpService.displayGroup(this.componentData.sections);
    this.section = this.componentData.section;
    this.imageLinkDoubleModuleSections = this.componentData.sections;
  }
}
