
// Variables necesarias para invocar las tareas del web services
// Variables de invocación
var id_sesion;
var id_usuario;
var estado;
var token;
var url_con;

var changeConf = 0;



// Variables para la información del vehículo actual
var idCrew;
var idCurrentVehicule;
var lat_c='';
var lon_c='';




var lat='';
var lon='';



var setCurrent = 0 ;

// Variable del array de los vehículos para Mapa
var locations=[];
var locationsAuxCurrentName='';


var num_vehicules;

$(function () {
    $("#msgError").dialog({
        autoOpen: false,
        modal: true,
        dialogClass: "dlg-no-close",
        open: function() {
            $('.ui-widget-overlay').addClass('custom-overlay');
        }
    });

});


function msgBoxErrorClose() {

    if(changeConf == 1){
        $("#msgError").dialog( 'close' );
        navigator.app.exitApp();
    }

    $("#msgError").dialog( 'close' );
    location="index-login.html";

}

/*
function onDeviceReady () {
    loadMapsApi();
}

function loadMapsApi () {
    if ( (global.google !== undefined && global.google.maps)) {
        return;
    }
    $.getScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyD4Qf8FxL-rrw2i5EeuT6K9807IWMRPz3Q&sensor=true");
}
*/

var vehiculeColor = {'flag-green.png':"green", 'flag-red.png': "red", 'flag-blue': "blue",'flag-white.png': "white",   'flag-yellow.png' :"yellow" };


// Algoritmo
// ================================================================================================
// ================================================================================================
$(document).ready(function () {

   // document.addEventListener("deviceready", onDeviceReady, false);

    // Dimenciones del mapa de acuerdo al dispositivo
    var g =($(window).height()) * 0.73;
    $("#map").height(g);

    // desactivar el btn regresar de android
    document.addEventListener("backbutton", onBackKeyDown, false);








    // Paso 1: carga las variables de invocación
    //============================================
    id_sesion  = $.jStorage.get("id_sesion");
    id_usuario  = $.jStorage.get("id_usuario");
    estado = $.jStorage.get("estado");
    token = $.jStorage.get("token");




    // Paso 2: Obtiene el ID del vehículo actual
    //==========================================
    idCrew = $.jStorage.get("idCrew");




    $.mobile.loading( "show");
   //    console.log(JSON.stringify({"ID_USUARIO":id_usuario,"ID_SESSION":id_sesion, "Estado":estado}));
    //alert(JSON.stringify({"ID_USUARIO":id_usuario,"ID_SESSION":id_sesion, "Estado":estado}));

    // Paso 3 : Invoca a getAll para llenar la información de los paneles laterales
    //=============================================================================


    // Llamada al servidor dispatcher
    $.ajax({
        type: 'POST',
        contentType: 'application/json',
        url: 'http://opowerdev.net/web_services/Despachador/usuario/getURL',
        //url: 'http://opowerdev.net/web_services/FRAP/usuario/login',
        dataType: "json",
        data: JSON.stringify({"Estado": estado}),
        contentType: "application/json; charset=utf-8",
        success: function (data, textStatus, jqXHR) {


            console.log(data.estado);
            console.log(data.token);
            console.log(data.url);
            console.log(data.version);
            url_con =data.url;

            console.log(token);

            if(token===data.token){

                    $.ajax({
                            type: 'POST',
                            contentType: 'application/json',
                            url:url_con+'/getAll',
                            //url: 'http://opowerdev.net/web_services/FRAP/usuario/getAll',
                            dataType: "json",
                            data: JSON.stringify({"ID_USUARIO": id_usuario, "ID_SESSION": id_sesion, "Estado": estado}),
                            contentType: "application/json; charset=utf-8",
                            success: function (data, textStatus, jqXHR) {
                                // Paso 5:  LLena el array de los vehículos : utilizado para (a) debujar panel y  (b) mapa (var:locations)
                                //=========================================================================================================

                                //alert('ddd');
                                // Variable para generar el panel lateral de vehículos
                                var fragment = '';
                                num_vehicules = data.num_vehicules;
                                //alert(num_vehicules);
                                if (data.num_vehicules > 1) {
                                    // manejar un array
                                    //..................
                                    //..................


                                    var vehiculos = data.value;
                                    for (var i in vehiculos) {
                                        var auxvsc = vehiculos[i].vehicule.icon;
                                        var vc = vehiculeColor[auxvsc];

                                        // (a) Agregar Información al Panel vehículos
                                        //............................................
                                        //............................................
                                        fragment = create('<li data-theme="a"  style="background-color: #fff; width:350px;" value="' + vehiculos[i].vehicule.ID_TRIPULACIONES + '" onclick="cambiarVehiculo(this.value);" >' +
                                            '<a  style="background-color: #fff; border:none;" class="ui-btn ui-btn-icon-right ui-icon-carat-r" href="" >' +
                                            '<div style="height: 20px; width: 10px; background-color: ' + vc + '; float: left;"> </div> <div style="height: 10px; width: 5px; float: left;"></div> <span>' + vehiculos[i].vehicule.name + '</span> ' + vehiculos[i].vehicule.headquarter +
                                            '</a>' +
                                            '</li>');
                                        document.getElementById("panel_vehiculos").appendChild(fragment);
                                        //console.log("Hvamos : "+i);
                                        //alert(i);


                                        // Paso 4 : Genera un vehículo actual
                                        //====================================
                                        if (idCrew == null) {
                                            idCrew = vehiculos[i].vehicule.ID_TRIPULACIONES;
                                            $.jStorage.set("idCrew", String(idCrew), {});

                                            $("#unidad_asignada").html('Unidad  :' + vehiculos[i].vehicule.name);

                                            // Added by Manage currentIcon
                                            locationsAuxCurrentName = vehiculos[i].vehicule.name;

                                            //console.log("hay unidad asignada");
                                        } else {
                                            if (idCrew == vehiculos[i].vehicule.ID_TRIPULACIONES) {
                                                $("#unidad_asignada").html('Unidad  :' + vehiculos[i].vehicule.name);
                                                // Added by Manage currentIcon
                                                locationsAuxCurrentName = vehiculos[i].vehicule.name;
                                                //console.log("no hay unidad ");
                                            }
                                        }


                                        // (b) Información para  dibujar el mapa
                                        //............................................
                                        //............................................
                                        if (vehiculos[i].vehicule.gpsInfo.location == 'TRUE') {

                                            if (idCrew == vehiculos[i].vehicule.ID_TRIPULACIONES) {
                                                lat_c = vehiculos[i].vehicule.gpsInfo.latitude;
                                                lon_c = vehiculos[i].vehicule.gpsInfo.longitude;
                                            }
                                            var carro = [];
                                            carro = [vehiculos[i].vehicule.name, vehiculos[i].vehicule.gpsInfo.latitude, vehiculos[i].vehicule.gpsInfo.longitude, i];
                                            locations.push(carro);
                                            //console.log("se agrego un carro");
                                        }


                                    }

                                    //alert('seguimos');
                                    cargarServiciosVehiculo(idCrew);


                                } else {
                                    // manejar un registro único
                                    //..................
                                    //..................
                                    // alert('registro unico');

                                    var auxvsc = data.value.vehicule.icon;
                                    var vc = vehiculeColor[auxvsc];
                                    //alert(data.value.vehicule.icon);
                                    //alert(vc);
                                    // (a) Agregar Información al Panel vehículos
                                    //.............................................
                                    //.............................................
                                    fragment = create('<li data-theme="a"  style="background-color: #fff; width:350px;"  value="' + data.value.vehicule.ID_TRIPULACIONES + '" onclick="cambiarVehiculo(this.value);">' +
                                        '<a style="background-color: #fff; border:none;" class="ui-btn ui-btn-icon-right ui-icon-carat-r" href="" >' +
                                        '<div style="height: 20px; width: 10px; background-color: ' + vc + '; float: left;"> </div> <div style="height: 10px; width: 5px; float: left;"></div>' + data.value.vehicule.name + '</span> <div style="height: 10px; width: 12px; float: left;"></div>' + data.value.vehicule.headquarter +
                                        '</a>' +
                                        '</li>');

                                    document.getElementById("panel_vehiculos").appendChild(fragment);

                                    // Paso 4 : Genera un vehículo actual
                                    //====================================
                                    if (idCrew == null) {
                                        idCrew = data.value.vehicule.ID_TRIPULACIONES;
                                        $.jStorage.set("idCrew", String(idCrew), {});
                                        $("#unidad_asignada").html('Unidad  :' + data.value.vehicule.name);

                                        // Added by Manage currentIcon
                                        locationsAuxCurrentName = data.value.vehicule.name;
                                    } else {
                                        $("#unidad_asignada").html('Unidad  :' + data.value.vehicule.name);
                                        // Added by Manage currentIcon
                                        locationsAuxCurrentName = data.value.vehicule.name;
                                    }


                                    // (b) Información para  dibujar el mapa
                                    //.............................................
                                    //.............................................
                                    if (data.value.vehicule.gpsInfo.location == 'TRUE') {
                                        lat_c = data.value.vehicule.gpsInfo.latitude;
                                        lon_c = data.value.vehicule.gpsInfo.longitude;

                                        var carro = [];
                                        carro = [data.value.vehicule.name, lat_c, lon_c, 1];
                                        locations.push(carro);
                                    }


                                    cargarServiciosVehiculo(idCrew);


                                }
                            },
                            error: function (jqXHR, textStatus, errorThrown) {

                                // $("#msgOkContent p").html(data.message);

                                $("#msgError").dialog('open');
                                //alert('aqui se muere'+textStatus+'ddddddd'+errorThrown+'jhjhjhj'+jqXHR);
                            }
                    });

            }else{
                // notificar que la aplicación debe reiniciar y cerrar
                console.log('else');
                $.mobile.loading( "hide" );
                $("#msgErrorText").html('Error CON 02: La configuración del servidor ha cambiado, la aplicación debe reiniciarse');
                changeConf = 1;

                $("#msgError").dialog('open');
            }





        }, error: function (jqXHR, textStatus, errorThrown) {

            // reportar error de conexión y salir de la app ppara volver a entrar y ya sea que conecte o iniar el modo offline
            alert('conexion');
        }
    });




    // Obtiene la información del vehículo actual

    // Obtiene la información de los servicios del vehículo actual

});



// Paso 6 : Cargar servicios actuales
//====================================

function cargarServiciosVehiculo(id_t){
        $.ajax({
                    type: 'POST',
                    contentType: 'application/json',
                    url: url_con+'/getServices',
                    //url: 'http://opowerdev.net/web_services/FRAP/usuario/getServices',
                    dataType: "json",
                    data: JSON.stringify({"ID_USUARIO":id_usuario,"ID_SESSION":id_sesion, "Estado":estado, "ID_tripulacion":id_t}),
                    contentType: "application/json; charset=utf-8",
                    success: function(data, textStatus, jqXHR){
                        var id_s;
                       // alert('num E:'+ data.num_emergencies);
                        if(data.num_emergencies>1){

                                //var fragment ='';

                                var emergencias = data.emergency;
                                for(var i in emergencias)
                                {
                                    if(emergencias[i].FRAPRequired =="1" ){
                                        if(emergencias[i].tiene_fraps==1){

                                            fragment = create('<li data-theme="a"  style="background-color: #fff; width:350px; "  value="'+ emergencias[i].ID_SERVICIOS +'" onclick="mostrarServicio(this.value);">'+
                                                                '<a style="background-color: #fff; border:none;" class="ui-btn ui-btn-icon-right ui-icon-carat-r" href="">'+
                                                                    '<div style=" height:100%; width: 30px; float: left;"><img src="../images/tiene_frap.png" width="30"></div><div style=" float: left; padding-top: 7px; height: 100%;"> &nbsp;'+emergencias[i].timeLegend+'&nbsp;'+ emergencias[i].reason +'</div>'+
                                                                 '</a>'+
                                                            '</li>');
                                        }else{
                                            fragment = create('<li data-theme="a"  style="background-color: #fff; width:350px;"  value="'+ emergencias[i].ID_SERVICIOS +'" onclick="mostrarServicio(this.value);">'+
                                                                    '<a style="background-color: #fff; border:none;" class="ui-btn ui-btn-icon-right ui-icon-carat-r" href="">'+
                                                                        '<div style="float: left;"><img src="../images/necesita_frap.png" width="30"></div><div style=" float: left; padding-top: 7px; height: 100%;"> &nbsp;'+emergencias[i].timeLegend+'&nbsp;'+ emergencias[i].reason +'</div>'+
                                                                     '</a>'+
                                                                '</li>');
                                        }

                                    }else{
                                         fragment = create('<li data-theme="a"  style="background-color: #fff; width:350px;"  value="'+ emergencias[i].ID_SERVICIOS +'" onclick="mostrarServicio(this.value);">'+
                                                         '<a style="background-color: #fff; border:none;" class="ui-btn ui-btn-icon-right ui-icon-carat-r" href="">'+
                                                             '<div style="float: left;"><img src="../images/servicio_listo.png" width="30"></div><div style=" float: left; padding-top: 7px; height: 100%;"> &nbsp;'+emergencias[i].timeLegend+'&nbsp;'+ emergencias[i].reason +'</div>'+
                                                          '</a>'+
                                                     '</li>');
                                     }
                                     document.getElementById("panel_servicios").appendChild(fragment);


                                }


                        }else{
                                if(data.emergency != null){


                                    if(data.emergency.FRAPRequired =="1" ){
                                        if(data.emergency.tiene_fraps==1){

                                            fragment = create('<li data-theme="a"  style="background-color: #fff; width:350px;"   value="'+ data.emergency.ID_SERVICIOS +'" onclick="mostrarServicio(this.value);">'+
                                                '<a style="background-color: #fff; border:none;" class="ui-btn ui-btn-icon-right ui-icon-carat-r" href="">'+
                                                //'<i class="icon-bg google-bg ion-android-close"></i><span>'+data.emergency.timeLegend+'</span> '+ data.emergency.reason +
                                                '<div style=" height:100%; width: 30px; float: left;"><img src="../images/tiene_frap.png" width="30"></div><div style=" float: left; padding-top: 7px; height: 100%;"> &nbsp;'+data.emergency.timeLegend+'&nbsp;'+ data.emergency.reason +'</div>'+
                                                '</a>'+
                                                '</li>');
                                        }else{
                                            fragment = create('<li data-theme="a"  style="background-color: #fff; width:350px;"   value="'+ data.emergency.ID_SERVICIOS +'" onclick="mostrarServicio(this.value);">'+
                                                '<a style="background-color: #fff; border:none;" class="ui-btn ui-btn-icon-right ui-icon-carat-r" href="">'+
                                               // '<i class="icon-bg google-bg ion-android-close"></i><span>'+data.emergency.timeLegend+'</span> '+ data.emergency.reason +
                                                '<div style="float: left;"><img src="../images/necesita_frap.png" width="30"></div><div style=" float: left; padding-top: 7px; height: 100%;"> &nbsp;'+data.emergency.timeLegend+'&nbsp;'+ data.emergency.reason +'</div>'+
                                                '</a>'+
                                                '</li>');
                                        }

                                    }else{
                                        fragment = create('<li data-theme="a"  style="background-color: #fff; width:350px;"   value="'+ data.emergency.ID_SERVICIOS +'" onclick="mostrarServicio(this.value);">'+
                                            '<a style="background-color: #fff; border:none;" class="ui-btn ui-btn-icon-right ui-icon-carat-r" href="">'+
                                            //'<i class="icon-bg google-bg ion-android-close"></i><span>'+data.emergency.timeLegend+'</span> '+ data.emergency.reason +
                                            '<div style="float: left;"><img src="../images/servicio_listo.png" width="30"></div><div style=" float: left; padding-top: 7px; height: 100%;"> &nbsp;'+data.emergency.timeLegend+'&nbsp;'+ data.emergency.reason +'</div>'+
                                            '</a>'+
                                            '</li>');
                                    }

                                    /*
                                    fragment = create('<li data-theme="a"  style="background-color: #fff; width:350px;"   value="'+ data.emergency.ID_SERVICIOS +'" onclick="mostrarServicio(this.value);">'+
                                                            '<a style="background-color: #fff; border:none;" class="ui-btn ui-btn-icon-right ui-icon-carat-r" href="">'+
                                                                '<i class="icon-bg google-bg ion-android-close"></i><span>'+data.emergency.timeLegend+'</span> '+ data.emergency.reason +
                                                             '</a>'+
                                                        '</li>');
                                     */
                                    document.getElementById("panel_servicios").appendChild(fragment);
                                }
                          }




                        // Paso 7 : obtener la información del VEHICULO actual
                        //======================================================
                        //alert( JSON.stringify({"ID_USUARIO":id_usuario,"ID_SESSION":id_sesion, "Estado":estado, "ID_tripulacion":id_t}) );
                        $.ajax({
                                type: 'POST',
                                contentType: 'application/json',
                                url: url_con+'/getCrew',
                                //url: 'http://opowerdev.net/web_services/FRAP/usuario/getCrew',
                                dataType: "json",
                                data: JSON.stringify({"ID_USUARIO":id_usuario,"ID_SESSION":id_sesion, "Estado":estado, "ID_tripulacion":id_t}),
                                contentType: "application/json; charset=utf-8",
                                success: function(data, textStatus, jqXHR){

                                    //
                                    //alert(data.ID_TRIPULACIONES);
                                    $("#vehiculo_name").html(data.name);


                                    $("#vehiculo_estatus").html(data.operationStatus);
                                    $("#vehiculo_base").html(data.headquarter);

                                    $("#vehiculo_km_inicio").html(data.initialKm);
                                    $("#vehiculo_cambustivle").html(data.initialFuel);

                                    $("#vehiculo_tipo").html(data.kind);
                                    $("#vehiculo_nivel").html(data.level);

                                    if(data.crewCount > 1){
                                        $("#operador").html(data.crew[0].userName);
                                        $("#jefe").html(data.crew[1].userName);
                                    }else{
                                        $("#operador").html(data.crew.userName);
                                    }






                                    // (c)dibujar el mapa
                                    //............................................
                                    //............................................
                                    google.load("maps", "3", {"callback": map, other_params: "key=AIzaSyAbWY8x93GukU5w7_ZRVovO9ZyQhfbvP-A&sensor=true&language=en"});
                                    //google.load("maps", "3", {"callback": map, other_params: "sensor=true&language=en"});

                                    //google.maps.Load("maps", "3.8", {"callback": map, other_params: "sensor=true&language=en"});





                                },
                                error: function(jqXHR, textStatus, errorThrown){
                                    alert('addWine error: ' + textStatus);
                                }
                        });

                       // }

                    },
                    error: function(jqXHR, textStatus, errorThrown){
                        alert('addWine error: ' + textStatus);
                    }
            });
}








// funciones secundarias
////////////////////////////////////////////////////////


function cambiarVehiculo(id_tripulaciones){
    $.jStorage.set("idCrew", String(id_tripulaciones),{});
    location.reload();
}

function mostrarServicio(id_servicio){
    $.jStorage.set("idCrew", String(idCrew),{});
    $.jStorage.set("idService", String(id_servicio),{});
    location="home_services.html";
}


function salir(){
    location="index-login.html";
}



// Función para agregar elementos dinamicamente en el DOM
function create(htmlStr) {
    var frag = document.createDocumentFragment(),
        temp = document.createElement('div');
    temp.innerHTML = htmlStr;
    while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
      }
        return frag;
}





// Función para dibujar el mapa
function map() {

   // alert('mapa');
        var zoom_1 = 15;

        if(num_vehicules == 1){
            zoom_1 = 17
        }


     var image = '../images/ambulancia_negra_2.png';
    // new icon
    //var image = '../images/ambulancia_d.png';


     var mapOptions = {
        center:new google.maps.LatLng(lat_c, lon_c),
        zoom:zoom_1,
        mapTypeId: google.maps.MapTypeId.ROADMAP
     };

    var map = new google.maps.Map(document.getElementById("map"),mapOptions);


    var infowindow = new google.maps.InfoWindow();
     var marker, i;
     var currectMarker;



         for (i = 0; i < locations.length; i++) {

             if(locationsAuxCurrentName == locations[i][0]){
                 image = '../images/ambulancia_roja_2.png';
                 marker = new google.maps.Marker({
                     position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                     map: map,
                     icon: image,
                     zIndex: 10001,

                 });
             }
             else{
                 image = '../images/ambulancia_negra_2.png';
                 marker = new google.maps.Marker({
                     position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                     map: map,
                     icon: image,
                     zIndex: 1+i
                 });
             }





           google.maps.event.addListener(marker, 'click', (function(marker, i) {
             return function() {
               infowindow.setContent(locations[i][0]);
               infowindow.open(map, marker);
               //infowindow.setPosition(locations[i][1]+50);

             }

           })(marker, i));

             if(locationsAuxCurrentName == locations[i][0]){
                 currectMarker =marker;
             }
         }

         // uncoment wjen know how to makes work
    //infowindow.open(map,currectMarker);
    //infoWindow.open(map, marker); doesn't work
    //google.maps.event.trigger(currectMarker, 'click'); //still doesn


      //$.unblockUI();
      $.mobile.loading( "hide" );


}


function onBackKeyDown(e) {
   e.preventDefault();
}