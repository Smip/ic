import { Pipe, PipeTransform } from '@angular/core';
import {ShoppingListSummaryItem} from '@shared/models/ShoppingListSummaryItem.model';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(list: ShoppingListSummaryItem[], column = 'name', reverse = false): ShoppingListSummaryItem[] {
    if (!ShoppingListSummaryItem.length) {
      return [];
    }
    return list.sort((a, b) => {
      if (a[column] < b[column]) {
        return -1 * (reverse ? -1 : 1);
      } else if (a[column] > b[column]) {
        return 1 * (reverse ? -1 : 1);
      } else {
        return 0;
      }
    });
  }

}
