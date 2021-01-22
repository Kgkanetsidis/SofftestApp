import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

import { UserGuard } from '../guard/user.guard';

const routes: Routes = [
  { path: 'product', component: ProductComponent, canActivate: [ UserGuard] },
  { path: 'product/:id', component: ProductDetailsComponent, canActivate: [ UserGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
