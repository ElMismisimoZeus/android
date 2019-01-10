var id_sesion;
var id_usuario;
var estado;
var token;

var verApp ='1.1';




  $(function () {
      //alert(document.documentElement.clientHeight);
      $("#contenidoOp").height(0.94*document.documentElement.clientHeight);

	  $("#dialog1").dialog({
		autoOpen: false
	  });

	  $("#dialog2").dialog({
		autoOpen: false
	  }).prev(".ui-dialog-titlebar").css("background","red");

});



$(function () {

    $("#msgOk").dialog({
        autoOpen: false,
        modal: true,
        dialogClass: "dlg-no-close",
        open: function() {
            $('.ui-widget-overlay').addClass('custom-overlay');
        }
    });

});

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


$(function () {

    $("#msgErrorVersion").dialog({
        autoOpen: false,
        modal: true,
        dialogClass: "dlg-no-close",
        open: function() {
            $('.ui-widget-overlay').addClass('custom-overlay');
        }
    });

});




function cerrar() {
    $.jStorage.set("username", String(username),{});
    $.jStorage.set("id_usuario", String(id_usuario),{});
    $.jStorage.set("id_sesion", String(id_sesion),{});
    $.jStorage.set("estado", String(estado),{});
    $.jStorage.set("token", String(token),{});

    $("#dialog1").dialog( 'close' );
    location="home_vehicules.html";

}

function cerrar2() {

    $("#dialog2").dialog( 'close' );

}

function msgBoxClose() {
    $.jStorage.set("username", String(username),{});
    $.jStorage.set("id_usuario", String(id_usuario),{});
    $.jStorage.set("id_sesion", String(id_sesion),{});
    $.jStorage.set("estado", String(estado),{});
    $.jStorage.set("token", String(token),{});

    $("#msgOk").dialog( 'close' );
    location="home_vehicules.html";

}

function msgBoxErrorClose() {

    $("#msgError").dialog( 'close' );

}


function msgBoxErrorVersionClose() {

    $("#msgErrorVersion").dialog( 'close' );
    window.location.href="market://search?q=pub:OPower+Dev";
    navigator.app.exitApp();
}














var usuario='';
/*
$(document).ready(function () {
        "use strict";

        usuario = $.jStorage.get("Username");

        if(usuario != null){
            $("#Username").val(usuario);
        }


});
*/


function login(){
		username=document.getElementById("Username").value;
		pass=document.getElementById("password").value;

		edo=$('#dc_ep_estado_t').val();

		estado = edo;
		//alert(JSON.stringify({"Usuario":username,"Pass":pass, "Estado":edo}));



    // Llamada al servidor dispatcher
    $.ajax({
        type: 'POST',
        contentType: 'application/json',
        url:'http://opowerdev.net/web_services/Despachador/usuario/getURL',
        //url: 'http://opowerdev.net/web_services/FRAP/usuario/login',
        dataType: "json",
        data: JSON.stringify({"Estado":edo}),
        contentType: "application/json; charset=utf-8",
        success: function(data, textStatus, jqXHR){
            /*
            data.estado
            data.token
            data.url
            data.version
*/


            console.log(data.estado);
            console.log(data.token);
            console.log(data.url);
            console.log(data.version);

            token = data.token;
            
            if(data.estado=='true'){
                if (verApp == data.version){
                    $.mobile.loading( "hide" );

                    // Hacer Login

                           $.ajax({
                               type: 'POST',
                               contentType: 'application/json',
                               url:data.url+'/login',
                               //url:'http://opowerdev.net/web_services/FRAP/usuario/login',
                               dataType: "json",
                               data: JSON.stringify({"Usuario":username,"Pass":pass, "Estado":edo}),
                               contentType: "application/json; charset=utf-8",
                               success: function(data, textStatus, jqXHR){
                                   //alert(data.message);

                                   id_sesion = data.ID_SESSION;
                                   id_usuario = data.ID_USUARIOS;


                                   if(data.status =="TRUE"){
                                       //$("#dialog1 p").html(data.message);
                                       $("#msgOkContent p").html(data.message);

                                       $("#msgOk").dialog('open');
                                   }
                                   else{


                                       //$("#dialog2 p").html(data.cuerpo);
                                       //$("#dialog2").dialog('open');
                                       $("#msgErrorText").html(data.cuerpo);
                                       $("#msgError").dialog('open');
                                   }


                               },
                               error: function(jqXHR, textStatus, errorThrown){
                                   alert('Error LGN01: Intente ingresar nuevamente');
                               }
                           });



                        }
                        else{
                            $("#msgErrorVersionText").html('Error VSN01 : Necesita actualizar la versión !');
                            $("#msgErrorVersion").dialog('open');
                        }

            }else{
                // El estado no ha sidfo implem,entado-configurado
                $("#msgErrorText").html('Error IMP01 : Falta la configuración para el estado seleccionado !');
                $("#msgError").dialog('open');
            }



            /*
            $.ajax({
                type: 'POST',
                contentType: 'application/json',
                url:data.url+'/login',
                //url:'http://opowerdev.net/web_services/FRAP/usuario/login',
                dataType: "json",
                data: JSON.stringify({"Usuario":username,"Pass":pass, "Estado":edo}),
                contentType: "application/json; charset=utf-8",
                success: function(data, textStatus, jqXHR){
                    //alert(data.message);

                    id_sesion = data.ID_SESSION;
                    id_usuario = data.ID_USUARIOS;

                    if(data.status =="TRUE"){
                        //$("#dialog1 p").html(data.message);
                        $("#msgOkContent p").html(data.message);

                        $("#msgOk").dialog('open');
                    }
                    else{


                        //$("#dialog2 p").html(data.cuerpo);
                        //$("#dialog2").dialog('open');
                        $("#msgErrorText p").html(data.cuerpo);
                        $("#msgError").dialog('open');
                    }


                },
                error: function(jqXHR, textStatus, errorThrown){
                    alert('Error LGN01: Intente ingresar nuevamente');
                }
            });

*/




        },
        error: function(jqXHR, textStatus, errorThrown){
            alert('Error LGN01: Intente ingresar nuevamente');
        }
    });



	
	}