import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PlanetsComponent} from "./planets.component";
import {PlanetsRoutingModule} from "./planets-routing.module";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";



@NgModule({
  declarations: [PlanetsComponent],
  imports: [
    CommonModule,
    PlanetsRoutingModule,
    MatCardModule,
    MatGridListModule
  ]
})
export class PlanetsModule { }
