// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$( document ).ready(function() {
  var user_id = $("#user-id").val();
  var message_field = $("#messagge");

  $('#table-game tr td').focusin(function(e){
    $(this).text("");
  });

  $('#table-game tr td').focusout(function(e){
    var value = $(this).html();
    if (value == ""){
      $(this).text("0");
      return;
    }

    if ((value != user_id) && (value != "0")){
      $('#message').text("Message: Wrong value");
      $(this).text("0");
    } else {
      // post update board
    }
  });
});

