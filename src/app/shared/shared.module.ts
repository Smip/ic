import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LayoutsModule} from '@shared/layouts/layouts.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutsModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
