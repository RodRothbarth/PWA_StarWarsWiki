import {RouterModule, Routes} from "@angular/router";
import {AppComponentResolver} from "../../resolvers/app.component.resolver";
import {NgModule} from "@angular/core";
import {VehiclesComponent} from "./vehicles.component";

const routes: Routes = [{
  path:"", component: VehiclesComponent, resolve: {
    menu: AppComponentResolver
  }
}];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class VehiclesRoutingModule { }
