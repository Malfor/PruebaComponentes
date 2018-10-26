import { Component, OnInit } from '@angular/core';

import { Customer } from './customer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  customers: Customer[];
  selectedCustomer: Customer;

  constructor() {}

  getCustomer( ) {
    return [
      new Customer(1, 'Mary', 'Taylor', 24),
      new Customer(2, 'Rodolfo', 'Edinson', 24),
      new Customer(3, 'Quennis', 'Dayan', 29),
      new Customer(4, 'Carlos', 'Daneys', 25)
    ];
  }

  ngOnInit(): void {
    this.customers = this.getCustomer();
  }

  onSelect(cust: Customer): void {
    this.selectedCustomer = cust;
  }

}
