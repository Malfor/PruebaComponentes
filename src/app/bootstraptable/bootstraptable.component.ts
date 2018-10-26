import { Component, OnInit } from '@angular/core';

import { Customer } from '../customer';

import { DataService } from '../data.service';

@Component({
  selector: 'app-bootstraptable',
  templateUrl: './bootstraptable.component.html',
  styleUrls: ['./bootstraptable.component.css'],
  providers: [DataService]
})
export class BootstraptableComponent implements OnInit {
  customers2: Customer[];
  selectedCustomer2: Customer;
  constructor(private dataService: DataService) {}

  getCustomer( ) {
    return this.dataService.getCustomers().subscribe(customers2 => this.customers2 = customers2);
  }

  ngOnInit(): void {
    this.getCustomer();
  }

  onSelect(cust: Customer): void {
    this.selectedCustomer2 = cust;
  }

}
