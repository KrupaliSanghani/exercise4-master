import { NgModule } from '@angular/core';
import { FormsModule, } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
// import { CustomerDataService } from './customer-data.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustmerInputDataComponent } from './custmer-input-data/custmer-input-data.component';
import { CustomerDisplayDataComponent } from './customer-display-data/customer-display-data.component';
import { AddressComponent } from './address/address.component';
import { UnlessDirective } from './unless.directive';
import { DataComponent } from './data/data.component';
import { TextColorDirective } from './text-color.directive';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CustmerInputDataComponent,
    CustomerDisplayDataComponent,
    AddressComponent,
    UnlessDirective,
    DataComponent,
    TextColorDirective,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
