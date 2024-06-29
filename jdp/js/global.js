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
console.info(
  "%c Yeah, I got a GitHub and this is a stupid dev trick. If you saw this in console, congrats " +
    "Now expand the object below.",
  "background: #222; color: #bada55"
);
var title = "codeposse";
a = {
  Author: "T. Hunold",
  Github: title,
  Location: "LA County Court",
  LinkedIn: "linkedin.com/in/itssobig",
  Site: location.hostname
};
console.dir(a);
$(document).ready(function () {
  $(".compose, #editAddr").hide();
  $(".inbox").click(function () {
    $(".compose, .read, .inboxfooter").toggle();
  });

  $(".readme").click(function () {
    $(".readme").hide();
    $(".bd-callout-success").addClass("bg-light");
    $(".bd-callout.bd-callout-success").removeClass("bd-callout bd-callout-success");
  });
  $(".addyPO, .addyForeign, .addyOutside").hide();
  $("#addyPO").click(function () {
    $(".addyLocal, .addyForeign, .addyOutside").hide();
    $(".addyPO").show();
  });
  $("#addyForeign").click(function () {
    $(".addyLocal, .addyPO, .addyOutside").hide();
    $(".addyForeign").show();
  });
  $("#addyLocal").click(function () {
    $(".addyPO, .addyForeign, .addyOutside").hide();
    $(".addyLocal").show();
  });
  $("#addyOutside").click(function () {
    $(".addyForeign, .addyPO, .addyLocal").hide();
    $(".addyOutside").show();
  });
});
$(function () {
  $("#citizen").focus(function () {
    $(".citizen").show()
  }), $("#citizen").blur(function () {
    $(".citizen").hide()
  }), $("#nonresident").focus(function () {
    $(".nonresident").show()
  }), $("#nonresident").blur(function () {
    $(".nonresident").hide()
  }), $("#under18").focus(function () {
    $(".under18").show()
  }), $("#under18").blur(function () {
    $(".under18").hide()
  }), $("#malfeasance").focus(function () {
    $(".malfeasance").show()
  }), $("#malfeasance").blur(function () {
    $(".malfeasance").hide()
  }), $("#JID").focus(function () {
    $(".JID").show()
  }), $("#JID").blur(function () {
    $(".JID").hide()
  }), $("#ESL").focus(function () {
    $(".ESL").show()
  }), $("#ESL").blur(function () {
    $(".ESL").hide()
  }), $("#MIL").focus(function () {
    $(".MIL").show()
  }), $("#MIL").blur(function () {
    $(".MIL").hide()
  });
  $("#select_transfer").change(function () {
    $(this).find("option:selected").each(function () {
      var e = $(this).attr("value");
      e ? ($(".box").not("." + e).hide(), $("." + e).show()) : $(".box").hide()
    })
  }).change();
  $("#select_excuse").change(function () {
  $(this).find("option:selected").each(function () {
    var e = $(this).attr("value");
    e ? ($(".box").not("." + e).hide(), $("." + e).show()) : $(".box").hide()
  })
}).change();
})