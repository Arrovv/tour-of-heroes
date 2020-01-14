import {Component, OnInit} from '@angular/core';
import { HttpClient} from '@angular/common/http';

import {Hero} from '../hero'
import {HeroService} from "../hero.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  Hero: {};

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('http://localhost:5000/api/')
    .subscribe((data:Hero) => this.Hero = data)
  }

}
