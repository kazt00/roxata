import { NgModule } from "@angular/core";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { CommonModule } from "@angular/common";
import { BacktotopComponent } from './backtotop/backtotop.component';
import { RouterModule } from "@angular/router";
import { NavbarRepo } from "./navbar/repositories/navbar.repo";

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
    ],
    providers: [
        NavbarRepo
    ]
})

export class LayoutModule {}