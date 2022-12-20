import { NgModule } from "@angular/core";
import {Routes, RouterModule} from '@angular/router'
import { HomeComponent } from "./components/home/home.component";
import { MovieDetailsComponent } from "./components/movieDetails/movieDetails.component";

const routes: Routes = [
  { path:'' , redirectTo:'home', pathMatch:'full'},
  { path:'home', component:HomeComponent, data: { defaultPage: 1} },
  { path:'movie/:id', component:MovieDetailsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [HomeComponent] //app.module imports can be remove