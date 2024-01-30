//tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});
//dismissable callouts
$(".callout-hide").click(function () { $(this).closest(".bd-callout").hide()});
//toasts
$(".toast").show();
$(".toast button").click(function () { $(this).closest(".toast").hide()});
var title = "codeposse";
a = {
  Author: "T. Hunold",
  Github: title,
  Location: "LA County Court",
  LinkedIn: "linkedin.com/in/itssobig",
  Site: location.hostname
};
console.dir(a);