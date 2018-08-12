import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ma-publication',
  templateUrl: './ma-publication.component.html',
  styleUrls: ['./ma-publication.component.scss']
})
export class MaPublicationComponent implements OnInit {


   nbLike: number = 0;
   nbDislike: number = 0;

  MaPublicationName = 'ma publication';

  constructor() { }

  ngOnInit() {
  }

  getName() {
    return this.MaPublicationName;
  }

  
  onLike(){
    console.log("Publication aimée, nombre like =" +this.nbLike);
    this.nbLike ++;
  }

  onDislike(){
    console.log("Publication désapprouvée, nombre dislike =" +this.nbDislike);
    this.nbDislike ++;
  }

}
