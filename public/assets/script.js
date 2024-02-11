const tl = gsap.timeline({ defaults: { ease: "power1.out" } }); //koliko dugo želimo da se svaka animacija dogodi

// Animacija valjka
tl.to(".valjak", { x: "600%", ease: Power4.easeInOut, duration: 5 });

// Animacija slova
tl.to(
  [
    ".intro-w",
    ".intro-e",
    ".intro-b",
    ".intro-d",
    ".intro-e-o",
    ".intro-s",
    ".intro-i",
  ],
  {
    rotationY: 0,
    autoAlpha: 1,
    ease: Power4.easeInOut,
    stagger: 0.2,
    duration: 0.5,
  },
  "-=3"
);
tl.to(".intro-text", { autoAlpha: 0, ease: Power4.easeInOut, duration: 1 });
tl.to(".slider", { y: "-150%", duration: 2.5, delay: 0.5 });
tl.to(".intro", { y: "-150%", duration: 1 }, "-=2");

function toggleText(button) {
  let parentElement = button.closest(".visehandler");
  var dots = parentElement.querySelector(".dots");
  var moreText = parentElement.querySelector(".more");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    moreText.style.display = "none";
    button.innerHTML = "Više";
  } else {
    dots.style.display = "none";
    moreText.style.display = "inline";
    button.innerHTML = "Manje";
  }
}

$(document).ready(function () {
  $(".sidemenu-toggler").click(function () {
    $(".sidemenu").addClass("active");
  });

  $(".close").click(function () {
    $(".sidemenu").removeClass("active");
  });

  $(".header .sidemenu nav ul li a").click(function () {
    $(".sidemenu").removeClass("active");
  });

  $(window).scroll(function () {
    if (this.scrollY > 10) {
      $(".header").addClass("sticky");
    } else {
      $(".header").removeClass("sticky");
    }
  });

  //micanje navbara kad se scrola
  $(window).on("scroll load", function () {
    $(".sidemenu").removeClass("active");

    //prepoznavanje sekcija(scroll spy)

    $("section").each(function () {
      let top = $(window).scrollTop();
      let offset = $(this).offset().top - 200;
      let height = $(this).height();
      let id = $(this).attr("id");

      if (top > offset && top < offset + height) {
        $(".header .menu a").removeClass("active_a");
        $(".header .sidemenu nav a").removeClass("active_a");
        $(".header").find(`[href="#${id}"]`).addClass("active_a");
      }
    });
  });
});
