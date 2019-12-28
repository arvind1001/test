import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AppserviceService {
searchLists = [];
searchListsData=[];
constructor(private http:HttpClient) { }
currentData:any; 
getAllList(): Observable<any>{
  return this.http.get<any>(environment.appUrl);
}

filterItems(search) {
  return this.searchLists.filter(item => {
    return item.API.toLowerCase().indexOf(search.toLowerCase()) > -1;
  });
}
filterItemsData(search) {
  return this.searchListsData.filter(item => {
    return item.Description.toLowerCase().indexOf(search.toLowerCase()) > -1;
  });
}
}
