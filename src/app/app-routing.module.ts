import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberDetailComponent } from './components/member-detail/member-detail.component';
import { MembersListComponent } from './components/members-list/members-list.component';

const routes: Routes = [
  {
    path: '',
    component: MembersListComponent,
  },
  {
    path: 'member/:id',
    component: MemberDetailComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
