import { Component, OnInit } from '@angular/core';
import { CongressService } from "../services/congress.service";
import {Observable} from "rxjs";
import MemberList from "../models/MemberList";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  membersList: MemberList[] = [];

  constructor(private congress$: CongressService) { }

  ngOnInit(): void {
    this.congress$.getAllMembers().subscribe(res => {
      this.membersList = res;
    });
  }

}
