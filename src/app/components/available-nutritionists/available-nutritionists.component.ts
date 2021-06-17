import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-available-nutritionists',
  templateUrl: './available-nutritionists.component.html',
  styleUrls: ['./available-nutritionists.component.css']
})
export class AvailableNutritionistsComponent implements OnInit {

  cards:number[]=[1,2,3,4,5,6,7,8,9,10];
  constructor() { }

  ngOnInit(): void {
  }

}
