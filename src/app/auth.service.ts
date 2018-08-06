import { Injectable } from '@angular/core';
import{CanActivate, Router} from '@angular/router';
import { url } from 'inspector';
@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {
  constructor(private router:Router)

  {

  }
  canActivate()
  {
    if(localStorage.getItem("isloggedin") == 'true' )
    {
      console.log(!!localStorage.getItem("isloggedin"))
      
      return true;
    }
    else
    {
      this.router.navigate(['/login'])
     
      return false;
    }
  }

  
}
