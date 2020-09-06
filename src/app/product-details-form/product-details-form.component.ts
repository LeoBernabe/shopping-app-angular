import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { ProductModel } from '../product-model';
import { FormBuilder } from '@angular/forms';
import { ProductService } from '../product-service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-product-details-form',
  templateUrl: './product-details-form.component.html',
  styleUrls: ['./product-details-form.component.scss']
})
export class ProductDetailsFormComponent implements OnInit {

  product: ProductModel = null;
  productForm;

  constructor(
      private formBuilder: FormBuilder, 
      private productService: ProductService,
      private toastr: ToastrService,  
      private route: ActivatedRoute,
      private router: Router
    ) { 
      this.productForm = this.formBuilder.group({
        productName: '',
        productDescription: '',
        productPrice: '',
      });
    }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap(params => {
        if(params.get('id'))
          return this.productService.getProduct(params.get('id')) 
        return of(null)
      })
    ).subscribe(product => {
      if(product && product != null){
        this.product = product;
        this.productForm = this.formBuilder.group({
          productName: product.productName,
          productDescription: product.productDescription,
          productPrice: product.productPrice,
        });
      }
    });
  }

  submitProduct(_product){
    if(this.product && this.product != null){
      this.productService.updateProduct(this.product.id, _product).subscribe(res =>{
        this.toastr.success('Success', 'Update Result');
        this.router.navigate(['/product-list']);
      },error => {      
        this.toastr.error('updateProduct error', 'Save Result');
      });
    }else{
      this.productService.saveProduct(_product).subscribe(res =>{
        this.toastr.success('Success', 'Save Result');
        this.router.navigate(['/product-list']);
      },error => {
        this.toastr.error('saveProduct error', 'Save Result');
      });
    }
  }
}
