function rotEncrypt(val, rot, enc) {
  var newString = "";
  for (var i = 0; i < val.length; i++) {
    if (isNaN(parseInt(val.charAt(i)), 10) && !(val.charAt(i).match(/^[.,:!?]/)) && !(val.charAt(i) == ' ' ||
        val.charAt(i) == '\t' ||
        val.charAt(i) == '\n' ||
        val.charAt(i) == '\r')) {
      minVal = (val.charAt(i) == val.charAt(i).toUpperCase()) ? 65 : 97;
      maxVal = (val.charAt(i) == val.charAt(i).toUpperCase()) ? 90 : 122;
      newString += ((enc) ? (((val.charCodeAt(i) + rot) <= maxVal) ? (String.fromCharCode(val.charCodeAt(i) + rot)) :
                                                                    (String.fromCharCode((minVal + ((val.charCodeAt(i) + rot) - maxVal)) - 1))) :
                             ((val.charCodeAt(i) - rot) >= minVal) ? (String.fromCharCode(val.charCodeAt(i) - rot)) :
                                                                    (String.fromCharCode(maxVal - (minVal - (val.charCodeAt(i) - rot)) + 1)));
    } else newString += val.charAt(i);
  }
  return newString;
}

function baconianEncrypt(val, enc) {
  var newString = "";
  var baconianConvertions = {
    'a': 'aaaaa',
    'b': 'aaaab',
    'c': 'aaaba',
    'd': 'aaabb',
    'e': 'aabaa',
    'f': 'aabab',
    'g': 'aabba',
    'h': 'aabbb',
    'i': 'abaaa',
    'j': 'abaab',
    'k': 'ababa',
    'l': 'ababb',
    'm': 'abbaa',
    'n': 'abbab',
    'o': 'abbba',
    'p': 'abbbb',
    'q': 'baaaa',
    'r': 'baaab',
    's': 'baaba',
    't': 'baabb',
    'u': 'babaa',
    'v': 'babab',
    'w': 'babba',
    'x': 'babbb',
    'y': 'bbaaa',
    'z': 'bbaab'
  }

  for (var i = 0; i < val.length; i++) {
    if (isNaN(parseInt(val.charAt(i)), 10) && !(val.charAt(i).match(/^[.,:!?]/)) && !(val.charAt(i) == ' ' ||
        val.charAt(i) == '\t' ||
        val.charAt(i) == '\n' ||
        val.charAt(i) == '\r')) {
      if (enc)
        newString += baconianConvertions[val.charAt(i).toLowerCase()];
      else{

      }
    } else newString += val.charAt(i);
  }

  return newString;
}
