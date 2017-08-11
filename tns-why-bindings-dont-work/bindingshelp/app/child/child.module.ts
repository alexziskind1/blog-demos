import { NgModule } from '@angular/core';
//This import is needed for ListView bindings to work
//Uncomment to see the magic
//import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { ChildComponent } from './component/child.component';

@NgModule({
    imports: [
        //This import is needed for ListView bindings to work
        //Uncomment to see the magic
        ///NativeScriptModule
    ],
    exports: [ChildComponent],
    declarations: [ChildComponent],
    providers: []
})
export class ChildModule {

}
