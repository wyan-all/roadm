/*
 * Copyright 2019-present Open Networking Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Gui2FwLibModule } from 'gui2-fw-lib';
import { RoadmDeviceComponent } from './roadm/roadm.component';
import { RoadmRoutingModule } from './roadm-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoadmPortComponent } from './port/port.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { Hero } from './hero';
import {HEROES} from './mock-heroes';



@NgModule({
    declarations: [
        RoadmDeviceComponent,
        RoadmPortComponent,
        HeroesComponent,
        HeroDetailComponent,
    ],
    imports: [
        RoadmRoutingModule,
        Gui2FwLibModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        RoadmDeviceComponent,
        RoadmPortComponent,
        HeroesComponent,
    ],

})
export class RoadmGuiLibModule { }
