import { Injectable } from "@angular/core";
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { Observable } from "rxjs/Observable";
import { IProduct } from "./product";

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';


@Injectable()
export class ProductService {

    private serviceUrl:string ='./api/products/products.json';
    constructor(private http:HttpClient){

    }

    getProducts():Observable<IProduct[]>{
        return this.http.get<IProduct[]>(this.serviceUrl)
        .do(data=>console.log('All: ' + JSON.stringify(data)))
        .catch(this.handleError);
    }

    private handleError(err:HttpErrorResponse){
        console.log(err.message);
        return Observable.throw(err.message);
    }
}