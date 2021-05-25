import { Component, Input, Output } from '@angular/core';
import { Product } from './shared/models/product';
import { ProductsService } from './shared/service/products.service';

import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { SelectedProductsComponent } from './components/selected-products/selected-products.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = '';
  faCoffee = faCoffee;
  @Output() products: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productsService
      .getProducts()
      .subscribe((products) => (this.products = products));
  }
  
}
