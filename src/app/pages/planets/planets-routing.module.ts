import {RouterModule, Routes} from "@angular/router";
import {AppComponentResolver} from "../../resolvers/app.component.resolver";
import {NgModule} from "@angular/core";
import {PlanetsComponent} from "./planets.component";

const routes: Routes = [{
  path:"", component: PlanetsComponent, resolve: {
    menu: AppComponentResolver
  }
}];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class PlanetsRoutingModule { }
