import { Injectable } from '@angular/core';
import { Item } from 'src/app/item';
import { ITEMS } from 'src/app/mock-items';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  constructor() {}
  getItems(): Item[] {
    return ITEMS;
  }
}
