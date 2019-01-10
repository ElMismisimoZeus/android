/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/*
function checkSession() {

    //alert('sesion');
    var dataString="task="+"checkSession"+"&user="+"email"+"&session="+"pass"+"&state="+"llave"+"&ip="+"estado"+"&mac="+"help"+"&version="+"help";

    $.ajax({
        type: 'GET',
        data: dataString,
        dataType: "xml",
        url: 'http://scews.net/ws.php',

        success: function(data){

            var status = $(data).find('status').text();
            var message = $(data).find('message').text();
            if(status=='TRUE'){
                //alert(message);
            }
            else{
                //$.unblockUI();
                $.mobile.loading( "hide" );
                window.location.replace('view/index-login.html');
                //window.location.replace('view/login.html');

            }
        },
        error: function(data){
            //console.log(data);
            //alert('Ocurrio un error durante la comunicacion');

        }
    });

    return false;
}
*/

var versionA = "5.1";

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

    $("#msgOff").dialog({
        autoOpen: false,
        modal: true,
        dialogClass: "dlg-no-close",
        open: function() {
            $('.ui-widget-overlay').addClass('custom-overlay');
        }
    });

});


function msgBoxClose() {
    $("#msgOk").dialog( 'close' );
    location="home_vehicules.html";

}

function msgBoxErrorClose() {

    $("#msgError").dialog( 'close' );
    window.location.href="market://search?q=pub:OPower+Dev";
    navigator.app.exitApp();
}

function msgOffClose() {

    // Vanevagr al modo off Line, ie, el formulario + pantalla de cabecera
    $("#msgOff").dialog( 'close' );
    //window.location.href="market://search?q=pub:OPower+Dev";

}



function checkSession() {
    $.ajax({
        type: 'POST',
        contentType: 'application/json',
        url:'http://opowerdev.net/web_services/Despachador/usuario/testConnection',
        //url: 'http://opowerdev.net/web_services/FRAP/usuario/getVersion',
        dataType: "json",
        data: JSON.stringify({"ID_USUARIO": 3}),
        contentType: "application/json; charset=utf-8",
        success: function (data, textStatus, jqXHR) {
            //console.log(data);
             window.location.replace('view/index-login.html');

            /*
            Cambiar la logica del versionamiento al  login
             */
            /*
            console.log(data[0].VERSION);
            if (versionA == data[0].VERSION){
                $.mobile.loading( "hide" );
                window.location.replace('view/index-login.html');
            }
            else{
                $("#msgErrorText").html('Error 01 : Necesita actualizar la versión !');
                $("#msgError").dialog('open');
            }
            */


        },
        error: function (jqXHR, textStatus, errorThrown) {
            // iniciar el modo offLine

            $("#msgOff").dialog('open');

            //alert('addWine error: ' + textStatus);
        }
    });
}






