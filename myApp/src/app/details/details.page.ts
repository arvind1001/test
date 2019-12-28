import { Component, OnInit } from '@angular/core';
import { AppserviceService } from 'src/app/api/appservice.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  singleData={};
  constructor(private appservice:AppserviceService) {
    this.singleData=this.appservice.currentData;
  }

  ngOnInit() {
  }

}
