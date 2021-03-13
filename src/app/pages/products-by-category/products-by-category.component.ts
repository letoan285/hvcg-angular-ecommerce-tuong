import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/models/product.model';
import {products as productList} from '../../data/mock-data'

@Component({
  selector: 'app-products-by-category',
  templateUrl: './products-by-category.component.html',
  styleUrls: ['./products-by-category.component.scss']
})
export class ProductsByCategoryComponent implements OnInit {

  public products: IProduct[] = [];
  constructor( public activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params.id;
    const products = productList.filter((item: IProduct) => {
      return item.categoryId == id;
    });
    this.products = products;
    console.log(this.products);
    
  
  }

}
