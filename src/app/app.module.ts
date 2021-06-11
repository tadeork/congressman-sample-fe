import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderInterceptor } from './interceptors/header.interceptor';
import { SharedUiModule } from './shared-ui/shared-ui.module';
import { MaterialSharedModule } from './material-shared/material-shared.module';
import { HomeComponent } from './components/home/home.component';
import { ToastrModule } from "ngx-toastr";
import { ErrorInterceptor } from "./interceptors/error.interceptor";
import { MemberDetailComponent } from './components/member-detail/member-detail.component';
import { MembersListComponent } from "./components/members-list/members-list.component";
import { PartyNamePipe } from './utils/party-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MembersListComponent,
    MemberDetailComponent,
    PartyNamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MaterialSharedModule,
    SharedUiModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
