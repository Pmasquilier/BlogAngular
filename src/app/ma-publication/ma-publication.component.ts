import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ma-publication',
  templateUrl: './ma-publication.component.html',
  styleUrls: ['./ma-publication.component.scss']
})
export class MaPublicationComponent implements OnInit {


  nbLike: number = 0;
  nbDislike: number = 0;

  @Input() publicationName: string;
  @Input() publicationText: string;

  publicationDate: Date;

  constructor() {
    this.publicationDate = new Date()
  }

  ngOnInit() {

  }



  onLike() {
    console.log("Publication aimée, nombre like =" + this.nbLike);
    this.nbLike++;
  }

  onDislike() {
    console.log("Publication désapprouvée, nombre dislike =" + this.nbDislike);
    this.nbDislike++;
  }
  getColor() {
    if (this.nbLike > this.nbDislike) {
      return "green";
    }
    else if (this.nbLike < this.nbDislike) {
      return "red";
    }
  }

}
