var aboutItem = document.getElementById("aboutItem");
var resumeItem = document.getElementById("resumeItem");
var contactItem = document.getElementById("contactItem");

$("#aboutItem").click(function () {
  aboutItem.classList.add("active");
  resumeItem.classList.remove("active");
  contactItem.classList.remove("active");
});

$("#resumeItem").click(function () {
  aboutItem.classList.remove("active");
  resumeItem.classList.add("active");
  contactItem.classList.remove("active");
});

$("#contactItem").click(function () {
  aboutItem.classList.remove("active");
  resumeItem.classList.remove("active");
  contactItem.classList.add("active");
});
