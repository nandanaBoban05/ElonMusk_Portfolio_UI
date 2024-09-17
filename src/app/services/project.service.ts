import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http:HttpClient) { }
  getProjectList():Observable<any> {
      return this.http.get('https://localhost:7170/api/Project')
    }
  }
