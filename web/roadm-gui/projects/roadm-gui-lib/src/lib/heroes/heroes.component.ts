
import { Component, OnInit, OnDestroy} from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';

import { ActivatedRoute, Router } from '@angular/router';

/**
 * ONOS GUI -- Heroes Device View Component
 */
@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit{
   
    constructor() {}
    
    ngOnInit() {
        
    }
 
  /** selectedHero: Hero;
   onSelect(hero: Hero): void {
     this.selectedHero = hero;
   }*/
   
   heroes = HEROES;
   
}
