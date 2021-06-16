import { ProfessionalSpecialties } from "./professional_specialties";

export class Specialty{
    id: number;
    name: string;
    institution_name: string;
    specialtyAssoc: Array<ProfessionalSpecialties>;
    
    constructor(){
        this.id = 0;
        this.name = "";
        this.institution_name = "";
        this.specialtyAssoc = new Array<ProfessionalSpecialties>();
    }
}