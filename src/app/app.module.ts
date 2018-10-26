import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { DataService } from './data.service';
import { BootstrapjumbotronComponent } from './bootstrapjumbotron/bootstrapjumbotron.component';
import { BootstraptableComponent } from './bootstraptable/bootstraptable.component';
import { BootstrapmodalComponent } from './bootstrapmodal/bootstrapmodal.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerDetailsComponent,
    BootstrapjumbotronComponent,
    BootstraptableComponent,
    BootstrapmodalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
