// making the nav menu to be sticky when top is scrolled to 50
window.onscroll = fixed = () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector(".nav").id = "position";
  } else {
    document.querySelector(".nav").id = "";
  }
}

const show = () => {
  const navIcon = document.querySelector(".show-menu-icon");
  const mobileNav = document.getElementById('mobile-nav');

  navIcon.addEventListener("click", () => {
    mobileNav.style.animationName = 'showNav';
  })
}

show();

const hide = () => {
  const navIcon = document.querySelector(".cancel-menu-icon");
  const mobileNav = document.getElementById('mobile-nav');

  navIcon.addEventListener("click", () => {
    mobileNav.style.animationName = 'hideNav';
  })
}

hide();