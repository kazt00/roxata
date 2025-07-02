import { NgModule } from "@angular/core";
import { ProductsComponent } from "./products.component";
import { CommonModule } from "@angular/common";
import { ProductsRouter } from "./products.routing";
import { LayoutModule } from "src/app/layout/layout.module";

@NgModule({
    declarations: [
        ProductsComponent
    ],
    imports:[
        CommonModule,
        LayoutModule,
        ProductsRouter
    ]
})

export class ProductsModule {}