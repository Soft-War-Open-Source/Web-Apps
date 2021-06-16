import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Specialty } from 'src/app/model/specialty';
import { SpecialtyService } from 'src/app/services/specialty.service';

@Component({
  selector: 'app-list-specialty',
  templateUrl: './list-specialty.component.html',
  styleUrls: ['./list-specialty.component.css']
})
export class ListSpecialtyComponent implements OnInit {


  specialtys: Specialty[]=[];

  constructor(private router: Router, private specialtyService: SpecialtyService) { }

  ngOnInit(): void {
    this.loadDataSpecialtys();
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

}
