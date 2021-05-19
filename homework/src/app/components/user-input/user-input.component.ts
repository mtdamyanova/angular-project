import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../shared/models/product';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.scss'],
})
export class UserInputComponent implements OnInit {
  value?: string;
  @Input() products!: Product[];
  @Output() productsChange = new EventEmitter<Product[]>();
  constructor() {}

  ngOnInit() {}

  filterProducts(): void {
    let searched: Product[] = [];
    this.products.forEach((product) => {
      if (this.value && product.name.toLowerCase().includes(this.value)) {
        searched.push(product);
      }
    });
  
    if (this.value) {
      this.productsChange.emit(searched);
      console.log(222, searched);
    } else {
      // this.itemsChange.emit(this.items);
      searched = [];
      // console.log(111, this.productsChange);
    }
  }
}
