class MobileNavbar {
  constructor(mobileMenu, nav900) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(nav900);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }


  addClickEvent() {
    this.mobileMenu.addEventListener("click", ()=> console.log("heyheyhey"));
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
);
mobileNavbar.init();