$(document).ready(function(){
  $("form#transportation_survey").submit(function(event){
    event.preventDefault();
    $("#work-responses").show();
    var userResponses = [];
    $("input:checkbox[name=work-transportation]:checked").each(function(){
      var workTransportationMode = $(this).val();
      $('#work-responses').append(workTransportationMode + "<br>");
      userResponses.push(workTransportationMode);
      alert(userResponses);
    });
    $('#transportation_survey').hide();
  });
});
