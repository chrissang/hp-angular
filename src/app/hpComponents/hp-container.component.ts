import { HpService } from './../hp.service';
import { Component, OnInit, AfterViewInit, ViewChild, ViewContainerRef, AfterViewChecked, HostListener } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
// import { ComponentFactory, ComponentFactoryResolver } from '@angular/core';
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

export class HpContainerComponent implements OnInit, AfterViewInit, AfterViewChecked {
  private viewPort = new BehaviorSubject <string>(null);

  viewPort$ = this.viewPort.asObservable();
  jsonData;
  arrayOfData;
  hpService;
  viewPortSize;

  @ViewChild('hpModuleContainer', { read: ViewContainerRef }) hpModuleContainer;
  @HostListener('window:resize') onResize() {
    let innerWidth: number;
    let breakPoint: string;
    innerWidth = window.innerWidth;
    breakPoint = this.getCurrentBreakPoint(innerWidth);
    if (breakPoint !== this.viewPort.value) {
        this.viewPort.next(breakPoint);
        // console.log(this.viewPortSize);
        // const hpModuleArry = Array.from(this.hpModuleContainer.element.nativeElement.parentElement.children);
        // this.hpService.hpTracking(hpModuleArry);
    }
  }

  constructor(service: HpService) {
    this.hpService = service;
    this.jsonData = this.hpService.getHpJson();
    this.arrayOfData = Object.keys(this.jsonData).map((key) => ({
      module: Object.keys(this.jsonData[key])[0],
      data: this.jsonData[key][Object.keys(this.jsonData[key])[0]]
    }));
  }

  getCurrentBreakPoint(pixelWidth: number) {
    if (pixelWidth <= 640) {
        return 'small';
    } else if (pixelWidth > 640 && pixelWidth <= 1024) {
        return 'medium';
    } else if (pixelWidth > 1024 && pixelWidth <= 1440) {
        return 'large';
    } else if (pixelWidth > 1440 && pixelWidth <= 1920) {
        return 'xlarge';
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
    let innerWidth: number;
    let breakPoint: string;
    innerWidth = window.innerWidth;
    breakPoint = this.getCurrentBreakPoint(innerWidth);
    this.viewPort.subscribe((value) => {
      if (value !== null) {
        this.viewPortSize = value;
      } else {
        this.viewPort.next(breakPoint);
      }
    });
  }

  ngAfterViewInit() {
    const hpModuleArry = Array.from(this.hpModuleContainer.element.nativeElement.parentElement.children);
    this.hpService.hpTracking(hpModuleArry);
    console.log('component data ', this.arrayOfData);
  }

  ngAfterViewChecked() {
    let numberOfElCurrent: number;
    numberOfElCurrent = this.hpModuleContainer.element.nativeElement.parentElement.children.length;
    // console.log('ngAfterViewChecked ', this.hpModuleContainer.element.nativeElement.parentElement.children.length);
  }

  // mapComponentName(componentName) {
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

  // ngAfterContentInit() {
  //   Object.keys(this.jsonData).forEach((key) => {
  //     let moduleName: string;
  //     let componentName: any;
  //     let componentData: any;
  //     let addCompnent: any;
  //     let compnentRef: any;

  //     moduleName = Object.keys(this.jsonData[key])[0];
  //     componentName = this.mapComponentName(moduleName);
  //     componentData = this.jsonData[key][Object.keys(this.jsonData[key])[0]];
  //     addCompnent = this.resolver.resolveComponentFactory(componentName);
  //     compnentRef = this.hpModuleContainer.createComponent(addCompnent);
  //     compnentRef.instance.componentData = componentData;
  //     compnentRef.instance.viewPortSize = this.viewPortSize;
  //     this.hpService.onResize$.subscribe(size => {
  //       this.viewPortSize = size;
  //       compnentRef.instance.viewPortSize = size;
  //     });
  //   });
  // }
}
