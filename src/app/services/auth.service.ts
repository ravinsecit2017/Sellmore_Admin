import { Injectable } from '@angular/core';
import { BackendApiService } from '../services/backend-api.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private backendApiService: BackendApiService,
    private http: HttpClient
  ) {}

  getUser(token: any, accesstoken: string): Promise<any> {
    console.log(token.userName, token.password, accesstoken, 'token-username-15');
    return this.http
      .get(this.backendApiService.getUserUrl(token.userName, token.password, accesstoken))
      .toPromise()
      .then(response => response);
  }
}
