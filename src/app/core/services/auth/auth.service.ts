import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loginUrl = 'http://localhost:8080/login';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const loginData = { email, password };
    return this.http.post<any>(this.loginUrl, loginData);
  }
}
