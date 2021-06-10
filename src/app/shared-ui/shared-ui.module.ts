import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialSharedModule } from '../material-shared/material-shared.module';
import { MembersListComponent } from './members-list/members-list.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MembersListComponent
  ],
  imports: [
    CommonModule,
    MaterialSharedModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedUiModule { }
