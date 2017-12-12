import { Component, OnInit, Input } from '@angular/core';
import { HpService } from '../hp.service';

@Component({
  selector: 'app-button-link-double-module',
  templateUrl: '../hpTemplateComponents/button-link-double-module.component.html'
})
export class ButtonLinkDoubleModuleComponent implements OnInit {
  @Input() componentData: any;
  @Input() viewPortSize: string;
  displayGroupViewPortSize: string;
  section: object;
  buttonLinkDoubleModuleSections: any[];

  constructor(private hpService: HpService) {}

  ngOnInit() {
    this.displayGroupViewPortSize = this.hpService.displayGroup(this.componentData.sections);
    this.section = this.componentData.section;
    this.buttonLinkDoubleModuleSections = this.componentData.sections;
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
