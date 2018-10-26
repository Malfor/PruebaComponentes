import { Injectable } from '@angular/core';

import { Customer } from './customer';
import { CUSTOMERS } from './mook-customers';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getCustomers(): Promise<Customer[]> {
    return Promise.resolve(CUSTOMERS);
  }
}
