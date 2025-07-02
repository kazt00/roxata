import { AfterViewInit, Component, HostListener } from '@angular/core';
import { NavbarRepo } from 'src/app/layout/navbar/repositories/navbar.repo';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements AfterViewInit {
  private contactShape: HTMLElement | null = null;
  private contactShape1: HTMLElement | null = null;
  private activeElements: Set<HTMLElement> = new Set();

  constructor(private navbarRepo: NavbarRepo) {
    this.navbarRepo.hideMainNavBar();
    this.navbarRepo.deactivateScrollListener();
    this.navbarRepo.scrollToTop();
  }

  ngAfterViewInit(): void {
    this.contactShape = document.querySelector('.contact-shape');
    this.contactShape1 = document.querySelector('.contact-shape1');
    
    if (this.contactShape) this.initIntersectionObserver(this.contactShape);
    if (this.contactShape1) this.initIntersectionObserver(this.contactShape1);
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

  handleIntersect(entries: IntersectionObserverEntry[]) {
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
    const scrollPosition = window.pageYOffset;

    this.activeElements.forEach(element => {
      let speed = 0;

      if (element.classList.contains('contact-shape')) {
        speed = 0.11;
      } else if (element.classList.contains('contact-shape1')) {
        speed = 0.08;
      }

      element.style.transform = `translateY(${scrollPosition * speed}px)`;
    });
  }
}
