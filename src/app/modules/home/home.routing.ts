import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home.component";


const homeRouter: Routes = [
    {
        path: '',
        component: HomeComponent
    }
]

export const HomeRouter = RouterModule.forChild(homeRouter);