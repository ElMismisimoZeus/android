
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

var idService;



var lat='';
var lon='';



var setCurrent = 0 ;

// Variable del array de los vehículos para Mapa
var locations=[];


var num_vehicules;


var haveLocation;
var c_name='';






// Variables para el control del frap fuera de línea
// ===================================================

var emergencia_razon=' ';
var emergencia_calle=' ';
var emergencia_colonia=' ';
var emergencia_municipio=' ';
var emergencia_estado=' ';
















 $(function () {

	  $("#dialog1").dialog({
		autoOpen: false,
		modal: true,
		dialogClass: "dlg-no-close",
		open: function() {
                $('.ui-widget-overlay').addClass('custom-overlay');
            }
	  });

});

$(function () {
    $("#loading").dialog({
        autoOpen: false,
        modal: true,
        dialogClass: "dlg-no-close",
        open: function() {
            $('.ui-widget-overlay').addClass('custom-overlay');
        }
    });

});




var vehiculeColor = {'flag-green.png':"green", 'flag-red.png': "red", 'flag-blue': "blue",'flag-white.png': "white",   'flag-yellow.png' :"yellow" };


// Algoritmo
// ================================================================================================
// ================================================================================================
$(document).ready(function () {

    dataBase.openDb();


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

    idService = $.jStorage.get("idService");
    idCrew = $.jStorage.get("idCrew");





    //$.mobile.loading( "show");
    $("#loading").dialog('open');

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
                                data: JSON.stringify({"ID_USUARIO":id_usuario,"ID_SESSION":id_sesion, "Estado":estado}),
                                contentType: "application/json; charset=utf-8",
                                success: function(data, textStatus, jqXHR){
                                // Paso 5:  LLena el array de los vehículos : utilizado para (a) debujar panel y  (b) mapa (var:locations)
                                //=========================================================================================================


                                        // Variable para generar el panel lateral de vehículos
                                        var fragment ='';
                                        num_vehicules = data.num_vehicules;

                                        if(data.num_vehicules>1){
                                        // manejar un array
                                        //..................
                                        //..................

                                                var vehiculos = data.value;
                                                for(var i in vehiculos)
                                                {
                                                    var auxvsc = vehiculos[i].vehicule.icon;
                                                    var vc = vehiculeColor[auxvsc];

                                                    // (a) Agregar Información al Panel vehículos
                                                    //............................................
                                                    //............................................
                                                    fragment = create('<li data-theme="a"  style="background-color: #fff; width:350px;" value="'+ vehiculos[i].vehicule.ID_TRIPULACIONES +'" onclick="cambiarVehiculo(this.value);" >'+
                                                                                               '<a  style="background-color: #fff; border:none;" class="ui-btn ui-btn-icon-right ui-icon-carat-r" href="" >'+
                                                                                                  //'<span>'+vehiculos[i].vehicule.name+'</span> '+vehiculos[i].vehicule.headquarter +
                                                                                                    '<div style="height: 20px; width: 10px; background-color: '+vc+'; float: left;"> </div> <div style="height: 10px; width: 5px; float: left;"></div> <span>'+vehiculos[i].vehicule.name+'</span> '+vehiculos[i].vehicule.headquarter +
                                                                                                '</a>'+
                                                                                           '</li>');
                                                    document.getElementById("panel_vehiculos").appendChild(fragment);


                                                    // Paso 4 : Genera un vehículo actual
                                                    //====================================
                                                    if(idCrew == null){
                                                        idCrew =vehiculos[i].vehicule.ID_TRIPULACIONES;
                                                        $.jStorage.set("idCrew", String(idCrew),{});

                                                        $("#unidad_asignada").html('Unidad  :' + vehiculos[i].vehicule.name);
                                                    }
                                                    else{
                                                        if(idCrew == vehiculos[i].vehicule.ID_TRIPULACIONES){
                                                            $("#unidad_asignada").html('Unidad  :' + vehiculos[i].vehicule.name);
                                                        }
                                                    }


                                                    // (b) Información para  dibujar el mapa
                                                    //............................................
                                                    //............................................

                                                     if(idCrew == vehiculos[i].vehicule.ID_TRIPULACIONES){
                                                         c_name  = vehiculos[i].vehicule.name;
                                                         if(vehiculos[i].vehicule.gpsInfo.location == 'TRUE'){


                                                             lat_c = vehiculos[i].vehicule.gpsInfo.latitude;
                                                             lon_c = vehiculos[i].vehicule.gpsInfo.longitude;
                                                             haveLocation =1;
                                                         }
                                                         else{
                                                             haveLocation = 0;
                                                         }

                                                     }



                                                }


                                                cargarServiciosVehiculo(idCrew);




                                        }
                                        else{
                                        // manejar un registro único
                                        //..................
                                        //..................

                                                // (a) Agregar Información al Panel vehículos
                                                //.............................................
                                                //.............................................
                                                fragment = create('<li data-theme="a"  style="background-color: #fff; width:350px;"  value="'+ data.value.vehicule.ID_TRIPULACIONES +'" onclick="cambiarVehiculo(this.value);">'+
                                                                       '<a style="background-color: #fff; border:none;" class="ui-btn ui-btn-icon-right ui-icon-carat-r" href="" >'+
                                                                          //'<i class="icon-bg facebook-bg ion-flag"></i><span>'+data.value.vehicule.name+'</span>'+ data.value.vehicule.headquarter+
                                                                             '<div style="height: 20px; width: 10px; background-color: '+vc+'; float: left;"> </div> <div style="height: 10px; width: 5px; float: left;"></div>'+data.value.vehicule.name+'</span> <div style="height: 10px; width: 12px; float: left;"></div>'+ data.value.vehicule.headquarter+
                                                                           '</a>'+
                                                                   '</li>');

                                                document.getElementById("panel_vehiculos").appendChild(fragment);

                                                // Paso 4 : Genera un vehículo actual
                                                //====================================
                                                if(idCrew == null){
                                                    idCrew = data.value.vehicule.ID_TRIPULACIONES;
                                                    $.jStorage.set("idCrew", String(idCrew),{});
                                                    $("#unidad_asignada").html('Unidad  :' + data.value.vehicule.name);
                                                }
                                                else{
                                                    $("#unidad_asignada").html('Unidad  :' + data.value.vehicule.name);
                                                }



                                                // (b) Información para  dibujar el mapa
                                                //.............................................
                                                //.............................................
                                                if(data.value.vehicule.gpsInfo.location == 'TRUE'){
                                                    lat_c = data.value.vehicule.gpsInfo.latitude;
                                                    lon_c = data.value.vehicule.gpsInfo.longitude;

                                                     var carro = [];
                                                     carro = [data.value.vehicule.name,lat_c,lon_c,1];
                                                     locations.push(carro);
                                                }


                                                cargarServiciosVehiculo(idCrew);


                                        }
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
            //navigator.app.exitApp();
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

                                            fragment = create('<li data-theme="a"  style="background-color: #fff; width:350px;"  value="'+ emergencias[i].ID_SERVICIOS +'" onclick="mostrarServicio(this.value);">'+
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




                        // Paso 7 : obtener la información del SERVICIO actual
                        //======================================================
                        //alert( JSON.stringify({"ID_USUARIO":id_usuario,"ID_SESSION":id_sesion, "Estado":estado, "ID_tripulacion":id_t}) );
                        $.ajax({
                                        type: 'POST',
                                        contentType: 'application/json',
                                        url: url_con+'/getService',
                                        //url: 'http://opowerdev.net/web_services/FRAP/usuario/getService',
                                        dataType: "json",
                                        data: JSON.stringify({"ID_USUARIO":id_usuario,"ID_SESSION":id_sesion, "Estado":estado, "ID_servicio":idService}),
                                        contentType: "application/json; charset=utf-8",
                                        success: function(data, textStatus, jqXHR){

                                            // FILL VARIABLES FOR MANAGE OFFLINE

                                            emergencia_razon= data.reason;
                                            emergencia_calle = data.address.street;
                                            emergencia_colonia = data.address.suburb;
                                            emergencia_municipio = data.address.town;
                                            emergencia_estado = data.address.state;



                                            // Información del Servicio
                                            $("#reason").html(data.reason);
                                            $("#num_servicio").html(data.ID_SERVICIOS);
                                            $("#folio_llamada").html(data.ID_LLAMADAS);

                                            // Dirección servicio
                                            $("#servicio_colonia").html(data.address.suburb);
                                            $("#servicio_calle").html(data.address.street);
                                            $("#ubicacion_paciente").html(data.address.location);
                                            $("#servicio_delegacion").html(data.address.town);
                                            $("#servicio_estado").html(data.address.state);
                                            $("#servicio_cp").html(data.address.zip);
                                            $("#servicio_scalle").html(data.address.nextStreet1);


                                            // Datos del reportante
                                            $("#reportante_nombre").html(data.applicant.name);
                                            $("#reportante_telefono").html(data.applicant.phone);
                                            $("#reportante_comentario").html(data.applicant.comment);

                                            // LLamada de seguimiento
                                            if(data.trackingCall.status=="TRUE"){

                                            }

                                            // Horas
                                            $("#hora_llamada_recibida").html(data.hours.callLegend);
                                            $("#hora_despacho").html(data.hours.dispatchLegend);
                                            $("#hora_arrivo").html(data.hours.arrivalLegend);
                                            $("#hora_hospital").html(data.hours.hospitalLegend);
                                            $("#hora_cancelacion").html(data.hours.cancelLegend);


                                            // Tiempo
                                            $("#tiempo_despacho").html(data.times.dispatch);
                                            $("#tiempo_respuesta").html(data.times.response);
                                            $("#tiempo_arrivo").html(data.times.arrival);
                                            $("#tiempo_traslado").html(data.times.transfer);
                                            $("#tiempo_total").html(data.times.total);


                                            // agrear los FRP's previamente creados para mostrar el PDF

                                            // FRAPS
                                            //==================================================


                                            /*
                                            for (var frap_e in data.fraps)
                                            {
                                                console.log(frap_e);
                                                console.log(frap_e.ID_FRAPS);
                                                console.log(frap_e.FRAP_NUMERO);
                                                console.log(frap_e.date);
                                                console.log(frap_e.dateLegend);
                                                console.log(frap_e.name);

                                                fragment = create(
                                                    '<div style="height: 40px; padding-top: 13px;" >'+
                                                    '<div> '+
                                                    '<b>Número de FRAP</b> '+frap.FRAP_NUMERO+' - '+frap.dateLegend+'<img src="img/notebook-medium.png" width="35" onclick="openFRAP('+frap_e.ID_FRAPS+')"> <img src="img/mail-send.png" width="35" onclick="enviarFRAP('+frap_e.ID_FRAPS+')">'+
                                                    '</div>'+
                                                    '</div>'
                                                );
                                                document.getElementById('local_fraps').appendChild(fragment);
                                            }
                                            */
                                            $.each(data.fraps, function(key,value){

                                               // console.log('longitud frap:'+value.length);
                                                if (typeof value.length !== 'undefined'){
                                                    console.log('se debe iterar');
                                                    for (var i in value)
                                                    {
                                                        console.log(value[i].ID_FRAPS);
                                                        console.log(value[i].FRAP_NUMERO);
                                                        console.log(value[i].date);
                                                        console.log(value[i].dateLegend);
                                                        console.log(value[i].name);
                                                        fragment = create(
                                                            '<div style="height: 123px; padding-top: 13px;" >'+
                                                            '<div> '+
                                                            '<b>Número de FRAP</b> <p>'+value[i].FRAP_NUMERO+' - '+value[i].dateLegend+'</p><img src="../images/PDF-Icon.png" width="35" onclick="openFRAP('+value[i].ID_FRAPS+')"> '+
                                                            '</div>'+
                                                            '</div>'
                                                        );
                                                        document.getElementById('local_fraps').appendChild(fragment);
                                                    }

                                                }else{
                                                    console.log(key);
                                                    console.log(value.ID_FRAPS);
                                                    console.log(value.FRAP_NUMERO);
                                                    console.log(value.date);
                                                    console.log(value.dateLegend);
                                                    console.log(value.name);

                                                    fragment = create(
                                                        '<div style="height: 123px; padding-top: 13px;" >'+
                                                        '<div> '+
                                                        '<b>Número de FRAP</b> <p>'+value.FRAP_NUMERO+' - '+value.dateLegend+'</p><img src="../images/PDF-Icon.png" width="35" onclick="openFRAP('+value.ID_FRAPS+')"> '+
                                                        '</div>'+
                                                        '</div>'
                                                    );
                                                    document.getElementById('local_fraps').appendChild(fragment);

                                                }






                                            });






                                            lat = data.address.latitude;
                                            lon = data.address.longitude;

                                           // (c)dibujar el mapa
                                           //............................................
                                           //............................................
                                           google.load("maps", "3", {"callback": map, other_params: "key=AIzaSyAbWY8x93GukU5w7_ZRVovO9ZyQhfbvP-A&sensor=true&language=en"});

                                            //google.load("maps", "3", {"callback": map, other_params: "sensor=true&language=en"});




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
    $.jStorage.set("idCrew", String(idCrew),{});
    location="home_vehicules.html";
}

function mostrarServicio(id_servicio){
    console.log('cambia servicio');
    console.log('idService'+id_servicio);

    $.jStorage.set("idCrew", String(idCrew),{});
    $.jStorage.set("idService", String(id_servicio),{});
    location.reload();
}








/*
    Función cargar FRAP
    Carga los fraps que se han generado sin ser enviados, éston incluyen : completos e incompletos
    ====================================================================================================================
 */
function cargarFRAPs(){

    dataBase.openDb();

    dataBase.onSuccess = function(tx, results){
       // alert('jo FRAP IN');
        var len = results.rows.length;
      //  alert('len:'+len);
        for (var i = 0; i < len; i++) {

            var t = results.rows.item(i).TIPO; //'onLine';
            var w = results.rows.item(i).ID_FRAP;

            fragment = create(
                '<div " onclick="loadFRAP(\''+t +'\', '+w+', \'TRUE\')"  >'+
                '<div style=" padding-top: 7px; width: 37px; height: 40px; float: left;"  onclick="loadFRAP(\''+t +'\', '+w+', \'TRUE\')"> </div>'+
                '<div style=" padding-left: 15px; text-align: left; height: 40px; width: 75%;"  onclick="loadFRAP(\''+t +'\', '+w+' , \'TRUE\')"> '+results.rows.item(i).FECHA+'-' + results.rows.item(i).CAUSA+' <br> '+results.rows.item(i).COLONIA+' - '+results.rows.item(i).MUNICIPIO+'  </div>'+
                '</div>'
            );

            document.getElementById('local_fraps').appendChild(fragment);

        }
       // alert('llamda FRAPS IN');
        $.mobile.loading( "hide" );


    };

    dataBase.getTable(' SERVICIO ', ' * ', " WHERE ENVIADO=0 AND ESTATUS='iniciado' ");

}
//======================================================================================================================















function frap(){
   // location="frap.html";

    $("#dialog1").dialog('open');
/*
    $.blockUI({
        message: $('#dialog1')
    });
*/
}





/*
    Carga la información de latabla LOCAL servicios para tener el id del siguiente frap , lo guarda junto con las variables
    del serivicio  y abre el formulario con la información correcta
    ====================================================================================================================
 */
function frap_primarios(){
    prepareFRAP("frap.html");
}



function frap_secundarios(){
    //$.unblockUI();
    prepareFRAP("frap_complement.html");
    //location="frap_complement.html";

}


function prepareFRAP(paginaInicial){
    /*
    Se comnecta a la base de datos para obtener el siguente Frap ID y generar el registro en la tabla servicios
     */



    dataBase.openDb();



    dataBase.callBack = function(id){
        //alert('dentro super');
        var idFRAP = id+1;

        var currentdate = new Date();


        var fe = currentdate.getDate() + "/"
            + (currentdate.getMonth()+1)  + "/"
            + currentdate.getFullYear();



        var tabla_frap={
            "iID_SERVICE" : idService,
            "iID_FRAP" : idFRAP,
            "TIPO" : "onLine",
            "ESTATUS" : "iniciado",
            "AVANCE" : "pagezero",
            // Set Default valuyes for OnLine FRAP
            "iENVIADO" : 0,
            "CAUSA" : emergencia_razon,
            "CALLE" : emergencia_calle,
            "COLONIA" : emergencia_colonia,
            "MUNICIPIO" : emergencia_municipio,
            "ESTADO" : emergencia_estado,
            "iLATITUD" : 0.01,
            "iLONGITUD" :0.01,
            "FECHA": fe
        };

        // VERY VERY IMPORTANT !!!
        $.jStorage.set("idFRAP", String(idFRAP),{});

        // manage of loadFix (diagrama flujo 1)
        $.jStorage.set("isNew", String('1'),{});
        $.jStorage.set("estado_frap", String('0'),{});

        var estado_secciones ={};
        estado_secciones['PACIENTE'] = 0;
        estado_secciones['EVALUACION_PRIMARIA'] = 0;
        estado_secciones['EVALUACION_SECUNDARIA'] = 0;
        estado_secciones['TRATAMIENTO'] = 0;
        //estado_secciones['VIAL'] = 0;
        //estado_secciones['GINECOLOGICO'] = 0;
        //estado_secciones['TRAUMA'] = 0;
        //estado_secciones['CLINICO'] = 0;


        estado_secciones['INSUMOS_NIVEL_BASICO'] = 0;
        estado_secciones['INSUMOS_NIVEL_INTERMEDIO'] = 0;
        estado_secciones['INSUMOS_NIVEL_AVANZADO'] = 0;



        estado_secciones['MEDICAMENTOS'] = 1;
        estado_secciones['SIGNOS_VITALES'] = 1;

        estado_secciones['HALLAZGOS_FISICOS'] = 1;
        estado_secciones['FACTORES'] = 1;

        $.jStorage.set("estado_secciones", estado_secciones);




        dataBase.onSuccess = function(tx, r) {

            $.unblockUI();
            console.log('justo antes');
            console.log('=======================');
            console.log(paginaInicial);
            location=paginaInicial;
        };
        dataBase.saveTable('SERVICIO',tabla_frap);

    };


    dataBase.onSuccess = function(tx, results){

        var resultado =0;

        var len = results.rows.length;
      //  alert(len);
        var actual = 0;
        for (var i = 0; i < len; i++) {

            actual = results.rows.item(i).ID_FRAP;
            if(actual > resultado)
                resultado = actual;
        }

        // Llamada al callBack como success querry
        dataBase.callBack(resultado);

    };


    dataBase.getTable('SERVICIO', ' ID_FRAP ' , " WHERE TIPO = 'onLine'");

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


// alert('dentro');
                 if(haveLocation ==0){
                    // The vehicule don't have GPS data
                    var mapOptions = {
                       center:new google.maps.LatLng(lat, lon),
                       zoom:15
                    }

                    var map = new google.maps.Map(document.getElementById("map"),mapOptions);

                    var marker = new google.maps.Marker({
                       position: new google.maps.LatLng(lat, lon),
                       map: map
                    });
                 }
                 else{
                    // Information complete

                    //var image = '../images/ambulancia.png';
                     var image = '../images/ambulancia_35.png';

                     var markers = [
                                 {
                                     "title": 'Lahore',
                                     "lat": lat,
                                     "lng": lon,
                                     "tipo":"emergencia"

                                 }
                             ,
                                 {
                                     "title": "Karachi",
                                     "lat": lat_c,
                                     "lng": lon_c,
                                     "tipo":"unidad"

                                 }
                     ];



                     //markers.push({"title": 'Lahorde',"lat": '35.5546',"lng": '55.3572'});

                     //



                                 var mapOptions = {
                                     center: new google.maps.LatLng(markers[0].lat, markers[0].lng),
                                     zoom: 10,
                                     mapTypeId: google.maps.MapTypeId.ROADMAP
                                 };
                                 var map = new google.maps.Map(document.getElementById("map"), mapOptions);
                                 var infoWindow = new google.maps.InfoWindow();
                                 var lat_lng = new Array();
                                 var latlngbounds = new google.maps.LatLngBounds();
                                 for (i = 0; i < markers.length; i++) {
                                     var data = markers[i]
                                     var myLatlng = new google.maps.LatLng(data.lat, data.lng);
                                     lat_lng.push(myLatlng);
                                     var marker;
                                     if(data.tipo =="unidad"){
                                         marker = new google.maps.Marker({
                                                  position: myLatlng,
                                                  map: map,
                                                  icon :image,
                                                  title: data.title
                                              });
                                     }
                                     else{
                                        marker = new google.maps.Marker({
                                              position: myLatlng,
                                              map: map,
                                              title: data.title
                                          });
                                     }



                                     latlngbounds.extend(marker.position);
                                     /*
                                     google.maps.event.addListener(marker, 'click', (function(marker, i) {
                                          return function() {
                                            infowindow.setContent(data.title);
                                            infowindow.open(map, marker);
                                          }
                                        })(marker, i));*/

                                     (function (marker, data) {
                                         google.maps.event.addListener(marker, "click", function (e) {
                                             infoWindow.setContent(data.title);
                                             infoWindow.open(map, marker);
                                         });
                                     })(marker, data);
                                 }

                                 map.setCenter(latlngbounds.getCenter());
                                 map.fitBounds(latlngbounds);

                                 //***********ROUTING****************//

                                 //Intialize the Path Array
                                 var path = new google.maps.MVCArray();

                                 //Intialize the Direction Service
                                 var service = new google.maps.DirectionsService();

                                 //Set the Path Stroke Color
                                 var poly = new google.maps.Polyline({ map: map, strokeColor: '#4986E7' });

                                 //Loop and Draw Path Route between the Points on MAP
                                 for (var i = 0; i < lat_lng.length; i++) {
                                     if ((i + 1) < lat_lng.length) {
                                         var src = lat_lng[i];
                                         var des = lat_lng[i + 1];
                                         path.push(src);
                                         poly.setPath(path);
                                         service.route({
                                             origin: src,
                                             destination: des,
                                             travelMode: google.maps.DirectionsTravelMode.DRIVING
                                         }, function (result, status) {
                                             if (status == google.maps.DirectionsStatus.OK) {
                                                 for (var i = 0, len = result.routes[0].overview_path.length; i < len; i++) {
                                                     path.push(result.routes[0].overview_path[i]);
                                                 }
                                             }
                                         });
                                     }
                                 }

                 }



    //map.fitBounds(bounds);

    //$.unblockUI();

    //$.mobile.loading( "hide" );

    $("#loading").dialog( 'close' );

                 // Call methos to load LOCAL FRAPs



    //Aqui se cargan los FRP's fuera de linea'
    //  cargarFRAPs();

}


function onBackKeyDown(e) {
   e.preventDefault();
}













function openFRAP(frapt){
    //alert('test frap pdf');

    console.log('open PDF');

    console.log("task="+"getPDF"+"&user="+id_usuario+"&session="+id_sesion+"&state="+estado+"&service="+idService+"&frap="+frapt+"&stateIndex="+25);
    var dataString="task="+"getPDF"+"&user="+id_usuario+"&session="+id_sesion+"&state="+estado+"&service="+idService+"&frap="+frapt+"&stateIndex="+25;

    // alert(dataString);

    $.ajax({
        type: 'GET',
        data: dataString,
        dataType: "xml",
        beforeSend: function() {$.mobile.loading( "show", {
            text: "CARGANDO FRAP",
            textVisible: true
        }); }, //Show spinner
        complete: function(){$.mobile.loading( "hide" );},
        url: 'http://scews.net/ws.php',

        // La URL del we¡b service tiene errores, hay que corregir en el archivo
        //url: 'http://scewsdev.net/ws11.php',

        success: function(data){

            $(data).find('data').each(function()  {
                var url = $(this).find('URL').text();
                //   alert(url);
                var curl = encodeURIComponent(url);
                // alert('codificado : ' + curl)
                //window.open(url, '_blank');
                console.log('https://docs.google.com/viewer?url='+curl+'&embedded=true&rm=minimal&chrome=false');
                window.open('https://docs.google.com/viewer?url='+curl+'&embedded=true&rm=minimal&chrome=false', '_self', 'location=yes');
                //ref = window.open('index.html', '_self');

                //showHelp('https://docs.google.com/viewer?url='+curl);




                //   var ref = cordova.InAppBrowser.open('http://scefrap.net/FRAP/App.pdf', '_blank', 'location=yes');

                /*
                fragment = create('<di>'+
                        '<a href="'+url+'" id="embedURL">prueba</a>'+
                        '<a href="'+url+'" class="embed" id="test">test</a>'+
                        '<div>');

                    document.getElementById("pdf").appendChild(fragment);
                   */

            });
            //                $(document).ready(function() {
            //   $('#embedURL').gdocsViewer();
            //  $('a.embed').gdocsViewer({width: 300, height: 450});
            //});

        },
        error: function(data){
            //console.log(data);
            //alert(data);
            alert('Ocurrio un error durante la comunicacion');

        }
    });
    //window.location="frap.html?usuario="+usuario+"&session="+session+"&service="+service+"&frap="+frap;
}