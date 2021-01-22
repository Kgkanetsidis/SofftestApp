import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryComponent } from './category/category.component';
import { CategoryAddComponent } from './category/category-add/category-add.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { MaterialSharedModule } from '../material-shared/material-shared.module';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AdminProductComponent } from './admin-product/admin-product.component';
import { AdminOrderComponent } from './admin-order/admin-order.component';
import { AdminOrderListComponent } from './admin-order/admin-order-list/admin-order-list.component';
import { AdminOrderUpdateComponent } from './admin-order/admin-order-update/admin-order-update.component';


@NgModule({
  declarations: [DashboardComponent, CategoryComponent, CategoryAddComponent, CategoryListComponent, ProductAddComponent, ProductListComponent, AdminProductComponent, AdminOrderComponent, AdminOrderListComponent, AdminOrderUpdateComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialSharedModule
  ]
})
export class AdminModule { }
