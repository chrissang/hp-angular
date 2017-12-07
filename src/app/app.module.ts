import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HpContainerComponent } from './hpComponents/hp-container.component';
import { HpService } from './hp.service';
import { LargeFeatureModuleComponent } from './hpComponents/large-feature-module.component';


@NgModule({
  declarations: [
    AppComponent,
    HpContainerComponent,
    LargeFeatureModuleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    HpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
