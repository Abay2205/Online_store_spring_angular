import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {RealUser} from "../models/realUser";


@Injectable({
  providedIn: 'root'
})
export class RealUserService {

  // private baseUrl = "http://localhost:8080/api/";
  private baseUrl = "/zuul";

  // requestHeader = new HttpHeaders(
  //   {"No-auth": "True"}
  // )

  constructor(private http: HttpClient) { }

  getUsers(): Observable<RealUser[]>{
    return this.http.get<RealUser[]>(`${this.baseUrl}/auth/useers/`);
  }
  deleteUser(id: number): Observable<Object>{
    return this.http.delete(`${this.baseUrl}/auth/delete/${id}`);
  }
  createUser(user: RealUser): Observable<Object>{
    return this.http.post(`${this.baseUrl}/auth/user/save/`, user);
  }
  getUserById(id: number): Observable<RealUser>{
    return this.http.get<RealUser>(`${this.baseUrl}/auth/getById/${id}`);
  }
  updateUser(id: number, user: RealUser): Observable<Object>{
    return this.http.put<RealUser>(`${this.baseUrl}/auth/update/${id}`, user);
  }



}
