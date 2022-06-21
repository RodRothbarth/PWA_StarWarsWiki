import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {ApiCallsService} from "../services/api-calls.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn:'root'
})
export class AppComponentResolver implements Resolve<any>{
  constructor(
    private apiService: ApiCallsService
  ){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>{
    return this.apiService.sideBarOptions()
  }
}
