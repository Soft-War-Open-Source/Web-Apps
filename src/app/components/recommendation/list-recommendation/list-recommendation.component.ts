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
  id: number = 1;
  recommendation: Recommendation = new Recommendation();
  
  

  constructor(private router: Router, 
    private recommendationService: RecommendationService) { }

  ngOnInit(): void {
    this.loadDataRecommendation();
  }

}






  
  loadDataRecommendation(){
    this.searchRecommendationById();
    this.searchRecommendationByName();
  }

  deleteRecommendation(recommendation:Recommendation){
    this.deleteRecommendation();

    this.recommendationService.deleteClient(recommendation.id)
    .subscribe(datos=>console.log(datos), error=>console.log(error));

    this.router.navigate(['list-recommendations'])
  }

  updateRecommendation(recommendation: Recommendation){
    this.router.navigate(['update-recommendation', recommendation.id])
  }


  deleteRecommendation()
  {
    /////////
  }

  

