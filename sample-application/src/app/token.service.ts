import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

const ACCESS_TOKEN = 'access_token';
const REFRESH_TOKEN = 'refresh_token';

@Injectable({
  providedIn: 'root'
})

export class TokenService {

  constructor() { }
  getToken(): any {
    return localStorage.getItem(ACCESS_TOKEN);
  }

  getRefreshToken(): any {
    return localStorage.getItem(REFRESH_TOKEN);
  }

  saveToken(token: any): void {
    localStorage.setItem(ACCESS_TOKEN, token);
  }

  saveRefreshToken(refreshToken : any ): void {
    localStorage.setItem(REFRESH_TOKEN, refreshToken);
  }

  removeToken(): void {
    localStorage.removeItem(ACCESS_TOKEN);
  }

  removeRefreshToken(): void {
    localStorage.removeItem(REFRESH_TOKEN);
  }
}
