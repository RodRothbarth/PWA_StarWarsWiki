import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatListModule} from "@angular/material/list";
import {MatSidenavModule} from "@angular/material/sidenav";
import {HomeScreenComponent} from "./home-screen.component";
import {HomeScreenRoutingModule} from "./home-screen-routing.module";
import {MatRippleModule} from "@angular/material/core";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [HomeScreenComponent],
  imports: [
    CommonModule,
    MatListModule,
    HomeScreenRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatRippleModule,
    MatButtonModule,
    MatIconModule,
  ]
})
export class HomeScreenModule { }
