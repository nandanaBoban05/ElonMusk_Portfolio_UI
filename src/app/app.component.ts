import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'elonmusk_portfolio';
}
