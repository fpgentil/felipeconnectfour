// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$( document ).ready(function() {
  var user_id = $("#user-id").val();
  var message_field = $("#messagge");

  $('#editable-row tr td').focusin(function(e){
    $(this).text("");
  });

  $('#editable-row tr td').focusout(function(e){
    var value = $(this).html();
    if (value == ""){
      $(this).text("[]");
      return;
    }

    if ((value != user_id) && (value != "0")){
      $('#message').text("Message: Wrong value");
      $(this).text("[]");
    } else {
      var column = $(this).attr('id');
      var value = user_id;
      $.ajax({
        type: "POST",
        url: "/games/1/update_board",
        dataType: 'json',
        data: {column: column, value: value},
      }).done(function(data) {
        $("#cell-" + data["row"] + "-" + data["column"]).html(data["value"]);
        $(this).text("[]");
      }).fail(function() {
        $('#message').text("Message: Failed to play");
      });
    }
  });
});

