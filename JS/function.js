$(document).ready(function () {
  $(window).scroll(function () {
    var aboutItem = document.getElementById("aboutItem");
    var resumeItem = document.getElementById("resumeItem");
    var contactItem = document.getElementById("contactItem");

    var Scroll = $(window).scrollTop() + 1, // distance you have scrolled from the top.
      SectionOne = $("#about").offset().top, // distance between #section-one and the top.
      SectionTwo = $("#resume").offset().top;
    SectionThree = $("#contact").offset().top;

    if (Scroll >= SectionOne) {
      aboutItem.classList.add("active", "badge-info");
      resumeItem.classList.remove("active", "badge-info");
      contactItem.classList.remove("active", "badge-info");
    }
    if (Scroll >= SectionTwo - 250) {
      aboutItem.classList.remove("active", "badge-info");
      resumeItem.classList.add("active", "badge-info");
      contactItem.classList.remove("active", "badge-info");
    }
    if (Scroll >= SectionThree - 500) {
      aboutItem.classList.remove("active", "badge-info");
      resumeItem.classList.remove("active", "badge-info");
      contactItem.classList.add("active", "badge-info");
    }
  });
});
