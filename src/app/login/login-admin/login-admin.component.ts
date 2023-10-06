import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
  hide: boolean = true;
  loginAdmin = this.builder.group({
    email: ['', Validators.compose([Validators.required, Validators.email])],
    password: ['', Validators.required]
  })
  constructor(private builder: FormBuilder) {

  }
  ngOnInit(): void {
   
  }
 
  onSubmit(){
    console.log(this.loginAdmin);
  }
}
