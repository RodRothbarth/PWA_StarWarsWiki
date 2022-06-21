import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeScreenComponent} from "./home-screen.component";
import {AppComponentResolver} from "../../resolvers/app.component.resolver";
import {FilmsComponentResolver} from "../../resolvers/films.component.resolver";

const routes: Routes = [
  {
    path:"",
    component: HomeScreenComponent,
    resolve: {menu: AppComponentResolver},
    children:[
      //Resolves dos childs preseisam estar organizados no router module do pai
      { path:"films",  loadChildren: () => import("../../pages/films/films.module").then((m)=> m.FilmsModule)},
      { path:"people", loadChildren: () => import("../../pages/people/people.module").then((m)=> m.PeopleModule)},
      { path:"planets", loadChildren: () => import("../../pages/planets/planets.module").then((m)=> m.PlanetsModule)},
      { path:"species", loadChildren: () => import("../../pages/species/species.module").then((m)=> m.SpeciesModule)},
      { path:"vehicle", loadChildren: () => import("../../pages/vehicles/vehicles.module").then((m)=> m.VehiclesModule)},
      { path:"starships", loadChildren: () => import("../../pages/starships/starships.module").then((m)=> m.StarshipsModule)},
    ]
  },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeScreenRoutingModule { }


