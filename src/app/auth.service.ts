import { Injectable } from '@angular/core';
import{CanActivate, Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {
  canActivate()
  {
     if(true){
       console.log("matched");
       return true;
     }    
     else{
       console.log("not msthed");
       return false;
     }
  }

  
}
