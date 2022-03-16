import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CommonService 
  {// UrL= "http://localhost:3000/restaurant";
    UrL="http://127.0.0.1:5002/";
    constructor( private _http:HttpClient) { }
      getRestList()
        {  return this._http.get(this.UrL);
        } 
      postRestDetails(data:any)
      { 
        return this._http.post(this.UrL,data);
      }   
  }
