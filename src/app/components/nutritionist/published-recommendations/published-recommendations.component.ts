import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recommendation } from 'src/app/model/recommendation';
import { RecommendationService } from 'src/app/services/recommendation.service';

@Component({
  selector: 'app-published-recommendations',
  templateUrl: './published-recommendations.component.html',
  styleUrls: ['./published-recommendations.component.css']
})
export class PublishedRecommendationsComponent implements OnInit {

  nutritionist_id: number = 1;
  recommendations: Recommendation[]=[];

  constructor(private router: Router,
     private recommendationService: RecommendationService) { }

  ngOnInit(): void {
    this.loadDataRecommendation();
  }
  
  loadDataRecommendation(){
    this.recommendationService.getRecommendationByNutritionist(this.nutritionist_id)
    .subscribe(recommendations=>this.recommendations=recommendations);
  }

  deleteRecommendation(id: number){
    this.recommendationService.deleteRecommendation(id)
    .subscribe(data=>{this.loadDataRecommendation();})
  }

  updateRecommendation(recommendation: Recommendation){
    this.router.navigate(['update-recommendation', recommendation.id])
  }

  insertRecommendation(){
    this.router.navigate(['new-recommendation'])
  }

}
