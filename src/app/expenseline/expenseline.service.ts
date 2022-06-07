import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExpenseLine } from './expenseline.class';

@Injectable({
  providedIn: 'root'
})
export class ExpenselineService {

  baseurl: string = "http://localhost:5000/api/Expenselines";

  constructor(private http: HttpClient) { }

  get(id: number): Observable<ExpenseLine> {
    return this.http.get(`${this.baseurl}/${id}`) as Observable<ExpenseLine>;

  }

  create(expline:ExpenseLine): Observable<ExpenseLine>{
    return this.http.post(`${this.baseurl}`, expline) as Observable<ExpenseLine>;
  }

  change(expline:ExpenseLine): Observable<any>{
    return this.http.put(`${this.baseurl}/${expline.id}`, expline) as Observable<any>;
  }

  remove(id: number): Observable<any>{
    return this.http.delete(`${this.baseurl}/${id}`) as Observable<any>;
  }
}

