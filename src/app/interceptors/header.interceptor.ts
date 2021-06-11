import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_KEY, CONGRESS_API_URL } from '../constants/APIEndpoints';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (!request.url.includes(CONGRESS_API_URL)) {
      return next.handle(request);
    }

    const modified = request.clone({
      setHeaders: { 'X-API-Key': API_KEY, 'accept': '*/*'},
    });

    return next.handle(modified);
  }
}
