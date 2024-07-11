export class NavbarRepo {
    private scrollListenerActive: boolean = true;
    private firstLoad: boolean = true;
    scrollListener() {
        return this.scrollListenerActive;
    }

    activateScrollListener() {
        this.scrollListenerActive = true;
    }
    
    deactivateScrollListener() {
        this.scrollListenerActive = false;
    }

    hideNavbarFull() {
        const navbar = document.getElementById('mainNavbar');
        const navbarFull = document.getElementById('navbarFull');
        const navbarMin = document.getElementById('navbarMin');
        if (navbar && navbarMin && navbarFull) {
            navbar.classList.add('shrink');
            navbar.addEventListener('animationend', () => {
                navbar.classList.remove('shrink');
                navbarMin.classList.remove('d-none');
                navbarFull.classList.add('d-none');
                this.firstLoad = false;
            }, { once: true });
        }
    }

    showNavbarFull() {
        const navbar = document.getElementById('mainNavbar');
        const navbarFull = document.getElementById('navbarFull');
        const navbarMin = document.getElementById('navbarMin');
        if (navbar && navbarMin && navbarFull && !this.firstLoad) {
            navbar.classList.remove('shrink');
            navbarFull.classList.remove('d-none');
            navbarMin.classList.add('d-none');
        }
    }

    showMainNavBar() {
        const mainNavbar = document.getElementById('mainNavbar');
        if ( mainNavbar) {
            mainNavbar.classList.remove('d-none')
        }
    }

    hideMainNavBar() {
        const mainNavbar = document.getElementById('mainNavbar');
        if ( mainNavbar) {
            mainNavbar.classList.add('d-none')
        }
    }

    scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    scrollToSection(sectionId: string) {
        this.hideNavbarFull();
        setTimeout(() => {
          const section = document.getElementById(sectionId);
          const navbarMin = document.getElementById('navbarMin');
          
          if (section && navbarMin) {
              // Obtener la posición del elemento objetivo
              const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset;
              // Calcular la posición ajustada
              const adjustedPosition = sectionPosition - 165;
              // Desplazarse a la posición ajustada
              window.scrollTo({ top: adjustedPosition, behavior: 'smooth' });
          }
      }, 300);
    }
}