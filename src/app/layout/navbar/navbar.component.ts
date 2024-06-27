import { AfterViewInit, Component, ElementRef, HostListener } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements AfterViewInit {
  isFullscreen = true;
  isNavbarCollapsed = true;

  constructor(private router: Router, private elementRef: ElementRef) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.checkUrl();
      }
    });
  }

  ngAfterViewInit() {
    this.checkUrl();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          this.isFullscreen = false;
        } else {
          this.isFullscreen = true;
        }
      });
    }, { threshold: [0] });

    observer.observe(this.elementRef.nativeElement);
  }

  checkUrl() {
    if (this.router.url !== '/home') {
      this.isFullscreen = false;
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

  toggleNavbar() {
    console.log(this.isNavbarCollapsed);
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }
}
