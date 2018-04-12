import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private _route: ActivatedRoute,private _router:Router) { }

  pageTitle:string ="Product Detail";
  product:IProduct;
  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id} `;
    this.product = {
      "productId":id,
      "productName" : "Hammer",
      "productCode":"TBX-0048",
      "releaseDate":"March 21,2017",
      "description":"Updated all slides and demos that include display of the application folder structure, show relative paths, show changed selectors, reflect prior code changes, or could use the VS Code quick fix",
      "price":8.99,
      "starRating":4.8,
      "imageUrl" : "https://openclipart.org/image/300px/svg_to_png/189968/1389256751.png"
    };
  }
  
  OnBack():void{
    this._router.navigate(['/products']);
  }
}
