var id_sesion;
var id_usuario;
var estado;





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


function cerrar() {
    $.jStorage.set("username", String(username),{});
    $.jStorage.set("id_usuario", String(id_usuario),{});
    $.jStorage.set("id_sesion", String(id_sesion),{});
    $.jStorage.set("estado", String(estado),{});

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

    $("#msgOk").dialog( 'close' );
    location="home_vehicules.html";

}

function msgBoxErrorClose() {

    $("#msgError").dialog( 'close' );

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

		$.ajax({
                type: 'POST',
                contentType: 'application/json',
                url: 'http://opowerdev.net/web_services/FRAP/usuario/login',
                dataType: "json",
					data: JSON.stringify({"Usuario":username,"Pass":pass, "Estado":edo}),
                contentType: "application/json; charset=utf-8",
                success: function(data, textStatus, jqXHR){
                    //alert(data.message);

                    id_sesion = data.ID_SESSION;

                    id_usuario = data.ID_USUARIOS;
                    //alert(id_usuario);
                    //data.profile;

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

	
	}