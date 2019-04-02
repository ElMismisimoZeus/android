
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

$(function () {

    $("#loading").dialog({
        autoOpen: false,
        modal: true,
        dialogClass: "dlg-no-close",
        open: function() {
            $('.ui-widget-overlay').addClass('custom-overlay');
        }
    });

});




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
    iframe.find('#numero_exterior').val(frap.secciones.direccion_paciente.iNUMERO_EXTERIOR);
    iframe.find('#colonia').val(frap.secciones.direccion_paciente.COLONIA);
    iframe.find('#delegacion_municipio').val(frap.secciones.direccion_paciente.DELEGACION);
    iframe.find('#cp').val(frap.secciones.direccion_paciente.iCP);

    //iframe.find('#dc_ep_estado_t').val(frap.secciones.direccion_paciente.ESTADO);


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




function cargarTRATAMIENTO(){


    // MANEJO DE VIA AERTEA

    // ===========================================================================================
    var radios = iframe.find('input[name=dispositivo_apertura]');
    for (var i = 0, length = radios.length; i < length; i++) {
        if(radios[i].value == frap.secciones.manejo_via_aerea.iID_CTLG_DISPOSITIVO_APERTURA){
            iframe.find('input:radio[name=dispositivo_apertura][value='+radios[i].value+']').click();
            //iframe.find('#trat_dispositivo').val(radios[i].id);
        }

    }


    radios = iframe.find('input[name=manejo_via_aerea]');
    for (var i = 0, length = radios.length; i < length; i++) {
        if(radios[i].value == frap.secciones.manejo_via_aerea.iID_CTLG_MANEJO_VIA_AEREA){
            iframe.find('input:radio[name=manejo_via_aerea][value='+radios[i].value+']').click();
            //iframe.find('#trat_disp_ven').val(radios[i].id);
        }

    }

    radios = iframe.find('input[name=aspiracion]');
    for (var i = 0, length = radios.length; i < length; i++) {
        if(radios[i].value == frap.secciones.manejo_via_aerea.iASPIRACION){
            iframe.find('input:radio[name=aspiracion][value='+radios[i].value+']').click();
            //iframe.find('#trat_aspiracion').val(radios[i].id);
        }

    }


    //this.iID_INTUBACION = 0






    // ASISTENCIA VENTILATORIA
    radios = iframe.find('input[name=dispositivo]');
    for (var i = 0, length = radios.length; i < length; i++) {
        if(radios[i].value == frap.secciones.asistencia_ventilatoria.iID_CTLG_DISPOSITIVO){
            iframe.find('input:radio[name=dispositivo_apertura][value='+radios[i].value+']').click();
           // iframe.find('#trat_dispositivo').val(radios[i].id);
        }

    }

    iframe.find('#asistencia_frecuencia').val(frap.secciones.asistencia_ventilatoria.iFRECUENCIA);
    iframe.find('#asistencia_volumen').val(frap.secciones.asistencia_ventilatoria.iVOLUMEN);
    iframe.find('#asistencia_modalidad').val(frap.secciones.asistencia_ventilatoria.MODALIDAD_VENTILATORIA);






    // OXIGENOTERAPIA
    //this.iID_OXIGENO_TERAPIA = 0,
    iframe.find('#oxi_litros').val(frap.secciones.oxigenoterapia.iLITROS_MINUTO);

    radios = iframe.find('input[name=tipo_oxigenoterapia]');
    for (var i = 0, length = radios.length; i < length; i++) {
        if(radios[i].value == frap.secciones.oxigenoterapia.iID_OXIGENO_TERAPIA){
            iframe.find('input:radio[name=tipo_oxigenoterapia][value='+radios[i].value+']').click();
           // iframe.find('#trat_oxig').val(radios[i].id);
        }

    }






    // DESCOMPRESION PLEURAL
    iframe.find('#hemitorax_calibre').val(frap.secciones.desc_ple.iCALIBRE);

    radios = iframe.find('input[name=hemitorax]');
    for (var i = 0, length = radios.length; i < length; i++) {
        if(radios[i].value == frap.secciones.desc_ple.iID_CTLG_HEMITORAX){
            iframe.find('input:radio[name=hemitorax][value='+radios[i].value+']').click();
            //iframe.find('#trat_desc_pl').val(radios[i].id);
        }

    }






    // CONTROL DE EMORRAGIAS
    radios = iframe.find('input[name=control_hemorragia]');
    for (var i = 0, length = radios.length; i < length; i++) {
        if(radios[i].value == frap.secciones.control_hemorragias.iID_CTLG_CONTROL_HEMORAGIAS){
            iframe.find('input:radio[name=control_hemorragia][value='+radios[i].value+']').click();
            //iframe.find('#trat_control_hemo').val(radios[i].id);
        }

    }

    iframe.find('#control_hemorragia_HORA').val(frap.secciones.control_hemorragias.HORA_COLOCACION);





    // ACCESO CIRCULATOPERIO
    radios = iframe.find('input[name=acceso_via_acceso]');
    for (var i = 0, length = radios.length; i < length; i++) {
        if(radios[i].value == frap.secciones.acceso_circulatorio.iID_CTLG_VIA_ACCESO){
            iframe.find('input:radio[name=acceso_via_acceso][value='+radios[i].value+']').click();
            //iframe.find('#trat_acceso_cir').val(radios[i].id);
        }

    }


    radios = iframe.find('input[name=acceso_zona]');
    for (var i = 0, length = radios.length; i < length; i++) {
        if(radios[i].value == frap.secciones.acceso_circulatorio.iID_CTLG_ZONA_COLOCACION){
            iframe.find('input:radio[name=acceso_zona][value='+radios[i].value+']').click();
           // iframe.find('#trat_acceso_cir_zona').val(radios[i].id);
        }

    }

    radios = iframe.find('input[name=acceso_tipo]');
    for (var i = 0, length = radios.length; i < length; i++) {
        if(radios[i].value == frap.secciones.acceso_circulatorio.iID_CTLG_SOLUCION){
            iframe.find('input:radio[name=acceso_tipo][value='+radios[i].value+']').click();
           // iframe.find('#trat_intervenciones_tipo').val(radios[i].id);
        }

    }


    radios = iframe.find('input[name=acceso_bomba]');
    for (var i = 0, length = radios.length; i < length; i++) {
        if(radios[i].value == frap.secciones.acceso_circulatorio.iBOMBA_INFUSION){
            iframe.find('input:radio[name=acceso_bomba][value='+radios[i].value+']').click();
            //iframe.find('#trat_intervenciones_bomba').val(radios[i].id);
        }

    }

    iframe.find('#acceso_calibre').val(frap.secciones.acceso_circulatorio.iCALIBRE);
    iframe.find('#acceso_volumen').val(frap.secciones.acceso_circulatorio.iVOLUMEN_INFUNDIDO);
    iframe.find('#acceso_hora').val(frap.secciones.acceso_circulatorio.HORA_COLOCACION);




    // INTERVENCIONES

    radios = iframe.find('input[name=intervenciones_control]');
    for (var i = 0, length = radios.length; i < length; i++) {
        if(radios[i].value == frap.secciones.intervenciones.iCONTROL_CERVICAL){
            iframe.find('input:radio[name=intervenciones_control][value='+radios[i].value+']').click();
            //iframe.find('#trat_intervenciones_control').val(radios[i].id);
        }

    }


    radios = iframe.find('input[name=intervenciones_empaquetamiento]');
    for (var i = 0, length = radios.length; i < length; i++) {
        if(radios[i].value == frap.secciones.intervenciones.iEMPAQUETAMIENTO){
            iframe.find('input:radio[name=intervenciones_empaquetamiento][value='+radios[i].value+']').click();
           // iframe.find('#trat_intervenciones_emp').val(radios[i].id);
        }

    }


    radios = iframe.find('input[name=intervenciones_curacion]');
    for (var i = 0, length = radios.length; i < length; i++) {
        if(radios[i].value == frap.secciones.intervenciones.iCURACION_VENDAJE){
            iframe.find('input:radio[name=intervenciones_curacion][value='+radios[i].value+']').click();
            //iframe.find('#trat_intervenciones_cur').val(radios[i].id);
        }

    }


    radios = iframe.find('input[name=intervenciones_inmobilizacion]');
    for (var i = 0, length = radios.length; i < length; i++) {
        if(radios[i].value == frap.secciones.intervenciones.iINMOVILIZACION_EXTREMIDADES){
            iframe.find('input:radio[name=intervenciones_inmobilizacion][value='+radios[i].value+']').click();
            //iframe.find('#trat_intervenciones_inmo').val(radios[i].id);
        }

    }





    // TERAPIA ELECTRICA
    iframe.find('#terapia_descargas').val(frap.secciones.terapia_electrica.iDESCARGAS);
    iframe.find('#terapia_joules').val(frap.secciones.terapia_electrica.iJOULES);
    //this.iMARCAPASOS_TRANSCUTANEO = 0,
    iframe.find('#terapia_ma').val(frap.secciones.terapia_electrica.iMA);
    iframe.find('#terapia_frecuencia').val(frap.secciones.terapia_electrica.iFRECUENCIA);




    // TRATAMIENTO
    //this.ID_TRATAMIENTO = 0,
    iframe.find('#tratamiento_observaciones').val(frap.secciones.tratamiento.OBSERVACIONES);


}




function  cargarCLINICO()
{
    console.log('llega?');
    iframe.find('#diagnostico_sindromatico').val(frap.secciones.clinico.DIAGNOSTICO_SINDROMATICO);
    iframe.find('#ds_observaciones').val(frap.secciones.clinico.OBSERVACIONES);



    // ===========================================================================================
    radios = iframe.find('input[name=origen_probable]');

    for (var i = 0, length = radios.length; i < length; i++) {
        if(radios[i].value == frap.secciones.iID_CTLG_ORIGEN_PROBABLE){
            //radios[i].id
            iframe.find('#c_origen').val(radios[i].id);
            iframe.find('input:radio[name=origen_probable][value='+radios[i].value+']').click();
        }

    }
};

function cargarTRAUMA()
{
    // ===========================================================================================
    radios = iframe.find('input[name=trauna_intencionalidad]');

    for (var i = 0, length = radios.length; i < length; i++) {
        if(radios[i].value ==  frap.secciones.trauma.iINTENCIONALIDAD){
            //radios[i].id
            iframe.find('#t_intencionalidad').val(radios[i].id);
            iframe.find('input:radio[name=trauna_intencionalidad][value='+radios[i].value+']').click();
        }
    }


    // ===========================================================================================
    radios = iframe.find('input[name=trauna_ac]');

    for (var i = 0, length = radios.length; i < length; i++) {
        if(radios[i].value ==  frap.secciones.trauma.iID_CTLG_AGENTE_CAUSAL_GENERAL){
            //radios[i].id
            iframe.find('#t_agente').val(radios[i].id);
            iframe.find('input:radio[name=trauna_ac][value='+radios[i].value+']').click();
        }
    }


    // ===========================================================================================
    radios = iframe.find('input[name=trauna_ace]');

    for (var i = 0, length = radios.length; i < length; i++) {
        if(radios[i].value ==  frap.secciones.trauma.iID_CTLG_AGENTE_CAUSAL_ESPECIFICO){
            //radios[i].id
            iframe.find('#t_causal').val(radios[i].id);
            iframe.find('input:radio[name=trauna_ace][value='+radios[i].value+']').click();
        }
    }

    iframe.find('#trauma_observaciones').val(frap.secciones.trauma.OBSERVACIONES);

};

function cargarVIAL()
{
    // ===========================================================================================
    radios = iframe.find('input[name=vial_tipo]');

    for (var i = 0, length = radios.length; i < length; i++) {
        if(radios[i].value ==  frap.secciones.vial.iID_CTLG_TIPO_ACCIDENTE_VIAL){
            //radios[i].id
            iframe.find('#v_tipo').val(radios[i].id);
            iframe.find('input:radio[name=vial_tipo][value='+radios[i].value+']').click();
        }
    }


    // ===========================================================================================
    radios = iframe.find('input[name=vial_lesionado]');

    for (var i = 0, length = radios.length; i < length; i++) {
        if(radios[i].value ==  frap.secciones.vial.iID_CTLG_TIPO_LESIONADO){
            //radios[i].id
            iframe.find('#v_lesionado').val(radios[i].id);
            iframe.find('input:radio[name=vial_lesionado][value='+radios[i].value+']').click();
        }
    }


    // ===========================================================================================
    radios = iframe.find('input[name=vial_actor]');

    for (var i = 0, length = radios.length; i < length; i++) {
        if(radios[i].value ==  frap.secciones.vial.iID_CTLG_ACTOR_VIAL){
            //radios[i].id
            iframe.find('#v_actorVial').val(radios[i].id);
            iframe.find('input:radio[name=vial_actor][value='+radios[i].value+']').click();
        }
    }


    // ===========================================================================================
    radios = iframe.find('input[name=vial_tropella]');

    for (var i = 0, length = radios.length; i < length; i++) {
        if(radios[i].value ==  frap.secciones.vial.iID_CTLG_ATROPELLADO_POR){
            //radios[i].id
            iframe.find('#v_atropelladoPor').val(radios[i].id);
            iframe.find('input:radio[name=vial_tropella][value='+radios[i].value+']').click();
        }
    }




    // ===========================================================================================
    radios = iframe.find('input[name=vial_impacto]');

    for (var i = 0, length = radios.length; i < length; i++) {
        if(radios[i].value ==  frap.secciones.vial.iID_CTLG_IMPACTO){
            //radios[i].id
            iframe.find('#v_impacto').val(radios[i].id);
            iframe.find('input:radio[name=vial_impacto][value='+radios[i].value+']').click();
        }
    }

    // ===========================================================================================
    radios = iframe.find('input[name=vial_volante]');

    for (var i = 0, length = radios.length; i < length; i++) {
        if(radios[i].value ==  frap.secciones.vial.iID_CTLG_VOLANTE){
            //radios[i].id
            iframe.find('#v_volante').val(radios[i].id);
            iframe.find('input:radio[name=vial_volante][value='+radios[i].value+']').click();
        }
    }

    // ===========================================================================================
    radios = iframe.find('input[name=vial_parabrisas]');

    for (var i = 0, length = radios.length; i < length; i++) {
        if(radios[i].value ==  frap.secciones.vial.iID_CTLG_PARABRISAS){
            //radios[i].id
            iframe.find('#v_parabrisas').val(radios[i].id);
            iframe.find('input:radio[name=vial_parabrisas][value='+radios[i].value+']').click();
        }
    }


    // ===========================================================================================
    radios = iframe.find('input[name=vial_bolsas]');

    for (var i = 0, length = radios.length; i < length; i++) {
        if(radios[i].value ==  frap.secciones.vial.iID_CTLG_BOLSA_AIRE){
            //radios[i].id
            iframe.find('#v_bolsas').val(radios[i].id);
            iframe.find('input:radio[name=vial_bolsas][value='+radios[i].value+']').click();
        }
    }


    // ===========================================================================================
    radios = iframe.find('input[name=vial_cinturon]');

    for (var i = 0, length = radios.length; i < length; i++) {
        if(radios[i].value ==  frap.secciones.vial.iID_CTLG_CINTURON_SEGURIDAD){
            //radios[i].id
            iframe.find('#v_cinturon').val(radios[i].id);
            iframe.find('input:radio[name=vial_cinturon][value='+radios[i].value+']').click();
        }
    }


    // ===========================================================================================
    radios = iframe.find('input[name=vial_eyectado]');

    for (var i = 0, length = radios.length; i < length; i++) {
        if(radios[i].value ==  frap.secciones.vial.iEYECTADO){
            //radios[i].id
            iframe.find('#v_eyectados').val(radios[i].id);
            iframe.find('input:radio[name=vial_eyectado][value='+radios[i].value+']').click();
        }
    }


    // ===========================================================================================
    radios = iframe.find('input[name=vial_decesos]');

    for (var i = 0, length = radios.length; i < length; i++) {
        if(radios[i].value ==  frap.secciones.vial.iDECESOS){
            //radios[i].id
            iframe.find('#v_decesos').val(radios[i].id);
            iframe.find('input:radio[name=vial_decesos][value='+radios[i].value+']').click();
        }
    }




    // ===========================================================================================
    radios = iframe.find('input[name=vial_prensado]');

    for (var i = 0, length = radios.length; i < length; i++) {
        if(radios[i].value ==  frap.secciones.vial.iPRENSADO){
            //radios[i].id
            iframe.find('#v_prensado').val(radios[i].id);
            iframe.find('input:radio[name=vial_prensado][value='+radios[i].value+']').click();
        }
    }


    // ===========================================================================================
    radios = iframe.find('input[name=vial_casco]');

    for (var i = 0, length = radios.length; i < length; i++) {
        if(radios[i].value ==  frap.secciones.vial.iCASCO){
            //radios[i].id
            iframe.find('#v_casco').val(radios[i].id);
            iframe.find('input:radio[name=vial_casco][value='+radios[i].value+']').click();
        }
    }

    iframe.find('#vial_observaciones').val(frap.secciones.vial.OBSERVACIONES);

};


function cargarGINECOLOGICO()
{
    iframe.find('#ginecologico_gesta').val(frap.secciones.ginecologico.iGESTA);
    iframe.find('#ginecologico_para').val(frap.secciones.ginecologico.iPARA);
    iframe.find('#ginecologico_cesarea').val(frap.secciones.ginecologico.iCESARIA);
    iframe.find('#ginecologico_abortos').val(frap.secciones.ginecologico.iABORTOS);
    iframe.find('#ginecologico_semanas').val(frap.secciones.ginecologico.iSEMANAS_GESTACION);
    iframe.find('#fum').val(frap.secciones.ginecologico.FUM);

    iframe.find('#ginecologico_hora').val(frap.secciones.ginecologico.HORA_INICIO_CONTRACCIONES);
    iframe.find('#ginecologico_frecuencia').val(frap.secciones.ginecologico.iFRECUENCIA);
    iframe.find('#ginecologico_duracion').val(frap.secciones.ginecologico.iDURACION);


    iframe.find('#apgar1').val(frap.secciones.ginecologico.iAPGAR1);
    iframe.find('#apgar5').val(frap.secciones.ginecologico.iAPGAR5);
    iframe.find('#apgar10').val(frap.secciones.ginecologico.iAPGAR10);
    iframe.find('#silvermann').val(frap.secciones.ginecologico.iSILVERMAN);
    iframe.find('#ginecologico_lugarN').val(frap.secciones.ginecologico.LUGAR_NACIMIENTO);

    iframe.find('#ginecologico_observaciones').val(frap.secciones.ginecologico.OBSERVACIONES);


    // ===========================================================================================
    radios = iframe.find('input[name=placenta]');

    for (var i = 0, length = radios.length; i < length; i++) {
        if(radios[i].value == frap.secciones.ginecologico.iPLACENTA_EXPULSADA){
            //radios[i].id
            iframe.find('#g_placenta').val(radios[i].id);
            iframe.find('input:radio[name=placenta][value='+radios[i].value+']').click();
        }

    }


    // ===========================================================================================
    radios = iframe.find('input[name=maduracion_pulmonar]');

    for (var i = 0, length = radios.length; i < length; i++) {
        if(radios[i].value == frap.secciones.ginecologico.iESQUEMA_MADURACION_PULMONAR){
            //radios[i].id
            iframe.find('#g_esquema').val(radios[i].id);
            iframe.find('input:radio[name=maduracion_pulmonar][value='+radios[i].value+']').click();
        }

    }



    // ===========================================================================================
    radios = iframe.find('input[name=producto]');

    for (var i = 0, length = radios.length; i < length; i++) {
        if(radios[i].value == frap.secciones.ginecologico.iPRODUCTO_VIVO){
            //radios[i].id
            iframe.find('#g_producto').val(radios[i].id);
            iframe.find('input:radio[name=producto][value='+radios[i].value+']').click();
        }

    }




    // ===========================================================================================
    radios = iframe.find('input[name=producto_sexo]');

    for (var i = 0, length = radios.length; i < length; i++) {
        if(radios[i].value == frap.secciones.ginecologico.iSEXO){
            //radios[i].id
            iframe.find('#g_sexo').val(radios[i].id);
            iframe.find('input:radio[name=producto_sexo][value='+radios[i].value+']').click();
        }

    }


    // ===========================================================================================
    radios = iframe.find('input[name=membranas]');

    for (var i = 0, length = radios.length; i < length; i++) {
        if(radios[i].value == frap.secciones.ginecologico.iMEMBRANAS_INTEGRAS){
            iframe.find('input:radio[name=membranas][value='+radios[i].value+']').click();

        }

    }


    // ===========================================================================================
    radios = iframe.find('input[name=control_parental]');

    for (var i = 0, length = radios.length; i < length; i++) {
        if(radios[i].value == frap.secciones.ginecologico.iCONTROL_PARENTAL){
            iframe.find('input:radio[name=control_parental][value='+radios[i].value+']').click();

        }

    }


    // ===========================================================================================
    radios = iframe.find('input[name=emarazo_riesgo]');

    for (var i = 0, length = radios.length; i < length; i++) {
        if(radios[i].value == frap.secciones.ginecologico.iEMBARAZO_ALTO_RIESGO){
            iframe.find('input:radio[name=emarazo_riesgo][value='+radios[i].value+']').click();

        }

    }



};



function enviandoInformacion(){
    $("#loading").dialog('open');
}

function cierraEnviando(){
    $("#loading").dialog( 'close' );
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