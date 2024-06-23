import { RouterModule, Routes } from "@angular/router";
import { AboutUsComponent } from "./about-us.component";


const aboutRouter: Routes = [
    {
        path: '',
        component: AboutUsComponent
    }
]

export const AboutRouter = RouterModule.forChild(aboutRouter);