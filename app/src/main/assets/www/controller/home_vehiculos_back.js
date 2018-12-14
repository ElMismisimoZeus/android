var id_sesion;
var id_usuario;
var estado;
var idCurrentVehicule;

var idCrew;

var lat='';
var lon='';

var lat_c='';
var lon_c='';

var setCurrent = 0 ;

var locations=[];


var num_vehicules;


function onBackKeyDown(e) {
   e.preventDefault();
   //alert('Back Button is Pressed!');
}


$(document).ready(function () {





    var g =($(window).height()) * 0.73;
    $("#map").height(g);

    document.addEventListener("backbutton", onBackKeyDown, false);

    // document.addEventListener("backbutton", backButtonHandler, false);

    id_sesion  = $.jStorage.get("id_sesion");
    id_usuario  = $.jStorage.get("id_usuario");
    estado = $.jStorage.get("estado");

    idCrew = $.jStorage.get("idCrew");

    // $.blockUI({ message:' <h1>Cargando información ...</h1>'});
    //$.blockUI({ message: '<img src="../imgages/loading.gif"  width:"200" height:"200"   /> ' });
    $.mobile.loading( "show");
/*
    $.blockUI({
                message: '<img src="../images/loading.gif" style="width:80%; height:80%; margin-left:20px;"   /> ',
                css: {
                    top:  ($(window).height() - 250) /2 + 'px',
                    left: ($(window).width() - 250) /2 + 'px'
                }
            });*/

    // Invoque getAll to get the start infotmation

    $.ajax({
            type: 'POST',
            contentType: 'application/json',
            url: 'http://opowerdev.net/web_services/FRAP/usuario/getAll',
            dataType: "json",
            data: JSON.stringify({"ID_USUARIO":id_usuario,"ID_SESSION":id_sesion, "Estado":estado}),
            contentType: "application/json; charset=utf-8",
            success: function(data, textStatus, jqXHR){

            // Populate the active emergencies

            var fragment ='';
            num_vehicules = data.num_vehicules;

            if(data.num_vehicules>1){

                var promises=[];



                // el web service ahora arroja un array de "value" cada uno de los cuales es
                // uno a uno con los vehiculos(vehicule)

                //var vehiculos = data.vehicule;
                var vehiculos = data.value;
                for(var i in vehiculos)
                {
                    // add to Panel
                    //=============================================================================


                     /*
                    fragment = create('<li type="none">'+
                                           '<a class="" href="home_vehicules.html?id_sesion='+id_sesion+'&id_usuario='+id_usuario+'&estado='+estado+'&idCurrentVehicule='+data.vehicule[0].ID_TRIPULACIONES +'">'+
                                              '<i class="icon-bg facebook-bg ion-flag"></i><span>'+vehiculos[i].name+'</span> '+vehiculos[i].headquarter +
                                               '</a>'+
                                       '</li>');
                    */



                    /*
                    Comentado por la nueva estructura : value->vehicule
                    fragment = create('<li data-theme="a"  style="background-color: #fff; width:350px;" value="'+ vehiculos[i].ID_TRIPULACIONES +'" onclick="cambiarVehiculo(this.value);" >'+
                                           '<a  style="background-color: #fff; border:none;" class="ui-btn ui-btn-icon-right ui-icon-carat-r" href="" >'+
                                              '<span>'+vehiculos[i].name+'</span> '+vehiculos[i].headquarter +
                                            '</a>'+
                                       '</li>');
                    */
                    fragment = create('<li data-theme="a"  style="background-color: #fff; width:350px;" value="'+ vehiculos[i].vehicule.ID_TRIPULACIONES +'" onclick="cambiarVehiculo(this.value);" >'+
                                                               '<a  style="background-color: #fff; border:none;" class="ui-btn ui-btn-icon-right ui-icon-carat-r" href="" >'+
                                                                  '<span>'+vehiculos[i].vehicule.name+'</span> '+vehiculos[i].vehicule.headquarter +
                                                                '</a>'+
                                                           '</li>');







                    document.getElementById("panel_vehiculos").appendChild(fragment);



                    /*
                    Comentado por la nueva estructura : value->vehicule

                    if(idCrew == null){
                        idCrew =vehiculos[i].vehicule.ID_TRIPULACIONES;
                    }
                    */

                    if(idCrew == null){
                        idCrew =vehiculos[i].vehicule.ID_TRIPULACIONES;
                    }





                    // prepare the map info
                    //=============================================================================

                    if(vehiculos[i].vehicule.gpsInfo.location == 'TRUE'){


                        if(setCurrent==0){
                            setCurrent = 1;
                            //idCrew =vehiculos[i].ID_TRIPULACIONES
                            //$.jStorage.set("idCrew", String(vehiculos[i].ID_TRIPULACIONES),{});

                            lat_c = vehiculos[i].vehicule.gpsInfo.latitude;
                            lon_c = vehiculos[i].vehicule.gpsInfo.longitude;
                        }
                         var carro = [];
                         carro =[vehiculos[i].vehicule.name,vehiculos[i].vehicule.gpsInfo.latitude,vehiculos[i].vehicule.gpsInfo.longitude,i];
                         locations.push(carro);

                    /*


                    //alert(JSON.stringify({"ID_USUARIO":id_usuario,"ID_SESSION":id_sesion, "Estado":estado, "ID_tripulacion":vehiculos[i].ID_TRIPULACIONES}));
                     var request = $.ajax({
                            type: 'POST',
                            contentType: 'application/json',
                            url: 'http://opowerdev.net/web_services/FRAP/usuario/getLocation',
                            dataType: "json",
                            data: JSON.stringify({"ID_USUARIO":id_usuario,"ID_SESSION":id_sesion, "Estado":estado, "ID_tripulacion":vehiculos[i].ID_TRIPULACIONES}),
                            contentType: "application/json; charset=utf-8",
                            success: function(data, textStatus, jqXHR){
                                 if(setCurrent==0){
                                    setCurrent = 1;

                                    lat_c = data.latitude;
                                    lon_c = data.longitude;
                                    //lat_c ='29.081099';
                                    //lon_c ='-110.971598';
                                }
                                 var carro = [];
                                 carro =[data.name,data.latitude,data.longitude,i];
                                 locations.push(carro);

                            },
                            error: function(jqXHR, textStatus, errorThrown){
                                 alert('addWine error: ' + textStatus +' y '+jqXHR);
                            }
                    });

                    promises.push( request);
                    */
                    }






                }

                //$("#unidad_asignada").html('Unidad :' +data.vehicule.name);
                alert('loadCurrent');

                loadCuerrenInfo(idCrew);




                /*  debo quitar ?
                alert('envio de when');

                $.when.apply(null, promises).done(function(){

                        alert('FINISH all');
                        google.load("maps", "3.8", {"callback": map, other_params: "sensor=true&language=en"});

                 }).fail(function(){
                     alert('Error cmt-01: get locations per vehicules');
                 });

                 */





            }else{

                // Un solo vehículo
                //=================================================================================

                 alert('un solo carro');

                $("#unidad_asignada").html('Unidad  :' + data.value.vehicule.name);


                                var  id_t = data.value.vehicule.ID_TRIPULACIONES;

                                //alert(data.vehicule.name);
                                fragment = create('<li data-theme="a"  style="background-color: #fff; width:350px;"  value="'+ data.value.vehicule.ID_TRIPULACIONES +'" onclick="cambiarVehiculo(this.value);">'+
                                                       '<a style="background-color: #fff; border:none;" class="ui-btn ui-btn-icon-right ui-icon-carat-r" href="" >'+
                                                          '<i class="icon-bg facebook-bg ion-flag"></i><span>'+data.value.vehicule.name+'</span>'+ data.value.vehicule.headquarter+
                                                           '</a>'+
                                                   '</li>');

                                document.getElementById("panel_vehiculos").appendChild(fragment);

                                idCrew = data.value.vehicule.ID_TRIPULACIONES;

                                if(data.value.vehicule.gpsInfo.location == 'TRUE'){


                                    lat_c = data.value.vehicule.gpsInfo.latitude;
                                    lon_c = data.value.vehicule.gpsInfo.longitude;
                                    //alert(data.name);
                                     var carro = [];
                                     carro = [data.value.vehicule.name,lat_c,lon_c,1];
                                     locations.push(carro);
                                }

                                loadCuerrenInfo(id_t);







            }




            },
            error: function(jqXHR, textStatus, errorThrown){
                alert('Error GTLL 01 : ' + textStatus + ' '+ errorThrown);
            }
    });

});


function loadCuerrenInfo(id_t){


        var fragment ='';

        // get the vehicle location
        /*
                                        $.ajax({
                                                type: 'POST',
                                                contentType: 'application/json',
                                                url: 'http://opowerdev.net/web_services/FRAP/usuario/getLocation',
                                                dataType: "json",
                                                data: JSON.stringify({"ID_USUARIO":id_usuario,"ID_SESSION":id_sesion, "Estado":estado, "ID_tripulacion":id_t}),
                                                contentType: "application/json; charset=utf-8",
                                                success: function(data, textStatus, jqXHR){
                                                    lat_c = data.latitude;
                                                    lon_c = data.longitude;

                                                    if(data.location == 'TRUE'){
                                                        //alert(data.name);
                                                         var carro = [];
                                                         carro = [data.name,lat_c,lon_c,1];
                                                         locations.push(carro);
                                                     }*/

                                                    // invoque to getServices to populate right panel "Servicios"

                                                                    $.ajax({
                                                                                type: 'POST',
                                                                                contentType: 'application/json',
                                                                                url: 'http://opowerdev.net/web_services/FRAP/usuario/getServices',
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
                                                                                                                            '<i class="icon-bg whatsapp-bg ion-android-done"></i><span>'+emergencias[i].timeLegend+'</span> '+ emergencias[i].reason +
                                                                                                                         '</a>'+
                                                                                                                    '</li>');
                                                                                                }else{
                                                                                                    fragment = create('<li data-theme="a"  style="background-color: #fff; width:350px;"  value="'+ emergencias[i].ID_SERVICIOS +'" onclick="mostrarServicio(this.value);">'+
                                                                                                                            '<a style="background-color: #fff; border:none;" class="ui-btn ui-btn-icon-right ui-icon-carat-r" href="">'+
                                                                                                                                '<i class="icon-bg google-bg ion-android-close"></i><span>'+emergencias[i].timeLegend+'</span> '+ emergencias[i].reason +
                                                                                                                             '</a>'+
                                                                                                                        '</li>');
                                                                                                }

                                                                                            }else{
                                                                                                 fragment = create('<li data-theme="a"  style="background-color: #fff; width:350px;"  value="'+ emergencias[i].ID_SERVICIOS +'" onclick="mostrarServicio(this.value);">'+
                                                                                                                 '<a style="background-color: #fff; border:none;" class="ui-btn ui-btn-icon-right ui-icon-carat-r" href="">'+
                                                                                                                     '<i class="icon-bg google-bg ion-android-close"></i><span>'+emergencias[i].timeLegend+'</span> '+ emergencias[i].reason +
                                                                                                                  '</a>'+
                                                                                                             '</li>');
                                                                                             }
                                                                                             //alert(i);
                                                                                             //alert(emergencias[i].timeLegend);
                                                                                             document.getElementById("panel_servicios").appendChild(fragment);


                                                                                             // Added by la Z


                                                                                        }



                                                                                        //google.load("maps", "3.8", {"callback": map, other_params: "sensor=true&language=en"});

                                                                                    }else{



                                                                                        if(data.emergency != null){
                                                                                            fragment = create('<li data-theme="a"  style="background-color: #fff; width:350px;"   value="'+ data.emergency.ID_SERVICIOS +'" onclick="mostrarServicio(this.value);">'+
                                                                                                                    '<a style="background-color: #fff; border:none;" class="ui-btn ui-btn-icon-right ui-icon-carat-r" href="">'+
                                                                                                                        '<i class="icon-bg google-bg ion-android-close"></i><span>'+data.emergency.timeLegend+'</span> '+ data.emergency.reason +
                                                                                                                     '</a>'+
                                                                                                                '</li>');
                                                                                            document.getElementById("panel_servicios").appendChild(fragment);
                                                                                        }
                                                                                      }

                                                                                        // get vehicule information
                                                                                        alert( JSON.stringify({"ID_USUARIO":id_usuario,"ID_SESSION":id_sesion, "Estado":estado, "ID_tripulacion":id_t}) );
                                                                                        $.ajax({
                                                                                                type: 'POST',
                                                                                                contentType: 'application/json',
                                                                                                url: 'http://opowerdev.net/web_services/FRAP/usuario/getCrew',
                                                                                                dataType: "json",
                                                                                                data: JSON.stringify({"ID_USUARIO":id_usuario,"ID_SESSION":id_sesion, "Estado":estado, "ID_tripulacion":id_t}),
                                                                                                contentType: "application/json; charset=utf-8",
                                                                                                success: function(data, textStatus, jqXHR){

                                                                                                    //
                                                                                                    $("#vehiculo_name").html(data.name);
                                                                                                    $("#vehiculo_estatus").html(data.operationStatus);
                                                                                                    $("#vehiculo_base").html(data.headquarter);

                                                                                                    $("#vehiculo_km_inicio").html(data.initialKm);
                                                                                                    $("#vehiculo_cambustivle").html(data.initialFuel);

                                                                                                    $("#vehiculo_tipo").html(data.kind);
                                                                                                    $("#vehiculo_nivel").html(data.level);

                                                                                                    $("#operador").html(data.crew[0].userName);
                                                                                                    $("#jefe").html(data.crew[1].userName);



                                                                                                     //$("head").append($("<link rel='stylesheet' type='text/css' href='../styles/laZ.min.css'>"));
                                                                                                     //$("head").append($("<link rel='stylesheet' type='text/css' href='../styles/../styles/jquery.mobile.icons.min.css'>"));
                                                                                                     //$("head").append($("<link rel='stylesheet' type='text/css' href='../styles/jquery.mobile.structure-1.4.5.min.css'>"));

                                                                                                    google.load("maps", "3.8", {"callback": map, other_params: "sensor=true&language=en"});




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
                                                                        alert('despues de ajax;');
                                                /*
                                                },
                                                error: function(jqXHR, textStatus, errorThrown){
                                                    alert('addWine error: ' + textStatus);
                                                }
                                        });*/
}


function cambiarVehiculo(id_tripulaciones){
    $.jStorage.set("idCrew", String(id_tripulaciones),{});
    location.reload();
}



function mostrarServicio(id_servicio){
    $.jStorage.set("idCrew", String(idCrew),{});
    $.jStorage.set("idService", String(id_servicio),{});
    location="home_services.html";
}


function getURLParameter(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;

}

function create(htmlStr) {
    var frag = document.createDocumentFragment(),
        temp = document.createElement('div');
    temp.innerHTML = htmlStr;
    while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
      }
        return frag;
}

function map() {
        var zoom_1 = 15;

        if(num_vehicules == 1){
            zoom_1 = 15
        }


     var image = '../images/ambulancia.png';

     var mapOptions = {
        center:new google.maps.LatLng(lat_c, lon_c),
        zoom:zoom_1,
        mapTypeId: google.maps.MapTypeId.ROADMAP
     };

    var map = new google.maps.Map(document.getElementById("map"),mapOptions);


    var infowindow = new google.maps.InfoWindow();
     var marker, i;

         for (i = 0; i < locations.length; i++) {
           marker = new google.maps.Marker({
             position: new google.maps.LatLng(locations[i][1], locations[i][2]),
             map: map,
             icon: image
           });

           google.maps.event.addListener(marker, 'click', (function(marker, i) {
             return function() {
               infowindow.setContent(locations[i][0]);
               infowindow.open(map, marker);
             }
           })(marker, i));
         }



      //$.unblockUI();
      $.mobile.loading( "hide" );


}



function salir(){
    location="index-login.html";
}