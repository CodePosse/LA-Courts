//Globals


//tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});
//dismissable callouts
$(".callout-hide").click(function () { $(this).closest(".bd-callout").hide() });
//toasts
$(".toast").show();
$(".toast button").click(function () { $(this).closest(".toast").hide() });
var title = "codeposse";
a = {
  Author: "T. Hunold",
  Github: title,
  Location: "LA County Court",
  LinkedIn: "linkedin.com/in/itssobig",
  Site: location.hostname
};
console.dir(a);


//filters
$(function () {
  $("a.All").click(function () {
    $(".card").show();
  });
  $("a").click(function () {
    val = $(this).attr("id");
    $(".card:not(val)").hide();
    $(".card." + val).show();
  });
});

// Get the query string from the URL
const queryString = window.location.search;

// Get the value of the 'class' parameter from the query string
const urlParams = new URLSearchParams(queryString);
const classParam = urlParams.get('tab');
$(function () {
  $(".card:not(classParam)").hide();
  $(".card." + classParam).show();
  if (classParam == null || i == NULL) {
    $(".card").show();
  }
});
