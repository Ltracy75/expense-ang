import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: Menu[] = [
    new Menu("Employees", "/empl/list"),
    new Menu("Expense", "/exp/list"),
    new Menu("Items", "/item/list"),
    new Menu("Expenses in Review", "/exp/review"),
    new Menu("Approved Expenses", "/exp/approve")
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
