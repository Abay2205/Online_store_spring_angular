import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../core/service/products.service";
import {Products} from "../../core/models/products";
import {ActivatedRoute, Router} from "@angular/router";
import {FileService} from "../../core/service/file.service";
import {HttpErrorResponse, HttpEvent, HttpEventType} from "@angular/common/http";
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  id: number;
  products: Products = new Products();


  constructor(private productService: ProductsService,
              private route: ActivatedRoute,
              private router: Router,
              private fileService: FileService) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.productService.getProductById(this.id).subscribe(data => {
      this.products = data;
    }, error => console.log(error))
  }

  onSubmit() {
    this.productService.updateProduct(this.id, this.products).subscribe(data => {
      this.gotToProducts();
    }, error => console.log(error));
  }

  gotToProducts() {
    this.router.navigate(['/products-cards']);
  }


  onUploadFiles(files: File[]): void {
    const formData = new FormData();
    for (const file of files) { formData.append('files', file, file.name); }
    console.log(formData);
    this.fileService.upload(formData).toPromise().then((image)=> {
      console.log('x = ',image.id)
      console.log(image)
      this.products.productImageId = image.id;
      console.log(this.products.productImageId)
    })
  }

  onDownloadFile(filename: string): void {
    this.fileService.download(filename).subscribe((data: any) => {
      this.products = data.content;
      }

    )
  }


}
