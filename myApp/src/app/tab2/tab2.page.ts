import { Component, OnInit } from '@angular/core';
import { AppserviceService } from 'src/app/api/appservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  showCard:any = [];
  constructor(private appservice:AppserviceService,private route:Router) {}

  ngOnInit() {
    this.getAllList();
  }
  getAllList = ()=>{
      this.appservice.getAllList().subscribe((response)=>{
        console.log(response)
        this.showCard=response.entries;
      },(error)=>{
        console.log(error);
      })
  }
  goDetails=(data)=>{
   this.appservice.currentData=data;
   this.route.navigate(['/details'])
  }

}
