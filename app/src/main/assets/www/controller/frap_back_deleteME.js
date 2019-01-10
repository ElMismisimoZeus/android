
function guardarFRAP(){

    /*
    * Validar el FRAP para obtener el sello
    *****************************************************************************************/

    //alert ('Comienza el envio');
    var tipo = $('input[name=motivo_atencion]:checked').val();

    //  alert(tipo);

    var fs ={};
    fs['FRAP']=[];

    fs['DIRECCION']=[];
    fs['PACIENTE']=[];
    /*
        fs['EVALUACION_PRIMARIA']=[];
        fs['SEMIOLOGIA_DOLOR']=[];
        fs['SAMPLER']=[];
        fs['EVALUACION_SECUNDARIA']=[];
        fs['PARO_CARDIORESPIRATORIO']=[];

        fs['EMERGENCIA_RESULTADO']=[];
        fs['FRAP_OTROS']=[];
        fs['FRAP_LEGAL']=[];
        fs['CONSENTIMIENTO']=[];



        fs['MANEJO_VIA_AEREA']=[];
        fs['ASISTENCIA_VENTILATORIA']=[];
        fs['OXIGENO_TERAPIA']=[];
        fs['DESCOMPRESION_PLEURAL']=[];
        fs['CONTROL_HEMORRAGIAS']=[];
        fs['ACCESO_CIRCULATORIO']=[];
        fs['INTERVENCIONES']=[];
        fs['TERAPIA_ELECTRICA']=[];

        fs['TRATAMIENTO']=[];


        switch(tipo){
            case '1':
                fs['TRAUMA']=[];
                break;

            case '2':
                fs['CLINICO']=[];
                break;

            case '3':
                fs['GINECOLOGICO']=[];
                break;

            case '4':
                fs['VIAL']=[];
                break;

        }



        fs['REGISTRO_SIGNOS_VITALES']=[];
        fs['MEDICAMENTOS']=[];
        fs['HALLAZGOS_FISICOS']=[];
        fs['REL_SAMPLER_CTLG_FACTOR_RIESGO']=[];

        fs['NEGATIVA_ATENCION']=[];

        fs['AUDITORIA']=[];

        fs['INSUMOS_NIVEL_BASICO']=[];
        fs['INSUMOS_NIVEL_INTERMEDIO']=[];
        fs['INSUMOS_NIVEL_AVANZADO']=[];
    */


    /*******************************************************************************************
     *
     *   EXTRAE LA INFORMACIÓN DEL FORMULARIO
     *
     *******************************************************************************************/
    var paciente = new PACIENTE();
    var direccion = new DIRECCION();
    /*
        var evaluacion_primaria = new EVALUACION_PRIMARIA();

        var semiologia_dolor = new SEMIOLOGIA_DOLOR();
        var sampler = new SAMPLER();
        var evaluacion_secundaria = new EVALUACION_SECUNDARIA();

        var paro_cadiorespiratorio = new PARO_CARDIORESPIRATORIO();

        var manejo_via_aerea = new MANEJO_VIA_AEREA();
        var asistencia_ventilatoria = new ASISTENCIA_VENTILATORIA();
        var oxigenoterapia = new OXIGENO_TERAPIA();
        var desc_ple = new DESCOMPRESION_PLEURAL();
        var control_hemorragias = new CONTROL_HEMORRAGIAS();
        var acceso_circulatorio = new ACCESO_CIRCULATORIO();
        var intervenciones = new INTERVENCIONES();
        var terapia_electrica = new TERAPIA_ELECTRICA();
        var tratamiento = new TRATAMIENTO();

        var emergencia_r = new EMERGENCIA_RESULTADO();
        var frap_otros = new FRAP_OTROS();
        var frap_legal = new FRAP_LEGAL();
        var consentimiento = new CONSENTIMIENTO();

        var negativa = new NEGATIVA();

        var clinico = new CLINICO();
        var trauma = new TRAUMA();
        var vial = new VIAL();
        var ginecologico = new GINECOLOGICO();

        var insumos_basicos = new INSUMOS_NIVEL_BASICO();
        var insumos_intermedios = new INSUMOS_NIVEL_INTERMEDIO();
        var insumos_avanzados = new INSUMOS_NIVEL_AVANZADO();

        // Registros compuestos
        var signos = getSignos();

    */



    // Creacion de los fragmentos
    //=============================================================================

    var frap_elementos = {};

    frap_elementos["PACIENTE"] ={"intentos":0,"enviado":false, "datos" :paciente};
    frap_elementos["DIRECCION"] ={"intentos":0,"enviado":false, "datos" :direccion};

    /*
    frap_elementos["EVALUACION_PRIMARIA"] ={"intentos":0,"enviado":false, "datos" :evaluacion_primaria};

    frap_elementos["PARO_CARDIORESPIRATORIO"] ={"intentos":0,"enviado":false, "datos" :paro_cadiorespiratorio};

    frap_elementos["SEMIOLOGIA_DOLOR"] ={"intentos":0,"enviado":false, "datos" :semiologia_dolor};
    frap_elementos["SAMPLER"] ={"intentos":0,"enviado":false, "datos" :sampler};
    frap_elementos["EVALUACION_SECUNDARIA"] ={"intentos":0,"enviado":false, "datos" :evaluacion_secundaria};

    frap_elementos["MANEJO_VIA_AEREA"] ={"intentos":0,"enviado":false, "datos" :manejo_via_aerea};
    frap_elementos["ASISTENCIA_VENTILATORIA"] ={"intentos":0,"enviado":false, "datos" :asistencia_ventilatoria};
    frap_elementos["OXIGENO_TERAPIA"] ={"intentos":0,"enviado":false, "datos" :oxigenoterapia};
    frap_elementos["DESCOMPRESION_PLEURAL"] ={"intentos":0,"enviado":false, "datos" :desc_ple};
    frap_elementos["CONTROL_HEMORRAGIAS"] ={"intentos":0,"enviado":false, "datos" :control_hemorragias};
    frap_elementos["ACCESO_CIRCULATORIO"] ={"intentos":0,"enviado":false, "datos" :acceso_circulatorio};
    frap_elementos["INTERVENCIONES"] ={"intentos":0,"enviado":false, "datos" :intervenciones};
    frap_elementos["TERAPIA_ELECTRICA"] ={"intentos":0,"enviado":false, "datos" :terapia_electrica};
    frap_elementos["TRATAMIENTO"] ={"intentos":0,"enviado":false, "datos" :tratamiento};

    frap_elementos["EMERGENCIA_RESULTADO"] ={"intentos":0,"enviado":false, "datos" :emergencia_r};
    frap_elementos["FRAP_OTROS"] ={"intentos":0,"enviado":false, "datos" :frap_otros};
    frap_elementos["FRAP_LEGAL"] ={"intentos":0,"enviado":false, "datos" :frap_legal};
    frap_elementos["CONSENTIMIENTO"] ={"intentos":0,"enviado":false, "datos" :consentimiento};

    frap_elementos["NEGATIVA_ATENCION"] ={"intentos":0,"enviado":false, "datos" :negativa};

    switch(tipo){
        case '1':
            frap_elementos["TRAUMA"] ={"intentos":0,"enviado":false, "datos" :trauma};
            break;

        case '2':
            frap_elementos["CLINICO"] ={"intentos":0,"enviado":false, "datos" :clinico};
            break;

        case '3':
            frap_elementos["GINECOLOGICO"] ={"intentos":0,"enviado":false, "datos" :ginecologico};
            break;

        case '4':
            frap_elementos["VIAL"] ={"intentos":0,"enviado":false, "datos" :vial};
            break;

    }

    frap_elementos["INSUMOS_NIVEL_BASICO"] ={"intentos":0,"enviado":false, "datos" :insumos_basicos};
    frap_elementos["INSUMOS_NIVEL_INTERMEDIO"] ={"intentos":0,"enviado":false, "datos" :insumos_intermedios};
    frap_elementos["INSUMOS_NIVEL_AVANZADO"] ={"intentos":0,"enviado":false, "datos" :insumos_avanzados};


    // Resgistros compuestos
    frap_elementos["REGISTRO_SIGNOS_VITALES"] ={"intentos":0,"enviado":false, "datos" :signos};

*/






    /*******************************************************************************************
     *
     *   ENVIO DE LA INFORMACION
     *
     *******************************************************************************************/
    //JSON.stringify({"fragmento":"FRAP_OBJECT","id":"1", "datos":fs})


    $.ajax({
        type: 'POST',
        url: 'https://opowerdev.net/web_services/FRAP/usuario/saveFRAP',
        dataType: "json",
        data: JSON.stringify({"fragmento":"FRAP_OBJECT","id":"1", "datos":fs}),
        contentType: "application/json; charset=utf-8",
        success: function(data, textStatus, jqXHR){

            // Se crea el FRAP con éxito por lo que se recupera el ID
            // .datos_respuesta.idFRAP
            //=============================================================================
            //alert(JSON.stringify(data));
            var id = data.idData;

            var promises=[];
            //alert('envio de fragmentos');

            $.each(frap_elementos, function(key, value) {

                //alert(JSON.stringify(value["datos"]));
                //send(key, value["datos"], id);


                // alert(JSON.stringify({"fragmento":key,"id":id, "datos":value["datos"]}));
                //var json_object = 'fragmento='+key+'&datos='+JSON.stringify(value["datos"]);
                //alert(json_object);

                var request = $.ajax({
                    type: 'POST',
                    url: 'https://opowerdev.net/web_services/FRAP/usuario/saveFRAP',
                    dataType: "json",
                    data: JSON.stringify({"fragmento":key,"id":id, "datos":value["datos"]}),
                    contentType: "application/json; charset=utf-8",
                    success: function(data, textStatus, jqXHR){
                        // alert(JSON.stringify(data));

                    },
                    error: function(respuesta){
                        alert("post_rror! llamada elemento");
                        alert(respuesta);
                    }
                });



                promises.push( request);


            });

            $.when.apply(null, promises).done(function(){
                alert('se guardo FRAP con éxito');

                location="home_vehicules.html";
                // alert('FINISH-close-change');

                // Commit(id);

            }).fail(function(){
                alert('unexpected error must close');
            });


        },
        error: function(jqXHR, textStatus, errorThrown){
            if (jqXHR.status === 0) {

                alert('Not connect: Verify Network.');

            } else if (jqXHR.status == 404) {

                alert('Requested page not found [404]');

            } else if (jqXHR.status == 500) {

                alert('Internal Server Error [500].');

            } else if (textStatus === 'parsererror') {

                alert('Requested JSON parse failed.');

            } else if (textStatus === 'timeout') {

                alert('Time out error.');

            } else if (textStatus === 'abort') {

                alert('Ajax request aborted.');

            } else {

                alert('Uncaught Error: ' + jqXHR.responseText);

            }

            alert('Error SND01: Comunicacion con el servidor');
        }
    });

    // location="home_vehicules.html";
}





/****************************************************************************************************
 *
 *       FUNCIONES DE EXTRACCIÓN PARA LA INFORMACIÓN
 *
 ***************************************************************************************************/

function FRAP() {
    /*
        this.FOLIO = number;
        this.ESTATUS = status;
        this.VALIDACION = validation;
    */
    this.iSERVICIO_SERVICIO_ID = servicio;
    this.iID_SERVICIO_MEDICO = $('input[name=servicio_medico]:checked').val();
    this.iCTLG_MOTIVO_ATENCION = ($('input[name=motivo_atencion]:checked').size() > 0 ? $('input[name=motivo_atencion]:checked').val(): 0);
}



function PACIENTE(){
    this.NOMBRE = ($('#nombre').val() != '') ? $('#nombre').val() : '-';
    this.APELLIDO_PATERNO = ($('#a_paterno').val() != '') ? $('#a_paterno').val() : '-';
    this.APELLIDO_MATERNO = ($('#a_materno').val() != '') ? $('#a_materno').val() : '-';
    this.iSEXOS_ID_SEXOS   = ($('input[name=sexo]:checked').size() > 0 ? $('input[name=sexo]:checked').val(): 0);
    this.EDAD = ($('#fecha_nacimiento').val() != '') ? $('#fecha_nacimiento').val() : '-';
    this.iSERVICIO_MEDICO = ($('input[name=servicio_medico]:checked').size() > 0 ? $('input[name=servicio_medico]:checked').val(): 0);
    this.MEDIA_FILIACION =($('#mediaFiliacion').val() != '') ? $('#mediaFiliacion').val() : '-';
    this.OCUPACION = ($('#ocupacion').val() != '') ? $('#ocupacion').val() : '-';
    this.TELEFONO = ($('#telefono').val() != '') ? $('#telefono').val() : '-';
    this.iCTLG_TIPO_SERVICIO_ID =8;
}


function DIRECCION(){
    this.CALLE = ($('#calle').val() != '') ? $('#calle').val() : '-';
    this.iNUMERO_EXTERIOR = ($('#numero').val() != '') ? $('#numero').val() : 0 ;
    this.iCOLONIA = ($('#colonia').val() != '') ? $('#colonia').val() : 0;
    this.iDELEGACION = ($('#delegacion').val() != '') ? $('#delegacion').val() : 0;
    this.iCTLG_ESTADOS_ID_ESTADOS = ($('#estado').val() != '') ? $('#estado').val() : 0 ;
    this.iCP = ($('#cp').val() != '') ? $('#cp').val() : 0;

}

function EVALUACION_PRIMARIA(){
    this.iCTLG_NIVEL_CONCIENCIA_ID = $('input[name=nivel_conciencia]:checked').val();
    this.iCTLG_VENTILACION_ID = $('input[name=ventilacion]:checked').val();
    this.iCTLG_CALIDAD_VENTILACION_ID = $('input[name=calidad_ventilacion]:checked').val();
    this.iCTLG_PULSOS_ID = $('input[name=pulsos]:checked').val();
    this.iCTLG_COLORACION_ID = $('input[name=ep_coloracion]:checked').val();
    this.iCTLG_CONDICION_ID = $('input[name=ep_condicion]:checked').val();
    this.iCTLG_TEMPERATURA_ID = $('input[name=ep_temperatura]:checked').val();
    this.iPOSICION = ($('#posicion').val() != '') ? $('#posicion').val() : 0;
    this.iCTLG_PRIORIDAD_ID = $('input[name=ep_prioridad]:checked').val();
    this.iCTLG_PULSOS_CALIDAD_ID = $('input[name=ep_calidad]:checked').val();
    this.iCTLG_RITMO_ID = $('input[name=ep_ritmo]:checked').val();
    this.iCTLG_VIA_AEREA_ID = $('input[name=via_aerea]:checked').val();
    this.iCTLG_EMERGENCIA_MOTIVOS = 1; // get the value
};


function SEMIOLOGIA_DOLOR(){
    this.iAPARICION = $('input[name=sd_aparicion]:checked').val();
    this.LOCALIZACION = ($('#sd_localizacion').val() != '') ? $('#sd_localizacion').val() : '-';
    this.IRRADIACION = ($('#sd_irradiacion').val() != '') ? $('#sd_irradiacion').val() : '-';
    this.CARACTERISTICAS = ($('#sd_caracteristicas').val() != '') ? $('#sd_caracteristicas').val() : '-';
    this.ALIVIO =  ($('#sd_alivio').val() != '') ? $('#sd_alivio').val() : '-';
    this.HORA_INICIO = ($('#sd_inicio').val() != '') ? $('#sd_inicio').val() : '-';
    this.iINTENSIDAD = ($('#sd_intensidad').val() != 'Selecciona un valor' ) ? $('#sd_intensidad').val() :0;
};

function SAMPLER(){
    this.SINTOMAS = ($('#sampler_sintomas').val() != '') ? $('#sampler_sintomas').val() : '-';
    this.ALERGIAS = ($('#sampler_alergias').val() != '') ? $('#sampler_alergias').val() : '-';
    this.MEDICAMENTOS = ($('#sampler_medicamentos').val() != '') ? $('#sampler_medicamentos').val() : '-';
    this.PADECIMIENTOS = ($('#sampler_padecimientos').val() != '') ? $('#sampler_padecimientos').val() : '-';
    this.ULTIMA_COMIDA = ($('#sampler_ultima_comida').val() != '') ? $('#sampler_ultima_comida').val() : '-';
    this.EVENTOS_RELACIONADOS = ($('#sampler_eventos_relacionados').val() != '') ? $('#sampler_eventos_relacionados').val() : '-' ;
    //this.FACTOR_RIESGO; agregar
};

function EVALUACION_SECUNDARIA(){
    this.DIAGNOSTICO_ELECTROGRAFICO = ($('#diagnostico_electrografico').val() != '') ? $('#diagnostico_electrografico').val() : '-' ;
    this.iDERIVACIONES = $('input[name=es_derivaciones]:checked').val();
    this.iCTLG_GLASGOW_MOTRIZ_ID =  $('input[name=glasgow_motora]:checked').val();
    this.iCTLG_GLASGOW_VERBAL_ID = $('input[name=glasgow_verbal]:checked').val();
    this.iCTLG_GLASGOW_VISUAL_ID = $('input[name=ocular]:checked').val();
    this.EVALUACION_GLASGOW = $('input[name=glasgow_motora]:checked').val()+$('input[name=glasgow_verbal]:checked').val()+$('input[name=ocular]:checked').val();
    this.iCTLG_SIGNOS_NEUROLOGICOS_ID = $('input[name=es_signos_neurologicos]:checked').val();
    this.iPUPILAS_IZQUIERDA = ($('input[name=pupilas_zquierda]:checked').size() > 0 ? $('input[name=pupilas_zquierda]:checked').val(): 0);
    this.iPUPILAS_DERECHA = ($('input[name=pupilas_derecha]:checked').size() > 0 ? $('input[name=pupilas_derecha]:checked').val(): 0);
    this.iRITMO = ($('input[name=es_ritmo]:checked').size() > 0 ? $('input[name=es_ritmo]:checked').val(): 0);
    this.iPERISTALSIS = ($('input[name=peristalsis]:checked').size() > 0 ? $('input[name=peristalsis]:checked').val(): 0) ;
    this.iFRECUENCIA_CARDIACA = ($('#frecuencia_cardiaca').val() !='') ? $('#frecuencia_cardiaca').val() : 0;
    this.iTEMPERATURA = ($('#metabolico_temperatura').val() != '') ? $('#metabolico_temperatura').val() : 0;
    this.iGLUCOMETRIA = ($('#metabolico_glicometria').val() !='') ? $('#metabolico_glicometria').val() : 0;
};



function PARO_CARDIORESPIRATORIO(){
    this.iOCURRIO = ($('input[name=pc_antes]:checked').size() > 0 ? $('input[name=pc_antes]:checked').val(): 0);
    this.iCTLG_MOTIVOS_NOREANIMACION_ID_CTLG_MOTIVOS_NOREANIMACION = ($('input[name=pc_NOreanimacion]:checked').size() > 0 ? $('input[name=pc_NOreanimacion]:checked').val(): 0);
    this.iCTLG_TIPO_REANIMACION_ID_CTLG_TIPO_REANIMACION = ($('input[name=pc_SIreanimacion]:checked').size() > 0 ? $('input[name=pc_SIreanimacion]:checked').val(): 0);
    this.iCTLG_TIPO_ETIOLOGIA_ID_CTLG_TIPO_ETIOLOGIA = ($('input[name=pc_etiologia]:checked').size() > 0 ? $('input[name=pc_etiologia]:checked').val(): 0);
    this.iRETORNO_CIRCULACION_ESPONTANEA = ($('input[name=retorno]:checked').size() > 0 ? $('input[name=retorno]:checked').val(): 0);
    this.iTIEMPO_REANIMACION = ($('input[name=paro_tiempo]:checked').size() > 0 ? $('input[name=paro_tiempo]:checked').val(): 0);
    this.HORA_DETIENE_RCP = ($('#paro_hora').val() != '') ? $('#paro_hora').val() : '-';
    this.iPARO_ARRIBO = ($('input[name=paro_arribo]:checked').size() > 0 ? $('input[name=paro_arribo]:checked').val(): 0);
    this.iPARO_RCP = ($('input[name=paro_rcp]:checked').size() > 0 ? $('input[name=paro_rcp]:checked').val(): 0);
    this.iPARO_DESFIB = ($('input[name=paro_desfib]:checked').size() > 0 ? $('input[name=paro_desfib]:checked').val(): 0);
    this.iPARO_SVA = ($('input[name=paro_sva]:checked').size() > 0 ? $('input[name=paro_sva]:checked').val(): 0);
    this.iREANIMACION = ($('input[name=reanimacion]:checked').size() > 0 ? $('input[name=reanimacion]:checked').val(): 0);
};


function EMERGENCIA_RESULTADO(){
    this.iRESULTADO = ($('input[name=resultado_emergencia]:checked').size() > 0 ? $('input[name=resultado_emergencia]:checked').val(): 0);
    this.iTRASLADO = ($('input[name=resultado_traslado]:checked').size() > 0 ? $('input[name=resultado_traslado]:checked').val(): 0);
    this.iPRIORIDAD_FINAL = ($('input[name=pridad_final]:checked').size() > 0 ? $('input[name=pridad_final]:checked').val(): 0);
    this.FOLIO_RECEPCION = ($('#folio_recepcion').val() != '') ? $('#folio_recepcion').val() : '-';
    this.MEDICO_RECIBE = ($('#medico_recibe').val() != '') ? $('#medico_recibe').val() : '-';
    this.DENOMINACION = ($('#matricula').val() != '') ? $('#matricula').val() : '-';
    //this.FIRMA_MEDICO =imgFirmaMedico;
};


function FRAP_OTROS(){
    this.DEPENDENCIA = ($('#otros_dependencia').val() != '') ? $('#otros_dependencia').val() : '-';
    this.UNIDADES = ($('#otros_unidades').val() != '') ? $('#otros_unidades').val() : '-';
    this.NOMBRE = ($('#otros_nombre').val() != '') ? $('#otros_nombre').val() : '-';

};

function FRAP_LEGAL(){
    this.PERTENENCIAS = ($('#legal_pertenencias').val() != '') ? $('#legal_pertenencias').val() : '-';
    this.NOMBRE = ($('#recibe_pertenencias').val() != '') ? $('#recibe_pertenencias').val() : '-';
    //this.FIRMA = (imgFirmaRecibe != '') ? imgFirmaRecibe : '-';
    this.TOMA_CONOCIMIENTO = ($('#legal_toma').val() != '') ? $('#legal_toma').val() : '-';
    this.OBSERVACIONES = ($('#legal_observaciones').val() != '') ? $('#legal_observaciones').val() : '-';
};

function CONSENTIMIENTO(){
    this.NOMBRE_PACIENTE = ($('#consentimiento_nombre_paciente').val() != '') ? $('#consentimiento_nombre_paciente').val() : '-';
    this.NOMBRE_TESTIGO = ($('#consentimiento_nombre_testigo').val() != '') ? $('#consentimiento_nombre_testigo').val() : '-';
    //this.FIRMA_PACIENTE = (imgConsentimientoFirmaPaciente != '') ? imgConsentimientoFirmaPaciente : '-';
    //this.FIRMA_TESTIGO = (imgConsentimientoFirmaTestigo != '') ? imgConsentimientoFirmaTestigo : '-';
};


// Inicio Tratamiento

function MANEJO_VIA_AEREA(){
    this.iASPIRACION = ($('input[name=aspiracion]:checked').size() > 0 ? $('input[name=aspiracion]:checked').val(): 0);
    this.iCTLG_DISPOSITIVO_APERTURA_ID_CTLG_DISPOSITIVO_APERTURA = ($('input[name=dispositivo_apertura]:checked').size() > 0 ? $('input[name=dispositivo_apertura]:checked').val(): 0);
    this.iCTLG_MANEJO_VIA_AEREA_ID_CTLG_MANEJO_VIA_AEREA = ($('input[name=manejo_via_aerea]:checked').size() > 0 ? $('input[name=manejo_via_aerea]:checked').val(): 0);
    //this.INTUBACION_ID_INTUBACION; agregar
};

function ASISTENCIA_VENTILATORIA(){
    this.iCTLG_DISPOSITIVO_ID_CTLG_DISPOSITIVO = ($('input[name=dispositivo]:checked').size() > 0 ? $('input[name=dispositivo]:checked').val(): 0);
    this.iFRECUENCIA = ($('#asistencia_frecuencia').val() != '') ? $('#asistencia_frecuencia').val() : 0;
    this.iVOLUMEN = ($('#asistencia_volumen').val() != '') ? $('#asistencia_volumen').val() : 0;
    this.MODALIDAD_VENTILATORIA = ($('#asistencia_modalidad').val() != '') ? $('#asistencia_modalidad').val() : '-';
};

function OXIGENO_TERAPIA(){
    this.iLITROS_MINUTO = ($('#oxi_litros').val() != '') ? $('#oxi_litros').val() : 0;
    this.iCTLG_OXIGENOTERAPIA_ID = ($('input[name=tipo_oxigenoterapia]:checked').size() > 0 ? $('input[name=tipo_oxigenoterapia]:checked').val(): 0);
};

function DESCOMPRESION_PLEURAL(){
    this.iCALIBRE = ($('#hemitorax_calibre').val() != '') ? $('#hemitorax_calibre').val() : 0;
    this.iCTLG_HEMITORAX_ID_CTLG_HEMITORAX = $('input[name=hemitorax]:checked').val(); // verify local
};

function CONTROL_HEMORRAGIAS(){
    this.iCTLG_CONTROL_HEMORAGIAS_ID = ($('input[name=control_hemorragia]:checked').size() > 0 ? $('input[name=control_hemorragia]:checked').val(): 0);
    this.HORA_COLOCACION = ($('#control_hemorragia_HORA').val() != '') ? $('#control_hemorragia_HORA').val() : '-';
};


function ACCESO_CIRCULATORIO(){
    // check all local
    this.iCTLG_VIA_ACCESO_ID_CTLG_VIA_ACCESO = $('input[name=acceso_via_acceso]:checked').val();
    this.iCTLG_ZONA_COLOCACION_ID = $('input[name=acceso_zona]:checked').val();
    this.iCTLG_SOLUCION_ID_CTLG_SOLUCION = $('input[name=acceso_tipo]:checked').val();
    this.iBOMBA_INFUSION = $('input[name=acceso_bomba]:checked').val();
    this.iCALIBRE = ($('#acceso_calibre').val() != '' ) ? $('#acceso_calibre').val() : 0;
    this.iVOLUMEN_INFUNDIDO = ($('#acceso_volumen').val() !='') ? $('#acceso_volumen').val():0;
    this.HORA_COLOCACION = ($('#acceso_hora').val() !='') ? $('#acceso_hora').val() : '0:0';
};

function INTERVENCIONES(){
    this.iCONTROL_CERVICAL = ($('input[name=intervenciones_control]:checked').size() > 0 ? $('input[name=intervenciones_control]:checked').val(): 0);
    this.iEMPAQUETAMIENTO = ($('input[name=intervenciones_empaquetamiento]:checked').size() > 0 ? $('input[name=intervenciones_empaquetamiento]:checked').val(): 0);
    this.iCURACION_VENDAJE = ($('input[name=intervenciones_curacion]:checked').size() > 0 ? $('input[name=intervenciones_curacion]:checked').val(): 0);
    this.iINMOVILIZACION_EXTREMIDADES = ($('input[name=intervenciones_inmobilizacion]:checked').size() > 0 ? $('input[name=intervenciones_inmobilizacion]:checked').val(): 0);
};

function TERAPIA_ELECTRICA(){
    this.iDESCARGAS = ( $('#terapia_descargas').val() != '' ? $('#terapia_descargas').val() : 0);
    this.iJOULES = ( $('#terapia_joules').val() != '' ? $('#terapia_joules').val() : 0);
    this.iMA = ( ($('#terapia_ma').val() != '') ? $('#terapia_ma').val() : 0);
    this.iFRECUENCIA = ( ($('#terapia_frecuencia').val() != '') ? $('#terapia_frecuencia').val() : 0);
    //this.terapia_tipo = $('input[name=terapia_tipo]:checked').val(); // check local
};

function TRATAMIENTO(){
    // add all parts
    /*
    this.MANEJO_VIA_AEREA_ID_MANEJO_VIA_AEREA = [];
    this.ASISTENCIA_VENTILATORIA_ID_ASISTENCIA_VENTILATORIA = [];
    this.OXIGENO_TERAPIA_ID_OXIGENO_TERAPIA = [];
    this.DESCOMPRESION_PLEURAL_ID_DESCOMPRESION_PLEURAL = [];
    this.CONTROL_HEMORRAGIAS_ID_CONTROL_HEMORRAGIAS = [];
    this.ACCESO_CIRCULATORIO_ID_ACCESO_CIRCULATORIO = [];
    this.INTERVENCIONES_ID_INTERVENCIONES = [];
    this.TERAPIA_ELECTRICA_ID_TERAPIA_ELECTRICA = [];
    */
    this.OBSERVACIONES = ($('#tratamiento_observaciones').val() != '') ? $('#tratamiento_observaciones').val() : '-';
};


// termina tratamiento



function CLINICO(){
    this.DIAGNOSTICO_SINDROMATICO = ($('#diagnostico_sindromatico').val() != '') ? $('#diagnostico_sindromatico').val() : '-';
    this.iCTLG_ORIGEN_PROBABLE_ID = ($('input[name=origen_probable]:checked').size() > 0 ? $('input[name=origen_probable]:checked').val(): 0);
    this.OBSERVACIONES = ($('#ds_observaciones').val() != '') ? $('#ds_observaciones').val() : '-';
};

function TRAUMA(){
    this.iINTENCIONALIDAD = ($('input[name=trauna_intencionalidad]:checked').size() > 0 ? $('input[name=trauna_intencionalidad]:checked').val(): 0);
    this.iCTLG_AGENTE_CAUSAL_GENERAL_ID = ($('input[name=trauna_ac]:checked').size() > 0 ? $('input[name=trauna_ac]:checked').val(): 0);
    this.iCTLG_AGENTE_CAUSAL_ESPECIFICO_ID = ($('input[name=trauna_ace]:checked').size() > 0 ? $('input[name=trauna_ace]:checked').val(): 0);
    this.OBSERVACIONES = ($('#trauma_observaciones').val() != '') ? $('#trauma_observaciones').val() : '-';
};


function VIAL(){
    this.iCTLG_TIPO_ACCIDENTE_VIAL_ID = ($('input[name=vial_tipo]:checked').size() > 0 ? $('input[name=vial_tipo]:checked').val(): 0);
    this.iCTLG_TIPO_LESIONADO_ID = ($('input[name=vial_lesionado]:checked').size() > 0 ? $('input[name=vial_lesionado]:checked').val(): 0);
    this.iCTLG_ACTOR_VIAL_ID = ($('input[name=vial_actor]:checked').size() > 0 ? $('input[name=vial_actor]:checked').val(): 0);
    this.iCTLG_ATROPELLADO_POR_ID = ($('input[name=vial_tropella]:checked').size() > 0 ? $('input[name=vial_tropella]:checked').val(): 0);
    this.iEYECTADO = ($('input[name=vial_eyectado]:checked').size() > 0 ? $('input[name=vial_eyectado]:checked').val(): 0);
    this.iDECESOS = ($('input[name=vial_decesos]:checked').size() > 0 ? $('input[name=vial_decesos]:checked').val(): 0);
    this.iPRENSADO = ($('input[name=vial_presado]:checked').size() > 0 ? $('input[name=vial_presado]:checked').val(): 0);
    this.iCASCO = ($('input[name=vial_casco]:checked').size() > 0 ? $('input[name=vial_casco]:checked').val(): 0);
    this.iCTLG_IMPACTO_ID = ($('input[name=vial_impacto]:checked').size() > 0 ? $('input[name=vial_impacto]:checked').val(): 0);
    this.iCTLG_VOLANTE_ID = ($('input[name=vial_volante]:checked').size() > 0 ? $('input[name=vial_volante]:checked').val(): 0);
    this.iCTLG_PARABRISAS_ID = ($('input[name=vial_parabrisas]:checked').size() > 0 ? $('input[name=vial_parabrisas]:checked').val(): 0);
    this.iCTLG_BOLSA_AIRE_ID = ($('input[name=vial_bolsas]:checked').size() > 0 ? $('input[name=vial_bolsas]:checked').val(): 0);
    this.iCTLG_CINTURON_SEGURIDAD_ID = ($('input[name=vial_cinturon]:checked').size() > 0 ? $('input[name=vial_cinturon]:checked').val(): 0);
    this.OBSERVACIONES = ($('#vial_observaciones').val() != '') ? $('#vial_observaciones').val() : '-';
};

function GINECOLOGICO(){
    this.iGESTA = ($('#ginecologico_gesta').val() != '') ? $('#ginecologico_gesta').val() : 0;
    this.iPARA = ($('#ginecologico_para').val() != '') ? $('#ginecologico_para').val() : 0;
    this.iCESARIA = ($('#ginecologico_cesarea').val() != '') ? $('#ginecologico_cesarea').val() : 0;
    this.iABORTOS = ($('#ginecologico_abortos').val() != '') ? $('#ginecologico_abortos').val() : 0;
    this.iSEMANAS_GESTACION = ($('#ginecologico_semanas').val() != '') ? $('#ginecologico_semanas').val() : 0;
    this.FUM = ($('#fum').val() != '') ? $('#fum').val() : '-';
    this.HORA_INICIO_CONTRACCIONES = ($('#ginecologico_hora').val() != '') ? $('#ginecologico_hora').val() : '-';
    this.iFRECUENCIA = ($('#ginecologico_frecuencia').val() != '') ? $('#ginecologico_frecuencia').val() : 0;
    this.iDURACION = ($('#ginecologico_duracion').val() != '') ? $('#ginecologico_duracion').val() : 0;
    this.HORA_NACIOMIENTO = ($('#ginecologico_semanas').val() != '') ? $('#ginecologico_semanas').val() : '-';
    this.iPLACENTA_EXPULSADA = ($('input[name=placenta]:checked').size() > 0 ? $('input[name=placenta]:checked').val(): 0);
    this.LUGAR_NACIMIENTO = ($('#ginecologico_lugarN').val() != '') ? $('#ginecologico_lugarN').val() : '-';
    this.iPRODUCTO_VIVO = ($('input[name=producto]:checked').size() > 0 ? $('input[name=producto]:checked').val(): 0);
    this.iSEXO = ($('input[name=producto_sexo]:checked').size() > 0 ? $('input[name=producto_sexo]:checked').val(): 0);
    this.iCONTROL_PARENTAL = ($('input[name=control_parental]:checked').size() > 0 ? $('input[name=control_parental]:checked').val(): 0);
    this.iEMBARAZO_ALTO_RIESGO = ($('input[name=emarazo_riesgo]:checked').size() > 0 ? $('input[name=emarazo_riesgo]:checked').val(): 0);
    this.iESQUEMA_MADURACION_PULMONAR = ($('input[name=maduracion_pulmonar]:checked').size() > 0 ? $('input[name=maduracion_pulmonar]:checked').val(): 0);
    this.iAPGAR1 = ($('#apgar1').val() != '') ? $('#apgar1').val() : 0;
    this.iAPGAR5 = ($('#apgar5').val() != '') ? $('#apgar5').val() : 0;
    this.iAPGAR10 = ($('#apgar10').val() != '') ? $('#apgar10').val() : 0;
    this.iSILVERMAN = ($('#silvermann').val() != '') ? $('#silvermann').val() : 0;
    this.iMEMBRANAS_INTEGRAS = ($('input[name=membranas]:checked').size() > 0 ? $('input[name=membranas]:checked').val(): 0);
    this.OBSERVACIONES = ($('#ginecologico_observaciones').val() != '') ? $('#ginecologico_observaciones').val() : '-';
};


function NEGATIVA(){
    // verify all local
    this.NOMBRE_PACIENTE = ($('#negativa_nombre_paciente').val() != '') ? $('#negativa_nombre_paciente').val() : '-';
    this.NOMBRE_TESTIGO = ($('#negativa_nombre_testigo').val() != '') ? $('#negativa_nombre_testigo').val() : '-';
    //this.FIRMA_TESTIGO =  (imgNegativaFirmaTestigo != '') ? imgNegativaFirmaTestigo : '-';
    //this.FIRMA_PACIENTE = (imgNegativaFirmaPaciente !='') ? imgNegativaFirmaPaciente : '-';
};

function INSUMOS_NIVEL_BASICO(){
    // verify all local ***

    this.SONDA_ASPIRACION = ( ($('#sonda_aspiracion').val() != 'Selecciona un valor') || (!$('#sonda_aspiracion').val()) ) ? $('#sonda_aspiracion').val() :0;
    this.PUNTAS_NASALES = ($('#puntas_nasales').val() != 'Selecciona un valor' ) ? $('#puntas_nasales').val() :0;
    this.MASCARILLA_ADULTO = ($('#mascarilla_adulto').val() != 'Selecciona un valor' ) ? $('#mascarilla_adulto').val() :0;
    this.PUNZOCATH_14 = ($('#punzocath_14').val() != 'Selecciona un valor' ) ? $('#punzocath_14').val() :0;
    this.PUNZOCATH_16 = ($('#punzocath_16').val() != 'Selecciona un valor' ) ? $('#punzocath_16').val() :0;
    this.PUNZOCATH_18 = ($('#punzocath_18').val() != 'Selecciona un valor' ) ? $('#punzocath_18').val() :0;
    this.PUNZOCATH_20 = ($('#punzocath_20').val() != 'Selecciona un valor' ) ? $('#punzocath_20').val() :0;
    this.PUNZOCATH_22 = ($('#punzocath_22').val() != 'Selecciona un valor' ) ? $('#punzocath_22').val() :0;
    this.VENOPACK_NORMOGOTERO = ($('#venopack').val() != 'Selecciona un valor' ) ? $('#venopack').val() :0;
    this.JERINGA_5_CC = ($('#jeringa_5').val() != 'Selecciona un valor' ) ? $('#jeringa_5').val() :0;
    this.JERINGA_10_CC = ($('#jeringa_10').val() != 'Selecciona un valor' ) ? $('#jeringa_10').val() :0;
    this.GUANTES = ($('#guantes').val() != 'Selecciona un valor' ) ? $('#guantes').val() :0;
    this.GASA_SIMPLE = ($('#gasa_simple').val() != 'Selecciona un valor' ) ? $('#gasa_simple').val() :0;
    this.VENDA_ELASTICA_5_CM = ($('#venda_elastica_5').val() != 'Selecciona un valor' ) ? $('#venda_elastica_5').val() :0;
    this.VENDA_ELASTICA_10_CM = ($('#venda_elastica_10').val() != 'Selecciona un valor' ) ? $('#venda_elastica_10').val() :0;
    this.VENDA_ELASTICA_30_CM = ($('#venda_elastica_30').val() != 'Selecciona un valor' ) ? $('#venda_elastica_30').val() :0;
    this.TIRA_REACTIVA = ($('#tira_reactiva').val() != 'Selecciona un valor' ) ? $('#tira_reactiva').val() :0;
    this.LANCETA = ($('#lanceta').val() != 'Selecciona un valor' ) ? $('#lanceta').val() :0;
    this.NaCL_9 = ($('#nacl_9').val() != 'Selecciona un valor' ) ? $('#nacl_9').val() :0;
    this.HARTMANN = ($('#hartmann').val() != 'Selecciona un valor' ) ? $('#hartmann').val() :0;
    this.GLUCOSA_5 = ($('#glucosa_5').val() != 'Selecciona un valor' ) ? $('#glucosa_5').val() :0;
    this.GLUCOSA_10 = ($('#glucosa_10').val() != 'Selecciona un valor' ) ? $('#glucosa_10').val() :0;
    this.GLUCOSA_50 = ($('#glucosa_50').val() != 'Selecciona un valor' ) ? $('#glucosa_50').val() :0;
    this.MIXTA = ($('#mixta').val() != 'Selecciona un valor' ) ? $('#mixta').val() :0;
    this.SABANA_DESECHABLE = ($('#sabana_desechable').val() != 'Selecciona un valor' ) ? $('#sabana_desechable').val() :0;
    this.EQUIPO_PARTO = ($('#equipo_parto').val() != 'Selecciona un valor' ) ? $('#equipo_parto').val() :0;

};


function INSUMOS_NIVEL_INTERMEDIO(){
    // verify all local ***

    this.TUBO_ENDROTRAQUEAL_75 = ($('#tubo_endrotrauqeal_75').val() != 'Selecciona un valor' ) ? $('#tubo_endrotrauqeal_75').val() :0;
    this.TUBO_ENDROTRAQUEAL_8 = ($('#tubo_endrotrauqeal_8').val() != 'Selecciona un valor' ) ? $('#tubo_endrotrauqeal_8').val() :0;
    this.TUBO_ENDROTRAQUEAL_85 = ($('#tubo_endrotrauqeal_85').val() != 'Selecciona un valor' ) ? $('#tubo_endrotrauqeal_85').val() :0;
    this.MASCARILLA_LARINGEA = ($('#mascarilla_laringea').val() != 'Selecciona un valor' ) ? $('#mascarilla_laringea').val() :0;
    this.MASCARILLA_PEDIATRICA = ($('#mascarilla_faringea').val() != 'Selecciona un valor' ) ? $('#mascarilla_faringea').val() :0;
    this.CANULA_OROFARINGEA = ($('#canula_orofaringea').val() != 'Selecciona un valor' ) ? $('#canula_orofaringea').val() :0;
    this.VENOPACK_MICROGOTERO = ($('#venopack_microgotero').val() != 'Selecciona un valor' ) ? $('#venopack_microgotero').val() :0;
    this.JERINGA_INSULINA = ($('#jeringa_insulina').val() != 'Selecciona un valor' ) ? $('#jeringa_insulina').val() :0;
    this.CLAMPS_UMBILICALES = ($('#clambs_umbilicales').val() != 'Selecciona un valor' ) ? $('#clambs_umbilicales').val() :0;
    this.ELECTRODOS_ADULTO = ($('#electrodos_adulto').val() != 'Selecciona un valor' ) ? $('#electrodos_adulto').val() :0;
    this.ELECTRODOS_PEDIATRICOS = ($('#electrodos_pediatricos').val() != 'Selecciona un valor' ) ? $('#electrodos_pediatricos').val() :0;
    this.FORMATO_REGISTRO_ATENCION_PREHOSPITALARIA = ($('#papel_electrocardiograma').val() != 'Selecciona un valor' ) ? $('#papel_electrocardiograma').val() :0;


};


function INSUMOS_NIVEL_AVANZADO(){
    // verify all local ***

    this.TUBO_ENDROTRAQUEAL_35 = ($('#tubo_endrotrauqeal_35').val() != 'Selecciona un valor' ) ? $('#tubo_endrotrauqeal_35').val() :0;
    this.TUBO_ENDROTRAQUEAL_4 = ($('#tubo_endrotrauqeal_4').val() != 'Selecciona un valor' ) ? $('#tubo_endrotrauqeal_4').val() :0;
    this.TROCAR_TORACICO_14 = ($('#trocar_toracico_14').val() != 'Selecciona un valor' ) ? $('#trocar_toracico_14').val() :0;
    this.TROCAR_TORACICO_16 = ($('#trocar_toracico_16').val() != 'Selecciona un valor' ) ? $('#trocar_toracico_16').val() :0;
    this.TROCAR_TORACICO_18 = ($('#trocar_toracico_18').val() != 'Selecciona un valor' ) ? $('#trocar_toracico_18').val() :0;
    this.SONDA_NASOGASTRICA = ($('#sonda_nasogastrica').val() != 'Selecciona un valor' ) ? $('#sonda_nasogastrica').val() :0;
    this.PARCHES_MARCAPASOS = ($('#parches_marcapasos').val() != 'Selecciona un valor' ) ? $('#parches_marcapasos').val() :0;
    this.OTRO = ($('#insumos_otros').val() != 'Selecciona un valor' ) ? $('#insumos_otros').val() :0;


};



function AUDITORIA(){
    // verify all local
    //this.ID_FRAP = 0;
    this.NO_SERIE = id_dispositivo;
    this.USUARIO = usuario;
    this.VERSION_APP = '7.0.0';
    this.ESTADO = state;
};




// Funciones para recuperar los registros anidados de : Signos vitales

function getSignos(){
    //alert('dentro s');
    var  signos ={};

    var query = 'SELECT * FROM REGISTRO_SIGNOS_VITALES WHERE FRAP_FRAP_ID ='+idFRAP+ " AND TIPO_FRAP='"+tipoFRAP+"'";
    //alert(query);

    var db = window.openDatabase(shortName, version, displayName, maxSize);


    db.transaction(
        function(tx) {
            tx.executeSql(query, [],
                function(tx, rs) {
                    //alert('exito, se recuperan datos');

                    var len = rs.rows.length;

                    // alert('long:'+len +" id:"+idFRAP);
                    for (var i = 0; i < len; i++) {

                        signos["registro"+i]={ "HORA":rs.rows.item(i).HORA, "iFC":rs.rows.item(i).FC, "iFR":rs.rows.item(i).FR, "iTAS":rs.rows.item(i).TAS, "iTAD":rs.rows.item(i).TAD, "iSAO2":rs.rows.item(i).SAO2, "iTEMPERATURA":rs.rows.item(i).TEMPERATURA, "iGLUCOSA":rs.rows.item(i).GLUCOSA, "iGLASGOW_TOTAL":0, "iCTLG_GLASGOW_MOTRIZ_ID":rs.rows.item(i).CTLG_GLASGOW_MOTRIZ_ID, "iCTLG_GLASGOW_VERBAL_ID":rs.rows.item(i).CTLG_GLASGOW_VERBAL_ID, "iCTLG_GLASGOW_VISUAL_ID":rs.rows.item(i).CTLG_GLASGOW_VISUAL_ID, "iGLASGOW_TOTAL":(rs.rows.item(i).CTLG_GLASGOW_VISUAL_ID+rs.rows.item(i).CTLG_GLASGOW_VERBAL_ID+rs.rows.item(i).CTLG_GLASGOW_MOTRIZ_ID)};

                    }
                },
                function(tx, error) {
                    alert('Error Signos: ' + error.message);
                });
        });

    return signos;

}