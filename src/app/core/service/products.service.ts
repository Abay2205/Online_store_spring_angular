import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Products} from "../models/products";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // private baseUrl = "http://localhost:8070/product/";
  private baseUrl = "/zuul";

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/back3/back3/product`);
  }
  searchProducts(keyword: string): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/back3/back3/product/?keywords=`+keyword);
  }
  getProductById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/back3/back3/product/${id}`);
  }

  updateProduct(id: number, products: Products): Observable<Object> {
    return this.http.put(`${this.baseUrl}/back3/back3/product/${id}`, products)
  }
  createProduct(products: Products): Observable<Object>{
    return this.http.post(`${this.baseUrl}/back3/back3/product/`, products);
  }
  deleteProduct(id: number): Observable<Object>{
    return this.http.delete(`${this.baseUrl}/back3/back3/product/${id}`);
  }
  sortProduct(sortBy: string): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/back3/back3/product/?keyword=&pageNumber=0&pageSize=10&sortDirection=asc&sortBy=`+sortBy);
  }
}
