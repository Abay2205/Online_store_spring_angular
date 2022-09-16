import { Component, OnInit } from '@angular/core';
import {Products} from "../../core/models/products";
import {ProductsService} from "../../core/service/products.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  products: Products = new Products();

  constructor(private productService: ProductsService,
              private router: Router) { }

  ngOnInit(): void { }
    saveProduct(){
      this.productService.createProduct(this.products).subscribe(data => {
        this.goToProducts();
      }, error => console.log(error));
    }
    goToProducts(){
      this.router.navigate(['/products'])
    }
    onSubmit(){
    this.saveProduct();
    }


}
