import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn:'root'
})

export class AuthService{
  constructor(private http : HttpClient){}

  // crear user
  signUp(){

  }

  //iniciar sesion
  logIn(){

  }

}
