import { NgModule } from "@angular/core";
import { ProductsComponent } from "./products.component";
import { CommonModule } from "@angular/common";
import { ProductsRouter } from "./products.routing";

@NgModule({
    declarations: [
        ProductsComponent
    ],
    imports:[
        CommonModule,
        ProductsRouter
    ]
})

export class ProductsModule {}