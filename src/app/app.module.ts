import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }   from './app.component';

import { AdminModule } from './admin/admin.module';
import { DemographicsModule } from './demographics/demographics.module';
import { ItemModule } from './items/item.module';
import { SharedModule } from './shared/shared.module';

import { CharacterService } from './character/character.service';


import { routing, appRoutingProviders }        from './app.routing';

@NgModule({
    imports:      [ BrowserModule, 
                    HttpModule,
                    routing,
                    SharedModule.forRoot(),
                    AdminModule,
                    DemographicsModule,
                    ItemModule ],
    declarations: [ AppComponent ],
    providers:    [ appRoutingProviders,
                    CharacterService ],
    bootstrap:    [ AppComponent ],
})
export class AppModule {}