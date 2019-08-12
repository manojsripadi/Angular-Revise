import { CanActivate, ActivatedRoute, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';


export class AuthGuard implements CanActivate{
    isLoggedIn: boolean = false;
    canActivate(route:ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<boolean> | Promise<boolean> | boolean{
        if(this.isLoggedIn){
            return true
        } else {
            return false
        }
    }
}