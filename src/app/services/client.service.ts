import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private baseURL= 'http://localhost:8080/api/clients';

  constructor(private http: HttpClient) { }

  createClient(client: Object): Observable<Object>{
    return this.http.post(`${this.baseURL}`, client);
  }

  updateClient(id: number, client: Object) : Observable<any>{
    return this.http.put(`${this.baseURL}/${id}`, client);
  }

  deleteClient(id: number): Observable<any>{
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  getClientList(): Observable<any>{
    return this.http.get(`${this.baseURL}`);
  }

  getCustomerByLastName(lastName: string) : Observable<any>{
    return this.http.get(`${this.baseURL}/searchByLastname/${lastName}`)
  }

  getCustomerById(id: number) : Observable<any>{
    return this.http.get(`${this.baseURL}/${id}`)
  }

  getCustomerByDni(dni: string): Observable<any>{
    return this.http.get(`${this.baseURL}/searchByDni/${dni}`);
  }

  getCustomerByFirstName(firstName: string): Observable<any>{
    return this.http.get(`${this.baseURL}/searchByFirstname/${firstName}`);
  }

  getCustomerByFirstNameAndLastName(firstName: string, lastName: string): Observable<any>{
    return this.http.get(`${this.baseURL}/searchByFirstnameAndLastname/${firstName}/${lastName}`);
  }

}
