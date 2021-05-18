import { Injectable } from '@angular/core';
import { Item } from 'src/app/shared/models/item';
import { ITEMS } from 'src/app/shared/constants/mock-items';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  constructor() {}
  getItems(): Item[] {
    return ITEMS;
  }
}
