import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService implements Resolve<any> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>{
    const userId = route.paraMap.get('id');
    return of({message: 'Resolved data', userId: 'userId'})
  }
  constructor() { }
}
