import { Component } from '@angular/core';
import { Item } from './item';
import { ItemsService } from './shared/service/items.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'homework';
  items: Item[] = [];
  value?: string;
  selectedItem?: Item;
  selectedItems: Item[] = [];
  constructor(private itemsService: ItemsService) {}

  ngOnInit() {
    this.getItems();
  }

  getItems(): void {
    this.items = this.itemsService.getItems();
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

  removeSelected(item: Item): void {
    const index = this.selectedItems.findIndex(
      (current) => current.id === item.id
    );
    this.selectedItems.splice(index, 1);
  }
  filterItems(): void {
    console.log(this.value);
    let searched: Item[] = [];
    this.items.forEach((item) => {
      if (this.value && item.name.toLowerCase().includes(this.value)) {
        searched.push(item);
      }
    });
    if (this.value && searched) {
      this.items = searched;
    } else {
      this.items= this.itemsService.getItems();
    }
  }

}
