import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
@Component({
  selector: 'app-nextpage',
  templateUrl: './nextpage.component.html',
  styleUrls: ['./nextpage.component.css']
})
export class NextpageComponent implements OnInit {

  constructor(private router: Router) { }
  editform()
  {
    this.router.navigate(['edit']);
  }
  data:any;
  ngOnInit() {
    this.data = JSON.parse(localStorage.getItem('Data'))
  }

}
