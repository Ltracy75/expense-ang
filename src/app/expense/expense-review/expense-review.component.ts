import { Component, OnInit } from '@angular/core';
import { Expense } from '../expense.class';
import { ExpenseService } from '../expense.service';

@Component({
  selector: 'app-expense-review',
  templateUrl: './expense-review.component.html',
  styleUrls: ['./expense-review.component.css']
})
export class ExpenseReviewComponent implements OnInit {

  expenses!: Expense[];
      

  constructor(private expsvc: ExpenseService
    ) { }

  ngOnInit(): void {
    this.expsvc.reviewlist().subscribe({
      next: (res) => {console.debug("Expenses", res);
       this.expenses = res},
       
      error: (err) => {console.log(err);} 
    }    );
  }

}
