import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
isAuthenticated() {
throw new Error('Method not implemented.');
}
  constructor(private http: HttpClient) {}

  getAboutDetails() {
    return this.http.get('https://localhost:7170/api/About');
  }

  updateAboutDetails(aboutDetails: any){
    return this.http.put('https://localhost:7170/api/About/1',aboutDetails);
  }
}
