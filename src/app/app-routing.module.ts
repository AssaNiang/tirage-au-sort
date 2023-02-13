import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbsentComponent } from './pages/absent/absent.component';
import { DrawComponent } from './pages/draw/draw.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path:"",
    component:DrawComponent
  },
  {
    path:"Tirage aux sorts",
    component:DrawComponent
  },
  {
    path:"Absents",
    component:AbsentComponent
  },
  {
    path:"not-found",
    component:NotFoundComponent
    
  },
  {
    path:"**",
    redirectTo:'not-found' 
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
