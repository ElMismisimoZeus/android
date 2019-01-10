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