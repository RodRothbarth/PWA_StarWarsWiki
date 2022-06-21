import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PeopleComponent} from "./people.component";
import {PeopleRoutingModule} from "./people-routing.module";
import {MatCardModule} from "@angular/material/card";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";

@NgModule({
  declarations: [PeopleComponent],
    imports: [
        CommonModule,
        PeopleRoutingModule,
        MatCardModule,
        MatTableModule,
        MatPaginatorModule,
    ]
})
export class PeopleModule { }
