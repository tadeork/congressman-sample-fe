import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONGRESS_API_URL } from '../constants/APIEndpoints';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CongressService {

  constructor(private http: HttpClient) {
   }

   getAllMembers() {
     return this.http.get(CONGRESS_API_URL).pipe(map((res:any) => res['results'][0]['members']));
   }

   getMember(id: string) {
    return;
   }
}
