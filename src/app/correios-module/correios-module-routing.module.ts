import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CorreiosComponent } from './correios/correios.component';
import { QualquerCoisaComponent } from './qualquer-coisa/qualquer-coisa.component';

const routes: Routes = [
  {
    path: 'correios',
    children: [
      { path: 'correios', component: CorreiosComponent },
      { path: 'qualquer-coisa', component: QualquerCoisaComponent },
      { path: '', redirectTo: '/correios', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: '/correios', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CorreiosModuleRoutingModule {}
