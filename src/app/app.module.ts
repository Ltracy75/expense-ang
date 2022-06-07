import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee/employee-detail/employee-detail.component';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';
import { EmployeeCreateComponent } from './employee/employee-create/employee-create.component';
import { AppRoutingModule } from './app-routing.module';
import { EmployeeLoginComponent } from './employee/employee-login/employee-login.component';
import { MenuComponent } from './misc/menu/menu/menu.component';
import { ExpenseListComponent } from './expense/expense-list/expense-list.component';
import { ExpenseEditComponent } from './expense/expense-edit/expense-edit.component';
import { ExpenseDetailComponent } from './expense/expense-detail/expense-detail.component';
import { ExpenseCreateComponent } from './expense/expense-create/expense-create.component';
import { ItemListComponent } from './item/item-list/item-list.component';
import { ItemCreateComponent } from './item/item-create/item-create.component';
import { ItemDetailComponent } from './item/item-detail/item-detail.component';
import { ItemEditComponent } from './item/item-edit/item-edit.component';
import { EmployeeCreatenewComponent } from './employee/employee-createnew/employee-createnew.component';
import { ExpenselineCreateComponent } from './expenseline/expenseline-create/expenseline-create.component';
import { ExpenselineEditComponent } from './expenseline/expenseline-edit/expenseline-edit.component';
import { ExpenseLineComponent } from './expense/expense-line/expense-line.component';
import { ExpenseReviewComponent } from './expense/expense-review/expense-review.component';
import { ExpenseApproveComponent } from './expense/expense-approve/expense-approve.component';
import { BoolDisplayPipe } from './misc/bool-display.pipe';
import { EmployeeSearchPipe } from './misc/employee-search.pipe';
import { ExpenseSearchPipe } from './misc/expense-search.pipe';
import { SortPipe } from './misc/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeDetailComponent,
    EmployeeEditComponent,
    EmployeeCreateComponent,
    EmployeeLoginComponent,
    
    MenuComponent,

    ExpenseListComponent,
    ExpenseEditComponent,
    ExpenseDetailComponent,
    ExpenseCreateComponent,

    ItemListComponent,
    ItemCreateComponent,
    ItemDetailComponent,
    ItemEditComponent,
    EmployeeCreatenewComponent,
    ExpenselineCreateComponent,
    ExpenselineEditComponent,
    ExpenseLineComponent,
    ExpenseReviewComponent,
    ExpenseApproveComponent,
    BoolDisplayPipe,
    EmployeeSearchPipe,
    ExpenseSearchPipe,
    SortPipe,
  ],
  imports: [
    BrowserModule, RouterModule, FormsModule, HttpClientModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
