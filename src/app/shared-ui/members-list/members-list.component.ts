import {Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import MemberList from '../../models/MemberList';
import {MatTableDataSource} from "@angular/material/table";
import {Observable} from "rxjs";

@Component({
  selector: 'members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.scss']
})
export class MembersListComponent implements OnInit {
  @Input() membersList: MemberList[] = [];
  public dataSource = new MatTableDataSource<MemberList>();
  displayedColumns = ['name', 'title', 'party'];

  constructor() { }

  ngOnChanges(): void {
    this.dataSource.data = this.membersList;
    console.log('data source', this.dataSource.data);
  }

  ngOnInit(): void {
  }


}
