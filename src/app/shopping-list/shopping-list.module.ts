import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingListRoutingModule } from './shopping-list-routing.module';
import { ShoppingListComponent } from './shopping-list.component';
import { EditListComponent } from './edit-list/edit-list.component';
import { SummaryListComponent } from './summary-list/summary-list.component';
import {SharedModule} from '@shared/shared.module';
import {ShoppingListService} from '@shared/services/shopping-list.service';
import { SortByPipe } from './summary-list/sort-by.pipe';

@NgModule({
  declarations: [ShoppingListComponent, EditListComponent, SummaryListComponent, SortByPipe],
  imports: [
    CommonModule,
    ShoppingListRoutingModule,
    SharedModule
  ],
  providers: [
    ShoppingListService
  ]
})
export class ShoppingListModule { }
