import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import{ Router } from '@angular/router';
import{ReactService } from "../react.service";
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  loginform:FormGroup;
  title = 'my-reactive-app';
   test:boolean
   type:string="password"
   

   store()
   {
    /* localStorage.setItem("Data",JSON.stringify(this.loginform.value));

     this.nextpage();*/
    this.reactservice.check(this.loginform.value);
   this.router.navigate(['/login']);

   }
    toggle()
    {
      if(this.type === "password")
     this.type="Text";
     else
     this.type="password";
    }
    
    pass1()
    {
      if(this.loginform.value.pass!==this.loginform.value.passcon)
      {
        this.test= false;
      }
      else{
        this.test=true;
      }
    }
  constructor(private router:Router, private reactservice: ReactService) {
    this.loginform = new FormGroup({
      firstname: new FormControl('', [
        Validators.required, Validators.pattern("^[a-zA-Z]+$")
  
      ]),
      lastname: new FormControl('', [
        Validators.required, Validators.pattern("^[a-zA-Z]+$")
      ]),
  
      email: new FormControl('', [
        Validators.required,Validators.email,
      ]),
      number: new FormControl('', [
        Validators.required,
        Validators.maxLength(10), Validators.minLength(10), Validators.pattern("^(([0-9]*)|(([0-9]*)\.([0-9]*)))$"),
  
      ]),
      pass: new FormControl('', [
        Validators.required,
      ]),
      passcon: new FormControl('', [
        Validators.required,
      ]),
      empid: new FormControl('', [
        Validators.required,
        Validators.maxLength(4),Validators.minLength(4),Validators.pattern("^(([0-9]*)|(([0-9]*)\.([0-9]*)))$"),
      ]),
      gen: new FormControl('', [
        Validators.required,
        Validators.maxLength(6), Validators.minLength(1), Validators.pattern("^[a-zA-Z]+$"),
      ]),
    })
    
     
  }
  
  

  ngOnInit() {
    if(this.router.url==='/edit' && localStorage.getItem("Data"))
    
    {
     /* var data=JSON.parse(localStorage.getItem("Data"));*/
     let data=this.reactservice.getData();
      console.log(data);
      console.log("yes");
      this.loginform.patchValue({
        firstname: data.firstname,
        lastname: data.lastname,
        number:data.number,
        gen:data.gen,
        empid:data.empid,
      email:data.email,
        pass:data.pass,
        passcon:data.passcon
      });
    }
    else
    {
      console.log("No");
    }

  }
  
}
