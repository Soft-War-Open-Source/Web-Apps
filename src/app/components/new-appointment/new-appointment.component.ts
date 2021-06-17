import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment } from 'src/app/model/appointment';
import { Client } from 'src/app/model/client';
import { Diet } from 'src/app/model/diet';
import { Nutritionist } from 'src/app/model/nutritionist';
import { AppointmentService } from 'src/app/services/appointment.service';
import { ClientService } from 'src/app/services/client.service';
import { DietService } from 'src/app/services/diet.service';
import { NutritionistService } from 'src/app/services/nutritionist.service';

@Component({
  selector: 'app-new-appointment',
  templateUrl: './new-appointment.component.html',
  styleUrls: ['./new-appointment.component.css']
})
export class NewAppointmentComponent implements OnInit {

  id: number = 1;
  nutritionists: Nutritionist[]=[];
  appointments: Appointment[]=[];
  diets: Diet[]=[];
  clients: Client[]=[];
  date: Date = new Date();

  constructor(private router: Router,
    private nutritionistService: NutritionistService,
    private clientService: ClientService,
    private appointmentService: AppointmentService,
    private dietService: DietService) { }

  ngOnInit(): void {
    this.loadDataAppointment();
  }

  loadDataAppointment(){
    this.searchNutritionistbyId();
    this.searchClientbyId();
    this.diets.push(new Diet())
    this.insertDiet();
    this.searchDietbyId();
    this.appointments.push(new Appointment);
  }

  searchNutritionistbyId(){
    this.nutritionistService.getNutritionistById(this.id)
    .subscribe(nutritionist=>this.nutritionists.push(nutritionist))
  }

  searchClientbyId(){
    this.clientService.getClientById(this.id)
    .subscribe(client=>this.clients.push(client))
  }

  insertDiet(){
    this.dietService.createDiet(this.diets[0])
    .subscribe(datos=>console.log(datos), error=>console.log(error));
    this.diets = [];
  }

  searchDietbyId(){
    this.dietService.getDietById(this.id)
    .subscribe(diet=>this.diets.push(diet))
  }

  createAppointment(){
    this.appointments[0].nutritionist = this.nutritionists[0];
    this.appointments[0].client = this.clients[0];
    this.appointments[0].diet = this.diets[0];
    this.appointmentService.createAppointment(this.appointments[0])
    .subscribe(datos=>console.log(datos), error=>console.log(error));
    this.clients = [];
    this.nutritionists = [];
    this.diets =[];
    this.appointments = [];
  }

}
