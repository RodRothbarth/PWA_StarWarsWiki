import {RouterModule, Routes} from "@angular/router";
import {AppComponentResolver} from "../../resolvers/app.component.resolver";
import {NgModule} from "@angular/core";
import {PeopleComponent} from "./people.component";

const routes: Routes = [{
  path:"", component: PeopleComponent, resolve: {
    menu: AppComponentResolver
  }
}];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class PeopleRoutingModule { }
