import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, AfterViewInit {
  private contactShape: HTMLElement | null = null;
  private contactShape1: HTMLElement | null = null;
  private careerShape: HTMLElement | null = null;
  private activeElements: Set<HTMLElement> = new Set();

  ngOnInit(): void { }

  ngAfterViewInit(): void {
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

}
