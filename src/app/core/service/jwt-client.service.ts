import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class JwtClientService {

  private baseUrl = "/zuul";

  constructor(private http: HttpClient, private router: Router) {
  }

  public generateToken(request: object) {
    console.log(request)
    return this.http.post(`${this.baseUrl}/login`, request, {observe: 'response'});
  }

  public welcome(token: any) {
    let tokenStr = "Bearer " + token;
    localStorage.setItem("token", tokenStr)
    console.log(localStorage.getItem("token"))
    return this.http.get(`${this.baseUrl}/back1/back1/api`)
  }
}
