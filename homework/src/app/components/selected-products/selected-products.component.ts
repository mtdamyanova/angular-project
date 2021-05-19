import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../shared/models/product';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-selected-products',
  templateUrl: './selected-products.component.html',
  styleUrls: ['./selected-products.component.scss'],
})
export class SelectedProductsComponent implements OnInit {
  @Input() selectedProducts: Product[] = [];
  faTimes = faTimes;
  constructor() {}

  ngOnInit() {}

  removeProduct(product: any) {
    const index = this.selectedProducts.findIndex(
      (current: any) => current.id === product.id
    );
    this.selectedProducts.splice(index, 1);
  }
}
