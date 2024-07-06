import { AfterViewInit, Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isFullscreen = true;
  isNavbarCollapsed = true;
  private scrollThreshold: number = 100; // Ajusta este valor según lo necesario

  constructor(private router: Router, private elementRef: ElementRef) {
    
  }

  ngOnInit(): void {
    this.toggleNavbarFull();
    const navbarMin = document.getElementById('navbarMin');
    if (navbarMin) {
      navbarMin.classList.add('d-none');
    }
  }

  scrollToSection(sectionId: string) {
    this.router.navigate(['/']).then(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const navbar = document.getElementById('mainNavbar');
    const navbarFull = document.getElementById('navbarFull');
    const navbarMin = document.getElementById('navbarMin');
    const body = document.body;

    if (navbar && navbarFull && navbarMin) {
      if (window.pageYOffset > this.scrollThreshold) {
        navbar.classList.add('shrink', 'fixed-top');
        body.classList.add('shrink-padding');
        navbarMin.classList.remove('d-none');
      } else {
        navbar.classList.remove('shrink', 'fixed-top');
        body.classList.remove('shrink-padding');
        navbarMin.classList.add('d-none');
      }
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  private toggleNavbarFull() {
    const navbar = document.getElementById('mainNavbar');
    const navbarFull = document.getElementById('navbarFull');
    const body = document.body;

    if (navbar && navbarFull) {
      if (window.pageYOffset > this.scrollThreshold) {
        navbar.classList.add('shrink');
        body.classList.add('shrink-padding');
        navbarFull.classList.add('d-none');
      } else {
        navbar.classList.remove('shrink');
        body.classList.remove('shrink-padding');
        navbarFull.classList.remove('d-none');
      }
    }
  }
}
