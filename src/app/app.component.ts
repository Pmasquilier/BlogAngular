import { PublicationService } from './services/publication.service';
import { Component, OnInit } from '@angular/core';
import { MaPublicationComponent } from './ma-publication/ma-publication.component';
import { MonFormulaireDePublicationComponent } from './mon-formulaire-de-publication/mon-formulaire-de-publication.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'monPremierBlog';

  mesPublications : any[];

  
  
  constructor(private publicationService : PublicationService){
  }

  ngOnInit(){
    this.mesPublications = this.publicationService.mesPublications;
  }



}
