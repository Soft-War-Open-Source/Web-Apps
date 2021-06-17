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

  id: number = 1;
  appointments: Appointment[]=[];

  constructor(private router: Router,
  private appointmentService: AppointmentService) { }

  ngOnInit(): void {
    this.loadDataAppointments();
  }

  loadDataAppointments(){
    this.appointmentService.getAppointmentByNutritionist(this.id)
    .subscribe(appointments=>this.appointments=appointments);
  }
  
}
