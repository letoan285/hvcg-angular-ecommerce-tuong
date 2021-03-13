import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListPageComponent } from './product-list-page/product-list-page.component';


@NgModule({
  declarations: [ProductItemComponent, ProductsComponent, ProductDetailComponent, ProductListPageComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
