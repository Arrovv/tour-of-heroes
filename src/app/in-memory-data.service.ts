import {InMemoryDbService} from "angular-in-memory-web-api";
import {Hero} from "./hero";
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {id: 1, name: 'Dr Nice'},
      {id: 2, name: 'Dr Hi'},
      {id: 3, name: 'Dr Boo'},
      {id: 4, name: 'Dr QQ'},
      {id: 5, name: 'Dr Mine'},
      {id: 6, name: 'Dr Water'},
      {id: 7, name: 'Dr Kim'},
      {id: 8, name: 'Dr Sin'},
      {id: 9, name: 'Dr Cos'}
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
