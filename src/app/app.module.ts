import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import{ ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import{RouterModule, Routes, ROUTES} from '@angular/router';
import { FormControl} from '@angular/forms';
import { NextpageComponent } from './nextpage/nextpage.component';
import { EditComponent } from './edit/edit.component';
const routes:Routes=[
  {
    path:'nextpage',
    component:NextpageComponent
  },
  {
    path:'edit',
    component:EditComponent 
  },
  
];
@NgModule({
  declarations: [
    AppComponent,
    NextpageComponent,
    EditComponent
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule  { 

  name=new FormControl('');
}
