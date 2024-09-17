import { InitialNavigation, RouterModule, Routes } from "@angular/router";
import { HomeModule } from "./modules/home/home.module";
import { AboutModule } from "./modules/about-us/about-us.module";
import { NgModule } from "@angular/core";
import { ProductsModule } from "./modules/products/products.module";

const appRouter: Routes = [
    {
        path: 'home',
        loadChildren: () => HomeModule
    },
    {
        path: 'about-us',
        loadChildren: () => AboutModule
    },
    {
        path: 'products',
        loadChildren: () => ProductsModule
    },
    {
        path: 'products/:id',
        loadChildren: () => ProductsModule
    },
    {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRouter, {
            useHash: true,
            onSameUrlNavigation: 'reload',
            initialNavigation: 'enabled' as InitialNavigation
        })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }