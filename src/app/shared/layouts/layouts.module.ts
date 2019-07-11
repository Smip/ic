import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WrapperComponent} from './wrapper/wrapper.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {RouterModule} from '@angular/router';
import {NgxMaterialize} from '@smip/ngx-materialize';

@NgModule({
  declarations: [WrapperComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgxMaterialize,
  ],
})
export class LayoutsModule {
}
