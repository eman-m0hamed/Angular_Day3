import { Iproduct } from './../../models/iproduct';
import { Component } from '@angular/core';
import { productarray } from 'src/app/models/productarray';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
 products: Iproduct[]=productarray;
}
