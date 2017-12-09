import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HpContainerComponent } from './hpComponents/hp-container.component';
import { HpService } from './hp.service';
import { HpFunctionsService } from './hp-functions.service';
import { LargeFeatureModuleComponent } from './hpComponents/large-feature-module.component';
import { SmallFeatureModuleComponent } from './hpComponents/small-feature-module.component';
import { SeoLinkModuleComponent } from './hpComponents/seo-link-module.component';
import { CollectionGridModuleComponent } from './hpComponents/collection-grid-module.component';
import { ExtendedStoryModuleComponent } from './hpComponents/extended-story-module.component';
import { BasicStoryModuleComponent } from './hpComponents/basic-story-module.component';
import { TextLinkModuleComponent } from './hpComponents/text-link-module.component';
import { ImageLinkDoubleModuleComponent } from './hpComponents/image-link-double-module.component';
import { ButtonLinkDoubleModuleComponent } from './hpComponents/button-link-double-module.component';


@NgModule({
  declarations: [
    AppComponent,
    HpContainerComponent,
    LargeFeatureModuleComponent,
    SmallFeatureModuleComponent,
    SeoLinkModuleComponent,
    CollectionGridModuleComponent,
    ExtendedStoryModuleComponent,
    BasicStoryModuleComponent,
    TextLinkModuleComponent,
    ImageLinkDoubleModuleComponent,
    ButtonLinkDoubleModuleComponent
  ],
  entryComponents: [
    LargeFeatureModuleComponent,
    SmallFeatureModuleComponent,
    SeoLinkModuleComponent,
    CollectionGridModuleComponent,
    ExtendedStoryModuleComponent,
    BasicStoryModuleComponent,
    TextLinkModuleComponent,
    ImageLinkDoubleModuleComponent,
    ButtonLinkDoubleModuleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    HpService,
    HpFunctionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
