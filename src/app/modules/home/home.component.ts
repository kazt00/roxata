import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarRepo } from 'src/app/layout/navbar/repositories/navbar.repo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  @ViewChild('scroll1', { static: true }) scrollContainer: ElementRef | undefined;
  items = [
    'Landscaping',
    'Demolition',
    'Civil',
    'Earthwork',
    'Utilities',
    'Safety',
    'Concrete',
    'Masonry',
    'Foundations',
    'Structural steel and miscellaneous metals',
    'Drywall and ceiling',
    'Painting and stucco',
    'Waterproofing',
    'Thermal and moisture protection',
    'Roofing',
    'Mechanical',
    'Electrical',
    'Plumbing',
    'Interior design',
    'Wood and plastics',
    'Public works',
    'Vanity',
    'Tile and covers',
    'Windows and doors',
    'Openings',
    'Lighting and fixtures',
    'Structural Wood',
    'Precast objects',
    'Pavers',
    'Conveying equipment',
    'Integrated automation',
    'Communications',
    'Electronic safety'];

  constructor( 
    private navbarRepo: NavbarRepo,
    private router: Router){
    this.navbarRepo.activateScrollListener();
    this.navbarRepo.showNavbarFull();
  }

  ngAfterViewInit(): void {
    this.initScroll();
    this.setPosition();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.applyParallaxEffect();
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
    this.router.navigateByUrl('/products');
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
}
