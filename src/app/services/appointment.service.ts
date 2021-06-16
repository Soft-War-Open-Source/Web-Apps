import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private baseURL= 'http://localhost:8080/api/appointment';

  constructor(private http: HttpClient) { }

  createAppointment(appointment: Object): Observable<Object>{
    return this.http.post(`${this.baseURL}`, appointment);
  }

  updateAppointment(id: number, appointment: Object) : Observable<any>{
    return this.http.put(`${this.baseURL}/${id}`, appointment);
  }

  deleteAppointment(id: number): Observable<any>{
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  getAppointmentList(): Observable<any>{
    return this.http.get(`${this.baseURL}`);
  }

  getAppointmentById(id: number) : Observable<any>{
    return this.http.get(`${this.baseURL}/${id}`)
  }

  //REVISAAAAAAAAR
  getAppointmentBetweenDates(date1: string, date2: string) : Observable<any> {
    let params = new HttpParams();

    params = params.append('date1', date1);
    params = params.append('date2', date2);
    return this.http.get(`${this.baseURL}/searchBetweenDates`, {params: params} )
  }

  updateAppointmentNotes(id: number, notes: Object) : Observable<any>{
    return this.http.put(`${this.baseURL}/update_appointment_notes/${id}`, notes);
  }

  updateAppointmentDate(id: number, date: Object){
    return this.http.put(`${this.baseURL}/update_appointment_date/${id}`, date);
  }

  getAppointmentByNutritionist(nutritionist_id: number) : Observable<any>{
    return this.http.get(`${this.baseURL}/searchAppointmentByNutritionistId/${nutritionist_id}`)
  }

  getAppointmentByClient(client_id: number): Observable<any>{
    return this.http.get(`${this.baseURL}/searchAppointmentByClientId/${client_id}`);
  }

  addDietToAppointment(appointment_id: number, diet: Object): Observable<any>{
    return this.http.post(`${this.baseURL}/assignDietToAppointment/${appointment_id}`, diet);
  }
}
