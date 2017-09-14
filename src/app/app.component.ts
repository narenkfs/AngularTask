import { Component } from '@angular/core';
import { DataService } from './app.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public data:any;
  public UserData:any;
  public categories:any = [];
  public isDesc:boolean = false;
  constructor(private dataService: DataService){
   this.data = this.dataService.getData().then(response =>{
      this.UserData = response;
      var that = this;
      this.UserData.forEach((eachObj) => {
          that.categories.push(eachObj.category);
      });
      console.log("categories:"+this.categories);
      });

  }
  sort(property){
    this.isDesc = !this.isDesc;
    let direction = this.isDesc ? 1 : -1;
    this.UserData.sort(function(a, b){
        if(a[property] < b[property]){
            return -1 * direction;
        }
        else if( a[property] > b[property]){
            return 1 * direction;
        }
        else{
            return 0;
        }
    });
};
}
