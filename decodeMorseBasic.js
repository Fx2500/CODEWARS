decodeMorse = function(morseCode){
  const code = {
    "SOS": "...---...","A": ".-", "B": "-...", "C": "-.-.", "D": "-..", "E": ".", "F": "..-.", "G": "--.",
    "H": "....", "I": "..", "J": ".---", "K": "-.-", "L": ".-..", "M": "--", "N": "-.",
    "O": "---", "P": ".--.", "Q": "--.-", "R": ".-.", "S": "...", "T": "-", "U": "..-",
    "W": ".--", "X": "-..-","V" : "...-", "Y": "-.--","Z": "--.."," ": "",  
    "." : ".-.-.-", "," : "−−..−−", "?" : "..−−..", "'" : ".−−−−.", '"' : ".-.-.",
    "!" : "-.-.--"
  };
  let x = morseCode.split(" ")
  x = x

  let decoded = ""
  function getKeyByValue(value) {
    return Object.keys(code).find(key => code[key] === value);
  }
  for (let index = 0; index < x.length; index++) {
    let res = getKeyByValue(x[index]);
    decoded += res;
  }
  decoded = decoded.replace(/\s+/g, ' ').trim()
  return decoded;
}

console.log(decodeMorse("···−−−···  ... .... ... ..   .."))