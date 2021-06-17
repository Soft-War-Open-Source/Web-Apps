import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recommendation } from 'src/app/model/recommendation';
import { RecommendationService } from 'src/app/services/recommendation.service';

@Component({
  selector: 'app-create-recommendation',
  templateUrl: './create-recommendation.component.html',
  styleUrls: ['./create-recommendation.component.css']
})
export class CreateRecommendationComponent implements OnInit {

  recommendation: Recommendation = new Recommendation();

  constructor(private route: ActivatedRoute,
    private router: Router,
    private recommendationService: RecommendationService) { }

  ngOnInit(): void {
  }
  insertRecommendation(){
    this.recommendationService.createRecommendation(this.recommendation)
    .subscribe(datos=>console.log(datos), error=>console.log(error));
    this.recommendation = new Recommendation();
    this.router.navigate(['new-recommendation']);

  }

}
