import {Component, OnInit} from '@angular/core';
import { HttpClient} from '@angular/common/http';

import {Hero} from '../hero';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  public Hero: any;

  constructor(private http: HeroService) {
  }

  ngOnInit() {
return this.http.getHeroes();
  }

}
