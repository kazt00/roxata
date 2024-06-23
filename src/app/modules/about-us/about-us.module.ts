import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AboutUsComponent } from "./about-us.component";
import { AboutRouter } from "./about-us.routing";

@NgModule({
    declarations: [
        AboutUsComponent
    ],
    imports:[
        CommonModule,
        AboutRouter
    ]
})

export class AboutModule {}