import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class InterceptorService implements HttpInterceptor{

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsYXl0aCIsImlhdCI6MTY4MzU0MzcxOCwiZXhwIjoxNjgzNTQ3MzE4fQ.5NgUu6160UWpNrA-9t8r8aVJ-7H0XQ-N5jw5p37s4KDRSTbdWf-XkrvO7YAmTQ9o1q5kSlHoO_60741oWTM8Og";
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
