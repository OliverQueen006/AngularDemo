import { Component, OnInit, Input } from '@angular/core';
import { Login } from '../model/login';
//Import the service
import { APIServiceService } from '../apiservice.service';
import { Observable } from 'rxjs';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  _loginObj: Login;//Declare the model instance

  constructor(private _apiservice: APIServiceService) {
    this._loginObj = new Login();//Initialise the model instance
    // this._loginObj.EmailId = "";
    // this._loginObj.Password = "";
  }

  ngOnInit() {
  }

  SubmitForm() {
    this._apiservice
    .chekUser(this._loginObj.EmailId,this._loginObj.Password)
    .subscribe(
      data => {
        console.log("POST successful",data);
      },
      error => {
        console.log("Some error in request",error);
      }
    );
    // console.log("Hi");
    //console.log("Email Address : " , this._loginObj.EmailId);
    //console.log("Password : " , this._loginObj.Password);
  }

}
