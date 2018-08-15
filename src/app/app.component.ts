import { PublicationService } from './services/publication.service';
import { Component, OnInit } from '@angular/core';
import { MaPublicationComponent } from './ma-publication/ma-publication.component';
import { MonFormulaireDePublicationComponent } from './mon-formulaire-de-publication/mon-formulaire-de-publication.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'monPremierBlog';

  publications: any[];

  constructor(private publicationService: PublicationService) {
  }

  ngOnInit() {
    this.publications = this.publicationService.mesPublications;
  }

  getColor(i: number) {
    return this.publicationService.getColor(i);
  }

}
