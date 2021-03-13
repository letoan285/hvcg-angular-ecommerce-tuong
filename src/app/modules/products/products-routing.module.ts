import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListPageComponent } from './product-list-page/product-list-page.component';

const routes: Routes = [
  {
    path: '', component: ProductListPageComponent
  },
  {
    path: 'detail/:id', component: ProductDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
