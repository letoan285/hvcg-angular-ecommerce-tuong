import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';
import { ProductsByCategoryComponent } from './pages/products-by-category/products-by-category.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';

const routes: Routes = [
  {path: '',redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'home', component: HomeComponent,
  },
  {
    path: 'products', component: ProductsPageComponent
  },
  {
    path: 'products/:id', component: ProductDetailPageComponent
  },
  {
    path: 'users', component: UsersPageComponent
  },
  {
    path: 'about-us', component: AboutUsComponent
  },
  {
    path: 'categories/:id/products', component: ProductsByCategoryComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
