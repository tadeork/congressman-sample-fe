import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONGRESS_API_URL, MEMBER_DETAIL, MEMBERS_LIST } from '../shared/constants/APIEndpoints';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CongressService {
  private memberListURL = CONGRESS_API_URL + MEMBERS_LIST;
  private memberDetailURL = CONGRESS_API_URL + MEMBER_DETAIL;

  constructor(private http: HttpClient) {
   }

   getAllMembers() {
     return this.http.get(this.memberListURL).pipe(map((res:any) => res['results'][0]['members']));
   }

   getMemberDetail(id: string) {
    const url = `${this.memberDetailURL}${id}.json `;
    return this.http.get(url).pipe(map((res:any) => res['results'][0]));
   }
}
