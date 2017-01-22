import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AgmCoreModule} from 'angular2-google-maps/core';
import { SearchComponentComponent } from './search-component/search-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyBhETksmXyrNMIXcBk-_mkXu5mLcHZua2U'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
