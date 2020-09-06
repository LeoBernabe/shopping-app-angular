import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product-service'
import { ProductModel } from '../product-model';
import { _ } from 'lodash';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  productList: ProductModel[];

  constructor(
    private productService: ProductService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.loadProductList();
  }

  loadProductList(){
    this.productService.getProductList().subscribe(res => this.productList=res)
  }

  deleteProduct(id){
    this.productService.deleteProduct(id).subscribe(res =>{
      this.toastr.success('Success', 'Delete Result');
      this.loadProductList();
    },error => {
      this.toastr.error('deleteProduct error', 'Save Result');
    });
  }
}
