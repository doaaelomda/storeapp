import { Injectable } from '@angular/core';
import{AngularFireAuth}from '@angular/fire/compat/auth';
import {Observable} from 'rxjs';
import firebase from 'firebase/compat/app';
// import 'firebase/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user:Observable<firebase.User>|any
  // user:any
  constructor(private fauth:AngularFireAuth) {
    this.user=this.fauth.user
   }
  signup(email:any,pass:any){
    return this.fauth.createUserWithEmailAndPassword(email,pass)
  }
  signin(email:any,pass:any){
    return this.fauth.signInWithEmailAndPassword(email,pass)

  }
}
