$(document).ready(function () {
  $(window).scroll(function () {
    var aboutItem = document.getElementById("aboutItem");
    var resumeItem = document.getElementById("resumeItem");
    var contactItem = document.getElementById("contactItem");
    // Says this function is performed continuisly while scrolling.
    var Scroll = $(window).scrollTop() + 1, // This variable finds the distance you have scrolled from the top.
      SectionOneOffset = $("#about").offset().top, // This variable finds the distance between #section-one and the top. Replace #section-one with the ID of your section.
      SectionTwoOffset = $("#resume").offset().top; // This variable finds the distance between #section-two and the top. Replace #section-two with the ID of your section. You can duplicate this for as many sections as you want.
    SectionThreeOffset = $("#contact").offset().top;

    if (Scroll >= SectionOneOffset) {
      // If you have scrolled past section one do this.
      aboutItem.classList.add("active", "badge-info");
      resumeItem.classList.remove("active", "badge-info");
      contactItem.classList.remove("active", "badge-info");
    }
    if (Scroll >= SectionTwoOffset) {
      aboutItem.classList.remove("active", "badge-info");
      resumeItem.classList.add("active", "badge-info");
      contactItem.classList.remove("active", "badge-info");
    }
    if (Scroll >= SectionThreeOffset - 500) {
      aboutItem.classList.remove("active", "badge-info");
      resumeItem.classList.remove("active", "badge-info");
      contactItem.classList.add("active", "badge-info");
    }
  });
});
