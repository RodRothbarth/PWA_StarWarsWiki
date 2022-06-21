import {RouterModule, Routes} from "@angular/router";
import {AppComponentResolver} from "../../resolvers/app.component.resolver";
import {NgModule} from "@angular/core";
import {SpeciesComponent} from "./species.component";

const routes: Routes = [{
  path:"", component: SpeciesComponent, resolve: {
    menu: AppComponentResolver
  }
}];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class SpeciesRoutingModule { }
