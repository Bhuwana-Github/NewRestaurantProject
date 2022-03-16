import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {CommonService} from '../common.service';
@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent implements OnInit {
addrestaurant=new FormGroup({
  name : new FormControl(''),
  email : new FormControl(''),
  mobile: new FormControl(''),
  address: new FormControl(''),
  location:new FormControl('')
})
  constructor(private addrestdetails: CommonService) { }

  ngOnInit(): void {
  }
  CreatResto(){
    //console.log(this.addresto.value);
    this.addrestdetails.postRestDetails(this.addrestaurant.value).subscribe((result)=>{
      console.log(result);
  });

  }
}
