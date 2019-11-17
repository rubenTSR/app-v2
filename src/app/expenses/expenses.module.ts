import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpensesRoutingModule } from './expenses-routing.module';
import { ExpensesListComponent } from './expenses-list/expenses-list.component';
import { ExpenseCreateComponent } from './expense-create/expense-create.component';
import { ExpenseEditComponent } from './expense-edit/expense-edit.component';


@NgModule({
  declarations: [ExpensesListComponent, ExpenseCreateComponent, ExpenseEditComponent],
  imports: [
    CommonModule,
    ExpensesRoutingModule
  ]
})
export class ExpensesModule { }
