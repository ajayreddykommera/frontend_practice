import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubmissionsService {

  constructor(private _http: HttpClient) {}

  addSubmission(data: any): Observable<any> {
    return this._http.post('http://localhost:3000/submission', data);
  }

  updateSubmission(id: number, data: any): Observable<any> {
    return this._http.put(`http://localhost:3000/submission/${id}`, data);
  }

  getSubmissionList(lead:String,technology:String): Observable<any> {
    return this._http.get(`http://localhost:3000/submission?lead=${lead}&technology=${technology}`);
  }

  deleteSubmission(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/submission/${id}`);
  }
  getLeadsList(): Observable<any> {
    return this._http.get('http://localhost:3000/leads');
  }
  getTechnologyList(): Observable<any> {
    return this._http.get('http://localhost:3000/technologies');
  }
}
