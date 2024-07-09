import { RouterModule, Routes } from "@angular/router";
import { ProductsComponent } from "./products.component";


const productsRouter: Routes = [
    {
        path: '',
        component: ProductsComponent
    }
]

export const ProductsRouter = RouterModule.forChild(productsRouter);