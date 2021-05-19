import { Component, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../shared/models/product';
import { ProductsService } from '../../shared/service/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  @Input()products: Product[] = [];
  selectedProduct?: Product;
  selectedProducts: Product[] = [];
  constructor() {}

  ngOnInit() {
  
  }

  onSelect(product: Product): void {
    this.selectedProduct = product;
    const isSelected = this.selectedProducts.some(
      (current) => current.id === product.id
    );
    if (!isSelected) {
      this.selectedProducts.push(product);
    }
  }

}
