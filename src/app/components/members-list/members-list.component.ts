import {Component, Input, OnInit, OnChanges, ViewChild, AfterViewInit } from '@angular/core';
import MemberList from '../../shared/models/MemberList';
import { MatTableDataSource } from "@angular/material/table";
import { Router } from "@angular/router";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.scss']
})
export class MembersListComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort = new MatSort();
  @Input() membersList: MemberList[] = [];
  public dataSource = new MatTableDataSource<MemberList>();
  displayedColumns = ['name', 'title', 'party', 'state'];

  constructor(private router: Router) { }

  ngOnChanges(): void {
    this.dataSource.data = this.membersList;
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  navigateDetails(e: any) {
    this.router.navigate(['member', e]);
  }

  applyFilter(targetElement: any) {
    let value = targetElement.value;
    value = value.trim();
    value = value.toLowerCase();
    // filterValue = filterValue.trim();
    // filterValue = filterValue.toLowerCase();
    this.dataSource.filter = value;
  }
}
