import { Component, OnInit } from '@angular/core';

enum Season { Fall = "Fall", Winter = "Winter", Spring = "Spring", Summer = "Summer" }

@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.component.html',
  styleUrls: ['./ejercicios.component.css']
})

export class EjerciciosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.ejercicio1();
    this.ejercicio2();
    console.log(this.whichMonths(Season.Fall));
    this.ejercicio4();
  }

  ejercicio1() {
    let firstName: string;
    let lastName: string;
    let fullName: string;
    let age: number;
    let ukCitizen: boolean;

    firstName = 'Rebecca';
    lastName = 'Smith';
    age = 42;
    ukCitizen = false;
    fullName = firstName + " " + lastName;

    if (ukCitizen) {
      console.log("My name is " + fullName + ", I'm " + age + ", and I'm a citizen of the United Kingdom.");
    } else {
      console.log("My name is " + fullName + ", I'm " + age + ", and I'm not a citizen of the United Kingdom.");
    }
  }

  ejercicio2() {
    let x: string;
    let y: number;
    let a: number;
    
    x = 'five';
    y = 7;
    a = Number(x) + y;
    console.log(a);
  }

  whichMonths(season: Season) {
    let monthsInSeason: string;
    switch (season) {
      case Season.Fall:
        monthsInSeason = "September to November";
        break;
      case Season.Winter:
        monthsInSeason = "December to February";
        break;
      case Season.Spring:
        monthsInSeason = "March to May";
        break;
      case Season.Summer:
        monthsInSeason = "June to August";
        break;
    }
    return monthsInSeason;
  }

  ejercicio4() {
    let randomNumbers: number[] = [];
    let nextNumber: number;
    
    for (let i = 0; i < 10; i++) {
      nextNumber = Math.floor(Math.random() * (100 - 1)) + 1;
      randomNumbers.push(nextNumber);
    }
    
    console.log(randomNumbers);
  }
}
