export class NavbarRepo {
    private scrollListenerActive: boolean = true;

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
        const body = document.body;
        if (navbar && navbarFull && navbarMin) {
            navbar.classList.add('shrink');
            body.classList.add('shrink-padding');
            navbarFull.classList.add('d-none');
            navbarMin.classList.remove('d-none');
            navbarMin.classList.add('fixed-top');
        }
    }

    showNavbarFull() {
        const navbar = document.getElementById('mainNavbar');
        const navbarFull = document.getElementById('navbarFull');
        const navbarMin = document.getElementById('navbarMin');
        const body = document.body;
        if (navbar && navbarMin && navbarFull) {
            navbar.classList.remove('shrink', 'fixed-top');
            body.classList.remove('shrink-padding');
            navbarMin.classList.add('d-none');
            navbarFull.classList.remove('d-none');
        }
    }

    hideNavbarMin() {
        const navbarMin = document.getElementById('navbarMin');
        if (navbarMin) {
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
              const adjustedPosition = sectionPosition - 150;
              // Desplazarse a la posición ajustada
              window.scrollTo({ top: adjustedPosition, behavior: 'smooth' });
          }
      }, 300);
      }
}