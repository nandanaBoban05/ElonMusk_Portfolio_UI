import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http:HttpClient) { }
  getProjectList(projectobject:any) {
      return this.http.post('https://localhost:7170/api/Contact',projectobject)
    }
  }
