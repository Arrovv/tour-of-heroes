import {InMemoryDbService} from "angular-in-memory-web-api";
import {Hero} from "./hero";
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {
        id: 1,
        name: 'Dr Nice',
        age: 20,
        class: 'Mag',
        statistics: 10000,
        HP:1500,
        MP:3000,
        head: {
          lvl: 5,
          item_class: 'cap',
          img: '/assets/img/cap/cap2.jpg'
        },
        body: {
          lvl: 2,
          item_class: 'mag',
          img: '/assets/img/armor/armor7.jpg'
        },
        weapon: {
          lvl:3,
          item_class:'mag',
          img:'/assets/img/staff/staff3.jpg'
        },
        legs:{
          lvl:2,
          item_class:'mag',
          img:'/assets/img/legs/legs.jpg'
        },
        hands:{
          lvl:4,
          item_class:'mag',
          img:'/assets/img/glove/glove.jpg'
        },
        boots:{
          lvl:3,
          item_class:'mag',
          img:'/assets/img/boots/boots4.jpg'
        }
      },
      {
        id: 2,
        name: 'Dr Hi',
        age: 22,
        class: 'Warrior',
        statistics: 12000,
        HP:1500,
        MP:3000,
        head: {
          lvl: 5,
          item_class: 'cap',
          img: '/assets/img/cap/cap3.jpg'
        },
        body: {
          lvl: 2,
          item_class: 'mag',
          img: '/assets/img/armor/armor7.jpg'
        },
        weapon: {
          lvl:3,
          item_class:'mag',
          img:'/assets/img/staff/staff3.jpg'
        },
        legs:{
          lvl:2,
          item_class:'mag',
          img:'/assets/img/legs/legs.jpg'
        },
        hands:{
          lvl:4,
          item_class:'mag',
          img:'/assets/img/glove/glove2.jpg'
        },
        boots:{
          lvl:3,
          item_class:'mag',
          img:'/assets/img/boots/boots3.jpg'
        }
      },
      {
        id: 3,
        name: 'Dr Boo',
        age: 21,
        class: 'Ranger',
        statistics: 10030,
        HP:1500,
        MP:3000,
        head: {
          lvl: 5,
          item_class: 'cap',
          img: '/assets/img/cap/cap.jpg'
        },
        body: {
          lvl: 2,
          item_class: 'mag',
          img: '/assets/img/armor/armor3.jpg'
        },
        weapon: {
          lvl:3,
          item_class:'mag',
          img:'/assets/img/staff/staff2.jpg'
        },
        legs:{
          lvl:2,
          item_class:'mag',
          img:'/assets/img/legs/legs.jpg'
        },
        hands:{
          lvl:4,
          item_class:'mag',
          img:'/assets/img/glove/glove4.jpg'
        },
        boots:{
          lvl:3,
          item_class:'mag',
          img:'/assets/img/boots/boots3.jpg'
        }
      },
      {
        id: 4,
        name: 'Dr QQ',
        age: 23,
        class: 'Warrior',
        statistics: 10100,
        HP:1500,
        MP:3000,
        head: {
          lvl: 5,
          item_class: 'cap',
          img: '/assets/img/cap/cap2.jpg'
        },
        body: {
          lvl: 2,
          item_class: 'mag',
          img: '/assets/img/armor/armor6.jpg'
        },
        weapon: {
          lvl:3,
          item_class:'mag',
          img:'/assets/img/staff/staff.jpg'
        },
        legs:{
          lvl:2,
          item_class:'mag',
          img:'/assets/img/legs/legs.jpg'
        },
        hands:{
          lvl:4,
          item_class:'mag',
          img:'/assets/img/glove/glove2.jpg'
        },
        boots:{
          lvl:3,
          item_class:'mag',
          img:'/assets/img/boots/boots3.jpg'
        }
      },
      {
        id: 5,
        name: 'Dr Mine',
        age: 32,
        class: 'Mag',
        statistics: 10002,
        HP:1500,
        MP:3000,
        head: {
          lvl: 5,
          item_class: 'cap',
          img: '/assets/img/cap/cap3.jpg'
        },
        body: {
          lvl: 2,
          item_class: 'mag',
          img: '/assets/img/armor/armor2.jpg'
        },
        weapon: {
          lvl:3,
          item_class:'mag',
          img:'/assets/img/staff/staff2.jpg'
        },
        legs:{
          lvl:2,
          item_class:'mag',
          img:'/assets/img/legs/legs.jpg'
        },
        hands:{
          lvl:4,
          item_class:'mag',
          img:'/assets/img/glove/glove5.jpg'
        },
        boots:{
          lvl:3,
          item_class:'mag',
          img:'/assets/img/boots/boots3.jpg'
        }
      },
      {
        id: 6,
        name: 'Dr Water',
        age: 12,
        class: 'Ranger',
        statistics: 10005,
        HP:1500,
        MP:3000,
        head: {
          lvl: 5,
          item_class: 'cap',
          img: '/assets/img/cap/cap2.jpg'
        },
        body: {
          lvl: 2,
          item_class: 'mag',
          img: '/assets/img/armor/armor5.jpg'
        },
        weapon: {
          lvl:3,
          item_class:'mag',
          img:'/assets/img/staff/staff4.jpg'
        },
        legs:{
          lvl:2,
          item_class:'mag',
          img:'/assets/img/legs/legs.jpg'
        },
        hands:{
          lvl:4,
          item_class:'mag',
          img:'/assets/img/glove/glove4.jpg'
        },
        boots:{
          lvl:3,
          item_class:'mag',
          img:'/assets/img/boots/boots2.jpg'
        }
      },
      {
        id: 7,
        name: 'Dr Kim',
        age: 22,
        class: 'Ranger',
        statistics: 10500,
        HP:1500,
        MP:3000,
        head: {
          lvl: 5,
          item_class: 'cap',
          img: '/assets/img/cap/cap3.jpg'
        },
        body: {
          lvl: 2,
          item_class: 'mag',
          img: '/assets/img/armor/armor2.jpg'
        },
        weapon: {
          lvl:3,
          item_class:'mag',
          img:'/assets/img/staff/staff2.jpg'
        },
        legs:{
          lvl:2,
          item_class:'mag',
          img:'/assets/img/legs/legs.jpg'
        },
        hands:{
          lvl:4,
          item_class:'mag',
          img:'/assets/img/glove/glove2.jpg'
        },
        boots:{
          lvl:3,
          item_class:'mag',
          img:'/assets/img/boots/boots2.jpg'
        }
      },
      {
        id: 8,
        name: 'Dr Sin',
        age: 41,
        class: 'Ranger',
        statistics: 15000,
        HP:1500,
        MP:3000,
        head: {
          lvl: 5,
          item_class: 'cap',
          img: '/assets/img/cap/cap3.jpg'
        },
        body: {
          lvl: 2,
          item_class: 'mag',
          img: '/assets/img/armor/armor3.jpg'
        },
        weapon: {
          lvl:3,
          item_class:'mag',
          img:'/assets/img/staff/staff3.jpg'
        },
        legs:{
          lvl:2,
          item_class:'mag',
          img:'/assets/img/legs/legs.jpg'
        },
        hands:{
          lvl:4,
          item_class:'mag',
          img:'/assets/img/glove/glove3.jpg'
        },
        boots:{
          lvl:3,
          item_class:'mag',
          img:'/assets/img/boots/boots3.jpg'
        }
      },
      {
        id: 9,
        name: 'Dr Cos',
        age: 15,
        class: 'Warrior',
        statistics: 1000,
        HP:1500,
        MP:3000,
        head: {
          lvl: 5,
          item_class: 'cap',
          img: '/assets/img/cap/cap3.jpg'
        },
        body: {
          lvl: 2,
          item_class: 'mag',
          img: '/assets/img/armor/armor7.jpg'
        },
        weapon: {
          lvl:3,
          item_class:'mag',
          img:'/assets/img/staff/staff3.jpg'
        },
        legs:{
          lvl:2,
          item_class:'mag',
          img:'/assets/img/legs/legs.jpg'
        },
        hands:{
          lvl:4,
          item_class:'mag',
          img:'/assets/img/glove/glove.jpg'
        },
        boots:{
          lvl:3,
          item_class:'mag',
          img:'/assets/img/boots/boots4.jpg'
        }
      }
    ];
    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
