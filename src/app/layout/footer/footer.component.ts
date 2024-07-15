import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarRepo } from '../navbar/repositories/navbar.repo';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(
    private router: Router,
    private navbarRepo: NavbarRepo){}

  goToHome() {
    this.router.navigateByUrl('/');
    this.navbarRepo.scrollToTop();
    this.navbarRepo.showMainNavBar();
    this.navbarRepo.activateScrollListener();
  }
}
