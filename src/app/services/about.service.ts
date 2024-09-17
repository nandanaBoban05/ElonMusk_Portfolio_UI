import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  constructor(private http: HttpClient) {}

  saveAboutDetails(userobj:any) {
    return this.http.get('',userobj);
  }

  updateAboutDetails(aboutDetails: any){
    return this.http.put('',aboutDetails);
  }
}
