import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  CanDeactivate,
  CanLoad,
  Route,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { EncDecService } from '@ecom/core';
import { state } from '@angular/animations';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard
  implements  CanLoad {

constructor(private encService: EncDecService,
            private router: Router){}


  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
      if (sessionStorage.getItem('role') != null) {
        const role = this.encService.decrypt(sessionStorage.getItem('role'), ' ');
        if (role === 'Admin'){
          return true;
        }else{
          return false;
        }
      }else{
        return false;
      }
  }




}
