
import { Component, OnInit, OnDestroy} from '@angular/core';
import {Hero} from '../hero';
//import {HEROES} from '../mock-heroes';
import { HeroService } from '../hero.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroDetailComponent }  from '../hero-detail/hero-detail.component';
/**
 * ONOS GUI -- Heroes Device View Component
 */
@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit{
   
    constructor(private heroService: HeroService) {}
    
    
 
  /** selectedHero: Hero;
   onSelect(hero: Hero): void {
     this.selectedHero = hero;
   }*/
   
   
   heroes: Hero[];
   
   selectedHero: Hero;
   onSelect(hero: Hero): void {
     this.selectedHero = hero;
   }
   
   getHeroes(): void {
     this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
   }

   ngOnInit() {
      this.getHeroes();  
    }
}
