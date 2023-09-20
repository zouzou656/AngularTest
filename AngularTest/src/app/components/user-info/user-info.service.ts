import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  private apiUrl = 'https://reqres.in/api';

  constructor(private http: HttpClient) { }
  getUserById(id: string|null): Observable<any> {
    return this.http.get(`${this.apiUrl}/users/${id}`);
  }
}
