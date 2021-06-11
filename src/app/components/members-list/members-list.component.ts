import { Component, OnInit, ViewChild } from '@angular/core';
import MemberList from '../../shared/models/MemberList';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { CongressService } from '../../services/congress.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.scss'],
})
export class MembersListComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort = new MatSort();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  public dataSource = new MatTableDataSource<MemberList>();
  displayedColumns = ['name', 'title', 'party', 'state', 'gender'];

  constructor(private congress$: CongressService, private router: Router) {}

  ngOnInit(): void {
    this.congress$.getAllMembers().subscribe((res) => {
      this.dataSource.data = res;
    });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  navigateDetails(e: any) {
    this.router.navigate(['member', e]);
  }

  applyFilter(targetElement: any) {
    let value = targetElement.value;
    value = value.trim();
    value = value.toLowerCase();
    this.dataSource.filter = value;
  }
}
