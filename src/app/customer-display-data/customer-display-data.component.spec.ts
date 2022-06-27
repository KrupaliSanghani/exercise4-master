import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDisplayDataComponent } from './customer-display-data.component';

describe('CustomerDisplayDataComponent', () => {
  let component: CustomerDisplayDataComponent;
  let fixture: ComponentFixture<CustomerDisplayDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerDisplayDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDisplayDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
