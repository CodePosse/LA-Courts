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
//dismiss popouts
const popover = new bootstrap.Popover('.popover-dismiss', {
  trigger: 'focus'
});

// filters for program page

// button functions
$(function () {
  // get the id on a button and match it to the class on a card
  // hide the ones without that class
  $("a.links").click(function () {
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
  if (classParam == "sc") { $("#mobileselect span").html("Small Claims") }
  else if (classParam == "ud") { $("#mobileselect span").html("Unlawful Detainer") }
  else if (classParam == "lc") { $("#mobileselect span").html("Limited Civil") }
  else if (classParam == "uc") { $("#mobileselect span").html("Unimited Civil") }
  else if (classParam == "ch") { $("#mobileselect span").html("Civil Harassment") }
  else if (classParam == "fl") { $("#mobileselect span").html("Family Law") }
  else if (classParam == "prob") { $("#mobileselect span").html("Probate") }
  else if (classParam == null) { $("#mobileselect span").html("Learn More") }
  // matches it with classes on cards to show them and hide others
  $(".programs .card:not(classParam)").hide();
  $(".programs .card." + classParam).show();
  if (classParam == null || i == NULL) {
    $(".programs .card").show();
  };
});
