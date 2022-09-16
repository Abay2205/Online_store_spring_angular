import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private baseUrl = "/zuul";

  constructor(private http: HttpClient) {
  }

  upload(formData: FormData): Observable<any>{
    return this.http.post(`${this.baseUrl}/back3/back3/photo/upload/`, formData);
  }
  download(filename: string): Observable<any>{
    return this.http.get(`${this.baseUrl}/back3/back3/photo/download/${filename}`);
  }
}
