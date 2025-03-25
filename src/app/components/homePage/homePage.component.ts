import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Heroe {
  imgHeroe: string;
};

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './homePage.component.html',
  styleUrl: './homePage.component.css'
})
export class HomePageComponent implements OnInit {
  heroes: Heroe[] = [];
  ngOnInit() {
    this.heroes = [
      {
        imgHeroe: '/images/heroe.jpg'
      }
    ];
  }
}
