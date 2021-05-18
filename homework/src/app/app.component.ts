import { Component, Input } from '@angular/core';
import { Item } from './shared/models/item';
import { ItemsService } from './shared/service/items.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = '';
  items: Item[]= [];
  constructor(private itemsService: ItemsService) {}

  ngOnInit() {
    this.getItems();
  }

  getItems(): void {
    this.items = this.itemsService.getItems();
  }


}
