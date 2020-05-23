import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PopupGuard implements CanLoad {

  constructor(private router: Router) {
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    if (!window.opener) {
      this.router.navigate([
        { outlets: { bulb: 'off' } }
      ]);
      return false;
    }
    return true;
  }
}
