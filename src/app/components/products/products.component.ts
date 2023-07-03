import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  dataArray:any
  constructor(private fs:AngularFirestore ,private router: Router){}
  ngOnInit(): void {
    this.fs.collection('producats').snapshotChanges().subscribe((data:any)=>{
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
  details(id:any){
    this.router.navigate(['/product/'+id])
  }
}
