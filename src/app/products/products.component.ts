import { Component, OnInit } from '@angular/core';

interface IProduct {
  id: number;
  name: string;
  price: number;
  src: string;
}

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

  products: IProduct[] = [
    {id: 1, name: 'iphone 6', price: 23223, src: 'https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-xanh-duong-new-600x600-200x200.jpg'},
    {id: 2, name: 'iphone 5', price: 53535, src: 'https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-xanh-duong-new-600x600-200x200.jpg'},
    {id: 3, name: 'Macbook', price: 1300, src: 'https://cdn.vox-cdn.com/thumbor/aJLbD4CXH2dSs9iEWolpdus0pEY=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19949556/dbohn_200506_4012_0007.jpg'},
    {id: 4, name: 'Samsung galaxy', price: 3444, src: 'https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-xanh-duong-new-600x600-200x200.jpg'}
  ];

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

  constructor() { }

  ngOnInit(): void {

  }
  getProductsByCategory(id: number){
    alert(id)
  }

  getDetail(id: number){
    this.product = this.products.filter(item =>item.id == id)[0];
  }

}

// communicate