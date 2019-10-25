import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Person} from './models/personmodel.model';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PersonapiService {

  constructor(private httpClient: HttpClient) { 
  
  }
  public getAllPersonsData(): Observable<Person[]>{
    return this.httpClient.get<Person[]>(`https://bmopersonapi.herokuapp.com/api/person/getall`).pipe(
      map(data => data.map(data => new Person().deserialize(data)))
    )
  }

}
