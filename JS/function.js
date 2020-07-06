var aboutItem = document.getElementById("aboutItem");
var resumeItem = document.getElementById("resumeItem");
var contactItem = document.getElementById("contactItem");

$(document).ready(function () {
  $("#aboutItem").click(function () {
    aboutItem.classList.add("active", "badge-info");
    resumeItem.classList.remove("active", "badge-info");
    contactItem.classList.remove("active", "badge-info");
  });

  $("#resumeItem").click(function () {
    aboutItem.classList.remove("active", "badge-info");
    resumeItem.classList.add("active", "badge-info");
    contactItem.classList.remove("active", "badge-info");
  });

  $("#contactItem").click(function () {
    aboutItem.classList.remove("active", "badge-info");
    resumeItem.classList.remove("active", "badge-info");
    contactItem.classList.add("active", "badge-info");
  });
});
