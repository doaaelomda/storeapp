import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NOAUService {

  constructor( private AuthService:AuthService,private route:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return new Promise(resolve=>{
      this.AuthService.user.subscribe((user:any)=>{
        if(!user){
          resolve(true)
        }
        else{
          this.route.navigate(['/'])
          resolve(false)
        }

      })

    })
  }
}
