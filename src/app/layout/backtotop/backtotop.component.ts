import { Component, HostListener } from '@angular/core';
import { NavbarRepo } from '../navbar/repositories/navbar.repo';

@Component({
  selector: 'app-backtotop',
  templateUrl: './backtotop.component.html',
  styleUrls: ['./backtotop.component.css']
})
export class BacktotopComponent {
  constructor(private navbarRepo: NavbarRepo) {}
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const button = document.getElementById('backToTop');
    if (button) {
      if (window.pageYOffset > 800) {
        button.style.display = 'block';
      } else {
        button.style.display = 'none';
      }
    }
  }

  scrollToTop() {
    this.navbarRepo.scrollToTop()
  }
}
