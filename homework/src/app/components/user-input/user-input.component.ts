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
  // @Output() productsChange = new EventEmitter<Product[]>();
  @Output() searched: Product[] = [];


  constructor() {}

  ngOnInit() {
    this.searched = this.products;
    console.log(this.products, 'products')
    console.log(this.searched, 'searched')
  }

  filterProducts(): void {
    let results = this.products.filter(product => product.name.toLowerCase().includes(this.value!));
    console.log(results, ' filtered')
    // this.productsChange.emit(results);
    this.searched = results;
  }

}
