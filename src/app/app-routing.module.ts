import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsFormComponent } from './product-details-form/product-details-form.component';


const routes: Routes = [
  { path: 'product-list', component: ProductListComponent },
  { path: 'product-form', component: ProductDetailsFormComponent },
  { path: 'product-form/:id', component: ProductDetailsFormComponent },
  { path: '',
    redirectTo: '/product-list',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
