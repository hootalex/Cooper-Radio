$(document).ready(function() {
  $(".playbutton").click(function() {

    $("#transmit").toggleClass("transmitting");
  });

  $(".playbutton").click(function() {

    $("#playandpause").toggleClass("fa fa-play fa-lg");
    $("#playandpause").toggleClass("fa fa-pause fa-lg");
  });
});
