import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { CommonModule } from "@angular/common";
import { HomeRouter } from "./home.routing";

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports:[
        CommonModule,
        HomeRouter
    ]
})

export class HomeModule {}