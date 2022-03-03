import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
// search module
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports:      [ BrowserModule, FormsModule, Ng2SearchPipeModule],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
