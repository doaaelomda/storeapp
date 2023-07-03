import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/compat/storage';
import { Subscription, Unsubscribable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit,OnDestroy {
  uid: any;
  successupdate=''
  task:AngularFireUploadTask | any
  ref:AngularFireStorageReference | any
  persangtask:any
  dataprofile = {
    fname: '',
    uid: '',
    img: '',
    textarea: '',
    email:'',
    pass:''
  };
  usersubs:Subscription|any
  constructor(private AuthService: AuthService,
     private as: AngularFirestore,
     private route:Router,
     private aft:AngularFireStorage) {
   this.usersubs= this.AuthService.user.subscribe((user: any) => {
      this.uid = user.uid;
    });
  }
  ngOnDestroy(): void {
    // this.usersubs.Unsubscribable()
  }
  ngOnInit(): void {
    let userconnecet = localStorage.getItem('userconnecet');
    if (userconnecet) {
      this.as.collection('users').ref.doc(userconnecet).get().then((data: any) =>{
        this.dataprofile.fname= data.data()['fname'];
        this.dataprofile.img = data.data()['img'];
        this.dataprofile.textarea = data.data()['textarea'];
        this.dataprofile.email = data.data()['email'];
        this.dataprofile.pass = data.data()['pass'];
        this.dataprofile.uid = localStorage.getItem('userconnecet') || '';
      });
    } else {
      console.log('No user connected');
    }
  }
  update(): void{
    this.as.collection('users').doc(this.dataprofile.uid).update({
      fname:this.dataprofile.fname,
      textarea:this.dataprofile.textarea
    }).then(()=>{
      this.successupdate='Update Done'
      window.location.reload()
    })
  }
  uploadImage(event:any){
    const id=Math.random().toString(36).substring(2)
    this.ref=this.aft.ref(id)
    this.task=this.ref.put(event.target.files[0])
    this.persangtask=this.task.percentageChanges()
    this.task.then((data:any)=>{
      data.ref.getDownloadURL().then((url:any)=>{
        this.as.collection("users").doc(this.dataprofile.uid).update({
          img:url
        }).then(()=>{
          this.dataprofile.img = url;
          window.location.reload()  // تحديث قيمة الصورة
        })
        
      })
    })
  }
}