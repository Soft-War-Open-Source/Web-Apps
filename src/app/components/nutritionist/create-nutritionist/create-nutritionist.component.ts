import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Nutritionist } from 'src/app/model/nutritionist';
import { NutritionistService } from 'src/app/services/nutritionist.service';

@Component({
  selector: 'app-create-nutritionist',
  templateUrl: './create-nutritionist.component.html',
  styleUrls: ['./create-nutritionist.component.css']
})
export class CreateNutritionistComponent implements OnInit {

  nutritionist: Nutritionist = new Nutritionist();

  constructor(private route: ActivatedRoute,
    private router: Router,
    private nutritionistService: NutritionistService) { }

  ngOnInit(): void {
  }

  insertClient(){
    this.nutritionistService.createNutritionist(this.nutritionist)
    .subscribe(datos=>console.log(datos), error=>console.log(error));
    this.nutritionist = new Nutritionist();
  }
}
