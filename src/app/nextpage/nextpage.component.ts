import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import{ReactService} from '../react.service'
import { pipe } from '../../../node_modules/@angular/core/src/render3/pipe';

@Component({
  selector: 'app-nextpage',
  templateUrl: './nextpage.component.html',
  styleUrls: ['./nextpage.component.css'],

})

export class NextpageComponent implements OnInit {
  
  dateobj=new Date();
  constructor(private router: Router, private reactive:ReactService) { 
    this.data=this.reactive.getData();
    setInterval(()=>this.dateobj= new Date(),1)
  }
  editform()
  {
    this.router.navigate(['/edit']);
  }
  data:any;
  ngOnInit() {
   
    //this.data = JSON.parse(localStorage.getItem('Data'))
  }

}
