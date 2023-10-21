import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class InterceptService implements HttpInterceptor{

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsZWl0aCIsImlhdCI6MTY4MzgxNDQzMywiZXhwIjoxNjgzODE4MDMzfQ.mVTV_uetyV41f1bVECybI2J7zLcTrYlwgwgiMIEK2ah6y5za7C8mbMiDeeafvX4MsRIl2UmhAfLOhzrKGigl8Q";
    console.log("authToken");
    if (authToken) {
      
      const authReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${authToken}`)
      });
      console.log(authReq);
      return next.handle(authReq);
      
    } else {
      console.log(req);
      return next.handle(req);
    }

  }
}
