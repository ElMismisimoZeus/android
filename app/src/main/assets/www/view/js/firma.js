

var imgNegativaFirmaPaciente;
var imgNegativaFirmaTestigo;

var cantidadSignosVitales =0;


var imgConsentimientoFirmaTestigo;
var imgConsentimientoFirmaPaciente;

var imgFirmaRecibe;
var imgFirmaMedico;

//
var count= 1;

var message ='';

var sinAtencion = false;

var imagenFirma='';
var control ='';

var firmaImage = ''; //getURLParameter2('firma');
var orig = ''; //getURLParameter('origen');

var mandafirmar ='';




function getURLParameter(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}


$(document).ready(function() {

    firmaImage = getURLParameter('firma');
    orig = getURLParameter('origen');

    console.log('se cargaron');
    console.log(firmaImage);
    console.log(orig);

    $(document).on('click touchstart', function () {});

    $.mobile.document.on( "click touchstart",  function( evt ) {
        var location = getPosition(evt);
        console.log(location.x+'  y:'+location.y);

        context.lineWidth = 4.0;
        //context.strokeStyle="#"+random_colour();
        context.beginPath();
        context.moveTo(location.x,location.y);
        evt.preventDefault();
    });


    start_canvas();
});

