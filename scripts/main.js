$(document).ready(function() {
  if ($(this).find(":selected").text() == "ROT") $("#rotamount").removeAttr("hidden")
  else $("#rotamount").attr("hidden", "hidden");

  if ($(this).find(":selected").text() == "Rail Fence") $("#railamount").removeAttr("hidden")
  else $("#railamount").attr("hidden", "hidden");

  $("#outputbox").val("");
  $("#inputbox").val("");
});

$("#cipherselection").on('change', function() {
  if ($(this).find(":selected").text() == "ROT") $("#rotamount").removeAttr("hidden")
  else $("#rotamount").attr("hidden", "hidden");

  if ($(this).find(":selected").text() == "Rail Fence") $("#railamount").removeAttr("hidden")
  else $("#railamount").attr("hidden", "hidden");
});

//handles submit button
$("#encryptbtn").on("click", function() {
  var cipher = $("#cipherselection").find(":selected").text();
  if (cipher != "") {
    var input = $("#inputbox").val();
    if (input != "") {
      $("#inputbox").val("");
      switch (cipher) {
        case ("ROT"):
          $("#outputbox").val(rotEncrypt(input, parseInt($("#numberofrot").val()), 1));
          break;
        case ("Baconian"):
          $("#outputbox").val(baconianEncrypt(input, 1));
          break;
        case ("Rail Fence"):
          $("#outputbox").val(railfenceEncrypt(input, parseInt($("#numberofrail").val()), 1));
          break;
        default:
          break;
      }
    }
  }
});

$("#switchbtn").on("click", function() {
  console.log(($("#outputbox").val().length));
  if ($("#outputbox").val().length != 0){
      $("#inputbox").val($("#outputbox").val());
      $("#outputbox").val("")

      $("#decryptbtn").focus();
    }
});

//handles submit button
$("#decryptbtn").on("click", function() {
  var cipher = $("#cipherselection").find(":selected").text();
  if (cipher != "") {
    var input = $("#inputbox").val();
    if (input != "") {
      $("#inputbox").val("");
      switch (cipher) {
        case ("ROT"):
          $("#outputbox").val(rotEncrypt(input, parseInt($("#numberofrot").val()), 0));
          break;
        case ("Baconian"):
          $("#outputbox").val(baconianEncrypt(input, 0));
          break;
        case ("Rail Fence"):
          $("#outputbox").val(railfenceEncrypt(input, parseInt($("#numberofrail").val()), 0));
          break;
        default:
          break;
      }
    }
  }
});
