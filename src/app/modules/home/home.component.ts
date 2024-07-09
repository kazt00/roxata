import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
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
}
