import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from './product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

baseURL: string = 'http://localhost:3000';

headerOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

constructor(
  private http: HttpClient
  ) { }

  getProductList(): Observable<ProductModel[]>{
    return this.http.get<ProductModel[]>(`${this.baseURL}/products`);
  }

  saveProduct(product: ProductModel): Observable<any>{
    return this.http.post<any>(`${this.baseURL}/products`, product, this.headerOptions);
  }

  updateProduct(id, product: ProductModel): Observable<any>{
    return this.http.put<any>(`${this.baseURL}/products/${id}`, product, this.headerOptions);
  }

  deleteProduct(id): Observable<any>{
    return this.http.delete<any>(`${this.baseURL}/products/${id}`);
  }

  getProduct(id): Observable<ProductModel>{
    return this.http.get<ProductModel>(`${this.baseURL}/products/${id}`);
  }
}
