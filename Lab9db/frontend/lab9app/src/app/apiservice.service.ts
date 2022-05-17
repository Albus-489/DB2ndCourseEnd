import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http:HttpClient) { }

  // ? * З'єднання фронта з беком *
  apiUrl = 'http://localhost:3001/Clients';
  apiUrlSecur = 'http://localhost:3001/Securities';
  apiUrlInvest = 'http://localhost:3001/Investments';

  // * Вся інформація про клієнтів, цінні папери, інвестиції *

  getAllClientsInfo():Observable<any>
  {
      return this._http.get(`${this.apiUrl}`);
  }
  getAllSecurInfo():Observable<any>
  {
      return this._http.get(`${this.apiUrlSecur}`);
  }
  getInvestInfo():Observable<any>
  {
      return this._http.get(`${this.apiUrlInvest}`);
  }

  // * Створення нових клієнтів, цінних паперів, інвестицій *
  createClient(data:any):Observable<any>
  {
    return this._http.post(`${this.apiUrl}`, data);
  }
  createSecur(data:any):Observable<any>
  {
    return this._http.post(`${this.apiUrlSecur}`, data);
  }
  createInvest(data:any):Observable<any>
  {
    return this._http.post(`${this.apiUrlInvest}`, data);
  }

  // * Видалення клієнтів, цінних паперів, інвестицій *
  deleteClient(id:any):Observable<any>
  {
    let ids = id;
    return this._http.delete(`${this.apiUrl}/${ids}`);
  }
  deleteSecur(id:any):Observable<any>
  {
    let ids = id;
    return this._http.delete(`${this.apiUrlSecur}/${ids}`);
  }
  deleteInvest(id:any):Observable<any>
  {
    let ids = id;
    return this._http.delete(`${this.apiUrlInvest}/${ids}`);
  }

  // * Редагування клієнтів, цінних паперів, інвестицій *
  editClients(item:any): Observable<any> {
    let ids = item.id;
    //console.log(ids);
    return this._http.put(`${this.apiUrl}/${ids}`, item);
  }
  editSecur(item:any): Observable<any> {
    let ids = item.id;
    //console.log(ids);
    return this._http.put(`${this.apiUrlSecur}/${ids}`, item);
  }
}
