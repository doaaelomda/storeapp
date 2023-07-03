import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import firebase from 'firebase/app';
import 'firebase/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private AuthService:AuthService,private route:Router){}
  massege_error:any
  login(form:any){
    let data=form.value
    this.AuthService.signin(data.email,data.pass).then((user:any)=>{
      this.route.navigate(['/'])
      localStorage.setItem("userconnecet",user.user.uid)

    }).catch(()=>{
      this.massege_error='Incorrect email or pass or both'
    })
  }
  doSomething() {
    this.route.navigate(['/register']);
  }
}