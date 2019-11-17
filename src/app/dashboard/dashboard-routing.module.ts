import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'tasks',
        loadChildren: () =>
          import('../tasks/tasks.module').then(m => m.TasksModule)
      },
      {
        path: 'expenses',
        loadChildren: () =>
          import('../expenses/expenses.module').then(m => m.ExpensesModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
