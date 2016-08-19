import { NgModule }       from '@angular/core';
import { SharedModule  } from './../shared/SharedModule';
import { HttpModule } from '@angular/http';
import { AppComponent }   from './app.component';

@NgModule({
    imports:      [BrowserModule, HttpModule],
    declarations: [AppComponent],
    bootstrap:    [AppComponent],
})
export class AppModule {}