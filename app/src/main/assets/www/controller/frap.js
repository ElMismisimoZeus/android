
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

    /*
    console.log(iframe.find('input[name=estado]:').size());
    console.log('antes');
   var radioValues;
    $(iframe.find('input[name=motivo_atencion]')).each(function() {

        if(){

        }
        console.log($(this).val());
        radioValues += $(this).attr('name')+' = '+$(this).val()+'\n';
        console.log(radioValues);
    });

    console.log('despues');
*/

    var radios = iframe.find('input[name=motivo_atencion]');

    for (var i = 0, length = radios.length; i < length; i++) {
        if(radios[i].value == frap.secciones.motivo_atencion.iID_CTLG_MOTIVO_ATENCION){
            //radios[i].id
            iframe.find('#cd_ep_motivoAtencion_t').val(radios[i].id);
        }

    }


    radios = iframe.find('input[name=servicio_medico]');

    for (var i = 0, length = radios.length; i < length; i++) {
        if(radios[i].value == frap.secciones.paciente.iID_CTLG_SERVICIO_MEDICO){
            //radios[i].id
            iframe.find('#cd_ep_servicioMedico_t').val(radios[i].id);
        }

    }






    //DATOS DE DIRECCION

    iframe.find('#calle').val(frap.secciones.direccion_paciente.CALLE);
    iframe.find('#dc_ep_estado_t').val(frap.secciones.direccion_paciente.ESTADO);
    //iframe.find('#numero').val(frap.secciones.direccion.NUMERO);
    //iframe.find('#dc_ep_municipio_t').val(frap.secciones.direccion.DELEGACION);


};


function cargarEVALUACION_PRIMARIA()
{
    console.log(frap);

    var radios = iframe.find('input[name=ep_prioridad]');

    for (var i = 0, length = radios.length; i < length; i++) {
        if(radios[i].value == frap.secciones.evaluacion_primaria.iID_CTLG_PRIORIDAD){
            //radios[i].id
            iframe.find('#ep_prioridad_t').val(radios[i].id);
            iframe.find('input:radio[name=ep_prioridad][value='+radios[i].value+']').click();
        }

    }






    // ===========================================================================================
    radios = iframe.find('input[name=nivel_conciencia]');

    for (var i = 0, length = radios.length; i < length; i++) {
        if(radios[i].value == frap.secciones.evaluacion_primaria.iID_CTLG_NIVEL_CONCIENCIA){
            //radios[i].id
            iframe.find('#nivel_conciencia').val(radios[i].id);
            iframe.find('input:radio[name=nivel_conciencia][value='+radios[i].value+']').click();
        }

    }




    // ===========================================================================================
    radios = iframe.find('input[name=via_aerea]');

    for (var i = 0, length = radios.length; i < length; i++) {
        if(radios[i].value == frap.secciones.evaluacion_primaria.iID_CTLG_VIA_AEREA){
            //radios[i].id
            iframe.find('#via_aerea_t').val(radios[i].id);
            iframe.find('input:radio[name=via_aerea][value='+radios[i].value+']').click();
        }

    }



    // ===========================================================================================
    radios = iframe.find('input[name=ventilacion]');

    for (var i = 0, length = radios.length; i < length; i++) {
        if(radios[i].value == frap.secciones.evaluacion_primaria.iID_CTLG_VENTILACION){
            //radios[i].id
            iframe.find('#dc_ep_txtVentilacion').val(radios[i].id);
            iframe.find('input:radio[name=ventilacion][value='+radios[i].value+']').click();
        }

    }


    // ===========================================================================================
    radios = iframe.find('input[name=calidad_ventilacion]');

    for (var i = 0, length = radios.length; i < length; i++) {
        if(radios[i].value == frap.secciones.evaluacion_primaria.iID_CTLG_CALIDAD_VENTILACION){
            //radios[i].id
            iframe.find('#dc_ep_calidadVentilacion').val(radios[i].id);
            iframe.find('input:radio[name=calidad_ventilacion][value='+radios[i].value+']').click();
        }

    }



    // ===========================================================================================
    radios = iframe.find('input[name=pulsos]');

    for (var i = 0, length = radios.length; i < length; i++) {
        if(radios[i].value == frap.secciones.evaluacion_primaria.iID_CTLG_PULSOS){
            //radios[i].id
            iframe.find('#dc_ep_pulsos').val(radios[i].id);
            iframe.find('input:radio[name=pulsos][value='+radios[i].value+']').click();
        }

    }


    // ===========================================================================================
    radios = iframe.find('input[name=ep_calidad]');

    for (var i = 0, length = radios.length; i < length; i++) {
        if(radios[i].value == frap.secciones.evaluacion_primaria.iID_CTLG_PULSOS_CALIDAD){
            //radios[i].id
            iframe.find('#dc_ep_calidad').val(radios[i].id);
            iframe.find('input:radio[name=ep_calidad][value='+radios[i].value+']').click();
        }

    }




    // ===========================================================================================
    radios = iframe.find('input[name=ep_ritmo]');

    for (var i = 0, length = radios.length; i < length; i++) {
        if(radios[i].value == frap.secciones.evaluacion_primaria.iID_CTLG_RITMO){
            //radios[i].id
            iframe.find('#dc_ep_ritmo').val(radios[i].id);
            iframe.find('input:radio[name=ep_ritmo][value='+radios[i].value+']').click();
        }

    }


    // ===========================================================================================
    radios = iframe.find('input[name=ep_coloracion]');

    for (var i = 0, length = radios.length; i < length; i++) {
        if(radios[i].value == frap.secciones.evaluacion_primaria.iID_CTLG_COLORACION){
            //radios[i].id
            iframe.find('#dc_ep_coloracion').val(radios[i].id);
            iframe.find('input:radio[name=ep_coloracion][value='+radios[i].value+']').click();
        }

    }




    // ===========================================================================================
    radios = iframe.find('input[name=ep_temperatura]');

    for (var i = 0, length = radios.length; i < length; i++) {
        if(radios[i].value == frap.secciones.evaluacion_primaria.iID_CTLG_TEMPERATURA){
            //radios[i].id
            iframe.find('#dc_ep_temperatura').val(radios[i].id);
            iframe.find('input:radio[name=ep_temperatura][value='+radios[i].value+']').click();
        }

    }


    // ===========================================================================================
    radios = iframe.find('input[name=ep_condicion]');

    for (var i = 0, length = radios.length; i < length; i++) {
        if(radios[i].value == frap.secciones.evaluacion_primaria.iID_CTLG_CONDICION){
            //radios[i].id
            iframe.find('#dc_ep_condicion').val(radios[i].id);
            iframe.find('input:radio[name=ep_condicion][value='+radios[i].value+']').click();
        }

    }


    // ===========================================================================================
    radios = iframe.find('input[name=ep_pocision]');

    for (var i = 0, length = radios.length; i < length; i++) {
        if(radios[i].value == frap.secciones.evaluacion_primaria.iPOSICION){
            //radios[i].id
            iframe.find('#ep_orientacion').val(radios[i].id);
            iframe.find('input:radio[name=ep_pocision][value='+radios[i].value+']').click();
        }

    }





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

function cargarEVALUACION_SECUNDARIA(){

    // SIMBOLOGIA DOLOR

    console.log('dffff');

    iframe.find('#sd_localizacion').val(frap.secciones.simbologia_dolor.LOCALIZACION);
    iframe.find('#sd_irradiacion').val(frap.secciones.simbologia_dolor.IRRADIACION);
    iframe.find('#sd_caracteristicas').val(frap.secciones.simbologia_dolor.CARACTERISTICAS);
    iframe.find('#sd_alivio').val(frap.secciones.simbologia_dolor.ALIVIO);
    iframe.find('#sd_inicio').val(frap.secciones.simbologia_dolor.HORA_INICIO);
    iframe.find('#sd_intensidad').val(frap.secciones.simbologia_dolor.iINTENSIDAD);



    // SAMBPLER

    iframe.find('#sampler_sintomas').val(frap.secciones.sampler.SINTOMAS);
    iframe.find('#sampler_alergias').val(frap.secciones.sampler.ALERGIAS);
    iframe.find('#sampler_medicamentos').val(frap.secciones.sampler.MEDICAMENTOS);
    iframe.find('#sampler_padecimientos').val(frap.secciones.sampler.PADECIMIENTOS);
    iframe.find('#sampler_ultima_comida').val(frap.secciones.sampler.ULTIMA_COMIDA);
    iframe.find('#sampler_eventos_relacionados').val(frap.secciones.sampler.EVENTOS_RELACIONADOS);


    // REST



    iframe.find('#diagnostico_electrografico').val(frap.secciones.evaluacion_secundaria.DIAGNOSTICO_ELECTROGRAFICO);

    // -------> No son necesarias las validaciones?

    // ===========================================================================================
    var radios = iframe.find('input[name=es_derivaciones]');

    for (var i = 0, length = radios.length; i < length; i++) {
        if(radios[i].value == frap.secciones.evaluacion_secundaria.iDERIVACIONES){
            iframe.find('input:radio[name=es_derivaciones][value='+radios[i].value+']').click();
        }

    }



    // ===========================================================================================
    radios = iframe.find('input[name=glasgow_motora]');

    for (var i = 0, length = radios.length; i < length; i++) {
        if(radios[i].value == frap.secciones.evaluacion_secundaria.iID_CTLG_GLASGOW_MOTRIZ){
            //radios[i].id
            iframe.find('#dc_es_txtGM').val(radios[i].id);
            iframe.find('input:radio[name=glasgow_motora][value='+radios[i].value+']').click();
        }

    }


    // ===========================================================================================
    radios = iframe.find('input[name=glasgow_verbal]');

    for (var i = 0, length = radios.length; i < length; i++) {
        if(radios[i].value == frap.secciones.evaluacion_secundaria.iID_CTLG_GLASGOW_VERBAL){
            //radios[i].id
            iframe.find('#dc_es_txtGV').val(radios[i].id);
            iframe.find('input:radio[name=glasgow_verbal][value='+radios[i].value+']').click();

        }

    }



    // ===========================================================================================
    radios = iframe.find('input[name=ocular]');

    for (var i = 0, length = radios.length; i < length; i++) {
        if(radios[i].value == frap.secciones.evaluacion_secundaria.iID_CTLG_GLASGOW_VISUAL){
            //radios[i].id
            iframe.find('#dc_es_txtGO').val(radios[i].id);
            iframe.find('input:radio[name=ocular][value='+radios[i].value+']').click();

        }

    }



    //el rescate del tipo no es claro


    // console.log(((iframe.find('input[name = glasgow_motora]:checked')).val()) + ((iframe.find('input[name = glasgow_verbal:checked')).val()) + ((iframe.find('input[name = ocular]:checked')).val()))

    // ===========================================================================================
    radios = iframe.find('input[name=es_signos_neurologicos]');

    for (var i = 0, length = radios.length; i < length; i++) {
        if(radios[i].value == frap.secciones.evaluacion_secundaria.iID_CTLG_SIGNOS_NEUROLOGICOS){
            //radios[i].id
            iframe.find('#dc_es_txtSignosN').val(radios[i].id);
            iframe.find('input:radio[name=es_signos_neurologicos][value='+radios[i].value+']').click();

        }

    }


    // ===========================================================================================
    radios = iframe.find('input[name=pupilas_zquierda]');

    for (var i = 0, length = radios.length; i < length; i++) {
        if(radios[i].value == frap.secciones.evaluacion_secundaria.iPUPILAS_IZQUIERDA){
            iframe.find('input:radio[name=pupilas_zquierda][value='+radios[i].value+']').click();

        }

    }


    // ===========================================================================================
    radios = iframe.find('input[name=pupilas_derecha]');

    for (var i = 0, length = radios.length; i < length; i++) {
        if(radios[i].value == frap.secciones.evaluacion_secundaria.iPUPILAS_DERECHA){
            iframe.find('input:radio[name=pupilas_derecha][value='+radios[i].value+']').click();
        }

    }



    // ===========================================================================================
    radios = iframe.find('input[name=es_ritmo]');

    for (var i = 0, length = radios.length; i < length; i++) {
        if(radios[i].value == frap.secciones.evaluacion_secundaria.iRITMO){
            iframe.find('input:radio[name=es_ritmo][value='+radios[i].value+']').click();

        }

    }


    // ===========================================================================================
    radios = iframe.find('input[name=peristalsis]');

    for (var i = 0, length = radios.length; i < length; i++) {
        if(radios[i].value == frap.secciones.evaluacion_secundaria.iPERISTALSIS){
            iframe.find('input:radio[name=peristalsis][value='+radios[i].value+']').click();
        }

    }



}








// ===============================================================================================
// Código del AUTÓMATA  que controla la navegación cuántica de las secciones del FRAP
// ===============================================================================================

function deltaZ( handle, idPage, idMenu, state ){

    console.log('para m'+ idPage);
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