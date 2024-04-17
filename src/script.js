function scrollSmooth() {
  const menuLinks = document.querySelectorAll("#menu li a");
  if (menuLinks.length) {
    function scrollSuave(event) {
      event.preventDefault();
      const eventHref = event.currentTarget.getAttribute("href");
      const section = document.querySelector(eventHref);

      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    menuLinks.forEach((link) => {
      link.addEventListener("click", scrollSuave);
    });
  }
}

scrollSmooth();
