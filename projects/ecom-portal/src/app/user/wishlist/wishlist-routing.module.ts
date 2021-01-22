import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WishlistComponent } from './wishlist.component';

import { UserGuard } from '../guard/user.guard';

const routes: Routes = [
  { path: 'wishlist', component: WishlistComponent, canActivate: [ UserGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WishlistRoutingModule { }
