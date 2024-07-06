import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

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
    'Electronic safety']


  ngAfterViewInit(): void {
    this.initScroll();
    this.setPosition();
  }
  ngOnInit(): void {

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
}
