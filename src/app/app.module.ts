import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaPublicationComponent } from './ma-publication/ma-publication.component';

@NgModule({
  declarations: [
    AppComponent,
    MaPublicationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
