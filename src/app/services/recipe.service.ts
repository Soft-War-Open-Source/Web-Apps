import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  // baseURL
  private baseURL='http://localhost:8080/api/Recipes';

  constructor(private http: HttpClient) { }

  createRecipe(recipe: Object): Observable<Object>{
    return this.http.post(`${this.baseURL}`, recipe);
  }

  updateRecipe(id:number, recipe: Object): Observable<Object>{
    return this.http.put(`${this.baseURL}/${id}`, recipe);
  }

  deleteRecipe(id:number): Observable<any>{
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  getRecipeList(): Observable<any>{
    return this.http.get(`${this.baseURL}`);
  }

  getRecipeById(id: number) : Observable<any>{
    return this.http.get(`${this.baseURL}/${id}`);
  }

  getRecipeByName(name:string): Observable<any>{
    return this.http.get(`${this.baseURL}/searchByName/${name}`);
  }

  getRecipeByNutritionist(nutritionist_id: number): Observable<any>{
    return this.http.get(`${this.baseURL}/searchRecipeByNutritionistId/${nutritionist_id}`);
  }

  
}