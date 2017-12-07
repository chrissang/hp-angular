import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-large-feature-module',
  templateUrl: '../hpTemplateComponents/large-feature-module.component.html'
})
export class LargeFeatureModuleComponent implements OnInit {
  largeFeatureModulesSections;
  displayGroupViewPortSize: string;

  constructor() {
    console.log('large-feature-module');
  }

  ngOnInit() {
  }

}
