import { HpService } from './../hp.service';
import { Component, OnInit, ViewContainerRef, ComponentFactoryResolver, ComponentFactory, ComponentRef, ViewChild } from '@angular/core';
import { LargeFeatureModuleComponent } from './large-feature-module.component';


@Component({
  selector: 'app-hp-container',
  template: `
    <main style="min-height:100vh">
      <div *ngFor="let obj of arrayOfData">{{ obj.module }}</div>
      <ng-template #hpModuleContainer></ng-template>
    </main>`
})

export class HpContainerComponent implements OnInit {
  jsonData;
  arrayOfData;
  @ViewChild('hpModuleContainer', { read: ViewContainerRef}) container: ViewContainerRef;

  constructor(service: HpService, private componentFactoryResolver: ComponentFactoryResolver) {
    this.jsonData = service.getHpData();
    this.arrayOfData = Object.keys(this.jsonData).map((key) => ({module: Object.keys(this.jsonData[key])[0], data: this.jsonData[key]}));
  }

  ngOnInit() {
    this.loadComponent();
  }

  loadComponent() {
    console.log('loadComponent ', this.arrayOfData);
    Object.keys(this.jsonData).forEach((key) => {
      console.log(Object.keys(this.jsonData[key])[0]);
      console.log(this.jsonData[key][Object.keys(this.jsonData[key])[0]]);
    });

    // const factory: ComponentFactory = this.resolver.resolveComponentFactory(LargeFeatureModuleComponent);
    // this.componentRef: ComponentRef = this.container.createComponent(factory);
  }


}
