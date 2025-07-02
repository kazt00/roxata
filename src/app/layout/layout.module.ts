import { NgModule } from "@angular/core";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { CommonModule } from "@angular/common";
import { BacktotopComponent } from './backtotop/backtotop.component';
import { RouterModule } from "@angular/router";
import { NavbarRepo } from "./navbar/repositories/navbar.repo";
import { FullScreenModalComponent } from './full-screen-modal/full-screen-modal.component';
import { NavbarTwoComponent } from './navbar-two/navbar-two.component';

@NgModule({
    declarations: [
        NavbarComponent,
        FooterComponent,
        BacktotopComponent,
        FullScreenModalComponent,
        NavbarTwoComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        NavbarComponent,
        FooterComponent,
        BacktotopComponent,
        FullScreenModalComponent,
        NavbarTwoComponent
    ],
    providers: [
        NavbarRepo
    ]
})

export class LayoutModule {}