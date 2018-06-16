import { NgModule } from '@angular/core';
// tag::content[]
// import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material';

const modules = [
  // NoopAnimationsModule,
  BrowserAnimationsModule,
  MatToolbarModule,
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class AppAngularMaterialModule { }
// end::content[]
