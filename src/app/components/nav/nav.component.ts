import { AuthService } from 'src/app/services/auth.service';
import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  isUser: any;
  constructor(private route:Router,private fauth:AngularFireAuth,private as:AuthService){
    this.as.user.subscribe((user:any)=>{
      if(user){
      this.isUser=true
    }else{
      this.isUser=false
    }
    })
  }
logout() {
  this.fauth.signOut().then(()=>{
    localStorage.removeItem('userconnecet')
    this.route.navigate(['/login'])
  }).catch(()=>{
    alert('user is still login')
  })
}

}
