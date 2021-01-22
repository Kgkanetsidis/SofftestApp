import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AdminGuard } from './guard/admin.guard';
import { CategoryComponent } from './category/category.component';
import { AdminProductComponent } from './admin-product/admin-product.component';
import { AdminOrderComponent } from './admin-order/admin-order.component';
import { OrderUpdateComponent } from './admin-order/admin-order-update/admin-order-update.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate: [ AdminGuard] },
  { path: 'category', component: CategoryComponent, canActivate: [ AdminGuard] },
  { path: 'product', component: AdminProductComponent, canActivate: [ AdminGuard] },
  { path: 'order', component: AdminOrderComponent, canActivate: [ AdminGuard] },
  { path: 'order/:id', component: OrderUpdateComponent, canActivate: [ AdminGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
