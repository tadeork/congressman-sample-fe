import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, retry } from "rxjs/operators";
import { Observable, throwError } from 'rxjs';
import { ToastrService } from "ngx-toastr";
import { ERROR_UNAUTHORIZED_MESSAGE, ERROR_UNKNOWN_MESSAGE } from "../shared/constants/Messages";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private toastr$: ToastrService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      retry(1),
      catchError((error: HttpErrorResponse) => {
        console.log(error);
        if (error.status === 403) {
          this.toastr$.error(ERROR_UNAUTHORIZED_MESSAGE);
        } else {
          this.toastr$.error(ERROR_UNKNOWN_MESSAGE);
        }
        return throwError(error);
      })
    );
  }
}
