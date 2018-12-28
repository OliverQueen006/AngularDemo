import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIServiceService {

  constructor(private http: HttpClient) { }

  chekUser(email, pass) {
    //https://localhost:5001/api/login/chkuser
    ///api/login/chkuser
    return this.http.post('https://localhost:5001/api/login/chkuser', {
      "EmailID": "abc@gmail.com",//email,//"abc@gmail.com"
      "Password": "htn123"//pass//"htn123"
    });
  }
}
