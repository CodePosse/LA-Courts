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


// filters for program page

// button functions
$(function () {
  // get the id on a button and match it to the class on a card
  // hide the ones without that class
  $("a").click(function () {
    val = $(this).attr("id");
    $(".card:not(val)").hide();
    $(".card." + val).show();
  });

// Get the query string from the URL
const queryString = window.location.search;
// Get the value of the 'tab' parameter from the query string
// https://www.url.com/page.html?tab=MYVALUE
const urlParams = new URLSearchParams(queryString);
const classParam = urlParams.get('tab');
// matches it with classes on cards to show them and hide others
  $(".programs .card:not(classParam)").hide();
  $(".programs .card." + classParam).show();
  if (classParam == null || i == NULL) {
    $(".programs .card").show();
  };
});
