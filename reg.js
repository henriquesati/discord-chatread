let texto = " trindade mil 5ROCV-39MFU-OP2TX-V1I67 code good luck dfdsf"
var regex = /[A-Z0-9]{5}-[A-Z0-9]{5}-[A-Z0-9]{5}-[A-Z0-9]{5}/g;
var reg = /[aeiou0-9]/gi
var f = regex.test(texto)
var resultado = texto.match(regex)



console.log(f)


// var resultado = texto.replace(padrao, '')
console.log("t2:" +resultado)
