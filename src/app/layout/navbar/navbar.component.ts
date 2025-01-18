import { Component, HostListener, OnInit } from '@angular/core';
import { NavbarRepo } from './repositories/navbar.repo';
import { NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  showMenuCareer: boolean = true;
  constructor(private navbarRepo: NavbarRepo, private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.checkRoute(event.urlAfterRedirects);
      }
    });
    this.onRouteChange((url: string) => {
      if (url.includes('/home')) {
        const navbar = document.getElementById('mainNavbar');
        if(navbar) {
          this.navbarRepo.showMainNavBar();
          this.navbarRepo.activateScrollListener();
        }
      }
    });
  }

  onRouteChange(callback: (url: string) => void): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        callback(event.urlAfterRedirects); // Ejecuta el callback con la nueva URL
      }
    });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (this.navbarRepo.scrollListener()) {
      this.checkScrollPosition();
    }
  }

  checkScrollPosition() {
    console.log(window.scrollY)
    if (window.scrollY === 0) {
      this.navbarRepo.showNavbarFull();
    } else {
      this.navbarRepo.hideNavbarFull();
    }
  }

  scrollToSection(sectionId: string, home?: boolean) {
    if (home) {
      this.router.navigateByUrl('/');
    }
    this.navbarRepo.scrollToSection(sectionId);
  }

  hideNavbarFull() {
    this.navbarRepo.hideNavbarFull()
  }

  goToAboutUs() {
    this.navbarRepo.hideMainNavBar();
    this.navbarRepo.deactivateScrollListener();
  }

  scrollToTop() {
    this.navbarRepo.scrollToTop();
  }

  checkRoute(url: string): void {
    const targetRoute = '/about-us';

    // Si la ruta es la específica, ocultamos el elemento
    if (url === targetRoute) {
      this.showMenuCareer = false;
    } else {
      this.showMenuCareer = true;
    }
  }
}
