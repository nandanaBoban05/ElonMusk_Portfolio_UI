import { Component,inject } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,FormsModule,],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {


  contactobject:any={
    name:'',
    email:'',
    subject:'',
    message:''
  }
  contactService = inject(ContactService);
  router =inject(Router);
  contact(){
    this.contactService.onLoginSubmit(this.contactobject).subscribe((result:any)=>
      {
        console.log(result);
      },
      (error)=>
      {
        alert("message not send" )
      }
    );

  }
  
}
