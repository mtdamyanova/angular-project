import { Injectable } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { PRODUCTS } from 'src/app/shared/constants/mock-products';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}
  getProducts(): Observable<Product[]> {
    const products = of(PRODUCTS);
    return products;
  }
}
