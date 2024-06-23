import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-backtotop',
  templateUrl: './backtotop.component.html',
  styleUrls: ['./backtotop.component.css']
})
export class BacktotopComponent {
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const button = document.getElementById('backToTopBtn');
    if (button) {
      if (window.pageYOffset > 300) {
        button.style.display = 'block';
      } else {
        button.style.display = 'none';
      }
    }
  }

  topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
