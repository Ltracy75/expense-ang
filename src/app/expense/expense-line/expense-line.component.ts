import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/employee/employee.class';
import { ExpenseLine } from 'src/app/expenseline/expenseline.class';
import { ExpenselineService } from 'src/app/expenseline/expenseline.service';
import { Expense } from '../expense.class';
import { ExpenseService } from '../expense.service';

@Component({
  selector: 'app-expense-line',
  templateUrl: './expense-line.component.html',
  styleUrls: ['./expense-line.component.css']
})
export class ExpenseLineComponent implements OnInit {

  exp!: Expense;
  message: string = "";

  constructor(
    private expsvc: ExpenseService,
    private explinesvc: ExpenselineService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  submit(): void {
    this.expsvc.review(this.exp).subscribe({
      next: (res) => {
        console.debug("Expense:", res);
        this.refresh();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  pay(expense: Expense): void {
    this.message = "";
    this.expsvc.payExpense(expense.id).subscribe({
      next: (res) => {
        console.debug("Expense paid:", res);
        this.refresh();
      },
      error: (err) => {
        if(err.status == 400) {
          this.message = "Alert: Expense must be approved before being paid";
        }
        console.error("Expense must be approved before being paid", err);
      }
    });
  }

  edit(expl: ExpenseLine): void {
    this.router.navigateByUrl(`/expenseline/edit/${expl.id}`);
  }

  remove(expl: ExpenseLine): void {
    this.explinesvc.remove(expl.id).subscribe({
      next: (res) => {
        console.debug("Expenseline Deleted!");
        this.refresh();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  refresh(): void {
    let id: number = +this.route.snapshot.params["id"];
    this.expsvc.get(id).subscribe({
      next: (res) => {
        console.debug("Expense:", res);
        this.exp = res;
      },
      error: (err) => {
        console.error(err);
      }

    });

  }

  ngOnInit(): void {
    this.refresh();



    let id: number = +this.route.snapshot.params["id"];
    this.expsvc.get(id).subscribe({
      next: (res) => {
        console.debug("Expense:", res);
        this.exp = res;
      },
      error: (err) => {
        console.error(err);
      }

    });

  }
}