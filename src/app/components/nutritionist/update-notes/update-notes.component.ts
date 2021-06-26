import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from 'src/app/model/appointment';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-update-notes',
  templateUrl: './update-notes.component.html',
  styleUrls: ['./update-notes.component.css']
})
export class UpdateNotesComponent implements OnInit {

  id: number = 1;
  appointment: Appointment = new Appointment();

  constructor(private route: ActivatedRoute,
    private router: Router,
    private appointmentService : AppointmentService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.appointmentService.getAppointmentById(this.id)
    .subscribe(datos=>{
      console.log(datos)
      this.appointment = datos;
    }, error=>console.log(error));
  }

  updateNotes(appointment: Appointment){
    this.appointmentService.updateAppointmentNotes(this.id, appointment, appointment.nutritionistNotes)
    .subscribe(datos=>{
      console.log(datos)
    }, error=>console.log(error));
    this.appointment = new Appointment();
  }

}
