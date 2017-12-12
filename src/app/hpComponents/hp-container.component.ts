import { HpService } from './../hp.service';
import { Component, OnInit, AfterContentInit } from '@angular/core';
import { ViewChild, ViewContainerRef, ComponentFactory, ComponentFactoryResolver } from '@angular/core';
import { LargeFeatureModuleComponent } from './large-feature-module.component';
import { SmallFeatureModuleComponent } from './small-feature-module.component';
import { SeoLinkModuleComponent } from './seo-link-module.component';
import { CollectionGridModuleComponent } from './collection-grid-module.component';
import { ExtendedStoryModuleComponent } from './extended-story-module.component';
import { BasicStoryModuleComponent } from './basic-story-module.component';
import { TextLinkModuleComponent } from './text-link-module.component';
import { ImageLinkDoubleModuleComponent } from './image-link-double-module.component';
import { ButtonLinkDoubleModuleComponent } from './button-link-double-module.component';

@Component({
  selector: 'app-hp-container',
  templateUrl: '../hpTemplateComponents/hp-container.component.html'
})

export class HpContainerComponent implements OnInit, AfterContentInit {
  @ViewChild('hpModuleContainer', { read: ViewContainerRef}) hpModuleContainer;
  jsonData;
  arrayOfData;
  hpService;
  viewPortSize;

  constructor(service: HpService, private resolver: ComponentFactoryResolver) {
    this.hpService = service;
    this.jsonData = this.hpService.getHpData();
    this.arrayOfData = Object.keys(this.jsonData).map((key) => ({
      module: Object.keys(this.jsonData[key])[0],
      data: this.jsonData[key][Object.keys(this.jsonData[key])[0]]
    }));
  }

  // mapComponentName (componentName) {
  //   switch (componentName) {
  //     case 'large-feature-module':
  //       return LargeFeatureModuleComponent;
  //     case 'small-feature-module':
  //       return SmallFeatureModuleComponent;
  //     case 'seo-link-module':
  //       return SeoLinkModuleComponent;
  //     case 'collection-grid-module':
  //       return CollectionGridModuleComponent;
  //     case 'extended-story-module':
  //       return ExtendedStoryModuleComponent;
  //     case 'basic-story-module':
  //       return BasicStoryModuleComponent;
  //     case 'text-link-module':
  //       return TextLinkModuleComponent;
  //     case 'image-link-double-module':
  //       return ImageLinkDoubleModuleComponent;
  //     case 'button-link-double-module':
  //       return ButtonLinkDoubleModuleComponent;
  //   }
  // }

  ngOnInit() {
    const size = window.getComputedStyle(document.querySelector('body'),
    ':before').getPropertyValue('content').replace(/\"/g, '');
   this.viewPortSize = size;
  }

  ngAfterContentInit() {
    console.log('component data ', this.arrayOfData);
    this.hpService.onResize$.subscribe(size => {
      this.viewPortSize = size;
    });
    // Object.keys(this.jsonData).forEach((key) => {
    //   const componentName = this.mapComponentName(Object.keys(this.jsonData[key])[0]);
    //   const componentData = this.jsonData[key][Object.keys(this.jsonData[key])[0]];
    //   const addCompnent = this.resolver.resolveComponentFactory(componentName);
    //   const compnentRef = this.hpModuleContainer.createComponent(addCompnent);
    //   compnentRef.instance.componentData = componentData;
    //   compnentRef.instance.viewPort = this.viewPortSize;
    // });
  }
}
