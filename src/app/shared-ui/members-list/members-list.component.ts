import { Component, Input, OnInit } from '@angular/core';
import MemberList from '../../models/MemberList';

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.scss']
})
export class MembersListComponent implements OnInit {
  @Input() membersList: MemberList[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
