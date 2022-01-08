import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  localSetRoles!: string | null;
  localSetToken!: string | null;
  localgetSinupResponse!: string | null;
  constructor() {}

  public setRoles(roles: []) {
    localStorage.setItem('roles', JSON.stringify(roles));
  }

  public getRoles() {
    // return localStorage.getItem('roles');
    this.localSetRoles = localStorage.getItem('roles');
    if (this.localSetRoles !== null) {
      // item not null code
      return JSON.parse(this.localSetRoles);
    } else {
      // item is null code
      return null;
    }
  }

  public setToken(jwtToken: string) {
    localStorage.setItem('jwtToken', jwtToken);
  }
  public getToken(): string {
    this.localSetToken = localStorage.getItem('jwtToken');
    if (this.localSetToken !== null) {
      // item not null code
      return this.localSetToken;
    } else {
      // item is null code
      return '';
    }
  }
  public clear() {
    localStorage.clear();
  }

  public isLoggedIn() {
    return this.getRoles() && this.getToken();
  }
  public setSignupResponse(signupResponse: string) {
    localStorage.setItem('signupResponse', signupResponse);
  }
  public getSignupResponse() {
    this.localgetSinupResponse = localStorage.getItem('signupResponse');
    if (this.localgetSinupResponse !== null) {
      // item not null code
      return this.localgetSinupResponse;
    } else {
      // item is null code
      return null;
    }
  }

  public isSignUpResponse() {
    return this.getSignupResponse;
  }
}
