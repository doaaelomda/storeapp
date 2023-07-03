import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-myproducts',
  templateUrl: './myproducts.component.html',
  styleUrls: ['./myproducts.component.css']
})
export class MyproductsComponent implements OnInit,OnDestroy {
  uid:any
  successMessage:any
  dataArray:any
  usersubs:Subscription|any
  successupdate: any;
  selectedItem: any;
  constructor(private fs:AngularFirestore,private AuthService:AuthService){
    this.usersubs=this.AuthService.user.subscribe((user:any)=>{
      this.uid=user.uid
    })
  }
  getproducats:Subscription|any
  ngOnInit(): void {
    this.getproducats=this.fs.collection('producats').snapshotChanges().subscribe((data:any)=>{
      this.dataArray=data.map((element:any)=>{
        return {
          id:element.payload.doc.id,
          title:element.payload.doc.data()['title'],
          dis:element.payload.doc.data()['dis'],
          img:element.payload.doc.data()['img'],
          uid:element.payload.doc.data()['uid'],
        }
      })

    })
  }
  addproducat(f:any){
    let data=f.value;
    this.fs.collection("producats").add({
      title:data.title,
      dis:data.dis,
      img:data.img,
      uid:this.uid
    }).then(()=>{
      this.successMessage="Added Done "
      window.location.reload()
    })

  }
  deleteitem(id: any) {
    this.fs.collection("producats").doc(id).delete().then(() => {
      this.successMessage = 'Deleted successfully';
      // window.location.reload();
    }).catch((error: any) => {
      alert(error);
    });
  }
  ngOnDestroy(): void {
    this.getproducats.unsubscribe()
    this.usersubs.unsubscribe()
    
  }
}
