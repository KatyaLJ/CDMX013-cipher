import cipher from './cipher.js';

let offsetNumber= document.getElementById("offset");
let textUsuario= document.getElementById("text");

const enCode= document.getElementById("botonCode");

enCode.addEventListener("click",function() {
    cipher.encode(offsetNumber.value, textUsuario.value)
    document.getElementById("text").value= cipher.encode(offsetNumber.value, textUsuario.value);

});

const deCode= document.getElementById("botonDecode");

deCode.addEventListener("click",function() {
    cipher.decode(offsetNumber.value, textUsuario.value)
    document.getElementById("text").value= cipher.decode(offsetNumber.value, textUsuario.value);
    //console.log(cipher.decode());

});



