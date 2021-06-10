import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderInterceptor } from './interceptors/header.interceptor';
import { SharedUiModule } from './shared-ui/shared-ui.module';
import { MaterialSharedModule } from './material-shared/material-shared.module';
import { HomeComponent } from './home/home.component';
import {MatTabsModule} from "@angular/material/tabs";

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialSharedModule,
    SharedUiModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}
