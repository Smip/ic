import { Injectable } from '@angular/core';
import {ShoppingListItem} from '@shared/models/ShoppingListItem.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  shoppingListItems: ShoppingListItem[] = [];

  constructor() { }

  updateList(shoppingList: ShoppingListItem[]){
    this.shoppingListItems = shoppingList;
  }
}
