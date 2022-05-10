import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http:HttpClient) { }

  // ? * З'єднання фронта з беком * 
  apiUrl = 'http://localhost:3000/client';
  apiUrlSecur = 'http://localhost:3000/secur';

    // * Вся інформація про клієнтів, цінні папери, інвестиції *

    getAllClientsInfo():Observable<any>
    {
        return this._http.get(`${this.apiUrl}`);
    }

    getAllSecurInfo():Observable<any>
    {
        return this._http.get(`${this.apiUrlSecur}`);
    }

    // * Створення нових клієнтів, цінних паперів, інвестицій *
    createClient(data:any):Observable<any>
    {
      return this._http.post(`${this.apiUrl}`, data);
    }
}
