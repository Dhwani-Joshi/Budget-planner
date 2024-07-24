import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent {
  selectedMonth: any;
  incomeForm: any;
  monthSelected: boolean = false;
  januaryIncomes: any[] = [
    { source: 'salary', amount: 5765, investments: '401(k)' },
    { source: 'rental income', amount: 9895, investments: 'stocks' },
  ];
  februaryIncomes: any[] = [
    { source: 'salary', amount: 8765, investments: '401(k)' },
    { source: 'rental income', amount: 9895, investments: 'stocks' },
  ];
  marchIncomes: any[] = [
    { source: 'salary', amount: 765, investments: '401(k)' },
    { source: 'rental income', amount: 995, investments: 'stocks' },
    { source: 'freelancing', amount: 895, investments: 'real estate' },
  ];
  constructor(public fb: FormBuilder, public router: Router) {

  }
  ngOnInit() {
    this.incomeForm = this.fb.group({
      month: ['', Validators.required],
      source: ['', Validators.required],
      amount: ['', Validators.required],
      investments: ['', Validators.required],

    })
  }

  onSubmit() {
    if (this.incomeForm.valid) {
      const newIncome = this.incomeForm.value;
      switch (this.selectedMonth) {
        case 'January':
          this.januaryIncomes.push(newIncome);
          break;
        case 'February':
          this.februaryIncomes.push(newIncome);
          break;
        case 'March':
          this.marchIncomes.push(newIncome);
          break;
        default:
          break;
      }
      this.incomeForm.reset();
      this.incomeForm.patchValue({ month: '', source: '', investments: '' })
    }
  }
  onChange(e: any) {
    this.selectedMonth = e.target.value;
    this.monthSelected = true;
    this.getFilteredIncomes();
  }
  getFilteredIncomes(): any[] {
    return this.selectedMonth === 'January'
      ? [...this.januaryIncomes]
      : this.selectedMonth === 'February'
        ? [...this.februaryIncomes]
        : this.selectedMonth === 'March'
          ? [...this.marchIncomes]
          : [];
  }

  // getFilteredIncomes():any {
  //   let jan = this.januaryIncomes;
  //   let feb = this.februaryIncomes;
  //   if (this.selectedMonth === jan ? this.januaryIncomes : this.selectedMonth === feb ? this.februaryIncomes : this.marchIncomes) {
  //     console.log(jan, this.selectedMonth)
  //   // } else {
  //   //   this.selectedMonth == this.marchIncomes;
  //    }
  // }
  // getFilteredIncomes() {
  //   let filteredIncomes: any[] = [];
  //   switch (this.selectedMonth) {
  //     case 'January':
  //       filteredIncomes = [...this.januaryIncomes];
  //       break;
  //     case 'February':
  //       filteredIncomes = [...this.februaryIncomes];
  //       break;
  //     case 'March':
  //       filteredIncomes = [...this.marchIncomes];
  //       break;
  //     default:
  //       break;
  //   }
  //   return filteredIncomes;
  // }
  calculateTotalIncome(month: string): number {
    let totalIncome = 0;
    for (const income of this.getIncomesForMonth(month)) {
      totalIncome = totalIncome + income.amount
    }
    return totalIncome;
  }
  getIncomesForMonth(month: string): any[] {
    switch (month) {
      case 'January':
        return this.januaryIncomes;
      case 'February':
        return this.februaryIncomes;
      case 'March':
        return this.marchIncomes;
      default:
        return [];

    }
  }
  onBack() {
    this.router.navigate(['/budget-planner/dashboard'])
  }
  saveForm() {
    console.log("Form saved")
  }

}
