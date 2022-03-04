import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(
    private http: HttpClient
  ) { }

  token = {Headers: new HttpHeaders ().set ('Authorization', environment.token)}

  getAllTemas(): Observable<Tema[]> {
    return this.http.get<Tema[]>('https://blogkarolynecorol.herokuapp.com/tema/all', this.token)
  }

  getByIdTema(id: number): Observable<Tema> {
    return this.http.get<Tema>('https://blogkarolynecorol.herokuapp.com/tema/${id}', this.token)
  }

  postTema(tema: Tema): Observable<Tema> {
    return this.http.post<Tema>('https://blogkarolynecorol.herokuapp.com/tema/new', tema, this.token)
  }
  putTema(tema: Tema): Observable<Tema>{
    return this.http.put<Tema>('https://blogkarolynecorol.herokuapp.com/tema/edit', tema, this.token)
  }

  deleteTema(id: number) {
    return this.http.delete('https://blogkarolynecorol.herokuapp.com/tema/delete/${id}', this.token)
  }
}
