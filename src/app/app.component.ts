import { Component } from '@angular/core';
import { MaPublicationComponent } from './ma-publication/ma-publication.component';
import { MonFormulaireDePublicationComponent } from './mon-formulaire-de-publication/mon-formulaire-de-publication.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'monPremierBlog';

  mespublications = [];

  constructor(){
  }





}
