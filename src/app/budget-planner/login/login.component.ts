import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: any;
  registerForm:any;
  activeForm: 'login' | 'register' = 'login';
  constructor(private fb: FormBuilder, 
    private router : Router,
    private snackbar: MatSnackBar
  ){}
  

  ngOnInit(){
    this.loginForm = this.fb.group({
      email:['',[Validators.required, Validators.email]],
      password:['',Validators.required]
    });

    this.registerForm = this.fb.group({
      username:['', Validators.required],
      email:['',[Validators.required, Validators.email]],
      password:['',Validators.required]
    })
  }

  login(){
    if(this.loginForm.valid){
      console.log("LOGIN FORM==>", this.loginForm.value);
      this.router.navigate(['/budget-planner/dashboard']);
    }else{
      this.snackbar.open('Invalid email or password','Close',{duration: 3000});
    }
  }

  register(){
    if(this.registerForm.valid){
      console.log("Register info=>", this.registerForm.value)
      setTimeout(()=>{
        window.location.reload();
      },2000)
      this.router.navigate(['/budget-planner/login'])
    }else{
      this.snackbar.open('please fill all the fields','Close',{duration: 3000});

    }
  }

  toggleForm(form: 'login' | 'register'){
    this.activeForm = form;
  }
}
