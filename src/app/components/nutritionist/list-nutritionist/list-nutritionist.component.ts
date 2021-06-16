import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Specialty } from 'src/app/model/specialty';
import { SpecialtyService } from 'src/app/services/specialty.service';
import { Nutritionist } from 'src/app/model/nutritionist';
import { NutritionistService } from 'src/app/services/nutritionist.service';
@Component({
  selector: 'app-list-nutritionist',
  templateUrl: './list-nutritionist.component.html',
  styleUrls: ['./list-nutritionist.component.css']
})
export class ListNutritionistComponent implements OnInit {
  id: number = 1;
  
  specialty: Specialty = new Specialty();
  specialtys: Specialty[]=[];
  nutritionist: Nutritionist = new Nutritionist();
  nutritionists: Nutritionist[]=[];

  constructor(private router: Router, private specialtyService: SpecialtyService,
    private nutritionisService: NutritionistService) { }

  ngOnInit(): void {
    
    this.loadDataNutritionist();
    
  }


  deleteNutritionist(nutritionist: Nutritionist){
    this.nutritionisService.deleteNutritionist(nutritionist.id)
    .subscribe(data=>{this.loadDataSpecialtys();})
  }
  updateNutritionist(nutritionist: Nutritionist){
    this.router.navigate(['updatespecialty', nutritionist.id]);
  }
  searchNutritionistbyId(){
    if(this.id == 1  ){
      this.nutritionisService.getNutritionistById(this.id)
      .subscribe(nutritionist=>this.nutritionist = nutritionist)
     
    }
  }

  loadDataSpecialtys(){
    this.specialtyService.getSpecialtyList()
    .subscribe(specialtys=>this.specialtys=specialtys);
  }

  deleteSpecialty(specialty: Specialty){
    this.specialtyService.deleteSpecialty(specialty.id)
    .subscribe(data=>{this.loadDataSpecialtys();})
  }
  updateSpecialty(specialty: Specialty){
    this.router.navigate(['updatespecialty', specialty.id]);
  }
  searchSpecialtybyId(){
    if(this.id == 1  ){
      this.specialtyService.getSpecialtyById(this.id)
      .subscribe(specialty=>this.specialty = specialty)
     
    }
    
  }
  loadDataNutritionist(){
    this.searchNutritionistbyId();
    this.searchSpecialtybyId();
  }
}
