import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { empty } from 'rxjs';
import { Recommendation } from 'src/app/model/recommendation';
import { RecommendationService } from 'src/app/services/recommendation.service';


@Component({
  selector: 'app-list-recommendation',
  templateUrl: './list-recommendation.component.html',
  styleUrls: ['./list-recommendation.component.css']
})
export class ListRecommendationComponent implements OnInit {

  name: string='';
  recommendations: Recommendation[]=[];

  constructor(private router: Router,
     private recommendationService: RecommendationService) { }

  ngOnInit(): void {
    this.loadDataRecommendations();
  }

  loadDataRecommendations(){
    this.recommendationService.getRecommendationList()
    .subscribe(recommendations=>this.recommendations=recommendations);
  }

  deleteRecipe(recommendation: Recommendation){
    this.recommendationService.deleteRecommendation(recommendation.id)
    .subscribe(data=>{this.loadDataRecommendations();})
  }

  updateRecipe(recommendation: Recommendation){
    this.router.navigate(['update-recommendation', recommendation.id]);
  }

  searchRecipeByName(){
    if(this.name.length!=0){
      this.recommendationService.getRecommendationByName(this.name)
      .subscribe(recommendations=>this.recommendations=recommendations);
    }
    else{
      this.loadDataRecommendations();
    }
  }

}






  
  

  

