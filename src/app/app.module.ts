import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//primeng
import {ButtonModule} from 'primeng/button';
import {SplitButtonModule} from 'primeng/splitbutton';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SplitButtonModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
