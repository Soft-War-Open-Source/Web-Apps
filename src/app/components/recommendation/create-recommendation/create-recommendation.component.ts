import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Nutritionist } from 'src/app/model/nutritionist';
import { Recommendation } from 'src/app/model/recommendation';
import { NutritionistService } from 'src/app/services/nutritionist.service';
import { RecommendationService } from 'src/app/services/recommendation.service';

@Component({
  selector: 'app-create-recommendation',
  templateUrl: './create-recommendation.component.html',
  styleUrls: ['./create-recommendation.component.css']
})
export class CreateRecommendationComponent implements OnInit {

  recommendations: Recommendation[]=[];
  nutritionists: Nutritionist[]=[];
  nutritionist_id: number = 1;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private recommendationService : RecommendationService,
    private nutritionistService : NutritionistService) {
    }

  ngOnInit(): void {
    this.recommendations.push(new Recommendation());
    this.assignNutritionist();
  }

  assignNutritionist(){
    this.nutritionistService.getNutritionistById(this.nutritionist_id)
    .subscribe(datos=>this.nutritionists.push(datos));
  }
  
  insertRecommendation(){
    this.recommendations[0].nutritionist = this.nutritionists[0];
    this.recommendationService.createRecommendation(this.recommendations[0])
    .subscribe(datos=>console.log(datos), error=>console.log(error));
    this.recommendations = [];
    this.nutritionists = [];
    this.router.navigate(['pusblished-recommendations']);
  }

}
