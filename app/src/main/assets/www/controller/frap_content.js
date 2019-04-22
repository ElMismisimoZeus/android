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




function success(imgurl) {
    // alert("Imgurl = " + imgurl);
    console.log("Imgurl = " + imgurl);
    //here I added my function to upload the saved pictures
    //on my internet server using file-tranfer plugin
}

function onFail(message) {
    alert('Failed because: ' + message);
}

function CaptureBCK() {
    var options = {
        name: "Image", //image suffix
        dirName: "CameraPictureBackground", //foldername
        orientation: "landscape", //or landscape --- portrait
        type: "front" //or front
    };

    window.plugins.CameraPictureBackground.takePicture(success, onFail, options);
}

function dibujarH(x, y, clave){
    //console.log('DH lesion:'+lesion);
    //console.log('DH clave'+clave);


    var aux_y = $("#myCanvas").offset().top;
    var aux_x = $("#myCanvas").offset().left;

    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    //alert('x:'+x +'  x_off:'+aux_x+'   resta:'+ (x - aux_x));
    //alert('y:'+y+'  y_off:'+aux_y+'   resta:'+ (y - aux_y));



    ctx.fillStyle = "#c82124";
    ctx.arc( (x ), (y ), 12, 0, 2 * Math.PI, true);
    ctx.fill();
/*
    ctx.fillStyle = "#FFFFFF";
    ctx.font="bold 13px Verdana";
    ctx.fillText(clave,(x ), (y ));
*/
//    console.log('aux_y:'+(y )+"  aux_X:"+(x ));

    ctx.closePath();



}

function show_sd() {
    $('.semiologia-dolor-section').removeClass('hidden');
}
function hide_sd() {
    $('.semiologia-dolor-section').addClass('hidden');
}



function firmar(origen, controlP){
    mandafirmar = origen;
    control = controlP;

    //CaptureBCK(); parta fotografiar cuando sea necesario

    //alert('pagina:'+ mandafirmar + 'control:'+control);
    start_canvas();

    startup();




    mandafirmar = origen;
    control = controlP;


    //window.location="firma.html?origen="+origen+"&control="+control;
    $.mobile.navigate('#pageSuperFirma');
    //window.location="firma.html?origen="+origen+"&control="+control;
}