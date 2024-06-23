import { NgModule } from "@angular/core";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { CommonModule } from "@angular/common";
import { BacktotopComponent } from './backtotop/backtotop.component';
import { RouterModule } from "@angular/router";


@NgModule({
    declarations: [
        NavbarComponent,
        FooterComponent,
        BacktotopComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        NavbarComponent,
        FooterComponent
    ]
})

export class LayoutModule {}