import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaPublicationComponent } from './ma-publication/ma-publication.component';
import { MonFormulaireDePublicationComponent } from './mon-formulaire-de-publication/mon-formulaire-de-publication.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MaPublicationComponent,
    MonFormulaireDePublicationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
