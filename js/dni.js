
function calculateChar(digitos) {
    let char = parseInt(digitos)%23;
    switch(char) {
        case 0: return 'T';
        case 1: return 'R';
        case 2: return 'W';
        case 3: return 'A';
        case 4: return 'G';
        case 5: return 'M';
        case 6: return 'Y';
        case 7: return 'F';
        case 8: return 'P';
        case 9: return 'D';
        case 10: return 'X';
        case 11: return 'B';
        case 12: return 'N';
        case 13: return 'J';
        case 14: return 'Z';
        case 15: return 'S';
        case 16: return 'Q';
        case 17: return 'V';
        case 18: return 'H';
        case 19: return 'L';
        case 20: return 'C';
        case 21: return 'K';
        case 22: return 'E';
        default: return undefined;
    }
}

function transformNIE(digitos) {
    let letra = digitos.charAt(0);
    let resto = digitos.slice(1);
    letra = letra.toUpperCase();
    switch (letra) {
        case "X": return "0"+resto;
        case "Y": return "1"+resto;
        case "Z": return "2"+resto;
        default: return undefined;
    }
}

function limitDNI(object) {
    if (!$('#NIFoNIE').val()) {
        object.value = object.value.slice(0, -1);
    }
    if ($('#NIFoNIE').val() == "NIF") {
        if (object.value.length > 9) {
            object.value = object.value.slice(0, 9);
        }
        else if (object.value.length < 9) {
            if(isNaN(object.value.slice(-1)))
            object.value = object.value.slice(0, -1);
        }
        else if (object.value.length == 9){
            if(isFinite(object.value.slice(-1)))
            object.value = object.value.slice(0, -1);
        }
    }
}

$(document).ready(function() {

    $('#campo_nif_nie').on('keydown', function(e){
        if (e.which == 13) {
            if ($('#NIFoNIE').val() == "NIF") {
                let numero = $(this).val().slice(0,8);
                let letra = calculateChar(numero);
                if ($(this).val().length == 8) {
                    if (letra) {
                        $(this).val(numero+letra);
                    }
                }
                if ($(this).val().length == 9) {
                    if ($(this).val().slice(-1).toUpperCase() !== letra) {
                        console.log("dni mal");
                    }
                }
            }
        }
    });

    $(".dropdown-menu").on('click', 'a', function(){
        $(".btn:first-child").text($(this).text());
        $(".btn:first-child").val($(this).text());
    });
});