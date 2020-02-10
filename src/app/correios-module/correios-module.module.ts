import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CorreiosModuleRoutingModule } from './correios-module-routing.module';
import { CorreiosComponent } from './correios/correios.component';
import { Routes, RouterModule } from '@angular/router';
import { QualquerCoisaComponent } from './qualquer-coisa/qualquer-coisa.component';


@NgModule({
  declarations: [CorreiosComponent, QualquerCoisaComponent],
  imports: [CommonModule, CorreiosModuleRoutingModule]
})
export class CorreiosModuleModule {}
