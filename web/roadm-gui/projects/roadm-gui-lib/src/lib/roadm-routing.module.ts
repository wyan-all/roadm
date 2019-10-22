/*
 * Copyright 2019-present Open Networking Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoadmDeviceComponent } from './roadm/roadm.component';
import { RoadmPortComponent } from './port/port.component';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';

const appRoutes: Routes = [
    {
        path: 'roadm-port-gui',
        component: RoadmPortComponent
    },

    { path: 'dashboard', component: DashboardComponent },

    {
        path: '',
        component: RoadmDeviceComponent,
        children: [
         { path: 'heroes', component: HeroesComponent },
      ]
    },

   // { path: '', redirectTo: './dashboard', pathMatch: 'full' },

    {
        path: 'heroes',
        component: HeroesComponent
    },

    { path: 'hero-detail/:id', component: HeroDetailComponent },
    
];

/**
 * ONOS GUI -- Roadm View Feature Routing Module - allows it to be lazy loaded
 *
 * See https://angular.io/guide/lazy-loading-ngmodules
 */
@NgModule({
    imports: [RouterModule.forChild(appRoutes)],
    exports: [RouterModule]
})
export class RoadmRoutingModule { }
