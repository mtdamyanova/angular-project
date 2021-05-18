import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../shared/models/item';
import { ItemsService } from '../shared/service/items.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.scss'],
})
export class UserInputComponent implements OnInit {
  value?: string;
  @Input() items: Item[] = [];
  constructor() {}

  ngOnInit() {}

  filterItems(): void {
    console.log(this.value);
    console.log(this.items);

    let searched: Item[] = [];
    this.items.forEach((item) => {
      if (this.value && item.name.toLowerCase().includes(this.value)) {
        searched.push(item);
      }
    });
    if (this.value && searched) {
      this.items = searched;
    } 
  }
}
