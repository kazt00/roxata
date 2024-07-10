import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarRepo } from './repositories/navbar.repo';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isVisible = false;
  animationClass = '';
  constructor(
    private router: Router,
    private elementRef: ElementRef,
    private navbarRepo: NavbarRepo) {}

  ngOnInit(): void {
    this.checkScrollPosition();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (this.navbarRepo.scrollListener()) {
      this.checkScrollPosition();
    }
  }

  checkScrollPosition() {
    if (window.scrollY === 0) { // Posición más alta de la página
        this.navbarRepo.showNavbarFull();
    } else {
        this.navbarRepo.hideNavbarFull();
    }
  }
  
  scrollToSection(sectionId: string) {
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

  showDiv() {
    this.animationClass = 'slide-in';
    this.isVisible = true;
  }

  hideDiv() {
    this.animationClass = 'slide-out';
    setTimeout(() => {
      this.isVisible = false;
    }, 500); // Tiempo de duración de la animación
  }
}
