import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
profileForm:any;
constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {}

ngOnInit(): void {
  this.profileForm = this.fb.group({
    name: ['', Validators.required],
    age: ['', [Validators.required, Validators.min(18)]],
    dob: ['', Validators.required],
    gender: ['', Validators.required],
    occupation: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    address: ['', Validators.required],
    contact: ['', Validators.required]
  });
}

onSubmit(){
  if(this.profileForm.valid){
    console.log("Form saved", this.profileForm.value)
  }else{
    this.openSnackBar('Please fill required fields','Close');
  }
}
openSnackBar(message:string, action:string){
  this.snackBar.open(message,action,{
    duration: 3000
  });
}
}
