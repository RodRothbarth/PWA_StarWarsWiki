import {RouterModule, Routes} from "@angular/router";
import {AppComponentResolver} from "../../resolvers/app.component.resolver";
import {NgModule} from "@angular/core";
import {StarshipsComponent} from "./starships.component";

const routes: Routes = [{
  path:"", component: StarshipsComponent, resolve: {
    menu: AppComponentResolver
  }
}];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class StarshipsRoutingModule { }
