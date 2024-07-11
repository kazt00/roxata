import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarRepo } from 'src/app/layout/navbar/repositories/navbar.repo';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  constructor(
    private navbarRepo: NavbarRepo,
    private router: Router) {
    this.navbarRepo.hideNavbarFull();
    this.navbarRepo.hideMainNavBar();
    this.navbarRepo.deactivateScrollListener();
    this.navbarRepo.scrollToTop();
  }

  goToHome(section?: string) {
    if (section) {
      this.router.navigateByUrl('/');
      setTimeout(() => {
        this.navbarRepo.scrollToSection(section);
      }, 300);
    }
    this.navbarRepo.showMainNavBar();
    this.navbarRepo.activateScrollListener();
  }
  scrollToSection(section: string) {
    this.navbarRepo.scrollToSection(section);
  }

}
