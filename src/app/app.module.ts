import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SynthesizerModule } from 'ng-webaudio-synthesizer';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SynthesizerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
