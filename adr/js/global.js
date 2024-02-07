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
  $("a.showCH").click(function () {
    $(".card:not(.ch)").hide();
    $(".ch").show();
  });
  $("a.showSC").click(function () {
    $(".card:not(.sc)").hide();
    $(".sc").show();
  });
  $("a.showLC").click(function () {
    $(".card:not(.lc)").hide();
    $(".lc").show();
  });
  $("a.showUD").click(function () {
    $(".card:not(.ud)").hide();
    $(".ud").show();
  });
  $("a.showFL").click(function () {
    $(".card:not(.fl)").hide();
    $(".fl").show();
  });
  $("a.showPROB").click(function () {
    $(".card:not(.prob)").hide();
    $(".prob").show();
  });
});
