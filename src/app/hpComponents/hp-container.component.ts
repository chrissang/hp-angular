import { HpService } from './../hp.service';
import { Component, OnInit, AfterContentInit, ElementRef } from '@angular/core';
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
import { ContentChild } from '@angular/core/src/metadata/di';

@Component({
  selector: 'app-hp-container',
  templateUrl: '../hpTemplateComponents/hp-container.component.html'
})

export class HpContainerComponent implements OnInit, AfterContentInit {
  @ViewChild('hpModuleContainer', { read: ViewContainerRef }) hpModuleContainer;
  jsonData;
  arrayOfData;
  hpService;
  viewPortSize;

  constructor(service: HpService, private resolver: ComponentFactoryResolver, private elementRef: ElementRef) {
    this.hpService = service;
    this.jsonData = this.hpService.getHpData();
    this.arrayOfData = Object.keys(this.jsonData).map((key) => ({
      module: Object.keys(this.jsonData[key])[0],
      data: this.jsonData[key][Object.keys(this.jsonData[key])[0]]
    }));
  }

  mapComponentName(componentName) {
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

  displayComponent(componentData) {
    const displayGroupSize = this.hpService.displayGroup(componentData.sections);
    const display = this.hpService.displayOn(displayGroupSize, this.viewPortSize);
    return display;
  }

  loadComponent(moduleName, componentData) {
    switch (moduleName) {
      case 'large-feature-module':
        return this.displayComponent(componentData);
      case 'small-feature-module':
        return this.displayComponent(componentData);
      case 'seo-link-module':
        return true;
      case 'collection-grid-module':
        return this.hpService.displayOn(componentData.displayModuleOn, this.viewPortSize);
      case 'extended-story-module':
        return this.displayComponent(componentData);
      case 'basic-story-module':
        return this.displayComponent(componentData);
      case 'text-link-module':
        return this.displayComponent(componentData);
      case 'image-link-double-module':
      return this.displayComponent(componentData);
      case 'button-link-double-module':
        return this.displayComponent(componentData);
    }
  }

  ngOnInit() {
    const size = window.getComputedStyle(document.querySelector('body'),
    ':before').getPropertyValue('content').replace(/\"/g, '');
   this.viewPortSize = size;
   this.hpService.hpTracking();
  }

  ngAfterContentInit() {
    console.log('component data ', this.arrayOfData);
    this.hpService.onResize$.subscribe(size => {
      this.viewPortSize = size;
      // console.log('hpModuleContainer data ', this.hpModuleContainer);
    });
    // console.log('hpModuleContainer data ', this.hpModuleContainer.element.nativeElement.parentElement.querySelectorAll('section'));
    // Object.keys(this.jsonData).forEach((key) => {
    //   const moduleName = Object.keys(this.jsonData[key])[0];
    //   const componentName = this.mapComponentName(Object.keys(this.jsonData[key])[0]);
    //   const componentData = this.jsonData[key][Object.keys(this.jsonData[key])[0]];
    //   const addCompnent = this.resolver.resolveComponentFactory(componentName);
    //   const compnentRef = this.hpModuleContainer.createComponent(addCompnent);
    //   compnentRef.instance.componentData = componentData;
    //   compnentRef.instance.viewPortSize = this.viewPortSize;

    //   console.log('compnentRef ', compnentRef);
    //   // console.log('hpModuleContainer ', this.hpModuleContainer.element.nativeElement.parentElement);
    //   // console.log('hpModuleContainer ', this.hpModuleContainer);
    //   // console.log('elementRef ', this.elementRef.nativeElement.querySelectorAll('app-hp-large-feature-module'));
    //   // console.log(this.loadComponent(moduleName, componentData));
    //   // hpService.displayOn(displayGroupViewPortSize, viewPortSize)
    //   this.hpService.onResize$.subscribe(size => {
    //     this.viewPortSize = size;
    //     compnentRef.instance.viewPortSize = size;
    //   });
    // });
  }
}
