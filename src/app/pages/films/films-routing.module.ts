import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {FilmsComponent} from "./films.component";

const routes: Routes = [
  {
    path:"",
    component: FilmsComponent,
}];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class FilmsRoutingModule { }
