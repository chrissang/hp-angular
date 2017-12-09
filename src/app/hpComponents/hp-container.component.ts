import { HpService } from './../hp.service';
import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactory, ComponentFactoryResolver } from '@angular/core';
import { LargeFeatureModuleComponent } from './large-feature-module.component';
import { SmallFeatureModuleComponent } from './small-feature-module.component';
import { SeoLinkModuleComponent } from './seo-link-module.component';
import { CollectionGridModuleComponent } from './collection-grid-module.component';
import { ExtendedStoryModuleComponent } from './extended-story-module.component';
import { BasicStoryModuleComponent } from './basic-story-module.component';
import { TextLinkModuleComponent } from './text-link-module.component';
import { ImageLinkDoubleModuleComponent } from './image-link-double-module.component';
import { ButtonLinkDoubleModuleComponent } from './button-link-double-module.component';
import { AfterContentInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-hp-container',
  template: `
    <main style="min-height:100vh">
      <ng-template #hpModuleContainer></ng-template>
    </main>`
})

export class HpContainerComponent implements OnInit, AfterContentInit {
  @ViewChild('hpModuleContainer', { read: ViewContainerRef}) hpModuleContainer;
  jsonData;
  arrayOfData;
  viewPort;
  constructor(service: HpService, private resolver: ComponentFactoryResolver) {
    this.jsonData = service.getHpData();
    this.arrayOfData = Object.keys(this.jsonData).map((key) => ({module: Object.keys(this.jsonData[key])[0], data: this.jsonData[key]}));
  }

  mapComponentName (componentName) {
    switch (componentName) {
      case 'large-feature-module':
        return LargeFeatureModuleComponent;
      case 'small-feature-module':
        return SmallFeatureModuleComponent;
      case 'seo-link-module':
        return SeoLinkModuleComponent;
      case 'collection-grid-module':
        return CollectionGridModuleComponent;
      case 'extended-story-module':
        return ExtendedStoryModuleComponent;
      case 'basic-story-module':
        return BasicStoryModuleComponent;
      case 'text-link-module':
        return TextLinkModuleComponent;
      case 'image-link-double-module':
        return ImageLinkDoubleModuleComponent;
      case 'button-link-double-module':
        return ButtonLinkDoubleModuleComponent;
    }
  }

  ngOnInit() {
    window.addEventListener('resize', this.breakpointValue);
    this.breakpointValue();
  }

  ngAfterContentInit() {
    console.log('loadComponent ', this.arrayOfData);
    Object.keys(this.jsonData).forEach((key) => {
      const componentName = this.mapComponentName(Object.keys(this.jsonData[key])[0]);
      const componentData = this.jsonData[key][Object.keys(this.jsonData[key])[0]];
      const addCompnent = this.resolver.resolveComponentFactory(componentName);
      const compnentRef = this.hpModuleContainer.createComponent(addCompnent);
      compnentRef.instance.componentData = componentData;
      compnentRef.instance.viewPort = this.viewPort;
    });
  }

  breakpointValue() {
    const size = window.getComputedStyle(document.querySelector('body'), ':before').getPropertyValue('content').replace(/\"/g, '');
    this.viewPort = size;
  }
}
