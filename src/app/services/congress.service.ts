import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CONGRESS_API_URL } from '../constants/APIEndpoints';

@Injectable({
  providedIn: 'root'
})
export class CongressService {

  constructor(private http: HttpClient) {
   }

   getAllMembers() {
    this.http.get(CONGRESS_API_URL).subscribe(data => {
      console.log(data);
    });
   }
}
