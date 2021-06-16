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

  getClientById(id: number) : Observable<any>{
    return this.http.get(`${this.baseURL}/${id}`)
  }

  getClientByUsername(username: string) : Observable<any>{
    return this.http.get(`${this.baseURL}/searchByUsername/${username}`)
  }

  getClientByFirstName(firstName: string): Observable<any>{
    return this.http.get(`${this.baseURL}/searchByFirstName/${firstName}`);
  }

  getClientByLastName(lastName: string) : Observable<any>{
    return this.http.get(`${this.baseURL}/searchByLastName/${lastName}`)
  }

  getClientByFirstNameAndLastName(firstName: string, lastName: string): Observable<any>{
    return this.http.get(`${this.baseURL}/searchByFirstNameAndLastName/${firstName}/${lastName}`);
  }

  addFavoriteRecipe(recipe_id: number, client_id: number, date: Object): Observable<any>{
    return this.http.post(`${this.baseURL}/${recipe_id}/${client_id}`, date);
  }

  getClientFavoriteRecipes(id: number) : Observable<any>{
    return this.http.get(`${this.baseURL}/findClientFavoriteRecipes/${id}`)
  }

  deleteClientFavoriteRecipe(recipe_id: number, client_id: number) : Observable<any>{
    return this.http.delete(`${this.baseURL}/${recipe_id}/${client_id}`);
  }
}
