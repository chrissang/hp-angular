import { Component, OnInit, Input } from '@angular/core';
import { HpService } from '../hp.service';

@Component({
  selector: 'app-hp-button-link-double-module',
  templateUrl: '../hpTemplateComponents/button-link-double-module.component.html'
})
export class ButtonLinkDoubleModuleComponent implements OnInit {
  @Input() componentData: any;
  @Input() viewPortSize: string;
  displayGroupViewPortSize: string;
  section: object;
  buttonLinkDoubleModuleSections: any[];
  arrayContent1: any;
  arrayContent2: any;
  arrayContent3: any;
  arrayContent4: any;
  arrayContent5: any;
  arrayContent6: any;

  constructor(private hpService: HpService) {}

  ngOnInit() {
    this.displayGroupViewPortSize = this.hpService.displayGroup(this.componentData.sections);
    this.section = this.componentData.section;
    this.buttonLinkDoubleModuleSections = this.componentData.sections;
    this.arrayContent1 = this.buttonLinkDoubleModuleSections[0];
    this.arrayContent2 = this.buttonLinkDoubleModuleSections[1];
    this.arrayContent3 = this.buttonLinkDoubleModuleSections[2];
    this.arrayContent4 = this.buttonLinkDoubleModuleSections[3];
    this.arrayContent5 = this.buttonLinkDoubleModuleSections[4];
    this.arrayContent6 = this.buttonLinkDoubleModuleSections[5];
  }

  shouldStack(index) {
    return this.viewPortSize === 'xlarge' && this.buttonLinkDoubleModuleSections.length === 6 ? true : false;
  }

  showBtnContainerInside() {
    return this.viewPortSize != 'small' && this.buttonLinkDoubleModuleSections.length === 4 ||
    this.viewPortSize === 'medium' && this.buttonLinkDoubleModuleSections.length === 6 ? true : false;
  }

  showBtnContainerHanging() {
    return this.viewPortSize === 'small' || this.viewPortSize === 'large' &&
    this.buttonLinkDoubleModuleSections.length === 6 ? true : false;
  }
}
