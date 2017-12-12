import { Component, OnInit, Input } from '@angular/core';
import { HpService } from '../hp.service';

@Component({
  selector: 'app-seo-link-module',
  templateUrl: '../hpTemplateComponents/seo-link-module.component.html'
})
export class SeoLinkModuleComponent implements OnInit {
  @Input() componentData: any;
  @Input() viewPortSize: string;
  displayGroupViewPortSize: string;
  seo1: object;
  seo2: object;
  seo1Sections: any[];
  seo2Sections: any[];

  constructor(private hpService: HpService) {}

  ngOnInit() {
    this.seo1 = this.componentData.seo1;
    this.seo2 = this.componentData.seo2;
    this.seo1Sections = this.componentData.seo1.sections;
    this.seo2Sections = this.componentData.seo2.sections;
    this.displayGroupViewPortSize = 'small';
  }
}
