import { Component, OnInit, } from '@angular/core';
import { subscribeOn } from 'rxjs';
// import { CustomerDataService } from '../customer-data.service';



@Component({
  selector: 'app-custmer-input-data',
  templateUrl: './custmer-input-data.component.html',
  styleUrls: ['./custmer-input-data.component.css']
})
export class CustmerInputDataComponent implements OnInit {


  // ------take inputs------------
  customerName: string = '';
  customerEmail: string = '';
  customerAddress: string = '';
  customerStatus: string = '';


  // -----display validation error---------
  nameError: string = 'Enter Name';
  emailError: string = 'Enter valid Email';
  emailExists: string = 'Email already exists.';

  validName: boolean = false;
  validEmail: boolean = true;
  validAddress: boolean = false;
  existsEmail: boolean = false;
  valid: string;
  isDesc: boolean = true;
  emailVal: string;
  emailArr = [];

  // ------edit data------
  editMode: boolean = false;

  // -------store customer data---------
  customerArr = [];
  customerChangeArr = [];



  // ------------take address value from another component----
  getAddress(val: string) {
    this.customerAddress = val;
  }

  // constructor(private customerdata: CustomerDataService) { }

  ngOnInit(): void {
    this.sortName('customerName');
  }


  // ----------check email validation-----------
  ckeckEmail() {
    this.valid = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
    if (this.customerEmail.match(this.valid)) {
      this.validEmail = true;
      console.log(this.emailArr);
    }
    else {
      this.validEmail = false;
    }
  }

  // ----------check name validation-----------
  ckeckName() {
    this.customerName == ' ' ? (this.validName = true) : (this.validName = false);
  }


  // ----------By default sort----------
  sortName(property: any) {
    var direction = this.isDesc ? 1 : -1;
    this.customerArr.sort(function (a, b) {
      if (a[property] < b[property]) {
        return -1 * direction;
      }
      else if (a[property] > b[property]) {
        return 1 * direction;
      }
      else {
        return 0;
      }
    });
  }


  // ------------submit customer data---------
  onSubmit() {


    // ----------check validation-----------
    this.emailVal = this.emailArr.find(element => element == this.customerEmail);
    this.emailArr.push(this.customerEmail);
    console.log(this.emailVal);

    if (this.customerEmail.match(this.valid) && this.customerName !== ' ') {

      // --------------for update data--------

      if (this.editMode) {
        this.editMode = true;
        this.customerChangeArr.push({ Name: this.customerName, Email: this.customerEmail, Status: this.customerStatus, Address: this.customerAddress });
        this.customerArr = this.customerArr.map(obj => this.customerChangeArr.find(o => o.Email === obj.Email) || obj);
        console.log(this.customerChangeArr);
        this.editMode = false;
      }

      // -------------for submit data----------
      else if (!this.emailVal) {

        // -----------pass customer data to customer display component------------
        this.customerArr.push({ Name: this.customerName, Email: this.customerEmail, Status: this.customerStatus, Address: this.customerAddress });
        // this.customerdata.addToService({ Name: this.customerName, Email: this.customerEmail, Status: this.customerStatus, Address: this.customerAddress });
        this.existsEmail = false;
        console.log(this.customerArr);
      }
      else if (this.emailVal) {
        this.editMode = false;
        this.existsEmail = true;
      }


    }

    // --------display Error--------

    // ---------for reset value-------
    this.customerName = '';
    this.customerEmail = '';
    this.customerAddress = '';
  }

  // ------for Edit Data---------

  editName(val) {
    this.editMode = true;
    this.customerName = val.Name;
    this.customerEmail = val.Email;
    this.customerAddress = val.Address;
    this.customerStatus = val.Status;
  }

}
