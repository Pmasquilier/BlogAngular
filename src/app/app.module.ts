import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MaPublicationComponent } from './ma-publication/ma-publication.component';
import { MonFormulaireDePublicationComponent } from './mon-formulaire-de-publication/mon-formulaire-de-publication.component';
import { FormsModule } from '@angular/forms';
import { PublicationService } from './services/publication.service';

@NgModule({
  declarations: [
    AppComponent,
    MaPublicationComponent,
    MonFormulaireDePublicationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    PublicationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
