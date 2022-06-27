import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustmerInputDataComponent } from './custmer-input-data/custmer-input-data.component';
import { DataComponent } from './data/data.component';

const routes: Routes = [
  { path: 'task-1', component: CustmerInputDataComponent },
  { path: 'task-2', component: DataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
