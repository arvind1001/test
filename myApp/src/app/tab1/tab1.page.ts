import { Component, OnInit, ViewChild } from '@angular/core';
import { AppserviceService } from 'src/app/api/appservice.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  showList: any = [];
  search: string = '';
  showLists: any = [];
  public searchControl: FormControl;
  constructor(private appservice: AppserviceService, private route: Router) {
    this.searchControl = new FormControl();

  }
  ngOnInit() {
    this.getAllList();
    this.setFilteredItems();
  }
  getAllList = () => {
    this.appservice.getAllList().subscribe((response) => {
      this.showLists = response.entries;
      this.showList = this.showLists.slice(0, 8);
      this.appservice.searchLists = this.showLists;
    }, (error) => {
      console.log(error);
    })
  }
  goDetails = (data) => {
    this.appservice.currentData = data;
    this.route.navigate(['/details'])
  }

  setFilteredItems = () => {
    this.showList = this.appservice.filterItems(this.search);
  }

  loadData(event) {
    if (this.showList.length < this.showLists.length) {
      var len = this.showList.length
      setTimeout(() => {
        for (var i = len; i < len+5; i++) {
          this.showList.push(this.showLists[i]);
        }
        event.target.complete();
      }, 500);
    }else{
      event.target.disabled = true;
    }
  }
}
