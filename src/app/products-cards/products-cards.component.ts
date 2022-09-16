import { Component, OnInit } from '@angular/core';
import {Products} from "../core/models/products";
import {ProductsService} from "../core/service/products.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-products-cards',
  templateUrl: './products-cards.component.html',
  styleUrls: ['./products-cards.component.css']
})
export class ProductsCardsComponent implements OnInit {

  products: Products[];
  searchText: string;
  searchText2: string;

  constructor(private productsService: ProductsService,
              private router: Router) { }

  ngOnInit(): void {
    this.getProduct()
  }
  private getProduct(){
    this.productsService.getProducts().subscribe((data: any) => {
      this.products = data.content;
    });
  }
  searchProducts(keyword: string){
    this.productsService.searchProducts(keyword).subscribe((data: any) => {
      this.products = data.content;
    })
  }
  updateProduct(id: number){
    this.router.navigate(['update-product', id]);
  }
  deleteProduct(id: number){
    this.productsService.deleteProduct(id).subscribe(data => {
      this.getProduct();
    })
  }
  sortProduct(sortBy: string){
    this.productsService.sortProduct(sortBy).subscribe((data: any) => {
      this.products=data.content;
    });
  }
}
