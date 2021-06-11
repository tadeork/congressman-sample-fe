import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CongressService } from '../../services/congress.service';
import { MemberDetails } from '../../shared/models/MemberDetails';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.scss'],
})
export class MemberDetailComponent implements OnInit {
  member$!: Observable<MemberDetails>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private congress$: CongressService
  ) {}

  ngOnInit(): void {
    this.member$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.congress$.getMemberDetail(params.get('id')!)
      )
    );
  }
}
