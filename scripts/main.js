$( document ).ready(function(){
  if ($(this).find(":selected").text() == "ROT") $("#rotamount").removeAttr("hidden")
  else $("#rotamount").attr("hidden","hidden");

  $("#outputbox").val("");
  $("#inputbox").val("");
});

$("#cipherselection").on('change', function(){
  if ($(this).find(":selected").text() == "ROT") $("#rotamount").removeAttr("hidden")
  else $("#rotamount").attr("hidden","hidden");
});

//handles submit button
$("#encryptbtn").on("click", function() {
  var cipher = $("#cipherselection").find(":selected").text();
  if (cipher != "") {
    var input = $("#inputbox").val();
    if (input != "") {
      $("#inputbox").val("");
      switch(cipher){
        case ("ROT"):
          $("#outputbox").val(rotEncrypt(input,parseInt($("#numberofrot").val()),1));
          break;
        case ("Baconian"):
          $("#outputbox").val(baconianEncrypt(input,1));
          break;
        default:
          break;
      }
    }
  }
});

//handles submit button
$("#decryptbtn").on("click", function() {
  var cipher = $("#cipherselection").find(":selected").text();
  if (cipher != "") {
    var input = $("#inputbox").val();
    if (input != "") {
      $("#inputbox").val("");
      switch(cipher){
        case ("ROT"):
          $("#outputbox").val(rotEncrypt(input,parseInt($("#numberofrot").val()),0));
          break;
        case ("Baconian"):
          $("#outputbox").val(baconianEncrypt(input,0));
          break;
        default:
          break;
      }
    }
  }
});
