import { NgModule,
         ModuleWithProviders } from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';

@NgModule({
  imports:      [ CommonModule ],
  exports:      [ CommonModule, FormsModule ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule
    };
  }
}

@NgModule({
  exports:   [ SharedModule ],
})
export class SharedRootModule { }