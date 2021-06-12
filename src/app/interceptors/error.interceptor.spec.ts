import { TestBed } from '@angular/core/testing';

import { ErrorInterceptor } from './error.interceptor';
import { ToastrModule, ToastrService } from 'ngx-toastr';

describe('ErrorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      ToastrModule.forRoot()
    ],
    providers: [
      ErrorInterceptor,
      {provide: ToastrService, useClass: ToastrService}
    ],
  }));

  it('should be created', () => {
    const interceptor: ErrorInterceptor = TestBed.inject(ErrorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
