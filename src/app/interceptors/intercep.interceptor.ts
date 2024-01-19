import {  } from './intercep.interceptor';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { request } from 'http';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Observable } from 'rxjs';

@Injectable()
export class intercep implements HttpInterceptor{
  constructor(private _NgxUiLoaderService :NgxUiLoaderService){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this._NgxUiLoaderService.start();
    return next.handle(req);
  }

}


