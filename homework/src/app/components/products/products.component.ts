import { Component, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../shared/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  @Input() searched: Product[] = [];
  selectedProduct?: Product;
  @Output() selectedProducts: Product[] = [];
  constructor() {}

  ngOnInit() {}

  onSelect(product: Product): void {
    this.selectedProduct = product;
    const isSelected = this.selectedProducts.some(
      (current) => current.id === product.id
    );
    if (!isSelected) {
      this.selectedProducts.push(product);
      product.isSelected=true;
    } 
  }

  removeAllProducts() {
    this.selectedProducts.forEach(product=>product.isSelected=false);
    this.selectedProducts = [];
  }
}
