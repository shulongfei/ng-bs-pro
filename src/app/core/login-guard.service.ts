import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {
  constructor(private router: Router,
    private authService: AuthService) { }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log({ next, state });
    let url: string = state.url;
    console.log(this.authService.getToken(), 111111111111);
    if (this.authService.getToken()) {
      if (url === '/login') {
        this.router.navigate(['/dashboard']);
        console.log(11111);
      }
    } else {
      this.router.navigate(['/login']);
      console.log(1111);
    }
    return true;
  }
}