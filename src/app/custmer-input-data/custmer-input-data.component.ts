import { Component, OnInit, } from '@angular/core';
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

  validName: boolean = false;
  validEmail: boolean = true;
  validAddress: boolean = false;
  valid: string;


  // -------store customer data---------
  customerArr = [];
  getEditArr = [];
  customerChangeArr = [];
  editMode: boolean = false;
  isDesc: boolean = true;


  // ------------take address value from another component----
  getAddress(val: string) {
    this.customerAddress = val;
  }


  // sortArr = [];


  // constructor(private customerdata: CustomerDataService) { }

  ngOnInit(): void {
    // console.log(this.getEditArr);
    // console.log(this.getEditArr)
    // this.getEditArr = this.customerdata.getEdit();
    // this.customerName = this.getEditArr.Data
    // console.log();
  }

  // ----------check email validation-----------
  ckeckEmail() {
    this.valid = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
    if (this.customerEmail.match(this.valid)) {
      this.validEmail = true;

    }
    else {
      this.validEmail = false;

    }
  }



  // ------------submit customer data---------
  onSubmit() {



    // ----------check email validation-----------

    if (this.customerEmail.match(this.valid) && this.customerName !== ' ') {

      this.validName = false;

      if (this.editMode) {
        console.log('edit');
        // this.editMode = false;
        this.editMode = true;
        this.customerChangeArr.push({ Name: this.customerName, Email: this.customerEmail, Status: this.customerStatus, Address: this.customerAddress });

        this.customerArr = this.customerArr.map(obj => this.customerChangeArr.find(o => o.Email === obj.Email) || obj);



        // console.log(this.customerChangeArr);
        // this.customerArr = this.customerArr.filter(Arr => Arr.Email == this.customerChangeArr);
        // this.customerArr.map(obj => this.customerArr.find(o => o.Email === obj.Email) || obj)

        console.log(this.customerArr);
        // this.customerArr.push({ Name: this.customerName, Email: this.customerEmail, Status: this.customerStatus, Address: this.customerAddress })
        this.editMode = false;
      }
      else {

        // -----------pass customer data to customer display component------------


        // this.sortArr.push({ Name: this.customerName, Email: this.customerEmail, Status: this.customerStatus, Address: this.customerAddress });

        // this.sortArr.sort(function (a, b) {
        //   const nameA = a.customerName();
        //   const nameB = b.customerName();
        //   if (nameA < nameB) {
        //     return -1
        //   }
        //   if (nameA > nameB) {
        //     return 1;
        //   }
        //   return 0;
        // return a.customerName - b.customerName;
        // });




        // sortName(property: string) {
        //   this.isDesc = !this.isDesc;

        //   let direction = this.isDesc ? 1 : -1;
        //   this.displayArr.sort(function (a, b) {
        //     if (a[property] < b[property]) {
        //       return -1 * direction;
        //     }
        //     else if (a[property] > b[property]) {
        //       return 1 * direction;
        //     }
        //     else {
        //       return 0;
        //     }
        //   });
        // }

        // console.log(this.sortArr);
        this.customerArr.push({ Name: this.customerName, Email: this.customerEmail, Status: this.customerStatus, Address: this.customerAddress });
        // this.customerdata.addToService({ Name: this.customerName, Email: this.customerEmail, Status: this.customerStatus, Address: this.customerAddress });
        // console.log(this.customerArr);

        // this.isDesc = true;

        // let direction = this.isDesc ? 1 : -1;
        // this.customerArr.sort(function (a, b) {
        //   if (a[property] < b[property]) {
        //     return -1 * direction;
        //   }
        //   else if (a[property] > b[property]) {
        //     return 1 * direction;
        //   }
        //   else {
        //     return 0;
        //   }
        // });
        console.log('submit');
      }
    }

    else {
      // -----display validation error---------
      this.validName = true;
      console.log(this.validName);
    }

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
