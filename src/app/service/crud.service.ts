import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurdService {
  private userDataSource = new BehaviorSubject<any>(null);
  userData = this.userDataSource.asObservable();
  constructor() { }
  setUserData(data: any) {
    this.userDataSource.next(data);
  }
  getUserData() {
    return this.userData;
  }
}
