import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from '@core/services/token.service';
import { environment } from '@environments/environment';
import { BehaviorSubject, catchError, Observable, of, switchMap, throwError } from 'rxjs';
import { User } from '../models/user.interface';
import { LoginResponse } from '../models/loginResponse.interface';
import { RegisterResponse } from '../models/registerResponse';
import { AuthStateService } from '../storage/auth-state.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
    private  authState: AuthStateService,
  ) { }

  login(email: string, password: string): Observable<LoginResponse | null> {

    return this.http.post<LoginResponse>(`${environment.apiUrl}/auth/login`, { email, password })
      .pipe(
        switchMap((res) => {
          this.tokenService.saveToken(res.token);
          return of(res);
        }),
        catchError((error: HttpErrorResponse) => {
          if (error.status === 401) {
            return of(null);
          }
          return this.handleError(error);
        })
      );
  }

  register(user: User): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(`${this.url}/auth/register`, { ...user })
      .pipe(
        switchMap((res) => {
          this.tokenService.saveToken(res.token);
          return of(res);
        }),
        catchError((error: HttpErrorResponse) => this.handleError(error))
      );
  }

  logout(): void {
    this.tokenService.removeToken();
    this.authState.setUser(null);
  }

  handleError(error: HttpErrorResponse) {
    if (error.status !== 500) {
      return of();
    }
    return throwError(() => new Error(`Sorry! something went wrong: ${error}`));
  }

  // * State Manipulation

  setUserState(user: User | null): void {
    this.authState.setUser(user);
  }
}
