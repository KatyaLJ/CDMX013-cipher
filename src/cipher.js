const cipher = {
  encode: function (offset, string) {
    //console.log("offset: ", offset)
    //console.log("string: ", string)

    //convertimos el texto a mayúsculas
    let stringMayusculas = string.toUpperCase();

    /*for(let contador=0; contador < string.length; contador++) {
      //console.log(string[contador])
      }*/

    //convertimos el valor de offset a un valor numérico
    //console.log(typeof offset)
    let newOffset = parseInt(offset);
    //console.log(typeof newOffset)

    let codigoAscii = [];

    for (let i = 0; i < string.length; i++) {

      codigoAscii.push(stringMayusculas.charCodeAt(i));
      //console.log(stringMayusculas.charCodeAt(i));
      //console.log(codigoAscii);
    }

    //console.log("codigoAscii" + typeof codigoAscii[0])
    //aplicamos la formula para cifrar y convertir el numero ascii a letra
    let fromAsciiToString = [];

    for (let i = 0; i < codigoAscii.length; i++) {
      codigoAscii[i] = ((codigoAscii[i] - 65 + newOffset) % 26 + 65);
      //console.log("esto es una prueba" + String.fromCharCode(codigoAscii[i]))
      //console.log(codigoAscii[i])

      fromAsciiToString.push(String.fromCharCode(codigoAscii[i]));
    }
    //console.log(fromAsciiToString)

    return fromAsciiToString.join("")
  },

  decode: function (offset, string) {
    //console.log(string)

    let stringMayusculas = string.toUpperCase();

    let newOffset = parseInt(offset);

    let newString = []
    for (let i = 0; i < stringMayusculas.length; i++) {
      //console.log(stringMayusculas[i])
      newString.push(stringMayusculas.charCodeAt(i))
      //console.log(newString)
    }

    let decodeString = [];

    for (let i = 0; i < newString.length; i++) {
      decodeString.push(((newString[i] + 65 - newOffset) % 26 + 65));
      //console.log("prueba" + decodeString[i])

      decodeString[i] = String.fromCharCode(decodeString[i]);
      //console.log(decodeString[i])
    }
    //console.log(decodeString)
    return decodeString.join("")
  }

}

export default cipher;
