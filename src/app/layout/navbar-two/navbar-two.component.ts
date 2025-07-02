import { Component, Input, HostListener, AfterViewInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarRepo } from '../navbar/repositories/navbar.repo';

interface MenuItem {
  label: string;
  action?: string;
  link?: string;
  routerLinkActive?: string | string[];
}

@Component({
  selector: 'app-navbar-two',
  templateUrl: './navbar-two.component.html',
  styleUrls: ['./navbar-two.component.css']
})
export class NavbarTwoComponent implements AfterViewInit {
  @Input() menuTitle: string = '';
  @Input() context: 'about' | 'products' = 'about';

  private activeElements: Set<HTMLElement> = new Set();
  private contactShape: HTMLElement | null = null;
  private contactShape1: HTMLElement | null = null;
  private careerShape: HTMLElement | null = null;
  private menuNav: HTMLElement | null = null;
  
  menuItems: MenuItem[] = [
    { label: 'HOME', action: 'content', link: '/' },
    { 
      label: 'ABOUT US', 
      link: '/about-us',
      routerLinkActive: this.context === 'about' ? 'active' : undefined 
    },
    { label: 'SERVICES', action: 'services' },
    { label: 'TRADES', action: 'trades' },
    { label: 'EXPERIENCE', action: 'experience' },
    { label: 'CONTACT AND QUOTE', action: 'contact' },
    { label: 'CAREER', action: 'career' }
  ];
  constructor(
    private navbarRepo: NavbarRepo,
    private router: Router,
    private el: ElementRef
  ) {
    this.navbarRepo.hideNavbarFull();
    this.navbarRepo.hideMainNavBar();
    this.navbarRepo.deactivateScrollListener();
    this.navbarRepo.scrollToTop();
  }

  ngAfterViewInit(): void {
    this.checkWindowSize();
    this.contactShape = this.el.nativeElement.querySelector('.contact-shape');
    this.contactShape1 = this.el.nativeElement.querySelector('.contact-shape1');
    this.careerShape = this.el.nativeElement.querySelector('.career-shape');
    this.menuNav = this.el.nativeElement.querySelector('.menu-nav');
    
    if (this.contactShape) this.initIntersectionObserver(this.contactShape);
    if (this.contactShape1) this.initIntersectionObserver(this.contactShape1);
    if (this.careerShape) this.initIntersectionObserver(this.careerShape);
    if (this.menuNav) this.initIntersectionObserver(this.menuNav);
  }

  handleClick(item: MenuItem) {
    if (!item.action && !item.link) return;

    const currentRoute = this.router.url;
    const isHome = currentRoute === '/';
    const isAboutUs = currentRoute.includes('/about-us');
    const isProducts = currentRoute.includes('/products');
    if ((isAboutUs || isProducts) && item.action === 'contact') {
      this.scrollToSection(item.action);
      return;
    }

    if (isProducts && item.link === '/about-us') {
      this.router.navigate(['/about-us']).then(() => {
        this.navbarRepo.hideNavbarFull();
        this.navbarRepo.hideMainNavBar();
      });
      return;
    }

    if (isAboutUs && (item.link?.includes('/about-us') || item.label === 'ABOUT US')) {
      this.scrollToSection('aboutus');
      return;
    }

    const shouldNavigateHome = !isHome && (isAboutUs || isProducts);

    if (shouldNavigateHome) {
      this.router.navigate(['/']).then(() => {
        this.scrollToSection(item.action!);
      });
    } else if (item.action) {
      this.scrollToSection(item.action);
    }

    if (this.context === 'about') {
      this.navbarRepo.hideMainNavBar();
      this.navbarRepo.deactivateScrollListener();
    }
  }

  initIntersectionObserver(element: HTMLElement) {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    const observer = new IntersectionObserver(this.handleIntersect.bind(this), observerOptions);
    observer.observe(element);
  }

  handleIntersect(entries: IntersectionObserverEntry[], observer: IntersectionObserver) {
    entries.forEach(entry => {
      const targetElement = entry.target as HTMLElement;
      if (targetElement.classList.contains('menu-nav')) {
        if (!entry.isIntersecting) {
          this.navbarRepo.hideNavbarFull();
          this.navbarRepo.showMainNavBar();
        } else {
          this.navbarRepo.hideMainNavBar();
        }
      }
      if (entry.isIntersecting) {
        this.activeElements.add(entry.target as HTMLElement);
      } else {
        this.activeElements.delete(entry.target as HTMLElement);
      }
    });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    const scrollPosition = window.pageYOffset;

    this.activeElements.forEach(element => {
      let speed = 0;

      if (element.classList.contains('contact-shape')) {
        speed = 0.09;
      } else if (element.classList.contains('contact-shape1')) {
        speed = 0.08;
      } else if (element.classList.contains('career-shape')) {
        speed = 0.1;
      }

      element.style.transform = `translateY(${scrollPosition * speed}px)`;
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkWindowSize();
  }

  checkWindowSize() {
    const navbarTwo = this.el.nativeElement.querySelector('app-navbar-two');
    if (navbarTwo) {
      if (window.innerWidth <= 991) {
        navbarTwo.classList.add('d-none');
      } else {
        navbarTwo.classList.remove('d-none');
        this.navbarRepo.hideNavbarFull();
        this.navbarRepo.hideMainNavBar();
      }
    }
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

