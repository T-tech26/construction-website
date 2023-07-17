function createMobileNav() {
  const nav = document.querySelector(".mobile-nav");
  
  nav.innerHTML = '\
    <div>\
      <h1>logo</h1>\
      <p class="cancel-menu-icon"> x </p> \
    </div>\
    <ul> \
    <li><a href="index.html">Home</a></li> \
      <li><a href="about.page.html">About</a></li> \
      <li><a href="services.page.html">Services</a></li> \
      <li><a href="foundation.page.html">Foundation and features</a></li> \
      <li><a href="training.page.html">Training academy</a></li> \
      <li><a href="jobrecruitment.page.html">Job recruitment</a></li> \
      <li><a href="contact.page.html">Contact</a></li> \
    </ul>';
}

createMobileNav();