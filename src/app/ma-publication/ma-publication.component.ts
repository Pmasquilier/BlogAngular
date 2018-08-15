import { PublicationService } from './../services/publication.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ma-publication',
  templateUrl: './ma-publication.component.html',
  styleUrls: ['./ma-publication.component.scss']
})
export class MaPublicationComponent {

  @Input() publicationName: string;
  @Input() publicationText: string;
  @Input() indexOfPublication: number;
  publicationDate: Date;

  constructor(private publicationService :PublicationService ) {
    this.publicationDate = new Date()
  }

  
  onLike() {
    this.publicationService.onLike(this.indexOfPublication);
  }

  onDislike() {
    this.publicationService.onDislike(this.indexOfPublication);
  }
 



  
}
