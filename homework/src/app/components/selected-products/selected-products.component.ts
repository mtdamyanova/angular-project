import { Component, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../shared/models/product';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-selected-products',
  templateUrl: './selected-products.component.html',
  styleUrls: ['./selected-products.component.scss'],
})
export class SelectedProductsComponent implements OnInit {
  @Input() selectedProducts: Product[] = [];
  faTimesCircle = faTimesCircle;
  constructor() {}

  ngOnInit() {}

  removeProduct(product: Product) {
    const index = this.selectedProducts.findIndex(
      (current: Product) => current.id === product.id
    );
    product.isSelected = false;
    this.selectedProducts.splice(index, 1);
  }
}
