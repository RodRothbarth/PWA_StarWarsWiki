import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FilmsComponent} from "./films.component";
import {FilmsRoutingModule} from "./films-routing.module";
import {MatCardModule} from "@angular/material/card";
import {MatTableModule} from "@angular/material/table";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [FilmsComponent],
    imports: [
        CommonModule,
        FilmsRoutingModule,
        MatCardModule,
        MatTableModule,
        MatGridListModule,
        MatButtonModule,
        MatIconModule,
    ]
})
export class FilmsModule { }
