import { Component, OnInit } from '@angular/core';
import { PersonapiService } from '../personapi.service';
import { Person } from '../models/personmodel.model';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {

  constructor(private personService: PersonapiService) { }
  
  personList: Person[];

  ngOnInit() {
    this.personService.getAllPersonsData().subscribe(data =>{
      this.personList = data;
      console.log(this.personList);
    })
  }
  
  

}
