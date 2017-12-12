import { Component, OnInit, Input } from '@angular/core';
import { HpService } from '../hp.service';

@Component({
  selector: 'app-collection-grid-module',
  templateUrl: '../hpTemplateComponents/collection-grid-module.component.html'
})
export class CollectionGridModuleComponent implements OnInit {
  @Input() componentData: any;
  @Input() viewPortSize: string;
  displayGroupViewPortSize: string;
  section: object;
  headline: object;
  cta: object;
  collectionGridModulesSections:  any[];
  arrayContent1: any[];
  arrayContent2: any[];
  arrayContent3: any[];
  arrayContent4: any[];
  arrayContent5: any[];
  arrayContent6: any[];

  constructor(private hpService: HpService) {}

  ngOnInit() {
    this.displayGroupViewPortSize = this.componentData.displayModuleOn;
    this.section = this.componentData.section;
    this.headline = this.componentData.headline;
    this.cta = this.componentData.cta;
    this.collectionGridModulesSections = this.componentData.sections;
    this.arrayContent1 = this.collectionGridModulesSections[0];
    this.arrayContent2 = this.collectionGridModulesSections[1];
    this.arrayContent3 = this.collectionGridModulesSections[2];
    this.arrayContent4 = this.collectionGridModulesSections[3];
    this.arrayContent5 = this.collectionGridModulesSections[4];
    this.arrayContent6 = this.collectionGridModulesSections[5];
  }
}
