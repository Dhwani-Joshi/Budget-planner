import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  isSlideOut: boolean = true;

  constructor(private router: Router){

  }
  toggleSlideOut(){
    this.isSlideOut = !this.isSlideOut;
  }

  onDash(){
    this.router.navigate(['/budget-planner/dashboard']);
  }
  onProfile(){
    this.router.navigate(['/budget-planner/profile']);

  }
  onHistory(){
    this.router.navigate(['/budget-planner/history']);

  }
  onLogout(){
    this.router.navigate(['/budget-planner/login']);

  }
}
