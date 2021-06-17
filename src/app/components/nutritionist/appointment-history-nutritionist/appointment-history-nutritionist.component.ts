import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/model/appointment';
import { Nutritionist } from 'src/app/model/nutritionist';
import { AppointmentService } from 'src/app/services/appointment.service';


@Component({
  selector: 'app-appointment-history-nutritionist',
  templateUrl: './appointment-history-nutritionist.component.html',
  styleUrls: ['./appointment-history-nutritionist.component.css']
})
export class AppointmentHistoryNutritionistComponent implements OnInit {

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
