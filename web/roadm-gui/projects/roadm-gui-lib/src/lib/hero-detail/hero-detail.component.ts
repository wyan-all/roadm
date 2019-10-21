
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import {Hero} from '../hero';


/**
 * ONOS GUI -- Hero-detail Device View Component
 */
@Component({
    selector: 'app-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.css']
})


export class HeroDetailComponent implements OnInit{
    
    @Input() hero: Hero;

    constructor() {}
    
    ngOnInit() {
        
    }
 
  
   
}
