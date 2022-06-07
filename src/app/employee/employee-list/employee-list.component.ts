import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee.class';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees!: Employee[];
  seachCriteria: string = "";
  constructor(
    private emplsvc: EmployeeService
    ) { }

  ngOnInit(): void {
    this.emplsvc.list().subscribe({
      next: (res) => {console.debug("Employees", res);
       this.employees = res},
       
      error: (err) => {console.log(err);} 
    }    );
  }

}
