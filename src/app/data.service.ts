import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Customer } from './customer';
import { CUSTOMERS } from './mook-customers';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getCustomers(): Observable<Customer[]> {
    return of(CUSTOMERS);
  }
}
