import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateGuard implements CanLoad {

  constructor(private router: Router) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    const state = segments[0].path;
    const isValidState = /^(on|off)$/.test(state);
    if (!isValidState) {
      this.router.navigate([
        { outlets: { bulb: 'off' }}
      ]);
      return false;
    }
    return true;
  }
}

