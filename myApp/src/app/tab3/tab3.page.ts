import { Component, OnInit, ViewChild } from '@angular/core';
import { AppserviceService } from 'src/app/api/appservice.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  
    showList: any = [];
    search: string = '';
    showLists: any = [];
    public searchControl: FormControl;
    constructor(private appservice: AppserviceService, private route: Router) {
      this.searchControl = new FormControl();
  
    }
    ngOnInit() {
      this.getAllList();
      this.setFilteredData();
    }
    getAllList = () => {
      this.appservice.getAllList().subscribe((response) => {
        this.showLists = response.entries;
        this.showList = this.showLists.slice(0, 10);
        this.appservice.searchListsData = this.showLists;
      }, (error) => {
        console.log(error);
      })
    }
    goDetails = (data) => {
      this.appservice.currentData = data;
      this.route.navigate(['/details'])
    }
  
    setFilteredData = () => {
      this.showList = this.appservice.filterItemsData(this.search);
    }
  
    loadData(event) {
      if (this.showList.length < this.showLists.length) {
        var len = this.showList.length
        setTimeout(() => {
          for (var i = len; i < len +5; i++) {
            this.showList.push(this.showLists[i]);
          }
          event.target.complete();
        }, 500);
      }else{
        event.target.disabled = true;
      }
    }
}
