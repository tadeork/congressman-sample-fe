import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {MemberDetailComponent} from "./components/member-detail/member-detail.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "member/:id",
    component: MemberDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
