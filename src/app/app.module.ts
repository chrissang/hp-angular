import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HpContainerComponent } from './hp-container/hp-container.component';
import { HpService } from './hp.service';


@NgModule({
  declarations: [
    AppComponent,
    HpContainerComponent
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
