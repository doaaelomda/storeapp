import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private authService: AuthService, private af: AngularFirestore,private route:Router) { }
  register(form: any) {
    let data = form.value;
    let textareaValue = data.textarea || ''; 
    this.authService.signup(data.email, data.pass).then((user:any) => {
      localStorage.setItem("userconnecet",user.user.uid)
      this.af.collection("users").doc(user.user.uid).set({
        fname:data.fname,
        email:data.email,
        pass:data.pass,
        textarea: textareaValue,
        uid:user.user.uid,
        img:'https://www.addsystems.com/wp-content/uploads/2017/01/Anonym-e1491994623630.jpg'
      }).then(()=>{
        this.route.navigate(['/'])
      })
    }).catch((error) => {
      alert(error.message);
    });
  }
}