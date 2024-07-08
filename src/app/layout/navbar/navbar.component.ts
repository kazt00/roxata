import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private elementRef: ElementRef) {
    
  }

  ngOnInit(): void {
    this.checkScrollPosition();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.checkScrollPosition();
  }

  checkScrollPosition() {
    if (window.scrollY === 0) { // Posición más alta de la página
        this.showNavbarFull();
    } else {
        this.hideNavbarFull();
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  scrollToSection(sectionId: string) {
    this.hideNavbarFull();
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      const navbarMin = document.getElementById('navbarMin');
      
      if (section && navbarMin) {
          // Obtener la posición del elemento objetivo
          const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset;
          // Calcular la posición ajustada
          const adjustedPosition = sectionPosition - 150;
          // Desplazarse a la posición ajustada
          window.scrollTo({ top: adjustedPosition, behavior: 'smooth' });
      }
  }, 300);
  }

  hideNavbarFull() {
    const navbar = document.getElementById('mainNavbar');
    const navbarFull = document.getElementById('navbarFull');
    const navbarMin = document.getElementById('navbarMin');
    const body = document.body;
    if (navbar && navbarFull && navbarMin) {
      navbar.classList.add('shrink');
      body.classList.add('shrink-padding');
      navbarFull.classList.add('d-none');
      navbarMin.classList.remove('d-none');
      navbarMin.classList.add('fixed-top');
    }
  }

  showNavbarFull() {
    const navbar = document.getElementById('mainNavbar');
    const navbarFull = document.getElementById('navbarFull');
    const navbarMin = document.getElementById('navbarMin');
    const body = document.body;
    if (navbar && navbarMin && navbarFull) {
      navbar.classList.remove('shrink', 'fixed-top');
      body.classList.remove('shrink-padding');
      navbarMin.classList.add('d-none');
      navbarFull.classList.remove('d-none');
    }
  }
}
