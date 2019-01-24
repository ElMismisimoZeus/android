
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




/////// Code Add By JC

function cargarPACIENTE() {

    console.log("funcion cargar " + frap);
    iframe.find('#nombre').val(frap.secciones.datos_paciente.NOMBRE);
    iframe.find('#a_paterno').val(frap.secciones.datos_paciente.APELLIDO_PATERNO);
    iframe.find('#a_materno').val(frap.secciones.datos_paciente.APELLIDO_MATERNO);
    iframe.find('#fecha_nacimiento').val(frap.secciones.datos_paciente.FECHA_NACIMIENTO);
    iframe.find('#telefono').val(frap.secciones.datos_paciente.TELEFONO);
    iframe.find('#ocupacion').val(frap.secciones.datos_paciente.OCUPACION);

    ///

    iframe.find('#cd_ep_servicioMedico_t').val(frap.secciones.paciente.iID_CTLG_SERVICIO_MEDICO);
    iframe.find('#cd_ep_motivoAtencion_t').val(frap.secciones.motivo_atencion.iID_CTLG_MOTIVO_ATENCION);

    //DATOS DE DIRECCION

    iframe.find('#calle').val(frap.secciones.direccion_paciente.CALLE);
    iframe.find('#dc_ep_estado_t').val(frap.secciones.direccion_paciente.ESTADO);
    //iframe.find('#numero').val(frap.secciones.direccion.NUMERO);
    //iframe.find('#dc_ep_municipio_t').val(frap.secciones.direccion.DELEGACION);


};


function cargarEVALUACION_PRIMARIA()
{
    iframe.find('#ep_prioridad_t').val(frap.secciones.evaluacion_primaria.iID_CTLG_PRIORIDAD);
    iframe.find('#nivel_conciencia').val(frap.secciones.evaluacion_primaria.iID_CTLG_NIVEL_CONCIENCIA);
    iframe.find('#via_aerea_t').val(frap.secciones.evaluacion_primaria.iID_CTLG_VIA_AEREA);
    iframe.find('#dc_ep_txtVentilacion').val(frap.secciones.evaluacion_primaria.iID_CTLG_VENTILACION);
    iframe.find('#dc_ep_calidadVentilacion').val(frap.secciones.evaluacion_primaria.iID_CTLG_CALIDAD_VENTILACION);
    iframe.find('#dc_ep_pulsos').val(frap.secciones.evaluacion_primaria.iID_CTLG_PULSOS);
    iframe.find('#dc_ep_calidad').val(frap.secciones.evaluacion_primaria.iID_CTLG_PULSOS_CALIDAD);
    iframe.find('#dc_ep_ritmo').val(frap.secciones.evaluacion_primaria.iID_CTLG_RITMO);
    iframe.find('#dc_ep_coloracion').val(frap.secciones.evaluacion_primaria.iID_CTLG_COLORACION);
    iframe.find('#dc_ep_temperatura').val(frap.secciones.evaluacion_primaria.iID_CTLG_TEMPERATURA);
    iframe.find('#dc_ep_condicion').val(frap.secciones.evaluacion_primaria.iID_CTLG_CONDICION);
    iframe.find('#ep_orientacion').val(frap.secciones.evaluacion_primaria.iPOSICION);
};




function cargarMEDIA_FILIACION()
{
    //DATOS DE MEDIA FILIACION

    iframe.find('#mf_cabello').val(frap.secciones.media_filiacion.iID_CTLG_MEDIA_FILIACION_CABELLO);
    iframe.find('#mf_color_cabello').val(frap.secciones.media_filiacion.iID_CTLG_MEDIA_FILIACION_CABELLO_COLOR);
    iframe.find('#mf_volumen').val(frap.secciones.media_filiacion.iID_CTLG_MEDIA_FILIACION_VOLUMEN);
    iframe.find('#mf_color_ojos').val(frap.secciones.media_filiacion.iID_CTLG_MEDIA_FILIACION_COLOR_OJOS);
    iframe.find('#pnl_mf_color_piel').val(frap.secciones.media_filiacion.iID_CTLG_MEDIA_FILIACION_COLOR_PIEL);
    iframe.find('#mf_complexion').val(frap.secciones.media_filiacion.iID_CTLG_MEDIA_FILIACION_COMPLEXION);
    iframe.find('#mf_nariz').val(frap.secciones.media_filiacion.iID_CTLG_MEDIA_FILIACION_NARIZ);
    iframe.find('#mf_tamano').val(frap.secciones.media_filiacion.iID_CTLG_MEDIA_FILIACION_TAMANIO);
    iframe.find('#mf_senias').val(frap.secciones.media_filiacion.iID_CTLG_MEDIA_FILIACION_SENIAS);
    iframe.find('#mf_sena').val(frap.secciones.media_filiacion.iID_CTLG_MEDIA_FILIACION_SENIA_LUGAR);
    iframe.find('#mf_cuerpo').val(frap.secciones.media_filiacion.iID_CTLG_MEDIA_FILIACION_PARTE_CUERPO);

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
                            $('#frameDemo').attr('src', "frap_content.html?currentId="+idPage);
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