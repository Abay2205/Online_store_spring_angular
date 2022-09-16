import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "../models/employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // private baseUrl = "http://localhost:8090/employee/";
  private baseUrl = "zuul";

  constructor(private http: HttpClient) { }
  getEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.baseUrl}/back2/back2/employee`);
  }
  deleteEmployee(id: number): Observable<Object>{
    return this.http.delete(`${this.baseUrl}/back2/back2/employee/${id}`);
  }
  createEmployee(employee: Employee): Observable<Object>{
    return this.http.post(`${this.baseUrl}/back2/back2/employee/`, employee);
  }
  getEmployeeById(id: number): Observable<Employee>{
    return this.http.get<Employee>(`${this.baseUrl}/back2/back2/employee/${id}`);
  }
  updateEmployee(id: number, employee: Employee): Observable<Object>{
    return this.http.put(`${this.baseUrl}/back2/back2/employee/${id}`, employee);
  }

}
