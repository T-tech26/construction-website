function createNav() {
  const nav = document.querySelector(".nav");
  
  nav.innerHTML = '\
    \
    <nav> \
      <h1>logo</h1>\
        <div class="show-menu-icon"> \
          <span></span> \
          <span></span> \
          <span></span> \
        </div>  \
      <ul> \
      <li><a href="index.html">Home</a></li> \
        <li><a href="about.page.html">About</a></li> \
        <li><a href="services.page.html">Services</a></li> \
        <li><a href="foundation.page.html">Foundation and features</a></li> \
        <li><a href="jobrecruitment.page.html">Job recruitment</a></li> \
        <li><a href="contact.page.html">Contact</a></li> \
      </ul> \
    </nav> ';
}

createNav();