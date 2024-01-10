import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _http: HttpClient) {}

  apiUrl = 'http://localhost:3000';

  // Login
  connectMember(adress: string, pass: string): Observable<any> {
    return this._http.post(`${this.apiUrl}/login`, { adress, pass });
  }

  // Register
  registerMember(user: any): Observable<any> {
    return this._http.get(`${this.apiUrl}/register`, user);
  }
}
