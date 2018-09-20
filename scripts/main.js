//clears inputs
$(document).ready(function() {
  if ($(this).find(":selected").text() == "ROT") $("#rotamount").removeAttr("hidden")
  else $("#rotamount").attr("hidden", "hidden");

  if ($(this).find(":selected").text() == "Baconian") $("#baconianinfo").removeAttr("hidden")
  else $("#baconianinfo").attr("hidden", "hidden");

  if ($(this).find(":selected").text() == "Rail Fence") $("#railamount").removeAttr("hidden")
  else $("#railamount").attr("hidden", "hidden");

  if ($(this).find(":selected").text() == "Columnar Transposition") $("#colkeyinput").removeAttr("hidden")
  else $("#colkeyinput").attr("hidden", "hidden");

  $("#outputbox").val("");
  $("#inputbox").val("");
});

//event handler on drop down
$("#cipherselection").on('change', function() {
  if ($(this).find(":selected").text() == "ROT") $("#rotamount").removeAttr("hidden")
  else $("#rotamount").attr("hidden", "hidden");

  if ($(this).find(":selected").text() == "Baconian") $("#baconianinfo").removeAttr("hidden")
  else $("#baconianinfo").attr("hidden", "hidden");

  if ($(this).find(":selected").text() == "Rail Fence") $("#railamount").removeAttr("hidden")
  else $("#railamount").attr("hidden", "hidden");

  if ($(this).find(":selected").text() == "Columnar Transposition") $("#colkeyinput").removeAttr("hidden")
  else $("#colkeyinput").attr("hidden", "hidden");
});

//handles submit button
$("#encryptbtn").on("click", function() {
  var cipher = $("#cipherselection").find(":selected").text();
  if (cipher != "") {
    var input = $("#inputbox").val();
    if (input != "") {
      switch (cipher) {
        case ("ROT"):
          if (!isNaN(parseInt($("#numberofrot").val())) || $("#numberofrot").val() != ""){
            $("#outputbox").val(rotEncrypt(input, parseInt($("#numberofrot").val()), 1));
            $("#inputbox").val("");
          }
          break;
        case ("Baconian"):
          $("#outputbox").val(baconianEncrypt(input, 1));
          $("#inputbox").val("");
          break;
        case ("Rail Fence"):
          if (!isNaN(parseInt($("#numberofrail").val())) || $("#numberofrail").val() != ""){
            $("#outputbox").val(railfenceEncrypt(input, parseInt($("#numberofrail").val()), 1));
            $("#inputbox").val("");
          }
          break;
        case("Columnar Transposition"):
          if ($("#colkey").val() != ""){
            $("#outputbox").val(columnarEncrypt(input, $("#colkey").val(), 1));
            $("#inputbox").val("");
          }
          break;
        default:
          break;
      }
    }
  } else{
    if ($("#inputbox").val() > 0){
      $("#outputbox").val($("#inputbox").val());
      $("#inputbox").val("");
    }
  }
});

//handles output to input button
$("#switchbtn").on("click", function() {
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
      switch (cipher) {
        case ("ROT"):
          if (!isNaN(parseInt($("#numberofrot").val())) || $("#numberofrot").val() != ""){
            $("#outputbox").val(rotEncrypt(input, parseInt($("#numberofrot").val()), 0));
            $("#inputbox").val("");
          }
          break;
        case ("Baconian"):
          $("#outputbox").val(baconianEncrypt(input, 0));
          $("#inputbox").val("");
          break;
        default:
          break;
      }
    }
  } else {
      if ($("#inputbox").val() > 0){
        $("#outputbox").val($("#inputbox").val());
        $("#inputbox").val("");
      }
  }
});
