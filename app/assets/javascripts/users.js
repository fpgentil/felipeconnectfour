// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.


$( document ).ready(function() {
  var message_field = $("#messagge");
  var user_id = $("#user-id").val();

  startRefresh();

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
      var column = $(this).attr('id').split('-')[1];
      var value = user_id;
      $.ajax({
        type: "POST",
        url: "/games/1/update_board",
        dataType: 'json',
        data: {column: column, value: value},
      }).done(function(data) {
        $("#cell-" + data["row"] + "-" + data["column"]).html(data["value"]);
        $('#editable-'+data["column"]).text("[]");
      }).fail(function() {
        $('#message').text("Message: Failed to play");
      });
    }
  });
});

function startRefresh() {
    setTimeout(startRefresh,3000);
    $.ajax({
      type: "GET",
      url: "/users/" + $("#user-id").val(),
      dataType: 'json',
      data: {id: $("#user-id").val()},
    }).done(function(data) {
      if (data["turn"] == true){
        $('#who-moves').text("Your turn");
        for(var i = 0; i < 7; i++){
          $('#editable-'+i).attr("contenteditable", "true");
        }
      } else {
        $('#who-moves').text("Other user turn");
        for(var i = 0; i < 7; i++){
          $('#editable-'+i).attr("contenteditable", "false");
        }
      }

      // update table values
      for(var i = 0; i < 6; i++){ // column
        for(var j = 0; j < 7; j++){ // rows
          $('#cell-'+i+'-'+j).text(data["matrix"][i][j]);
        }
      }

      if (data["winner"] != null){
        if (data["winner"] == $("#user-id").val()){
          $('#message').text("Message: You win :)");
          $("#restart").attr("hidden", false);
        } else {
          $('#message').text("Message: You lose :(");
        }
        for(var i = 0; i < 7; i++){
          $('#editable-'+i).attr("contenteditable", "false");
        }
      }
    }).fail(function() {
      $('#message').text("Message: Failed to update");
    });
}
