import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from '../../environments/environments';
import { User } from '../../interfaces/user.interface';
import { catchError, map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl=environments.baseURL;
  private user?:User;

  constructor(private http:HttpClient) {}

  get currentUser():User|undefined{
    if (!this.user)return undefined;
    return structuredClone(this.user);
  }

  login(user: string, password: string): Observable<User | null> {
    return this.http.get<User>(`${ this.baseUrl }/users/${user}/${password}`)
      .pipe(
        tap(usuario => this.user = usuario),
        tap(usuario => localStorage.setItem('token', JSON.stringify(usuario))),
        catchError(err => of(null))
      );
  }
  logout () {
    this.user = undefined;
    localStorage.clear();
  }
  existeUser(newUser:User): Observable<User | null> {
    return this.http.get<User>(`${this.baseUrl}/users/${newUser.data.user}/${newUser.data.pass}`)
      .pipe(
        map(user => user ? user : null),
        catchError(err => of(null))
      );
  }
  register(newUser: User): Observable<User> {
    return this.http.post<User>(`${ this.baseUrl }/users`, newUser.data)
  }

  checkAuthenticacion(): Observable<boolean>{
   
    if (!localStorage.getItem('token')) return of(false);
   
    const token = localStorage.getItem('token');
    if (!token) return of(false);
    const userLogeado = JSON.parse(token);

    return this.http.get<User>(`${ this.baseUrl }/users/${userLogeado.data.user}/${userLogeado.data.pass}`)
            .pipe (
              tap ( user => this.user=user),
              map ( user => !!user),
              catchError ( err => of(false))
            )
  }



}
