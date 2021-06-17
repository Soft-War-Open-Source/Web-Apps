import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Nutritionist } from 'src/app/model/nutritionist';
import { NutritionistService } from 'src/app/services/nutritionist.service';

@Component({
  selector: 'app-available-nutritionists',
  templateUrl: './available-nutritionists.component.html',
  styleUrls: ['./available-nutritionists.component.css']
})
export class AvailableNutritionistsComponent implements OnInit {

  cards:number[]=[1,2,3,4,5,6,7,8,9,10];
  nutritionists: Nutritionist[]=[];

  constructor(private router: Router,
  private nutritionistService: NutritionistService) { }

  ngOnInit(): void {
    this.loadDataAppointments();
  }

  loadDataAppointments(){
    this.nutritionistService.getNutritionistList()
    .subscribe(nutritionists=>this.nutritionists=nutritionists);
  }
}
