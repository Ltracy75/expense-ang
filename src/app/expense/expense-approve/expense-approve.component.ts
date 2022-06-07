import { Component, OnInit } from '@angular/core';
import { Expense } from '../expense.class';
import { ExpenseService } from '../expense.service';

@Component({
  selector: 'app-expense-approve',
  templateUrl: './expense-approve.component.html',
  styleUrls: ['./expense-approve.component.css']
})
export class ExpenseApproveComponent implements OnInit {

  expenses!: Expense[];

  constructor(private expsvc: ExpenseService
    ) { }

    

  ngOnInit(): void {
    this.expsvc.getApproved().subscribe({
      next: (res) => {console.debug("Expenses", res);
       this.expenses = res},
       
      error: (err) => {console.log(err);} 
    }    );
  }

}