import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Hero} from './hero';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class HttpService{

    constructor(private http: HttpClient){ }

    getHeroes(): Observable<Hero[]>{
        return this.http.get('http://localhost:5000/api/').pipe((map(data=>{
            let heroesList = data["heroes"];
            return heroesList.map(function(hero:any){
                return{name:hero.name,age:hero.age}
            });
        })));
    }
}
