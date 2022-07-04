import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ProductResponseModel } from '../models/productResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl: string = 'https://localhost:44305/api';

  constructor(private httpClient: HttpClient) { }

  getProducts():Observable<ProductResponseModel> {
    let newPath= this.apiUrl+"/products/getall"
    return this.httpClient.get<ProductResponseModel>(newPath);
  }

  getProductsByCategory(categoryId:number):Observable<ProductResponseModel> {
    let newPath= this.apiUrl+"/products/getbycategory?categoryId="+categoryId
    return this.httpClient.get<ProductResponseModel>(newPath);
  }
}
