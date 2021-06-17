import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/model/appointment';
import { AppointmentService } from 'src/app/services/appointment.service';


@Component({
  selector: 'app-appointment-history-client',
  templateUrl: './appointment-history-client.component.html',
  styleUrls: ['./appointment-history-client.component.css']
})
export class AppointmentHistoryClientComponent implements OnInit {


  
  id: number = 1;
  appointment: Appointment = new Appointment();
  appointments: Appointment[]=[];


  constructor(private router: Router,
  private appointmentService: AppointmentService) { }


  ngOnInit(): void {
    this.searchByClient();
    
   
  }
  
  searchByClient(){
    if(this.id == 1){
      this.appointment.client.id = this.id ;
      this.appointmentService.getAppointmentByClient(this.appointment.client.id)
      .subscribe(datos=>{
       console.log(datos)
       this.appointment = datos;
     }, error=>console.log(error))
     this.id = 0;
    }
  }
}
