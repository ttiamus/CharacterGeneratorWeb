import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }   from './app.component';
import { HomeModule }     from './home/home.module';
import { AdminModule } from './admin/admin.module';
import { SharedModule } from './shared/shared.module';

import { routing }        from './app.routing';

@NgModule({
    imports:      [ BrowserModule, 
                    HttpModule,
                    routing,
                    HomeModule,
                    AdminModule,
                    SharedModule.forRoot() ],
    declarations: [AppComponent],
    bootstrap:    [AppComponent],
})
export class AppModule {}