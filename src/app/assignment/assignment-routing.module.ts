import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignementDetailsComponent } from './components/assignement-details/assignement-details.component';

const routes: Routes = [
  { path: ':id', component: AssignementDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssignmentRoutingModule {}
