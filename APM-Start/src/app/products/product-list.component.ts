import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "../shared/product.service";


@Component({
  selector: 'pm-product',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductService) { }

  pageTitle = 'Product List';
  widthPx = 50;
  marginPx = 2;

  showImage: boolean = false;

  filterProducts: IProduct[] = [];

  private _filtered: string = '';

  ngOnInit(): void {
    this.productService.getProductsHttp().subscribe(
      {
        next: (onNext) => {this.products = onNext
          this.filterProducts = this.performFilter(this._filtered);},
        error: (error) => console.log(error.errorMessage),
        complete: () => console.log("Observable is completed")
      }
    );
  }

  get filtered(): string {
    return this._filtered;
  }

  set filtered(value: string) {
    this._filtered = value;
    this.filterProducts = this.performFilter(value);
  }

  products: IProduct[] = []

  imageToggle(): void {
    this.showImage = !this.showImage;
  }

  performFilter(value: string): IProduct[] {
    console.log("set mein aya");
    let hel: IProduct[] = this.products.filter((p: IProduct) => {
      console.log(p.productName.toLowerCase().includes(value.toLowerCase()))
      return p.productName.toLowerCase().includes(value.toLowerCase())
    });
    return hel;
  }

  values(data: string): void {
    console.log('parent container got the data  ' + data);
    this.pageTitle = "Product List" + data;
  }

}
