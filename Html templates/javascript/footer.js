document.addEventListener("load", createFooter);

function createFooter() {
  const footer = document.querySelector(".footer");

  footer.innerHTML = '\
  <div class="footer-first-layer">\
    <div class="company">\
      \
      <h2>Company</h2>\
      \
      <ul>\
        <li><a href="index.html">Home</a></li>\
        <li><a href="about.page.html">About</a></li>\
        <li><a href="services.page.html">Services</a></li>\
        <li><a href="foundation.page.html">Foundation and features</a></li>\
        <li><a href="training.page.html">Training</a></li>\
        <li><a href="jobrecruitment.page.html">Job recruitment</a></li>\
      </ul>\
      \
    </div>\
    \
    <div class="service">\
      \
      <h2>Our services</h2>\
      \
      <ul>\
        <li><a href="construction.page.html">Construction</a></li>\
        <li><a href="training.page.html">Training academy</a></li>\
        <li><a href="jobrecruitment.page.html">Job recruitment</a></li>\
        <li><a href="laboursupply.page.html">Labour supplies</a></li>\
      </ul>\
    \
    </div>\
    \
    <div class="training">\
      \
      <h2>Training courses</h2>\
      \
      <ul>\
        <li><a href="training.page.html">Paintings/Screeding</a></li>\
        <li><a href="training.page.html">Rigging</a></li>\
        <li><a href="training.page.html">Safy</a></li>\
        <li><a href="training.page.html">Electricals</a></li>\
        <li><a href="training.page.html">Scaffolding</a></li>\
        <li><a href="training.page.html">Welding</a></li>\
        <li><a href="training.page.html">Masonry/Tiling</a></li>\
        <li><a href="training.page.html">Auto mechanic</a></li>\
        <li><a href="training.page.html">Insulation</a></li>\
        <li><a href="training.page.html">Mesh/Pipe fitting</a></li>\
        <li><a href="training.page.html">Gas cutting</a></li>\
        <li><a href="training.page.html">Carpentering</a></li>\
        <li><a href="training.page.html">Defensive driving</a></li>\
        <li><a href="training.page.html">Grinding</a></li>\
      </ul>\
      \
    </div>\
    \
    <div class="contact">\
      \
      <h2>Contact us</h2>\
      \
      <p>Call: +2348055736065</p>\
      \
      <form id="form" onSubmit=window.reload()>\
        \
        <input type="email" name="email" placeholder="email" id="email">\
        <textarea name="message" id="text" placeholder="please leave us a message......"></textarea>\
        <input type="submit" value="Submit">\
      \
      </form>\
      \
      <div class="footer-icon">\
        \
        <span><a href=""><i class="fa-brands fa-facebook-square"></i></a></span>\
        <span><a href=""><i class="fa-brands fa-instagram-square"></i></a></span>\
        <span><a href=""><i class="fa-brands fa-whatsapp-square"></i></a></span>\
      \
      </div>\
    </div>\
  </div>\
  \
  <hr class="footer-hr"/>\
  \
  <div class="footer-second-layer">\
    \
    <h1>logo</h1>\
    \
    <p>\
      <a href="#">Designer/Developers contact</a>\
    </p>\
    \
    <p>copyrigth @2022 Edith Empire Limited</p>\
    \
    <p>\
      <a href="privacypolicy.html">Privacy policy</a>\
    </p>\
  </div>';
}

createFooter();
