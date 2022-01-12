import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage['token']; 
    if (!token) {
      return next.handle(req);
    }
    const newReq = req.clone({
      headers: req.headers.set('Authorization',token),
    });
    return next.handle(newReq);
  }
}
