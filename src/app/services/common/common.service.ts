import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private toggleSource = new Subject<any>();
  navToggled$ = this.toggleSource.asObservable();
  private isSidebarEnabled = new BehaviorSubject<boolean>(false);
  sidebarData = this.isSidebarEnabled.asObservable();

  private isSidebarDisabled = new BehaviorSubject<boolean>(true);
  sidebarDataLogout = this.isSidebarDisabled.asObservable();

  constructor() {}

  toggleMenu() {
    this.toggleSource.next(true);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('currentUser') ? true : false;
  }

  enableSidebar(data: boolean) {
    this.isSidebarEnabled.next(data);
  }

  disableSidebar(data: boolean) {
    this.isSidebarDisabled.next(data);
  }

  login(email: string, password: string): Observable<boolean> {
    // if email is valid (matches regex) and password length > 0
    const user = {
      email: email,
      password: password
    };
    localStorage.setItem('currentUser', JSON.stringify(user));
    return of(true);
  }
  // removes the current user from local storage when user logout
  logout(): void {
    /*
      HERE YOU NEED TO MAKE A CALL TO YOUR API TO INVALIDATE THE USER'S AUTHENTICATION TOKEN.
    */
    localStorage.clear();
  }

  // set item to Storage
    setStorageItem(ItemName, ItemValue) {
        // localStorage.setItem(ItemName, ItemValue);
        localStorage.setItem(ItemName, ItemValue);
    }

    // get specific item from Storage
    getStorageItem(itemName) {
        // return localStorage.getItem(itemName);
        return localStorage.getItem(itemName);
    }

    getDeviceStorageList(){
     return  JSON.parse( this.getStorageItem('deviceList'));
    }
}
