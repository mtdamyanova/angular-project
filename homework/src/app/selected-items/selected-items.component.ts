import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../shared/models/item';

@Component({
  selector: 'app-selected-items',
  templateUrl: './selected-items.component.html',
  styleUrls: ['./selected-items.component.scss']
})
export class SelectedItemsComponent implements OnInit {
  @Input() selectedItems:Item[] = [];
  constructor() { }

  ngOnInit() {
  }

  removeItem(item:any){
    const index = this.selectedItems.findIndex(
      (current:any) => current.id === item.id
    );
    this.selectedItems.splice(index, 1);
  }

}
