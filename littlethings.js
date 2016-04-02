$(document).ready(function() {
  $(".playbutton").click(function() {

    $("#transmit").toggleClass("transmitting");
  });

  $(".playbutton").click(function() {

    $("#playandpause").toggleClass("fa fa-play fa-lg");
    $("#playandpause").toggleClass("fa fa-pause fa-lg");
  });

  $("h1").click(function() {

    $("div").toggleClass("hide");
    $("h2").toggleClass("hide");
    $("#explorer").toggleClass("hide flyin");
    $("#folder").toggleClass("show");
  });

  $(".selected").click(function() {

    $("div").toggleClass("hide");
    $("h2").toggleClass("hide");
    $("#explorer").toggleClass("hide flyin");
    $("#folder").toggleClass("show");
  });
});
