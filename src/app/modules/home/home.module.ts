import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { CommonModule } from "@angular/common";
import { HomeRouter } from "./home.routing";
import { LayoutModule } from "src/app/layout/layout.module";

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports:[
        CommonModule,
        HomeRouter,
        LayoutModule
    ]
})

export class HomeModule {}