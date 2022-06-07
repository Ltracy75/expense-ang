import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeCreateComponent } from './employee/employee-create/employee-create.component';
import { EmployeeCreatenewComponent } from './employee/employee-createnew/employee-createnew.component';
import { EmployeeDetailComponent } from './employee/employee-detail/employee-detail.component';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeLoginComponent } from './employee/employee-login/employee-login.component';
import { ExpenseApproveComponent } from './expense/expense-approve/expense-approve.component';
import { ExpenseCreateComponent } from './expense/expense-create/expense-create.component';
import { ExpenseDetailComponent } from './expense/expense-detail/expense-detail.component';
import { ExpenseEditComponent } from './expense/expense-edit/expense-edit.component';
import { ExpenseLineComponent } from './expense/expense-line/expense-line.component';
import { ExpenseListComponent } from './expense/expense-list/expense-list.component';
import { ExpenseReviewComponent } from './expense/expense-review/expense-review.component';
import { ExpenselineCreateComponent } from './expenseline/expenseline-create/expenseline-create.component';
import { ExpenselineEditComponent } from './expenseline/expenseline-edit/expenseline-edit.component';
import { ExpenseLine } from './expenseline/expenseline.class';
import { ItemCreateComponent } from './item/item-create/item-create.component';
import { ItemDetailComponent } from './item/item-detail/item-detail.component';
import { ItemEditComponent } from './item/item-edit/item-edit.component';
import { ItemListComponent } from './item/item-list/item-list.component'


const routes: Routes = [
    { path: "", redirectTo: "empl/login", pathMatch: "full"},
    
    { path: "empl/list", component: EmployeeListComponent},
    { path: "empl/detail/:id", component: EmployeeDetailComponent},
    { path: "empl/create", component: EmployeeCreateComponent},
    { path: "empl/edit/:id", component: EmployeeEditComponent},
    { path: "empl/login", component: EmployeeLoginComponent},
    { path: "empl/createnew", component: EmployeeCreatenewComponent},

    { path: "exp/list", component: ExpenseListComponent},
    { path: "exp/create", component: ExpenseCreateComponent},
    { path: "exp/edit/:id", component: ExpenseEditComponent},
    { path: "exp/detail/:id", component: ExpenseDetailComponent},
    { path: "exp/line/:id", component: ExpenseLineComponent},
    { path: "exp/review", component: ExpenseReviewComponent},
    { path: "exp/approve", component: ExpenseApproveComponent},

    { path: "item/list", component: ItemListComponent},
    { path: "item/create", component: ItemCreateComponent},
    { path: "item/edit/:id", component: ItemEditComponent},
    { path: "item/detail/:id", component: ItemDetailComponent},

    { path: "expenseline/edit/:id", component: ExpenselineEditComponent},
    { path: "expenseline/create/:eid", component: ExpenselineCreateComponent},

    { path: "**", component: EmployeeListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }