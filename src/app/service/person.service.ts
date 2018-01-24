import { Injectable } from '@angular/core';
import { PersonList } from './../interface/person-model';

@Injectable()
export class PersonService {

  // Array of imported interface type used to store input values.
  personArr: PersonList[] = [];

  constructor() { }

  // Service function that adds values in the array by using unshift() method.
  addPerson(personList: PersonList){
    this.personArr.unshift(personList);
  }

  // Service function which will return (GET) the array of interface object.
  getPerson(): PersonList[] {
    return this.personArr;
  }
}
