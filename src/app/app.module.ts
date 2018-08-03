import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import{RouterModule, Routes, ROUTES} from '@angular/router';
import { FormControl} from '@angular/forms';
import { NextpageComponent } from './nextpage/nextpage.component';
import { EditComponent } from './edit/edit.component';
import{ReactService } from "./react.service";
import { LoginComponent } from './login/login.component';
import {AuthService} from './auth.service'
const router:Routes=[
  {
    path: '',
    component:EditComponent 
  },
  
  {
    path:'nextpage',
    component:NextpageComponent,
    canActivate:[AuthService]
  },
  {
    path:'edit',
    component:EditComponent 
  },
  {
    path:'login',
    component:LoginComponent 
  }
 
];
@NgModule({
  declarations: [
    AppComponent,
    NextpageComponent,
    EditComponent,
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(router),
    FormsModule
  ],
  providers: [
    ReactService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule  { 

  name=new FormControl('');
}
