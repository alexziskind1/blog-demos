import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { ChildModule } from './child/child.module';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        ChildModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class AppModule { }
