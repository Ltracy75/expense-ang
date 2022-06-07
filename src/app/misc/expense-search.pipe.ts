import { Pipe, PipeTransform } from '@angular/core';
import { Expense } from '../expense/expense.class';

@Pipe({
  name: 'expenseSearch'
})
export class ExpenseSearchPipe implements PipeTransform {


  transform(exps: Expense[], search: string =""): Expense[] {
    if(search.length == 0) 
    return exps;
    search = search.toLowerCase();
    let selectedExpenses: Expense[] = [];

    for(let e of exps) {
      if(e.desc.toLowerCase().includes(search)
          || e.employee.name.toLowerCase().includes(search) || e.status.toLowerCase().includes(search) )
      {selectedExpenses.push(e)};
    }
    return selectedExpenses
  }
  //can only do this in a list.
  
}