import {Component, OnInit} from '@angular/core';
import {ShoppingListService} from '@shared/services/shopping-list.service';
import {groupBy, map} from 'lodash';

import {ShoppingListItem} from '@shared/models/ShoppingListItem.model';
import {ShoppingListSummaryItem} from '@shared/models/ShoppingListSummaryItem.model';

@Component({
  selector: 'app-summary-list',
  templateUrl: './summary-list.component.html',
  styleUrls: ['./summary-list.component.scss'],
})
export class SummaryListComponent implements OnInit {
  shoppingListSummary: ShoppingListSummaryItem[];
  shoppingListJson: ShoppingListSummaryItem[];
  orderBy = 'name';
  orderReverse = false;

  constructor(
    private _shoppingListService: ShoppingListService,
  ) {
  }

  ngOnInit() {
  }

  send() {
    this.shoppingListJson = this.group(this._shoppingListService.shoppingListItems);
  }

  recalculate() {
    this.shoppingListSummary = this.group(this._shoppingListService.shoppingListItems);
  }

  sort(column) {
    if (this.orderBy === column){
      this.orderReverse = !this.orderReverse;
    } else {
      this.orderBy = column;
      this.orderReverse = false;
    }
  }

  group(shoppingList: ShoppingListItem[]){
    return map(
      groupBy(shoppingList, (item) => item.name),
      (itemList, itemName) => {
        return {name: itemName, number: itemList.length};
      },
    );
  }


}
