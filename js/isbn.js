
function ISBNCalculateDigit(digitos){
    let auxString = digitos.toString();
    let s = 0;
    for(let i=0; i < 12; i++){
        if (i%2==0)
            s += auxString[i]*1
        else
            s += auxString[i]*3
    }
    let r = 10-s%10;
    if (r < 10) return r;
    else return 0;
}

function ISBNConvert10to13(digitos){
    return "978"+digitos.toString();
}

function ISBNValidate(isbn){
    let isbn_aux = isbn.toString();
    if (isbn_aux.length == 10) isbn_aux = ISBNConvert10to13(isbn);
    else if (isbn_aux.length != 13) return false;
    let ultimo = isbn_aux.slice(-1);
    let docePrimeros = isbn_aux.slice(0,12);
    return ISBNCalculateDigit(docePrimeros) == ultimo;
}
