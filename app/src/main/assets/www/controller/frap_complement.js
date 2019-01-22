
// se crean los cuadros de dialogo
// ========================================

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

    $("#msgOk").dialog({
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

};













// ===============================================================================================
// Código del AUTÓMATA  que controla la navegación cuántica de las secciones del FRAP
// ===============================================================================================

function deltaZ( handle, idPage, idMenu, state ){

    switch( state + '-' + handle ) {

        case 'q1-click':
            $("#"+idMenu).attr('data-state','q2');
            var i = 1;
            menuArray.forEach(function(item, index) {
                // verificar si el actual es iagual al que se le hizo click, en ese caso no "movermo"
                if(item != idMenu){
                    if (i == (menuArray.length-1 )  ){
                        $("#"+item).slideUp(900, function() {
                            var iframe = $("#frameDemo").contents();
                            $('#frameDemo').attr('src', "frap_complement_content.html?currentId="+idPage);

                            $('#content-menu').slideDown();
                        });

                    }else{
                        $("#"+item).slideUp(900);
                    }

                    i++;
                }
            });
            break;


        case 'q2-click':
            $('#frameDemo').attr('src', "");
            $("#"+idMenu).attr('data-state','q1');

            $("#content-menu").slideUp("slow", function() {
                menuArray.forEach(function(item, index) {
                    if (item != idMenu) {
                        $( "#"+item ).slideDown("slow");
                    }
                });
            });
            break;


        case 'q2-slide':
            var nextPage = hashNavigation[idPage];
            var nextMenu = hashMenu[idMenu];
            var iframe = $('#frameDemo').contents();

            $("#"+idMenu).attr('data-state','q1');
            $("#"+nextMenu).attr('data-state','q2');
            var pageActual = iframe.find("#"+idPage);
            $("#"+nextMenu).css('display','block');
            $("#"+idMenu ).toggle( "slide", function() {
                //$("#"+idMenu).css('display','block');

            });

            break;
    }

}