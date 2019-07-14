import { Component, OnInit } from '@angular/core';
import {ShoppingListItem} from '@shared/models/ShoppingListItem.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {toast, updateTextFields} from '@smip/ngx-materialize';
import {ShoppingListService} from '@shared/services/shopping-list.service';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.scss']
})
export class EditListComponent implements OnInit {
  shoppingListItems: ShoppingListItem[] = [];
  itemForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _shoppingListService:ShoppingListService
  ) { }

  ngOnInit() {
    this.itemForm = this.getPaymentForm(new ShoppingListItem(null));
  }

  getPaymentForm(shoppingItem: ShoppingListItem) {
    return this.fb.group({
      'name': [shoppingItem.name, [Validators.required]]
    });
  }

  deleteItem(index){
    this.shoppingListItems.splice(index, 1);
    this._shoppingListService.updateList(this.shoppingListItems);
  }

  onSubmit() {
    if (this.itemForm.invalid) {
      Object.keys(this.itemForm.controls).forEach(field => {
        const control = this.itemForm.get(field);
        control.markAsTouched({onlySelf: true});
      });
      return;
    }
    this.shoppingListItems.push(this.itemForm.value);
    this.itemForm = this.getPaymentForm(new ShoppingListItem(null));
    setTimeout(() => {
      updateTextFields();
    }, 0);
    this._shoppingListService.updateList(this.shoppingListItems);
  }


}
