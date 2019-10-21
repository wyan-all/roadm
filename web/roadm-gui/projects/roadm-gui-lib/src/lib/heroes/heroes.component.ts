
import { Component, OnInit, OnDestroy} from '@angular/core';
import {Hero} from '../hero';

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
 
   hero: Hero = {
   id: 1,
   name: 'Windstorm' };
   
}
