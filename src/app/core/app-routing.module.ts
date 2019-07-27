import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConceptComponent } from '../components/concept/concept.component';

const routes: Routes = [
  { path: '', redirectTo: 'concepts', pathMatch: 'full' },
  { path: 'concepts', component: ConceptComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
