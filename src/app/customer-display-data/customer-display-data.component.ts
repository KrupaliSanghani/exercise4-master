import { Component, Input, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';
// import { CustomerDataService } from '../customer-data.service';


@Component({
  selector: 'app-customer-display-data',
  templateUrl: './customer-display-data.component.html',
  styleUrls: ['./customer-display-data.component.css']
})
export class CustomerDisplayDataComponent implements OnInit, OnChanges {
  @Input() displayArr;
  @Output() editData = new EventEmitter();

  status = 'All';
  // displayArr = [];
  // editData;

  displayInactiveArr = [];

  isDesc = true;
  // direction = -1;



  statusArr: { id: number, name: string }[] = [
    { "id": 1, "name": "Active" },
    { "id": 2, "name": "Inactive" },
    { "id": 3, "name": "All" }
  ];


  //   statusArr() : Array<any> {return [
  //     { id: 1, name: "Active" },
  //     { id: 2, name: "Inactive" },
  //     { id: 2, name: "All" }
  //   ];
  // };


  // -----------for filter active and inactive------------
  isActive: boolean = false;
  isInactive: boolean = false;
  direction: number;

  // constructor(private customerdata: CustomerDataService) { }

  ngOnInit(): void {



    // onActive()

    // if (this.displayArr.Status == 'Active') {
    //   this.displayStatusArr = this.displayArr.filter((displayArr: { Status: string; }) => displayArr.Status == 'Active');
    // }
    // else if (this.displayArr.Status == 'Inactive') {
    //   this.displayStatusArr = this.displayArr.filter(displayArr => displayArr.Status == 'Inactive');
    // }


    // // this.displayStatusArr = this.displayArr.filter(displayArr => displayArr.Status == 'Inactive');
    // // this.displayStatusArr = this.displayArr;
    // console.log(this.displayStatusArr);


  }

  ngOnChanges() {
    this.displayStatusArr = this.displayArr;
    console.log(this.displayStatusArr);
    console.log(this.displayStatusArr);
  }

  displayStatusArr = [];

  onStatus() {

    console.log(this.status);

    this.status == 'All' ? (this.displayStatusArr = this.displayArr) : (this.displayStatusArr = this.displayArr.filter(displayArr => displayArr.Status == this.status));

    // 
    // this.displayStatusArr = this.displayArr.filter(displayArr => displayArr.Status == 'Inactive');
    // console.log(value);



    // if (this.status == 'Active') {
    //   this.displayStatusArr = this.displayArr.filter((displayArr: { Status: string; }) => displayArr.Status == 'Active');
    //   console.log(this.displayStatusArr);
    // }
    // else if (value == 'Inactive') {
    //   this.displayStatusArr = this.displayArr.filter(displayArr => displayArr.Status == 'Inactive');
    //   // console.log(this.displayStatusArr);
    // }


    // this.displayStatusArr = this.displayArr.filter(displayArr => displayArr.Status == 'Inactive');
    // this.displayStatusArr = this.displayArr;
    // console.log(this.displayStatusArr);

  }

  // ----------display inactive status-------
  // onInactive() {
  // this.status = false;
  // this.isActive = false;
  // this.isInactive = true;
  // console.log(this.displayArr);
  // this.displayStatusArr = this.displayArr.filter(displayArr => displayArr.Status == 'Inactive');

  // }

  // ----------display all status-------
  // onAll() {
  //   this.isActive = false;
  //   // this.isInactive = false;
  //   // this.status = true;
  //   console.log(this.displayArr);
  // }

  // ------for Edit Data---------
  onEdit(data: any) {
    console.log(this.editData);
    // this.customerdata.editval(data);
    this.editData.emit(data);
  }

  // ---------------sorting----------




  sortName(property: string) {
    this.isDesc = !this.isDesc;

    this.direction = this.isDesc ? 1 : -1;
    this.displayArr.sort(function (a, b) {
      if (a[property] < b[property]) {
        return -1 * this.direction;
      }
      else if (a[property] > b[property]) {
        return 1 * this.direction;
      }
      else {
        return 0;
      }
    });
  }




}


