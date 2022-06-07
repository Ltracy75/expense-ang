import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpenseService } from 'src/app/expense/expense.service';
import { Item } from 'src/app/item/item.class';
import { ItemService } from 'src/app/item/item.service';
import { ExpenseLine } from '../expenseline.class';
import { ExpenselineService } from '../expenseline.service';


@Component({
  selector: 'app-expenseline-create',
  templateUrl: './expenseline-create.component.html',
  styleUrls: ['./expenseline-create.component.css']
})
export class ExpenselineCreateComponent implements OnInit {

  expenseline: ExpenseLine = new ExpenseLine(); 
  items!: Item[];

  constructor(
    private explinesvc: ExpenselineService,
    private router: Router,
    private expsvc: ExpenseService,
    private itemsvc: ItemService,
    private route: ActivatedRoute
  ) { }

  save(): void {
    this.expenseline.itemId = +this.expenseline.itemId;
    console.debug("B4:", this.expenseline);
    this.explinesvc.create(this.expenseline).subscribe({
      next: (res) => {
        console.debug("ExpenseLine created!");
        this.router.navigateByUrl(`/exp/line/${this.expenseline.expenseId}`)
      },
      error: (err) => {console.log(err);} 
      
    })
  }

  ngOnInit(): void {

    this.itemsvc.list().subscribe({
      next: (res) => {
        console.debug(res);
        this.items = res;
      },
      error: (err) => {
        console.error(err);
      }
      
    });
    this.expenseline.expenseId = +this.route.snapshot.params["eid"];
  }

}
