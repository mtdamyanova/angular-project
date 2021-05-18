import { Component, Input, OnInit, Output } from '@angular/core';
import { Item } from '../shared/models/item';
import { ItemsService } from '../shared/service/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {
  @Input()items: Item[] = [];
  selectedItem?: Item;
  selectedItems: Item[] = [];
  constructor() {}

  ngOnInit() {
  
  }

  onSelect(item: Item): void {
    this.selectedItem = item;
    const isSelected = this.selectedItems.some(
      (current) => current.id === item.id
    );
    if (!isSelected) {
      this.selectedItems.push(item);
    }
  }

}
