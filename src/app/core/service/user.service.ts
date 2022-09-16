import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // private baseUrl = "http://localhost:8080/api/";
  private baseUrl = "/zuul";

  // requestHeader = new HttpHeaders(
  //   {"No-auth": "True"}
  // )

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}/back1/back1/api/`);
  }
  deleteUser(id: number): Observable<Object>{
    return this.http.delete(`${this.baseUrl}/back1/back1/api/${id}`);
  }
  createUser(user: User): Observable<Object>{
    return this.http.post(`${this.baseUrl}/back1/back1/api/`, user);
  }
  getUserById(id: number): Observable<User>{
    return this.http.get<User>(`${this.baseUrl}/back1/back1/api/${id}`);
  }
  // getCurrentUser(): Observable<User>{
  //   return this.http.get<User>(`${this.baseUrl}/back1/back1/api/`);
  // }
  updateUser(id: number, user: User): Observable<Object>{
    return this.http.put<User>(`${this.baseUrl}/back1/back1/api/${id}`, user);
  }

}
