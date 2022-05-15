import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http: HttpClient) { }

  // ? * З'єднання фронта з беком *
  apiUrl = 'http://localhost:3000/Books';

  getAllBooks(): Observable<any> {
    return this._http.get(`${this.apiUrl}`);
  }

  deleteBook(id: any): Observable<any> {
    let ids = id;
    return this._http.delete(`${this.apiUrl}/${ids}`);
  }

  createBook(data: any): Observable<any> {
    return this._http.post(`${this.apiUrl}`, data);
  }

  editBook(item:any): Observable<any> {
    let ids = item._id;
    return this._http.put(`${this.apiUrl}/${ids}`, item);
  }

}
