import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';
import { ProductsByCategoryComponent } from './pages/products-by-category/products-by-category.component';
import { RegisterComponent } from './pages/register/register.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';

const routes: Routes = [
  {path: '',redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'home', component: HomeComponent,
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'users', component: UsersPageComponent
  },
  {
    path: 'about-us', component: AboutUsComponent
  },
  {
    path: 'categories', loadChildren: () => import('./modules/categories/categories.module').then(m => m.CategoriesModule)
  },
  {
    path: 'users', loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'products', loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule)
  },
  {
    path: '**', component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
