import { Pipe, PipeTransform } from '@angular/core';
import {Products} from "./products";

@Pipe({
  name: 'textFilter'
})
export class TextFilterPipe implements PipeTransform {


  transform(products: Products[], text: string): Products[] {
    if(text == null || text == ''){
      return products;
    }
    return products.filter(p => p.productName.includes(text) || p.productModel.includes(text));
  }

}
