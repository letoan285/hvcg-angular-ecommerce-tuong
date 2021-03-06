import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hvcg-angular-ecommerce';
  isDisable=false;
  person = {
    name:'Tuong',
    age: 20
  }
  className='image'
  isDisplay = false;
  image = 'https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-xanh-duong-new-600x600-200x200.jpg';
  
  public clickMe(name: string){
    alert(`Hello ${name}`)
  }
}