import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AboutUsComponent } from "./about-us.component";
import { AboutRouter } from "./about-us.routing";
import { LayoutModule } from "src/app/layout/layout.module";

@NgModule({
    declarations: [
        AboutUsComponent
    ],
    imports:[
        CommonModule,
        LayoutModule,
        AboutRouter
    ]
})

export class AboutModule {}