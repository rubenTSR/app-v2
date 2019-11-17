import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/entities/menu';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dashboardMenu = true;

  menus: Menu[] = [
    {
      name: 'Tasks',
      path: 'tasks',
      img: '../../../assets/images/tasks.jpg'
    },
    {
      name: 'Expenses',
      path: 'expenses',
      img: '../../../assets/images/expenses.jpg'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  toggleDashboard(): void {
    this.dashboardMenu = !this.dashboardMenu;
  }

}
