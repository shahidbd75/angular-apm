import {Component} from '@angular/core'
import { IProduct } from './product';

@Component({
    selector:'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls:['./product-list.component.css']

})

export class ProductListComponent{
    pageTitle:string='Product List';
    imageWidth:number=50;
    imageMargin:number =2;
    showImage:Boolean = false;
    formFilter:string = 'Cart';
    products: IProduct[] = [{
        "productId":1,
        "productName" : "Garden Cart",
        "productCode":"GDN-0023",
        "releaseDate":"March 18,2017",
        "description":"Added a new Clip 2 in between the existing clips 1 and 2 that uses the CLI to create the Product Detail component, discusses how to handle undefined values, and adds the Welcome component (These new components are required to demonstrate routing)",
        "price":32.99,
        "starRating":4.2,
        "imageUrl" : "https://openclipart.org/image/300px/svg_to_png/58471/garden-cart.png"
    },
    {
        "productId":2,
        "productName" : "Hammer",
        "productCode":"TBX-0048",
        "releaseDate":"March 21,2017",
        "description":"Updated all slides and demos that include display of the application folder structure, show relative paths, show changed selectors, reflect prior code changes, or could use the VS Code quick fix",
        "price":8.99,
        "starRating":4.8,
        "imageUrl" : "https://openclipart.org/image/300px/svg_to_png/189968/1389256751.png"
    }];

    toggleImage():void{
        this.showImage = ! this.showImage;
    }
}