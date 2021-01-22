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
import { EncDecService } from '@lips/common';
import { state } from '@angular/animations';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard
  implements CanActivate, CanActivateChild, CanDeactivate<unknown>, CanLoad {

constructor(private encService: EncDecService,
             private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
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
        this.navigateToLogin(state);
      }
    }else{
      this.navigateToLogin(state);
    }


  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return true;
  }
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return true;
  }


navigateToLogin(state: RouterStateSnapshot){
  this.router.navigate(['.login', {queryParams: {returnUrl: state.url}}]);
  return false;
}

}
