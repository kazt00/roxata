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
        callback(event.urlAfterRedirects);
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
    const currentRoute = this.router.url;
    const isSpecialRoute = currentRoute.includes('/about-us') || currentRoute.includes('/products');
    const isMobileView = window.innerWidth <= 991;

    // Comportamiento para móvil en rutas especiales
    if (isSpecialRoute && isMobileView) {
      if (window.scrollY === 0) {
        this.navbarRepo.showNavbarFull();
      } else {
        this.navbarRepo.hideNavbarFull();
      }
      return;
    } else if (isSpecialRoute && !isMobileView) {
      this.navbarRepo.hideNavbarFull();
      return;
    }
    // Lógica original para otras rutas
    if (!isSpecialRoute) {
      if (window.scrollY === 0) {
        this.navbarRepo.showNavbarFull();
      } else {
        this.navbarRepo.hideNavbarFull();
      }
    }
  }

  scrollToSection(sectionId: string): void {
    const currentRoute = this.router.url;
    const isHome = currentRoute === '/' || currentRoute.includes('/home');
    const isAboutUs = currentRoute.includes('/about-us');

    // Caso especial 1: 'aboutus' cuando ya estamos en /about-us
    if (isAboutUs && sectionId === 'aboutus') {
      this.navbarRepo.scrollToSection('aboutus');
      return;
    }

    // Caso especial 2: 'contact' en cualquier ruta
    if (sectionId === 'contact') {
      this.navbarRepo.scrollToSection(sectionId);
      return;
    }

    // Caso general: redirigir a home si no estamos allí
    if (!isHome) {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          this.navbarRepo.scrollToSection(sectionId);
        }, 100);
      });
    } else {
      this.navbarRepo.scrollToSection(sectionId);
    }
  }

  hideNavbarFull() {
    this.navbarRepo.hideNavbarFull()
  }

  scrollToTop() {
    this.navbarRepo.scrollToTop();
  }

}
