import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from "rxjs/operators";

@Injectable()
export class LoggerInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.info('REQUEST', request)
    return next.handle(request).pipe(map(event => {
      if (event instanceof HttpResponse) {
        console.info('RESPONSE', event)
      }
      return event;
    }));
  }
}
