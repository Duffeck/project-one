import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CorreiosComponent } from './correios-module/correios/correios.component';
import { NotFoundComponent } from './not-found/not-found/not-found.component';
import { Routes, RouterModule } from '@angular/router';
import { CorreiosModuleModule } from './correios-module/correios-module.module';

const appRoutes: Routes = [
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [AppComponent, NotFoundComponent],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), CorreiosModuleModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
