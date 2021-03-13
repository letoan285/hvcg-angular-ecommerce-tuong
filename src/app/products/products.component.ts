import { Component, OnInit } from '@angular/core';
import {products} from '../data/mock-data'
import { IProduct } from '../models/product.model';


interface ICategory {
  id: number;
  name: string;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  categoryItems: ICategory[] = [
    {id: 1, name: 'Mobile'},
    {id: 2, name: 'Laptop'},
    {id: 3, name: 'PC'},
    {id: 4, name: 'Home Stuff'}
  ];
  product = {
    id: 0,
    name: 'default name',
    price: 0,
    src: ''
  }
  
  products: IProduct[];

  constructor() {
    this.products = products;
  }
  
  ngOnInit(): void {
  }
  getProductsByCategory(id: number){
    alert(id)
  }

  getDetail(id: number){
    this.product = products.filter(item =>item.id == id)[0];
  }

}

// communicate