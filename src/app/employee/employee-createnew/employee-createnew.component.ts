import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee.class';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-createnew',
  templateUrl: './employee-createnew.component.html',
  styleUrls: ['./employee-createnew.component.css']
})
export class EmployeeCreatenewComponent implements OnInit {
  message: string = "";
  employee: Employee = new Employee();

  constructor(
    
    private emplsvc: EmployeeService,
    private router: Router
  ) {}

  save(): void {
    this.message = "";
    console.debug("B4:", this.employee);
    this.emplsvc.create(this.employee).subscribe({
        next: (res) => {
        console.debug("Employee created!");
        this.router.navigateByUrl("empl/login")
      },
      error: (err) => { if(err.status == 404) {
        this.message = "All Fields Required to be filled invalid";
      }
      else {console.error(err);
       } 
    }
      
    })
  }

  ngOnInit(): void {
  }
}
