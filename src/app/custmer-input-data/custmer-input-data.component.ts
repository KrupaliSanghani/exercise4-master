import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CustomerDisplayDataComponent } from '../customer-display-data/customer-display-data.component';
import { ChangeDetectorRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { CustomerDataService } from '../customer-data.service';



@Component({
  selector: 'app-custmer-input-data',
  templateUrl: './custmer-input-data.component.html',
  styleUrls: ['./custmer-input-data.component.css']
})
export class CustmerInputDataComponent implements OnInit {
  @ViewChild(CustomerDisplayDataComponent) CustomerDisplayDataComponent!: CustomerDisplayDataComponent;



  // ------take inputs------------
  customerName: string = '';
  customerEmail: string = '';
  customerAddress: string = '';
  customerStatus: string = '';


  // -----display validation error---------
  // nameError: string = 'Enter Name';
  // emailError: string = 'Enter valid Email';
  emailExists: string = 'Email already exists.';

  // validName: boolean = false;
  // validEmail: boolean = true;
  // validAddress: boolean = false;
  existsEmail: boolean = false;

  // ------edit data------
  editMode: boolean = false;

  // -------store customer data---------
  customerArr = [];
  customerForm: FormGroup;

  // ------------take address value from another component----
  getAddress(val: string) {
    this.customerAddress = val;
  }


  constructor(private cdref: ChangeDetectorRef) { }


  ngOnInit(): void {
    this.customerForm = new FormGroup({
      'customerName': new FormControl(null, Validators.required),
      'customerEmail': new FormControl(null, [Validators.required, Validators.email]),
    })
  }


  // ----------check email validation-----------
  // ckeckEmail() {
  //   this.customerEmail.match("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$") ? (this.validEmail = true) : (this.validEmail = false);
  // }

  // // ----------check name validation-----------
  // ckeckName() {
  //   this.customerName == ' ' ? (this.validName = true) : (this.validName = false);
  // }


  // ----------By default sort----------

  sort(property: any) {
    this.CustomerDisplayDataComponent.isDesc = false;
    this.CustomerDisplayDataComponent.sortData(property);
    // console.log(this.CustomerDisplayDataComponent.sortData(property));
  }


  // ------------submit customer data---------
  onSubmit() {


    // console.log(this.customerForm.value.customerName, this.customerForm.value.customerEmail);
    // console.log(this.customerArr);

    // ----------check validation-----------
    // let emailVal = this.customerArr.find(element => element.Email == this.customerEmail);
    let emailVal = this.customerArr.find(element => element.Email == this.customerForm.value.customerEmail);
    console.log(emailVal);
    console.log(this.customerForm.value);

    // if (this.customerEmail.match("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$") && this.customerName !== ' ') {

    // --------------for update data--------

    if (this.editMode) {
      const customerChangeArr = []

      this.editMode = true;
      customerChangeArr.push({ Name: this.customerForm.value.customerName, Email: this.customerForm.value.customerEmail, Status: this.customerStatus, Address: this.customerAddress });
      this.customerArr = this.customerArr.map(obj => customerChangeArr.find(o => o.Email === obj.Email) || obj);
      // console.log(customerChangeArr);

      // ---------for reset value-------
      this.customerForm.reset();
      // this.customerName = '';
      // this.customerEmail = '';
      this.customerAddress = '';
      this.editMode = false;
    }

    // -------------for submit data----------
    else if (!emailVal) {

      // -----------pass customer data to customer display component------------
      this.customerArr.push({ Name: this.customerForm.value.customerName, Email: this.customerForm.value.customerEmail, Status: this.customerStatus, Address: this.customerAddress });
      // this.customerdata.addToService({ Name: this.customerName, Email: this.customerEmail, Status: this.customerStatus, Address: this.customerAddress });
      this.existsEmail = false;
      console.log(this.customerArr);

      // ---------for reset value-------
      this.customerForm.reset();
      this.customerName = '';
      this.customerEmail = '';
      this.customerAddress = '';
    }
    else if (emailVal) {
      this.editMode = false;
      this.existsEmail = true;
    }

    // }

  }

  // ------for Edit Data---------

  editName(val) {
    this.editMode = true;

    this.customerForm.setValue({
      customerName: val.Name,
      customerEmail: val.Email,
    })
    this.customerAddress = val.Address;
    this.customerStatus = val.Status;
    console.log(val.Status)
  }

}


