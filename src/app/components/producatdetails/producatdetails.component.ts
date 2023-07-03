import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producatdetails',
  templateUrl: './producatdetails.component.html',
  styleUrls: ['./producatdetails.component.css']
})
export class ProducatdetailsComponent implements OnInit {
  keyparams: any;
  dataProduct = {
    title: '',
    img: '',
    dis: ''
  };  
  constructor(private parms:ActivatedRoute,private fs:AngularFirestore, private as: AngularFirestore,) { 
    this.parms.params.subscribe(query=>{
      return this.keyparams=query['key']
    })
  }
  successupdate:any
  ngOnInit(): void {
      this.fs.collection('producats').ref.doc(this.keyparams).get().then((data: any) => {
        this.dataProduct.title = data.data()['title'];
        this.dataProduct.img = data.data()['img'];
        this.dataProduct.dis = data.data()['dis'];
      }).catch((error: any) => {
        alert( error);
      });
    };
    update(): void{
      this.as.collection('producats').doc(this.keyparams).update({
        title: this.dataProduct.title,
        dis: this.dataProduct.dis,
        img:this.dataProduct.img
      }).then(()=>{
        this.successupdate = 'Update Done';
      }).catch((error: any) => {
        console.log(error);
      });
    }
  }