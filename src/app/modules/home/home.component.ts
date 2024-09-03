import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarRepo } from 'src/app/layout/navbar/repositories/navbar.repo';
import { FullScreenModalComponent } from 'src/app/layout/full-screen-modal/full-screen-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  @ViewChild('scroll1', { static: true }) scrollContainer: ElementRef | undefined;
  @ViewChild(FullScreenModalComponent) modal!: FullScreenModalComponent;
  items = [
    'Demolition',
    'Civil',
    'Shell',
    'Structural steel',
    'Miscellaneous metals',
    'Drywall',
    'Painting',
    'Stucco',
    'Waterproofing',
    'Roofing',
    'Mechanical',
    'Electrical',
    'Plumbing',
    'Fire Control',
    'Millwork',
    'Tile and finishes',
    'Windows',
    'Doors',
    'Precast',
    'Pavers'];
  selectedProjectId: number = 0;
  private contactShape: HTMLElement | null = null;
  private contactShape1: HTMLElement | null = null;
  private careerShape: HTMLElement | null = null;
  private activeElements: Set<HTMLElement> = new Set();

  constructor(
    private navbarRepo: NavbarRepo,
    private router: Router) {
    this.navbarRepo.activateScrollListener();
    this.navbarRepo.showNavbarFull();
  }

  ngAfterViewInit(): void {
    this.initScroll();
    this.setPosition();
    this.contactShape = document.querySelector('.contact-shape');
    this.contactShape1 = document.querySelector('.contact-shape1');
    this.careerShape = document.querySelector('.career-shape');
    if(this.contactShape)
      this.initIntersectionObserver(this.contactShape);
    if(this.contactShape1)
      this.initIntersectionObserver(this.contactShape1);
    if(this.careerShape)
      this.initIntersectionObserver(this.careerShape);
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
      if (entry.isIntersecting) {
        this.activeElements.add(entry.target as HTMLElement);
      } else {
        this.activeElements.delete(entry.target as HTMLElement);
      }
    });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.applyParallaxEffect();
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

  handleScroll() {
    const container = this.scrollContainer?.nativeElement;
    const scrollHeight = container.scrollHeight / 2;
    if (container.scrollTop >= scrollHeight) {
      container.scrollTop = 1;
    } else if (container.scrollTop <= 0) {
      container.scrollTop = scrollHeight - 1;
    }
  }

  initScroll() {
    const container = this.scrollContainer?.nativeElement;
    const scrollHeight = container.scrollHeight / 2;
    container.scrollTop = scrollHeight / 1; // Inicializa el scroll en el centro
  }

  setPosition() {
    const startPoint = document.getElementById('start-point-1');
    const fixedElement = document.getElementById('fixed-element-1');

    if (startPoint && fixedElement) {
      const startPointPosition = startPoint.getBoundingClientRect().top + window.scrollY;
      fixedElement.style.top = `${startPointPosition}px`;
    }
  }

  goToProducts(product: number) {
    this.router.navigate(['/products', product]);
  }

  applyParallaxEffect() {
    const scrollPosition = window.pageYOffset;

    const imgShape1 = document.querySelector('.img-shape1') as HTMLElement;
    const imgShape2 = document.querySelector('.img-shape2') as HTMLElement;
    const shape1 = document.querySelector('.shape1') as HTMLElement;
    const shape2 = document.querySelector('.shape2') as HTMLElement;

    // Ajustar la posición de los elementos
    if (imgShape1) {
      imgShape1.style.transform = `translateY(${scrollPosition * 0.09}px)`;
    }
    if (imgShape2) {
      imgShape2.style.transform = `translateY(${scrollPosition * 0.18}px)`;
    }
    if (shape1) {
      shape1.style.transform = `translateY(${scrollPosition * 0.35}px)`;
    }
    if (shape2) {
      shape2.style.transform = `translateY(${scrollPosition * 0.3}px)`;
    }
  }

  scrollToSection(section: string) {
    this.navbarRepo.scrollToSection(section);
  }

  openModal(projectId: number) {
    this.modal.projectId = projectId;
    this.modal.loadProject();
    this.modal.open();
  }
}
