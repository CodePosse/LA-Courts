//tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})
//toasts
$(".toast").show();
$(".toast button").click(function () { $(this).closest(".toast").hide() });
var title = "codeposse";
    a = {
      Author: "T. Hunold",
      Github: title,
      Location: "LA County Court",
      Site_Professional: "linkedin.com/in/itssobig",

    };
    console.info("%c T. Hunold github: codeposse", "background: #222; color: #bada55");
    console.dir(a);