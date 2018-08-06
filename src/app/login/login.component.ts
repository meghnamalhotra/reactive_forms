import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router' 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 txt:string
 pass:string
 match:boolean=false
 

passs=JSON.parse(localStorage.getItem("Data"));
 log()
 {
if(this.txt=== this.passs.email && this.pass===this.passs.pass )
{
 this.match=true;
 console.log('matched');
 localStorage.setItem("isloggedin",'true')
 this.route.navigate(['/nextpage']);
}
else
{
  console.log('asd')
 localStorage.setItem("isloggedin",'false')

  this.match=false;

 }
}
  constructor( private route:Router) { }


  ngOnInit() {
    
  }

}
