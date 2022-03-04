import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../model/Login';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  entrar(login: Login): Observable<Login>{
    return this.http.post<Login>('https://blogkarolynecorol.herokuapp.com/user/logar',login)
  }

  cadastrar(user: User): Observable<User>{
    return this.http.post<User>('https://blogkarolynecorol.herokuapp.com/user/cadastrar', user)
  }


}
