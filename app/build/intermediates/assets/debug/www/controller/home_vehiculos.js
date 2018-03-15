
var id_sesion;
var id_usuario;
var estado;
var idCurrentVehicule;

var lat='';
var lon='';

var lat_c='';
var lon_c='';

$(document).ready(function () {

    id_sesion  = getURLParameter('id_sesion');
    id_usuario  = getURLParameter('id_usuario');
    estado  = getURLParameter('estado');
    idCurrentVehicule  = getURLParameter('idCurrentVehicule');

    //$.blockUI({ message: '<img src="../img/loader.gif" width="180" /> ' });
    // Invoque getAll to get the start infotmation

    $.ajax({
            type: 'POST',
            contentType: 'application/json',
            url: 'http://opowerdev.net/web_services/FRAP/usuario/getAll',
            dataType: "json",
            data: JSON.stringify({"ID_USUARIO":id_usuario,"ID_SESSION":id_sesion, "Estado":estado}),
            contentType: "application/json; charset=utf-8",
            success: function(data, textStatus, jqXHR){

            if(data.num_vehicules>1){

                location="home_03.html?id_sesion="+id_sesion+"&id_usuario="+id_usuario+"&estado="+estado;
                // El usuario es coordinador; ergo no esta asignado a una tripulacion
                // ergo se cargan todos los vehícolos al panel vehículos y el mapa muestra las unidades
                // data.vehicule[0].ID_TRIPULACIONES

                // invoque to getServices to populate right panel "Servicios"

/*
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

                                                var fragment ='';

                                                var emergencias = data.emergency;
                                                for(var i in emergencias)
                                                {
                                                    //emergencias[i].tiene_fraps;
                                                    //emergencias[i].FRAPRequired;
                                                    if(emergencias[i].FRAPRequired =="1" ){
                                                        if(emergencias[i].tiene_fraps==1){
                                                            fragment = create('<li class="" type="none">'+
                                                                                '<a class="" href="home_02.html">'+
                                                                                    '<i class="icon-bg whatsapp-bg ion-android-done"></i><span>'+emergencias[i].timeLegend+'</span> '+ emergencias[i].reason +
                                                                                 '</a>'+
                                                                            '</li>');
                                                        }else{
                                                            fragment = create('<li class="" type="none">'+
                                                                                    '<a class="" href="home_02.html">'+
                                                                                        '<i class="icon-bg google-bg ion-android-close"></i><span>'+emergencias[i].timeLegend+'</span> '+ emergencias[i].reason +
                                                                                     '</a>'+
                                                                                '</li>');
                                                        }
                                                    }else{
                                                        fragment = create('<li class="" type="none">'+
                                                                        '<a class="" href="home_02.html">'+
                                                                            '<i class="icon-bg google-bg ion-android-close"></i><span>'+emergencias[i].timeLegend+'</span> '+ emergencias[i].reason +
                                                                         '</a>'+
                                                                    '</li>');
                                                    }





                                                     document.getElementById("panel_servicios").appendChild(fragment);

                                                     id_s = emergencias[i].ID_SERVICIOS;
                                                }

                                            }else{
                                                id_s = data.emergency.ID_SERVICIOS;
                                            }

                                            $.unblockUI();

                                        },
                                        error: function(jqXHR, textStatus, errorThrown){
                                            $.unblockUI();
                                            alert('addWine error: ' + textStatus);
                                        }
                                });

*/







            }else{
                // El usuario esta asignado a una tripulación , entonces se carga el current service
                // por falta del current se carga el get service con la tripulacion del usuario
                var  id_t = data.vehicule.ID_TRIPULACIONES;


                // get the vehicle location
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

                            //alert(lat_c);

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

                                                                var fragment ='';

                                                                var emergencias = data.emergency;
                                                                for(var i in emergencias)
                                                                {
                                                                    //emergencias[i].tiene_fraps;
                                                                    //emergencias[i].FRAPRequired;
                                                                    if(emergencias[i].FRAPRequired =="1" ){
                                                                        if(emergencias[i].tiene_fraps==1){
                                                                            fragment = create('<li class="" type="none">'+
                                                                                                '<a class="" href="home_02.html">'+
                                                                                                    '<i class="icon-bg whatsapp-bg ion-android-done"></i><span>'+emergencias[i].timeLegend+'</span> '+ emergencias[i].reason +
                                                                                                 '</a>'+
                                                                                            '</li>');
                                                                        }else{
                                                                            fragment = create('<li class="" type="none">'+
                                                                                                    '<a class="" href="home_02.html">'+
                                                                                                        '<i class="icon-bg google-bg ion-android-close"></i><span>'+emergencias[i].timeLegend+'</span> '+ emergencias[i].reason +
                                                                                                     '</a>'+
                                                                                                '</li>');
                                                                        }
                                                                    }else{
                                                                        fragment = create('<li class="" type="none">'+
                                                                                        '<a class="" href="home_02.html">'+
                                                                                            '<i class="icon-bg google-bg ion-android-close"></i><span>'+emergencias[i].timeLegend+'</span> '+ emergencias[i].reason +
                                                                                         '</a>'+
                                                                                    '</li>');
                                                                    }





                                                                     document.getElementById("panel_servicios").appendChild(fragment);

                                                                     id_s = emergencias[i].ID_SERVICIOS;
                                                                }

                                                            }else{
                                                                id_s = data.emergency.ID_SERVICIOS;
                                                            }


                                                            // Get Active service
                                                            $.ajax({
                                                                    type: 'POST',
                                                                    contentType: 'application/json',
                                                                    url: 'http://opowerdev.net/web_services/FRAP/usuario/getCurrentService',
                                                                    dataType: "json",
                                                                    data: JSON.stringify({"ID_USUARIO":id_usuario,"ID_SESSION":id_sesion, "Estado":estado, "ID_tripulacion":id_t}),
                                                                    contentType: "application/json; charset=utf-8",
                                                                    success: function(data, textStatus, jqXHR){

                                                                        //var id_active_service = data.ID_SERVICIOS;

                                                                        var id_active_service = id_s;



                                                                        //alert(id_active_service);

                                                                        // invoque to getService to poupulate the home page
                                                                        // with the active service infotmation
                                                                        $.ajax({
                                                                                type: 'POST',
                                                                                contentType: 'application/json',
                                                                                url: 'http://opowerdev.net/web_services/FRAP/usuario/getService',
                                                                                dataType: "json",
                                                                                data: JSON.stringify({"ID_USUARIO":id_usuario,"ID_SESSION":id_sesion, "Estado":estado, "ID_servicio":id_active_service}),
                                                                                contentType: "application/json; charset=utf-8",
                                                                                success: function(data, textStatus, jqXHR){
                                                                                    //alert(data.reason);

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


                                                                                    lat = data.address.latitude;
                                                                                    lon = data.address.longitude;

                                                                                    //alert(lat);

                                                                                    google.load("maps", "3.8", {"callback": map, other_params: "sensor=true&language=en"});

                                                                                    //$.unblockUI();




                                                                                },
                                                                                error: function(jqXHR, textStatus, errorThrown){
                                                                                    alert('addWine error: ' + textStatus);
                                                                                }
                                                                        });





                                                                    },
                                                                    error: function(jqXHR, textStatus, errorThrown){
                                                                        alert('addWine error: ' + textStatus);
                                                                    }
                                                            });


                                                        },
                                                        error: function(jqXHR, textStatus, errorThrown){
                                                            alert('addWine error: ' + textStatus);
                                                        }
                                                });

                        },
                        error: function(jqXHR, textStatus, errorThrown){
                            alert('addWine error: ' + textStatus);
                        }
                });







            }




            },
            error: function(jqXHR, textStatus, errorThrown){
                alert('addWine error: ' + textStatus);
            }
    });

});


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
           map: map
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
    //map.fitBounds(bounds);

    $.unblockUI();

}

function gotPosition(position) {
    //map.setCenter(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
    //var point = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);


    map.setCenter(new google.maps.LatLng(lat, lon));
    var point = new google.maps.LatLng(lat, lon);


    if (!marker) {
        //create marker
        marker = new google.maps.Marker({
            position: point,
            map: map
        });
    } else {
        //move marker to new position
        marker.setPosition(point);
    }
}