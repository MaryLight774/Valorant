class MobileNavbar {
  constructor(mobileMenu, nav, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.nav = document.querySelector(nav);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }
/*--------------animação-----------------------------------------------*/

  /*---------------------------------------------------------------*/

  handleClick() {
    this.nav.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}


const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav",
  ".nav li",
);
mobileNavbar.init();