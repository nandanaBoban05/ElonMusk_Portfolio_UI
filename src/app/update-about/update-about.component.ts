import { Component,inject } from '@angular/core';
import { Router } from '@angular/router';
import { AboutService } from '../services/about.service';
import { AuthService } from '../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-about',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-about.component.html',
  styleUrl: './update-about.component.css'
})
export class UpdateAboutComponent {

  updateDetail: any = {
    Occupation:'',
    Email:'',
    Phone:'',
  }
 
  aboutService = inject(AboutService);
  authService=inject(AuthService)
  router = inject(Router);

  onSave(){
    this.aboutService.updateAboutDetails(this.updateDetail).subscribe((result:any) => {
      console.log('Details updated:',result);
      alert("successful");
    });

  }
  onLogout(){
    this.authService.logout();
    this.router.navigate(['/about'])

  }

}
