function toggleText() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("read-more-btn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    moreText.style.display = "none";
    btnText.innerHTML = "Više";
  } else {
    dots.style.display = "none";
    moreText.style.display = "inline";
    btnText.innerHTML = "Manje";
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
