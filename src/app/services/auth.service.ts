import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}
  onLoginSubmit(adminobj:any){
    return this.http.post('https://localhost:7170/api/Login/Login',adminobj)
  }
  
  isAuthenticated():boolean{
    return !!localStorage.getItem('token')
  }
  logout(){
    localStorage.removeItem('token')
  }
}