import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../shared/product.service';
import { IProduct } from './product';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute,
    private router: Router,
    private productService: ProductService) { }

  product: IProduct | undefined;
  errorMessage: string = "";
  pageTitle: string = "product-detail works";

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.paramMap.get('id');
    if (id) {
      this.getProducts(id);
    }
  }
  getProducts(id: string) {
    this.productService.getProductsHttp().subscribe({
      next: onNext => {
        this.product = onNext.filter(p => p.productId == Number(id))[0];
      },
      error: err => this.errorMessage = err.errorMessage
    })
  }



}
