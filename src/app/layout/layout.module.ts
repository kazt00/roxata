import { NgModule } from "@angular/core";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { CommonModule } from "@angular/common";
import { BacktotopComponent } from './backtotop/backtotop.component';
import { RouterModule } from "@angular/router";
import { NavbarRepo } from "./navbar/repositories/navbar.repo";
import { FullScreenModalComponent } from './full-screen-modal/full-screen-modal.component';

@NgModule({
    declarations: [
        NavbarComponent,
        FooterComponent,
        BacktotopComponent,
        FullScreenModalComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        NavbarComponent,
        FooterComponent,
        BacktotopComponent,
        FullScreenModalComponent
    ],
    providers: [
        NavbarRepo
    ]
})

export class LayoutModule {}