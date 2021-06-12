import { Component, OnInit, ViewChild } from '@angular/core';
import MemberList from '../../shared/models/MemberList';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { CongressService } from '../../services/congress.service';
import { MatPaginator } from '@angular/material/paginator';
import { ToastrService } from 'ngx-toastr';
import { FormControl } from '@angular/forms';
import { ERROR_FETCHING_DATA } from '../../shared/constants/Messages';

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.scss'],
})
export class MembersListComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort = new MatSort();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  public dataSource = new MatTableDataSource<MemberList>();

  nameFilter = new FormControl('');
  titleFilter = new FormControl('');
  partyFilter = new FormControl('');
  stateFilter = new FormControl('');
  genderFilter = new FormControl('');

  toggleAdvanced = new FormControl(false);

  filterValues = {
    first_name: '',
    title: '',
    party: '',
    state: '',
    gender: '',
  };
  displayedColumns = ['name', 'title', 'party', 'state', 'gender'];
  showAdvancedSearch = false;

  constructor(
    private congress$: CongressService,
    private router: Router,
    private toastr$: ToastrService
  ) {}

  ngOnInit(): void {
    this.congress$.getAllMembers().subscribe(
      (res) => {
        this.dataSource.data = res;
      },
      (error) => {
        this.toastr$.error(ERROR_FETCHING_DATA);
      }
    );
    this.setFilterInputForms();
  }

  AfterViewInit() {
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

  setFilterInputForms() {
    this.nameFilter.valueChanges.subscribe((first_name) => {
      this.filterValues.first_name = first_name;
      this.dataSource.filter = JSON.stringify(this.filterValues);
    });
    this.titleFilter.valueChanges.subscribe((title) => {
      this.filterValues.title = title;
      this.dataSource.filter = JSON.stringify(this.filterValues);
    });
    this.partyFilter.valueChanges.subscribe((party) => {
      this.filterValues.party = party;
      this.dataSource.filter = JSON.stringify(this.filterValues);
    });
    this.stateFilter.valueChanges.subscribe((state) => {
      this.filterValues.state = state;
      this.dataSource.filter = JSON.stringify(this.filterValues);
    });
    this.genderFilter.valueChanges.subscribe((gender) => {
      this.filterValues.gender = gender;
      this.dataSource.filter = JSON.stringify(this.filterValues);
    });
  }

  createFilter(): (data: any, filter: string) => boolean {
    return function (data: any, filter: string): boolean {
      let searchTerms = JSON.parse(filter);
      return (
        data.first_name.toLowerCase().indexOf(searchTerms.first_name) !== -1 &&
        data.title.toString().toLowerCase().indexOf(searchTerms.title) !== -1 &&
        data.party.toLowerCase().indexOf(searchTerms.party) !== -1 &&
        data.gender.toLowerCase().indexOf(searchTerms.gender) !== -1 &&
        data.state.toLowerCase().indexOf(searchTerms.state) !== -1
      );
    };
  }

  onToggleAdvanceChange() {
    this.showAdvancedSearch = this.toggleAdvanced.value;
    if (this.showAdvancedSearch) {
      this.dataSource.filter = '';
      this.dataSource.filterPredicate = this.createFilter();
    } else {
      this.dataSource.filterPredicate = this.filter();
    }
  }

  /**
   * Resets the filter fn to the original
   */
  filter(): (data: any, filter: string) => boolean {
    return function (data, filter) {
      const dataStr = Object.keys(data)
        .reduce(function (currentTerm, key) {
          // @ts-ignore
          return currentTerm + data[key] + '◬';
        }, '')
        .toLowerCase();
      const transformedFilter = filter.trim().toLowerCase();
      return dataStr.indexOf(transformedFilter) != -1;
    };
  }
}
