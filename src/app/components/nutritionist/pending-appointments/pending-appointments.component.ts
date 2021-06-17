import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/model/appointment';
import { Router } from '@angular/router';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-pending-appointments',
  templateUrl: './pending-appointments.component.html',
  styleUrls: ['./pending-appointments.component.css']
})
export class PendingAppointmentsComponent implements OnInit {

  id: number = 2;

  appointment: Appointment = new Appointment();
  appointments: Appointment[]=[];
  constructor(private router: Router,
    private appointmentService: AppointmentService) { }

  ngOnInit(): void {
    this.searchByNutritionist();
    
   
  }
  
  searchByNutritionist(){
    if(this.id == 2){
      this.appointment.nutritionist.id = this.id ;
      this.appointmentService.getAppointmentByNutritionist(this.appointment.nutritionist.id)
      .subscribe(datos=>{
       console.log(datos)
       this.appointment = datos;
     }, error=>console.log(error))
     this.id = 0;
    }
  }

  deleteAppointment(appointment: Appointment){
    this.appointmentService.deleteAppointment(appointment.id)
    .subscribe(data=>{this.searchByNutritionist();})
  }
  
  
}
