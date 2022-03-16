import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {
  public collection:any;
  public contactList :any;
  public colors=["red","green","pink"];
  constructor( private CommonService: CommonService) { }

  ngOnInit(): void 
  { this.CommonService.getRestList().subscribe((result)=>{
      this.collection=result;
      //console.log(this.collection);
    });
    //this.contactList=this.CmmonService.getRestList();
  }

}
