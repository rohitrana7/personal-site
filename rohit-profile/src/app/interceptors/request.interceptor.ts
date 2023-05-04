import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      if(localStorage.getItem('access-token') != null){
        const token = localStorage.getItem('access-token');
        const headers = new HttpHeaders().set("access-token", token!);

        const AuthRequest = request.clone({headers: headers});
        return next.handle(AuthRequest);
      } else {
        return next.handle(request);
      }
  }
}