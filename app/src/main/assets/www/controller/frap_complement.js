
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
//   Funciones de recuperacion by @JC_Worthing
// ===============================================================================================

function cargarINSUMOS_NIVEL_BASICO()
{
    iframe.find('#sonda_aspiracion').val(frap.secciones.insumosBasicos.SONDA_ASPIRACION);
    //val(frap.secciones.insumosBasicos.SONDA_ASPIRACION);
    iframe.find('#puntas_nasales').val(frap.secciones.insumosBasicos.PUNTAS_NASALES);
    iframe.find('#mascarilla_adulto').val(frap.secciones.insumosBasicos.MASCARILLA_ADULTO);
    iframe.find('#punzocath_14').val(frap.secciones.insumosBasicos.PUNZOCATH_14);
    iframe.find('#punzocath_16').val(frap.secciones.insumosBasicos.PUNZOCATH_16);
    iframe.find('#punzocath_18').val(frap.secciones.insumosBasicos.PUNZOCATH_18);
    iframe.find('#punzocath_20').val(frap.secciones.insumosBasicos.PUNZOCATH_20);
    iframe.find('#punzocath_22').val(frap.secciones.insumosBasicos.PUNZOCATH_22);
    iframe.find('#venopack').val(frap.secciones.insumosBasicos.VENOPACK_NORMOGOTERO);
    iframe.find('#jeringa_5').val(frap.secciones.insumosBasicos.JERINGA_5_CC);
    iframe.find('#jeringa_10').val(frap.secciones.insumosBasicos.JERINGA_10_CC);
    iframe.find('#guantes').val(frap.secciones.insumosBasicos.GUANTES);
    iframe.find('#gasa_simple').val(frap.secciones.insumosBasicos.GASA_SIMPLE);
    iframe.find('#venda_elastica_5').val(frap.secciones.insumosBasicos.VENDA_ELASTICA_5_CM);
    iframe.find('#venda_elastica_10').val(frap.secciones.insumosBasicos.VENDA_ELASTICA_10_CM);
    iframe.find('#venda_elastica_30').val(frap.secciones.insumosBasicos.VENDA_ELASTICA_30_CM);
    iframe.find('#tira_reactiva').val(frap.secciones.insumosBasicos.TIRA_REACTIVA);
    iframe.find('#lanceta').val(frap.secciones.insumosBasicos.LANCETA);
    iframe.find('#nacl_9').val(frap.secciones.insumosBasicos.NaCL_9);
    iframe.find('#hartmann').val(frap.secciones.insumosBasicos.HARTMANN);
    iframe.find('#glucosa_5').val(frap.secciones.insumosBasicos.GLUCOSA_5);
    iframe.find('#glucosa_10').val(frap.secciones.insumosBasicos.GLUCOSA_10);
    iframe.find('#glucosa_50').val(frap.secciones.insumosBasicos.GLUCOSA_50);
    iframe.find('#mixta').val(frap.secciones.insumosBasicos.MIXTA);
    iframe.find('#sabana_desechable').val(frap.secciones.insumosBasicos.SABANA_DESECHABLE);
    iframe.find('#equipo_parto').val(frap.secciones.insumosBasicos.EQUIPO_PARTO);

};


function cargarINSUMOS_NIVEL_MEDIO()
{
    iframe.find('#tubo_endrotrauqeal_75').val(frap.secciones.insumosMedio.TUBO_ENDROTRAQUEAL_75);
    iframe.find('#tubo_endrotrauqeal_8').val(frap.secciones.insumosMedio.TUBO_ENDROTRAQUEAL_8),
        iframe.find('#tubo_endrotrauqeal_85').val(frap.secciones.insumosMedio.TUBO_ENDROTRAQUEAL_85);
    iframe.find('#mascarilla_laringea').val(frap.secciones.insumosMedio.MASCARILLA_LARINGEA);
    iframe.find('#mascarilla_faringea').val(frap.secciones.insumosMedio.MASCARILLA_PEDIATRICA);
    iframe.find('#canula_orofaringea').val(frap.secciones.insumosMedio.CANULA_OROFARINGEA);
    iframe.find('#venopack_microgotero').val(frap.secciones.insumosMedio.VENOPACK_MICROGOTERO);
    iframe.find('#jeringa_insulina').val(frap.secciones.insumosMedio.JERINGA_INSULINA);
    iframe.find('#clambs_umbilicales').val(frap.secciones.insumosMedio.CLAMPS_UMBILICALES);
    iframe.find('#electrodos_adulto').val(frap.secciones.insumosMedio.ELECTRODOS_ADULTO);
    iframe.find('#electrodos_pediatricos').val(frap.secciones.insumosMedio.ELECTRODOS_PEDIATRICOS);
    iframe.find('#papel_electrocardiograma').val(frap.secciones.insumosMedio.FORMATO_REGISTRO_ATENCION_PREHOSPITALARIA);


};

function cargarINSUMOS_NIVEL_AVANZADO()
{

    iframe.find('#tubo_endrotrauqeal_35').val(frap.secciones.insumosAvanzados.TUBO_ENDROTRAQUEAL_35);
    iframe.find('#tubo_endrotrauqeal_4').val(frap.secciones.insumosAvanzados.TUBO_ENDROTRAQUEAL_4);
    iframe.find('#trocar_toracico_14').val(frap.secciones.insumosAvanzados.TROCAR_TORACICO_14);
    iframe.find('#trocar_toracico_16').val(frap.secciones.insumosAvanzados.TROCAR_TORACICO_16);
    iframe.find('#trocar_toracico_18').val(frap.secciones.insumosAvanzados.TROCAR_TORACICO_18);
    iframe.find('#sonda_nasogastrica').val(frap.secciones.insumosAvanzados.SONDA_NASOGASTRICA);
    iframe.find('#parches_marcapasos').val(frap.secciones.insumosAvanzados.PARCHES_MARCAPASOS);
    iframe.find('#insumos_otros').val(frap.secciones.insumosAvanzados.OTRO);
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