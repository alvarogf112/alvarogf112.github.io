
function DNIcalculateChar(digitos) {
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

function DNItransformNIE(digitos) {
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

$(document).ready(function() {

    $('#dni_calcular_letra').on('keydown', function(e){
        if (e.which == 13) {
            if($(this).val().length == 8){
                if (!isNaN($(this).val())) {
                    let numero = $(this).val().slice(0,8);
                    let letra = DNIcalculateChar(numero);
                    if ($(this).val().length == 8) {
                        if (letra) {
                            $(this).val(numero+"-"+letra);
                        }
                    }
                }
                else {
                    let NIE = $(this).val();
                    let numero = DNItransformNIE(NIE);
                    let letra = DNIcalculateChar(numero);
                    if ($(this).val().length == 8) {
                        if (letra) {
                            $(this).val(NIE+"-"+letra);
                        }
                    }
                }
                $(this).removeClass("is-invalid");
                $(this).addClass("is-valid");
            }
            else if ($(this).val().length < 8) {
                $(this).removeClass("is-valid");
                $(this).addClass("is-invalid");
            }
        }
    });

    $('#boton_dni_calcular_letra').on('click', function(){
        if($('#dni_calcular_letra').val().length == 8){
            if (!isNaN($('#dni_calcular_letra').val())) {
                let numero = $('#dni_calcular_letra').val().slice(0,8);
                let letra = DNIcalculateChar(numero);
                if ($('#dni_calcular_letra').val().length == 8) {
                    if (letra) {
                        $('#dni_calcular_letra').val(numero+"-"+letra);
                    }
                }
            }
            else {
                let NIE = $('#dni_calcular_letra').val();
                let numero = DNItransformNIE(NIE);
                let letra = DNIcalculateChar(numero);
                if ($('#dni_calcular_letra').val().length == 8) {
                    if (letra) {
                        $('#dni_calcular_letra').val(NIE+"-"+letra);
                    }
                }
            }
            $('#dni_calcular_letra').removeClass("is-invalid");
            $('#dni_calcular_letra').addClass("is-valid");
        }
        else if ($('#dni_calcular_letra').val().length < 8) {
            $('#dni_calcular_letra').removeClass("is-valid");
            $('#dni_calcular_letra').addClass("is-invalid");
        }
    });

    $('#dni_verificar_letra').on('keydown', function(e){
        if (e.which == 13) {
            if (!isNaN($(this).val().slice(0,8))) {
                let numero = $(this).val().slice(0,8);
                let letra = $(this).val().slice(-1);
                let letraCalculada = DNIcalculateChar(numero);
                if (letra.toUpperCase() === letraCalculada) {
                    $(this).removeClass("is-invalid");
                    $(this).addClass("is-valid");
                }
                else {
                    $(this).removeClass("is-valid");
                    $(this).addClass("is-invalid");
                }
            }
            else {
                let NIE = $(this).val().slice(0,8);
                let letra = $(this).val().slice(-1);
                let numero = DNItransformNIE(NIE);
                let letraCalculada = DNIcalculateChar(numero);
                if (letra.toUpperCase() === letraCalculada) {
                    $(this).removeClass("is-invalid");
                    $(this).addClass("is-valid");
                }
                else {
                    $(this).removeClass("is-valid");
                    $(this).addClass("is-invalid");
                }
            }
        }
    });

    $('#boton_dni_verificar_letra').on('click', function(){
        if (!isNaN($('#dni_verificar_letra').val().slice(0,8))) {
            let numero = $('#dni_verificar_letra').val().slice(0,8);
            let letra = $('#dni_verificar_letra').val().slice(-1);
            let letraCalculada = DNIcalculateChar(numero);
            if (letra.toUpperCase() === letraCalculada) {
                $('#dni_verificar_letra').removeClass("is-invalid");
                $('#dni_verificar_letra').addClass("is-valid");
            }
            else {
                $('#dni_verificar_letra').removeClass("is-valid");
                $('#dni_verificar_letra').addClass("is-invalid");
            }
        }
        else {
            let NIE = $('#dni_verificar_letra').val().slice(0,8);
            let letra = $('#dni_verificar_letra').val().slice(-1);
            let numero = DNItransformNIE(NIE);
            let letraCalculada = DNIcalculateChar(numero);
            if (letra.toUpperCase() === letraCalculada) {
                $('#dni_verificar_letra').removeClass("is-invalid");
                $('#dni_verificar_letra').addClass("is-valid");
            }
            else {
                $('#dni_verificar_letra').removeClass("is-valid");
                $('#dni_verificar_letra').addClass("is-invalid");
            }
        }
    });

    $(".dropdown-menu a").on('click', function(){
        $(this).parents('.input-group-prepend').find('.btn').text($(this).text());
        $(this).parents('.input-group-prepend').find('.btn').val($(this).text());
    });
});
