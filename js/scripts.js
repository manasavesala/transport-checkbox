$(document).ready(function(){
  $("form#transportation_survey").submit(function(event){
    event.preventDefault();
    $("#work-responses").show();
    $("#leisure-responses").show();
    var userResponses = [];
    $("input:checkbox[name=work-transportation]:checked").each(function(){
      var workTransportationMode = $(this).val();
      $('#work-responses').append(workTransportationMode + "<br>");
      userResponses.push(workTransportationMode);
    });
      var leisureResponses = [];
      $("input:checkbox[name=leisure-transportation]:checked").each(function(){
        var leisureTransportationMode = $(this).val();
        $('#leisure-responses').append(leisureTransportationMode + "<br>");
        leisureResponses.push(leisureTransportationMode);

    });
    $('#transportation_survey').hide();
  });
});
