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
  appointments: Appointment[]=[];

  constructor(private router: Router,
  private appointmentService: AppointmentService) { }

  ngOnInit(): void {
    this.loadDataAppointments();
  }

  loadDataAppointments(){
    this.appointmentService.getAppointmentByClient(this.id)
    .subscribe(appointments=>this.appointments=appointments);
  }
}
