import { NgModule } from "@angular/core";
import {Routes, RouterModule} from '@angular/router'
import { HomeComponent } from "./components/home/home.component";
import { MovieComponent } from "./components/movie/movie.component";

const routes: Routes = [
  { path:'' , redirectTo:'home', pathMatch:'full'},
  { path:'home', component:HomeComponent },
  { path:'viewMovie/:id', component:MovieComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [HomeComponent] //app.module imports can be remove