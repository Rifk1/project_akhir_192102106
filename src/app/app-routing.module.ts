import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DivisionComponent } from './division/division.component';
import { EditComponent } from './edit/edit.component';
import { HapusComponent } from './hapus/hapus.component';
import { TambahComponent } from './tambah/tambah.component';

const routes: Routes = [
  {path:"dashboard",component:DashboardComponent},
  {path:"divisi",component:DivisionComponent},
  {path:"tambah",component:TambahComponent},
  {path:"edit",component:EditComponent},
  {path:"hapus",component:HapusComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
