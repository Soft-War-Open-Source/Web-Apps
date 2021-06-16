import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalProfileService {
  private baseURL= 'http://localhost:8080/api/professional_profile';
  constructor(private http: HttpClient) { }

  createProfessionalprofile(professionalpofile: Object): Observable<Object>{
    return this.http.post(`${this.baseURL}`, professionalpofile);
  }

  updateProfessionalprofile(id: number, professionalpofile: Object) : Observable<any>{
    return this.http.put(`${this.baseURL}/${id}`, professionalpofile);
  }

  deleteProfessionalprofile(id: number): Observable<any>{
    return this.http.delete(`${this.baseURL}/${id}`);
  }

}
