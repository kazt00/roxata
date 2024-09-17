import { AfterViewInit, Component, HostListener, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavbarRepo } from 'src/app/layout/navbar/repositories/navbar.repo';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements AfterViewInit{

  private contactShape: HTMLElement | null = null;
  private contactShape1: HTMLElement | null = null;
  private careerShape: HTMLElement | null = null;
  private activeElements: Set<HTMLElement> = new Set();
  private menuNav: HTMLElement | null = null;
  section: number = 0;

  constructor(
    private navbarRepo: NavbarRepo,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private renderer: Renderer2) {
    this.navbarRepo.hideMainNavBar();
    this.navbarRepo.deactivateScrollListener();
    this.navbarRepo.scrollToTop();
  }

  ngAfterViewInit(): void {
    this.checkWindowSize();
    this.contactShape = document.querySelector('.contact-shape');
    this.contactShape1 = document.querySelector('.contact-shape1');
    this.careerShape = document.querySelector('.career-shape');
    this.menuNav = document.querySelector('.menu-nav');
    if(this.contactShape)
      this.initIntersectionObserver(this.contactShape);
    if(this.contactShape1)
      this.initIntersectionObserver(this.contactShape1);
    if(this.careerShape)
      this.initIntersectionObserver(this.careerShape);
    if(this.menuNav)
      this.initIntersectionObserver(this.menuNav);
    this.activateRoute.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam !== null) {
        this.section = +idParam;
        this.scrollToProduct(this.section);
      } else {
        this.section = 0;
      }
    });
  }

  goToHome(section: string) {
    this.router.navigateByUrl('/')
    this.navbarRepo.showMainNavBar();
    this.navbarRepo.activateScrollListener();
    this.navbarRepo.scrollToSection(section)
  }
  scrollToSection(section: string) {
    this.navbarRepo.scrollToSection(section);
  }

  scrollToProduct(section: number) {
    const sectionId = `product-${section}`;
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
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
  onResize(event: any) {
    this.checkWindowSize();
  }

  checkWindowSize() {
    const menuContainer = document.getElementById('menuContainer');
    const aboutus = document.getElementById('aboutus');
    if (menuContainer && aboutus) {
      if (window.innerWidth <= 992) {
        this.navbarRepo.showMainNavBar();
        this.navbarRepo.activateScrollListener();
        menuContainer.classList.add('d-none');
        aboutus.style.paddingTop = '15%';
      } else {
        this.navbarRepo.hideMainNavBar();
        this.navbarRepo.deactivateScrollListener();
        menuContainer.classList.remove('d-none');
      }
    }
  }
}
