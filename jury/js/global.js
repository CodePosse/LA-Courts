//tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
//toasts
$(".toast").show();
$(".toast button").click(function () { $(this).closest(".toast").hide() });
$(".callout-hide").click(function () { $(this).closest(".bd-callout").hide() });
$(".fa-bullhorn").click(function () { $(".fa-bullhorn span").hide() });
var title = "codeposse";
a = {
  Author: "T. Hunold",
  Github: title,
  Location: "LA County Court",
  Site_Professional: "linkedin.com/in/itssobig",
  Site: location.hostname
};
console.info("%c Author: T. Hunold; Git: codeposse; " + location.hostname, "background: #222; color: #bada55");
console.dir(a);
//img missing
/*$(document).ready(function () {
  $("img").each(function () {
    if (
      (typeof this.naturalWidth != "undefined" &&
        this.naturalWidth == 0) ||
      this.readyState == "uninitialized"
    ) {
      $(this).attr({
        src: "./img/img-placeholder.webp",
        alt: "broken"
      });
    }
  });
  console.log('img 404 check complete')
});*/