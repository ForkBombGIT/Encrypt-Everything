function rotEncrypt(val, rot, enc) {
  var newString = "";
  for (var i = 0; i < val.length; i++) {
    if (isNaN(parseInt(val.charAt(i)), 10) && !(val.charAt(i).match(/^[.,'{}!@#$%^&*()/\-=+_;"<>~:!?]/)) && !(val.charAt(i) == ' ' ||
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
    'a': 'aaaaa','b': 'aaaab',
    'c': 'aaaba','d': 'aaabb',
    'e': 'aabaa','f': 'aabab',
    'g': 'aabba','h': 'aabbb',
    'i': 'abaaa','j': 'abaab',
    'k': 'ababa','l': 'ababb',
    'm': 'abbaa','n': 'abbab',
    'o': 'abbba','p': 'abbbb',
    'q': 'baaaa','r': 'baaab',
    's': 'baaba','t': 'baabb',
    'u': 'babaa','v': 'babab',
    'w': 'babba','x': 'babbb',
    'y': 'bbaaa','z': 'bbaab'
  }

  if (enc){
    for (var i = 0; i < val.length; i++) {
      if (isNaN(parseInt(val.charAt(i)), 10) && !(val.charAt(i).match(/^[.,'{}!@#$%^&*()/\-=+_;"<>~:!?]/)) && !(val.charAt(i) == ' ' ||
          val.charAt(i) == '\t' ||
          val.charAt(i) == '\n' ||
          val.charAt(i) == '\r')) {
          newString += baconianConvertions[val.charAt(i).toLowerCase()];
      } else newString += val.charAt(i);
    }
  }
  else {
    for (var i = 0; i < val.length; i++) {
      if (isNaN(parseInt(val.charAt(i)), 10) && !(val.charAt(i).match(/^[.,'{}!@#$%^&*()/\-=+_;"<>~:!?]/)) && !(val.charAt(i) == ' ' ||
          val.charAt(i) == '\t' ||
          val.charAt(i) == '\n' ||
          val.charAt(i) == '\r')) {
          newString +=  _.findKey(baconianConvertions, function(v) { return v === val.substring(i,i+5);  });
          i+=4;

      } else newString += val.charAt(i);
    }
  }
  return newString;
}

function railfenceEncrypt(val,rail,enc){
  var rails = {}
  var index = 0;
  var increase = true;
  var newString = ""

  if (enc){
    for (var i = 0; i < val.length; i++){
      if (!(index in rails)) rails[index] = "";
      rails[index] += val.charAt(i);

      index += (increase) ? 1 : -1;
      if (index >= (rail - 1)) increase = false;
      else if (index == 0) increase = true;
    }
  }
  else{
    var strings = {};
    var position = 0;
    if (val.length <= rail)
      return val;

    for (var i = 0; i < val.length; i++){
      if (!(index in rails)) rails[index] = 0;
      rails[index] += 1;

      index += (increase) ? 1 : -1;
      if (index >= (rail - 1)) increase = false;
      else if (index == 0) increase = true;
    }

    for (var i = 0; i < rail; i++){
      strings[i] = val.substring(position,position + rails[i]);
      position += rails[i];
    }
  }
  return function(){
    for (var i = 0; i < rail; i++){if (i < val.length) newString += rails[i]}
    return newString;
  }
}
