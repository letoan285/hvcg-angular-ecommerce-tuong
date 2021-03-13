import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() item: any;
  // title = 'Hello'

  @Output() viewMore = new EventEmitter<number>()
  constructor() { }

  ngOnInit(): void {
  }

  public viewDetail(id: number){
    this.viewMore.emit(id);
    // alert(id);
  }

}
