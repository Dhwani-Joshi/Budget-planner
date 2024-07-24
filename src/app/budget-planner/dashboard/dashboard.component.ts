import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
lastMonthsIncome=['Jan:$100','Feb:$200','Mar:$300','Apr:$400','May:$500'];
currentMonthIncome='$500'
lastMonthsExpense=['Jan:$1000','Feb:$500','Mar:$900','Apr:$400','May:$5000'];
currentMonthExpense='$600'
todoTransactions= [
  {description: 'Pay electricity bill'},
  {description: 'Submit monthly report'},
  {description: 'Buy Groceries'},
  {description: 'Call insurance company'},

]
totalCurrentMonthIncome= 5000;
totalCurrentMonthExpense=3000;
currentMonthSavings = (this.totalCurrentMonthIncome - this.totalCurrentMonthExpense);
constructor(private router:Router){}

onIncome(){
  this.router.navigate(['/budget-planner/income'])
}

onExpense(){
  this.router.navigate(['/budget-planner/expense'])
}

onTodo(){
  this.router.navigate(['/budget-planner/todo'])
}
}