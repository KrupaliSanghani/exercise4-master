import { Component, Input, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';
// import { CustomerDataService } from '../customer-data.service';


@Component({
  selector: 'app-customer-display-data',
  templateUrl: './customer-display-data.component.html',
  styleUrls: ['./customer-display-data.component.css']
})
export class CustomerDisplayDataComponent implements OnInit, OnChanges {
  @Input() displayArr = [];
  @Output() editData = new EventEmitter();

  status: string = 'All';
  // displayArr = [];

  displayInactiveArr = [];
  displayStatusArr = [];
  // -------sorting var------
  isDesc: boolean = true;
  Email: Boolean = true;
  Address: Boolean = true;


  // --------status dropdown-----
  statusArr: { id: number, name: string }[] = [
    { "id": 1, "name": "Active" },
    { "id": 2, "name": "Inactive" },
    { "id": 3, "name": "All" }
  ];

  // constructor(private customerdata: CustomerDataService) { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this.displayStatusArr = this.displayArr;
    console.log(this.displayStatusArr);
    console.log(this.displayStatusArr);
  }


  // ----------- filter by status------
  onStatus() {
    console.log(this.status);
    this.status == 'All' ? (this.displayStatusArr = this.displayArr) : (this.displayStatusArr = this.displayArr.filter(displayArr => displayArr.Status == this.status));

  }


  // ------for Edit Data---------
  onEdit(data: any) {
    console.log(this.editData);
    this.editData.emit(data);
  }

  // ---------------sorting by Name----------
  sortName(property: string) {
    this.isDesc = !this.isDesc;
    var direction = this.isDesc ? 1 : -1;
    this.displayArr.sort(function (a, b) {
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

  // ---------------sorting by email----------
  sortEmail(property: string) {
    this.Email = !this.Email;
    var direction = this.Email ? 1 : -1;
    this.displayArr.sort(function (a, b) {
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

  // ---------------sorting by address----------
  sortAddress(property: string) {
    this.Address = !this.Address;
    var direction = this.Address ? 1 : -1;
    this.displayArr.sort(function (a, b) {
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

}


