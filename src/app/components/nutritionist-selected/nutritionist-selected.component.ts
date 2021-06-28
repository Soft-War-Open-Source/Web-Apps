import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Nutritionist } from 'src/app/model/nutritionist';
import { NutritionistService } from 'src/app/services/nutritionist.service';

@Component({
  selector: 'app-nutritionist-selected',
  templateUrl: './nutritionist-selected.component.html',
  styleUrls: ['./nutritionist-selected.component.css']
})
export class NutritionistSelectedComponent implements OnInit {

  id: number = 1;
  nutritionists: Nutritionist[]=[];
  nutritionist: Nutritionist = new Nutritionist();

  constructor(private router: Router,
    private nutritionistService: NutritionistService) { }

  ngOnInit(): void {
    this.loadDataNutritionist();
  }

  loadDataNutritionist(){
    this.searchNutritionistbyId();
  }

  searchNutritionistbyId(){
    this.nutritionistService.getNutritionistById(this.id)
    //.subscribe(nutritionist=>this.nutritionists.push(nutritionist))
    .subscribe(nutritionist=>this.nutritionist = nutritionist)
  }
}
