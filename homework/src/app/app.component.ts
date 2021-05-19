import { Component, Input } from '@angular/core';
import { Product } from './shared/models/product';
import { ProductsService } from './shared/service/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = '';
  products: Product[] = [];
  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productsService.getProducts().subscribe((products) => (this.products = products));
  }
}
