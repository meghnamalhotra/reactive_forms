import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReactService {

  Data;
  constructor() { }
  check(str){
    console.log("in service", str)
    this.Data = str
   localStorage.setItem("Data",JSON.stringify(this.Data));
  }
  getData(){
    return this.Data || localStorage.getItem("Data")
  }
  


}
