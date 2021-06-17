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
  
}
