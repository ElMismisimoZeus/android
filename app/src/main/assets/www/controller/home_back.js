var id_sesion;
var id_usuario;
var estado;

var idService;
var idCurrentVehicule;
var idCrew;

var lat='';
var lon='';

var lat_c='';
var lon_c='';

var setCurrent = 0 ;

var locations=[];


var num_vehicules;

var haveLocation;
var c_name='';

 function onBackKeyDown(e) {
    e.preventDefault();
    //alert('Back Button is Pressed!');
 }


$(document).ready(function () {

    document.addEventListener("backbutton", onBackKeyDown, false);
    //document.addEventListener("deviceready", onDeviceReady, false);

    var g =($(window).height()) * 0.73;
    $("#map").height(g);

    id_sesion  = $.jStorage.get("id_sesion");
    id_usuario  = $.jStorage.get("id_usuario");
    estado = $.jStorage.get("estado");

    idService = $.jStorage.get("idService");
    idCrew = $.jStorage.get("idCrew");


    $.mobile.loading( "show");

    //$.blockUI({ message:' <h1>Cargando información ...</h1>'});
    //$.blockUI({ message: '<img src="../img/loader.gif" width="185" /> ' });
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


                var vehiculos = data.vehicule;
                for(var i in vehiculos)
                {
                    // add to Panel
                    //=============================================================================



                    fragment = create('<li style=" width:350px;"  value="'+vehiculos[i].vehicule.ID_TRIPULACIONES+'" onclick="cambiarVehiculo(this.value);" >'+
                                           '<a style="background-color: #fff; border:none;" class="ui-btn ui-btn-icon-right ui-icon-carat-r" href="" >'+
                                              '<i class="icon-bg facebook-bg ion-flag"></i><span>'+vehiculos[i].vehicule.name+'</span> '+vehiculos[i].vehicule.headquarter +
                                            '</a>'+
                                       '</li>');

                    /*
                    fragment = create('<li type="none">'+
                                           '<a class="" href="home_vehicules.html?id_sesion='+id_sesion+'&id_usuario='+id_usuario+'&estado='+estado+'&idCurrentVehicule='+data.vehicule[0].ID_TRIPULACIONES +'">'+
                                              '<i class="icon-bg facebook-bg ion-flag"></i><span>'+vehiculos[i].name+'</span> '+vehiculos[i].headquarter +
                                               '</a>'+
                                       '</li>');
                    */
                    document.getElementById("panel_vehiculos").appendChild(fragment);


                    // prepare the map info
                    //=============================================================================
                    if( idCrew == vehiculos[i].vehicule.ID_TRIPULACIONES){
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

                loadCuerrenInfo(idCrew);


            }else{

                // Un solo vehículo
                //=================================================================================
                 alert('un solo carro');

                $("#unidad_asignada").html('Unidad  :' +data.value.vehicule.name);


                                var  id_t = data.vehicule.ID_TRIPULACIONES;

                                //alert(data.vehicule.name);
                                fragment = create('<li  style=" width:350px;" class value="'+ data.value.vehicule.ID_TRIPULACIONES +'" onclick="cambiarVehiculo(this.value);">'+
                                                       '<a style="background-color: #fff; border:none;" class="ui-btn ui-btn-icon-right ui-icon-carat-r" href="" >'+
                                                          '<i class="icon-bg facebook-bg ion-flag"></i><span>'+data.value.vehicule.name+'</span>'+ data.value.vehicule.headquarter+
                                                           '</a>'+
                                                   '</li>');

                                document.getElementById("panel_vehiculos").appendChild(fragment);


                                idCrew = data.vehicule.ID_TRIPULACIONES;

                                if(data.value.vehicule.gpsInfo.location == 'TRUE'){
                                    lat_c = data.value.vehicule.gpsInfo.latitude;
                                    lon_c = data.value.vehicule.gpsInfo.longitude;
                                    haveLocation =1;
                                }
                                else{
                                    haveLocation =0;
                                }

                                loadCuerrenInfo(id_t);







            }




            },
            error: function(jqXHR, textStatus, errorThrown){
                alert('addWine error: ' + textStatus);
            }
    });

});


function loadCuerrenInfo(id_t){


        var fragment ='';

        $("#unidad_asignada").html('Unidad :'+c_name);
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
                                                                                    if(data.num_emergencies>1){

                                                                                        //var fragment ='';

                                                                                        alert('mas de 1');

                                                                                        var emergencias = data.emergency;
                                                                                        for(var i in emergencias)
                                                                                        {
                                                                                            if(emergencias[i].FRAPRequired =="1" ){
                                                                                                if(emergencias[i].tiene_fraps==1){

                                                                                                    fragment = create('<li width:280px;"  value="'+ emergencias[i].ID_SERVICIOS +'" onclick="mostrarServicio(this.value);">'+
                                                                                                                        '<a style="background-color: #fff; border:none;" class="ui-btn ui-btn-icon-right ui-icon-carat-r">'+
                                                                                                                            '<i class="icon-bg whatsapp-bg ion-android-done"></i><span>'+emergencias[i].timeLegend+'</span> '+ emergencias[i].reason +
                                                                                                                         '</a>'+
                                                                                                                    '</li>');
                                                                                                }else{
                                                                                                    fragment = create('<li width:280px;"  value="'+ emergencias[i].ID_SERVICIOS +'" onclick="mostrarServicio(this.value);">'+
                                                                                                                            '<a class="" href="">'+
                                                                                                                                '<i class="icon-bg google-bg ion-android-close"></i><span>'+emergencias[i].timeLegend+'</span> '+ emergencias[i].reason +
                                                                                                                             '</a>'+
                                                                                                                        '</li>');
                                                                                                }

                                                                                            }else{
                                                                                                 fragment = create('<li width:280px;"  value="'+ emergencias[i].ID_SERVICIOS +'" onclick="mostrarServicio(this.value);">'+
                                                                                                                 '<a class="" href="">'+
                                                                                                                     '<i class="icon-bg google-bg ion-android-close"></i><span>'+emergencias[i].timeLegend+'</span> '+ emergencias[i].reason +
                                                                                                                  '</a>'+
                                                                                                             '</li>');
                                                                                             }
                                                                                             document.getElementById("panel_servicios").appendChild(fragment);

                                                                                        }

                                                                                        alert('termino');

                                                                                    }else{

                                                                                    alert('solo uno')

                                                                                        if(data.emergency != null){
                                                                                            fragment = create('<li style=" width:280px;" value="'+ data.emergency.ID_SERVICIOS +'" onclick="mostrarServicio(this.value);">'+
                                                                                                                    '<a class="" href="">'+
                                                                                                                        '<i class="icon-bg google-bg ion-android-close"></i><span>'+data.emergency.timeLegend+'</span> '+ data.emergency.reason +
                                                                                                                     '</a>'+
                                                                                                                '</li>');
                                                                                            document.getElementById("panel_servicios").appendChild(fragment);
                                                                                        }

                                                                                        }//

                                                                                        alert(JSON.stringify({"ID_USUARIO":id_usuario,"ID_SESSION":id_sesion, "Estado":estado, "ID_servicio":idService}));

                                                                                        // get vehicule information
                                                                                        $.ajax({
                                                                                                type: 'POST',
                                                                                                contentType: 'application/json',
                                                                                                url: 'http://opowerdev.net/web_services/FRAP/usuario/getService',
                                                                                                dataType: "json",
                                                                                                data: JSON.stringify({"ID_USUARIO":id_usuario,"ID_SESSION":id_sesion, "Estado":estado, "ID_servicio":idService}),
                                                                                                contentType: "application/json; charset=utf-8",
                                                                                                success: function(data, textStatus, jqXHR){

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





                                                                                                    lat = data.address.latitude;
                                                                                                    lon = data.address.longitude;

                                                                                                   // alert(lat);

                                                                                                    google.load("maps", "3.8", {"callback": map, other_params: "sensor=true&language=en"});
                                                                                                   //$.unblockUI();




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
                                                /*
                                                },
                                                error: function(jqXHR, textStatus, errorThrown){
                                                    alert('addWine error: ' + textStatus);
                                                }
                                        });*/
}


function cambiarVehiculo(id_tripulaciones){

    alert(id_tripulaciones);
    $.jStorage.set("idCrew", String(id_tripulaciones),{});
    location="home_vehicules.html";
    //location.reload();
}

function mostrarServicio(id_servicio){
    $.jStorage.set("idCrew", String(idCrew),{});
    $.jStorage.set("idService", String(id_servicio),{});
    location.reload();
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
/*
    var latlng = new google.maps.LatLng(lat, lon);
    var myOptions = {
        zoom: 15,
        center: latlng,
        streetViewControl: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoomControl: true
    };
    map = new google.maps.Map(document.getElementById("map"), myOptions);

    google.maps.event.addListenerOnce(map, 'tilesloaded', function() {
        watchID = navigator.geolocation.watchPosition(gotPosition, null, {maximumAge: 5000, timeout: 60000, enableHighAccuracy: true});
    });
    */
    //var bounds = new google.maps.LatLngBounds();
/*
    var image = '../images/ambulancia.png';
    var lat_lng = new Array();

    var mapOptions = {
                   center:new google.maps.LatLng(lat, lon),
                   zoom:15
                   //mapTypeId: 'roadmap'
                }

    var map = new google.maps.Map(document.getElementById("map"),mapOptions);

    var marker = new google.maps.Marker({
       position: new google.maps.LatLng(lat, lon),
       map: map
    });

    marker = new google.maps.Marker({
           position: new google.maps.LatLng(lat_c, lon_c),
           map: map,
           icon: image
        });



     var myCity = new google.maps.Circle({
        center:new google.maps.LatLng(lat, lon),
        radius:750,

        strokeColor:"#306dc3",
        strokeOpacity:0.6,
        strokeWeight:2,

        fillColor:"#306dc3",
        fillOpacity:0.4
     });

     myCity.setMap(map);

     var myLatlng = new google.maps.LatLng(lat, lng);
     lat_lng.push(myLatlng);
     myLatlng = new google.maps.LatLng(lat_c, lng_c);
     lat_lng.push(myLatlng);


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
                 */

alert('dentro');
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

                    var image = '../images/ambulancia.png';

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

     $.mobile.loading( "hide" );

}


function frap(){
    location="frap.html";
}
