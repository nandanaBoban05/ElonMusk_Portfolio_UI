import { Component,inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports:[CommonModule,FormsModule],
  standalone:true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'


})
export class LoginComponent {
  adminobj:any={
    username: '',
  password: ''
  }
authService=inject(AuthService)
router=inject(Router);
  onLogin() {
    this.authService.onLoginSubmit(this.adminobj).subscribe((result:any) =>
    {
      console.log('Login successful',result);
      if(result && result.message=='Login successful'){
        this.router.navigateByUrl("/update-about");
      }
      else{
        alert('Error:'+result.message);
      }
    },
    (error:any) =>
      {
        alert('invalid username and password')
        console.log(error);
      } 
  );
}
}