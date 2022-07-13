$(".loading-screen").css("display", "none");
$(".page-container").css("display", "block");
$(document).ready(function () {
  if ($(window).scrollTop() >= 560) {
    $(".nav-link, #brandName").addClass("text-dark");
    $("#mainNav").addClass("nav2 shadow");
  } else {
    $("#mainNav").addClass("nav1");
    $(".nav-link, #brandName").addClass("text-white");
  }

  $(window).scroll(function () {
    if ($(window).scrollTop() > 560) {
      $("#mainNav").removeClass("nav1");
      $("#mainNav").addClass("nav2 shadow");

      $(".nav-link, #brandName, .fas").removeClass("text-white");
      $(".nav-link, #brandName, .fas").addClass("text-dark");
    } else {
      $("#mainNav").removeClass("nav2 shadow");
      $("#mainNav").addClass("nav1");
      $(".nav-link, #brandName, .fas").removeClass("text-dark");
      $(".nav-link, #brandName, .fas").addClass("text-white");
    }
  });

  $(".nav-link").on("mouseover", (e) => {
    $(e.target).addClass("borderIn");
  });

  $(".nav-link").on("mouseout", (e) => {
    $(e.target).removeClass("borderIn");
  });

  $("#homeNav").addClass("borderIn");
  $(window).scroll(function () {
    var wH = 800,
      hTs = $("#skills").offset().top,
      hHs = $("#skills").outerHeight(),
      hTp = $("#portfolio").offset().top,
      hHp = $("#portfolio").outerHeight(),
      hTa = $("#about").offset().top,
      hHa = $("#about").outerHeight(),
      hTc = $("#contact").offset().top,
      hHc = $("#contact").outerHeight(),
      wS = $(this).scrollTop();

    if (wS < hTa + hHa - wH) {
      $("#homeNav").addClass("borderIn");
    } else {
      $("#homeNav").removeClass("borderIn");
    }

    if (wS > hTa + hHa - wH && wS < hTs + hHs - wH) {
      $("#aboutNav").addClass("borderIn");
    } else {
      $("#aboutNav").removeClass("borderIn");
    }

    if (wS > hTs + hHs - wH && wS < hTp + hHp - wH) {
      $("#skillsNav").addClass("borderIn");
    } else {
      $("#skillsNav").removeClass("borderIn");
    }

    if (wS > hTp + hHp - wH && wS < hTc + hHc - wH) {
      $("#portfolioNav").addClass("borderIn");
    } else {
      $("#portfolioNav").removeClass("borderIn");
    }
    if (wS > hTc + hHc - wH) {
      $("#contactNav").addClass("borderIn");
    } else {
      $("#contactNav").removeClass("borderIn");
    }

    // if (wS > hTp + hHp - wHp) {
    //   $("#portfolioNav").addClass("borderIn");
    // } else {
    //   $("portfolioNav").removeClass("borderIn");
    // }
  });
});

// $(document).ready(function () {});
