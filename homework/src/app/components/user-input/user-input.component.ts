import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../shared/models/product';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.scss'],
})
export class UserInputComponent implements OnInit {
  value?: string;
  @Input() products: Product[] = [];
  @Output() searched: Product[] = [];

  constructor() {}

  ngOnInit() {
    this.searched = this.products;
  }

  filterProducts(): void {
    this.searched = this.products.filter(
      (product) =>
        product.name.toLowerCase().includes(this.value!) ||
        product.code.toLowerCase().includes(this.value!)
    );
  }
}
