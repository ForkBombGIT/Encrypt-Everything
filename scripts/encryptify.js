function rotEncrypt(val,rot) {
  var newString = "";
  for (var i = 0; i < val.length; i++) {
    if (isNaN(parseInt(val.charAt(i)), 10) && !(val.charAt(i).match(/^[.,:!?]/)) && !(val.charAt(i) == ' ' ||
                                                                                     val.charAt(i) == '\t'||
                                                                                     val.charAt(i) == '\n'||
                                                                                     val.charAt(i) == '\r')) {
      minVal = (val.charAt(i) == val.charAt(i).toUpperCase()) ? 65 : 97;
      maxVal = (val.charAt(i) == val.charAt(i).toUpperCase()) ? 90 : 122;
      console.log(val.charCodeAt(i))
      newString += ((val.charCodeAt(i) + rot) < maxVal) ? (String.fromCharCode(val.charCodeAt(i) + rot)) :
                                                          (String.fromCharCode(minVal + ((val.charCodeAt(i) + rot) - maxVal)));
    } else newString += val.charAt(i);
  }
  return newString;
}
