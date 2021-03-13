import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ProductsComponent } from './modules/products/products/products.component';
// import { ProductItemComponent } from './product-item/product-item.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsByCategoryComponent } from './pages/products-by-category/products-by-category.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    // ProductsComponent,
    // ProductItemComponent,
    HeaderComponent,
    HomeComponent,
    UsersPageComponent,
    AboutUsComponent,
    FooterComponent,
    ProductsByCategoryComponent,
    ProductDetailPageComponent,
    NotFoundComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
