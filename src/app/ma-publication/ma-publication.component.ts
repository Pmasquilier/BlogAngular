import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ma-publication',
  templateUrl: './ma-publication.component.html',
  styleUrls: ['./ma-publication.component.scss']
})
export class MaPublicationComponent implements OnInit {

  MaPublicationName = 'ma publicaiton';

  constructor() { }

  ngOnInit() {
  }

  getName() {
    return this.MaPublicationName;
  }

}
