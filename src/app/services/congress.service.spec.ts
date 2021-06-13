import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { CongressService } from './congress.service';
import * as mockedMemberList from './mocks/memebers-list-respone.json';
import * as mockedMemberDetail from './mocks/member-detail-response.json';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import MemberList from '../shared/models/MemberList';

describe('CongressService', () => {
  let service: CongressService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(CongressService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all members', fakeAsync(() => {
    let data = {};
    service.getAllMembers().subscribe((resp: any) => (data = resp));
    const req = httpTestingController.expectOne(
      'https://api.propublica.org/congress/v1/116/senate/members.json'
    );
    expect(req.request.method).toEqual('GET');
    req.flush(mockedMemberList);
    tick();
  }));

  xit('should return specific members', fakeAsync(() => {
    let data = {};
    service
      .getMemberDetail('CODE-MEMBER')
      .subscribe((resp: any) => (data = resp));
    const req = httpTestingController.expectOne(
      'https://api.propublica.org/congress/v1/members/CODE-MEMBER.json'
    );
    expect(req.request.method).toEqual('GET');
    req.flush(mockedMemberDetail);
    tick();
  }));
});
