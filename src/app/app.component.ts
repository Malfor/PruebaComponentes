import { Component, OnInit } from '@angular/core';

import { Customer } from './customer';

import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent implements OnInit {

  customers: Customer[];
  selectedCustomer: Customer;

  constructor(private dataService: DataService) {}

  getCustomer( ) {
    return this.dataService.getCustomers().subscribe(customers => this.customers = customers);
  }

  ngOnInit(): void {
    this.getCustomer();
  }

  onSelect(cust: Customer): void {
    this.selectedCustomer = cust;
  }

}
