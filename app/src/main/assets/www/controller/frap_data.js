
var idFRAP;
var tipoFRAP = 'on';
var idService;
var id_usuario;
var estado;

var changeConf = 0;


// 0 = falso= frap ya existe en la base xe datos
// 1 = true = frap no existe en la base de datos; es decir, es nuevo
var isNew =0;


// Variables para el manejo de un FRAP nuevo pero parcialmente lleno
// ====================================================================

// 0 = falso =
// 1 = true = el frap esta parcialmente lleno
var estado_frap = 0;

// Los elementos del array corresponden a las tablas de la base de datos LOCAL
var estado_secciones ={};
estado_secciones['PACIENTE'] = 0;
estado_secciones['EVALUACION_PRIMARIA'] = 0;
estado_secciones['EVALUACION_SECUNDARIA'] = 0;
estado_secciones['TRATAMIENTO'] = 0;





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


function msgBoxErrorClose() {

    if(changeConf == 1){
        $("#msgError").dialog( 'close' );
        navigator.app.exitApp();
    }

    $("#msgError").dialog( 'close' );
    location="index-login.html";

}











// ********************************************
// *AQUÍ INICIAMOS LA SEGUNDA MODIFICACÓN DE EL CODIGO*
// ********************************************



// MARK: Funciones de Evaluación Auxiliares

function check_insumos(value)
{
    return ((value != 'Selecciona un valor') ? value : 0)
}


function checkValue(value)
{
    return (value <= 0 || typeof value == 'undefined') ? 0 : value
}

function checkText(value)
{
    return ((value == '' || typeof value == 'undefined') ? '-' : value)
}




// funciones de inicialización - Valores por dedult
//============================================================================


function PACIENTE(){
    this.iID_FRAP = idFRAP,
        this.TIPO_FRAP = 'online',

    // alert (iframe.find("#nombre").val()) ;
        this.NOMBRE = (iframe.find('#nombre').val() != '') ? iframe.find('#nombre').val() : ' ',
        this.APELLIDO_PATERNO = ( iframe.find('#a_paterno').val() != '') ? iframe.find('#a_paterno').val() : ' ',
        this.APELLIDO_MATERNO = ( iframe.find('#a_materno').val() != '') ? iframe.find('#a_materno').val() : ' ',
        this.iSEXOS_ID_SEXOS  = ( iframe.find('input[name=sexo]:checked').size() > 0 ? iframe.find('input[name=sexo]:checked').val(): 0),
        this.EDAD = ( iframe.find('#fecha_nacimiento').val() != '') ? iframe.find('#fecha_nacimiento').val() : ' ',
        this.iSERVICIO_MEDICO = ( iframe.find('input[name=servicio_medico]:checked').size() > 0 ? iframe.find('input[name=servicio_medico]:checked').val(): 0),

        this.TELEFONO = ( iframe.find('#telefono').val() != '') ? iframe.find('#telefono').val() : ' ' ,
        this.OCUPACION = ( iframe.find('#ocupacion').val() != '') ? iframe.find('#ocupacion').val() : ' ',
        this.iMOTIVO_ATENCION =( iframe.find('input[name=motivo_atencion]:checked').size() > 0 ? iframe.find('input[name=motivo_atencion]:checked').val(): 0)
};


// Edicion de guardado del objeto frap, Sección media filiación


function MEDIA_FILIACION(){

    this.iID_FRAP = idFRAP,
        this.TIPO_FRAP = 'online',

    this.iID_CTLG_MEDIA_FILIACION_ACCESORIOS = 1,
        this.iID_CTLG_MEDIA_FILIACION_CABELLO = checkValue(iframe.find('input[name=cabello]:checked').val()),
        this.iID_CTLG_MEDIA_FILIACION_CABELLO_COLOR = checkValue(iframe.find('input[name=color_cabello]:checked').val()),
        this.iID_CTLG_MEDIA_FILIACION_COLOR_OJOS = checkValue(iframe.find('input[name=color_ojos]:checked').val()),
        this.iID_CTLG_MEDIA_FILIACION_COLOR_PIEL = checkValue(iframe.find('input[name=color_piel]:checked').val()),
        this.iID_CTLG_MEDIA_FILIACION_COMPLEXION = checkValue(iframe.find('input[name=mf_complexion]:checked').val()),
        this.iID_CTLG_MEDIA_FILIACION_NARIZ = checkValue(iframe.find('input[name=mf_nariz]:checked').val()),
        this.iID_CTLG_MEDIA_FILIACION_PARTE_CUERPO = checkValue(iframe.find('input[name=mf_cuerpo]:checked').val()),
        this.iID_CTLG_MEDIA_FILIACION_ROPA = 1,
        this.iID_CTLG_MEDIA_FILIACION_SENIAS = checkValue(iframe.find('input[name=mf_senias]:checked').val()),
        this.iID_CTLG_MEDIA_FILIACION_SENIA_LUGAR = checkValue(iframe.find('input[name=sena_lugar]:checked').val()),
        this.iID_CTLG_MEDIA_FILIACION_TAMANIO = checkValue(iframe.find('input[name=mf_tamano]:checked').val()),
        this.iID_CTLG_MEDIA_FILIACION_VOLUMEN = checkValue(iframe.find('input[name=mf_volumen]:checked').val())
};

function DIRECCION(){

    this.CALLE = ( iframe.find('#calle').val() != '') ? iframe.find('#calle').val() : ' ',
        this.iNUMERO = ( iframe.find('#numero').val() != '') ? iframe.find('#numero').val() : 0 ,
        this.COLONIA  = ( iframe.find('input[name=colonia]:checked').size() > 0 ? iframe.find('input[name=colonia]:checked').val(): 0),
        this.DELEGACION  = ( iframe.find('input[name=delegacion]:checked').size() > 0 ? iframe.find('input[name=delegacion]:checked').val(): 0),
        this.iCTLG_ESTADOS_ID_ESTADOS = ( iframe.find('input[name=estado]:checked').size() > 0 ? iframe.find('input[name=estado]:checked').val(): 0),
        this.iCP = ((iframe.find('#cp').val() != '') ? iframe.find('#cp').val() : '_')

};


function EVALUACION_PRIMARIA()
{
    this.iID_FRAP = idFRAP,
        this.TIPO_FRAP = 'online',

        this.iCTLG_PRIORIDAD_ID  = (checkValue(iframe.find('input[name = ep_prioridad]:checked').val())),
        //console.log(iframe.find('input[name = ep_prioridad]:checked').val());

        this.iCTLG_NIVEL_CONCIENCIA_ID = (checkValue(iframe.find('input[name = nivel_conciencia]:checked').val())),
        //console.log(iframe.find('input[name = nivel_conciencia]:checked').val());

        this.iCTLG_VIA_AEREA_ID = (checkValue(iframe.find('input[name = via_aerea]:checked').val())),
        //console.log(iframe.find('input[name = via_aerea]:checked').val());

        this.iCTLG_VENTILACION_ID = (checkValue(iframe.find('input[name = ventilacion]:checked').val())),
        //console.log(iframe.find('input[name = ventilacion]:checked').val());

        this.iCTLG_CALIDAD_VENTILACION_ID = (checkValue(iframe.find('input[name = calidad_ventilacion]:checked').val())),
        //console.log(iframe.find('input[name = calidad_ventilacion]:checked').val());

        this.iCTLG_PULSOS_ID = (checkValue(iframe.find('input[name = pulsos]:checked').val())),
        //console.log(iframe.find('input[name = pulsos]:checked').val());

        this.iCTLG_PULSOS_CALIDAD_ID = (checkValue(iframe.find('input[name = ep_calidad]:checked').val())),
        //console.log(iframe.find('input[name = ep_calidad]:checked').val());

        this.iCTLG_RITMO_ID = (checkValue(iframe.find('input[name = ep_ritmo]:checked').val())),
        //console.log(iframe.find('input[name = ep_ritmo]:checked').val());

        this.iCTLG_COLORACION_ID = (checkValue(iframe.find('input[name = ep_coloracion]:checked').val())),
        //console.log(iframe.find('input[name = ep_coloracion]:checked').val());

        this.iCTLG_TEMPERATURA_ID = (checkValue(iframe.find('input[name = ep_temperatura]:checked').val())),
        //console.log(iframe.find('input[name = ep_temperatura]:checked').val());

        this.iCTLG_CONDICION_ID = (checkValue(iframe.find('input[name = ep_condicion]:checked').val())),
        //console.log(iframe.find('input[name = ep_condicion]:checked').val());

        this.iPOSICION = (checkValue(iframe.find('input[name = ep_posicion]:checked').val()))
    //console.log(iframe.find('input[name = ep_posicion]:checked').val());

    /*this.iCTLG_EMERGENCIA_MOTIVOS = (checkValue(iframe.find('input[name = nivel_conciencia]:checked')).val())
        console.log(iframe.find('input[name = nivel_conciencia]:checked').val());*/
}


// Subseccion de: EVALUACION_SECUNDARIA
function SEMIOLOGIA_DOLOR()
{
    this.iAPARICION = checkValue(iframe.find('input[name = sd_aparicion]:checked').val()),
        this.LOCALIZACION = checkText(iframe.find('#sd_localizacion').val()),
        this.IRRADIACION = checkText(iframe.find('#sd_irradiacion').val()),
        this.CARACTERISTICAS = checkText(iframe.find('#sd_caracteristicas').val()),
        this.ALIVIO =  checkText(iframe.find('#sd_alivio').val()),
        this.HORA_INICIO = checkText(iframe.find('#sd_inicio').val()),
        this.iINTENSIDAD = (iframe.find('#sd_intensidad').val() != 'Selecciona un valor') ? iframe.find('#sd_intensidad').val() : 0
}

// Subseccion de: EVALUACION_SECUNDARIA

function SAMPLER()
{
    this.SINTOMAS = checkText(iframe.find('#sampler_sintomas').val()),
        this.ALERGIAS = checkText(iframe.find('#sampler_alergias').val()),
        this.MEDICAMENTOS = checkText(iframe.find('#sampler_medicamentos').val()),
        this.PADECIMIENTOS = checkText(iframe.find('#sampler_padecimientos').val()),
        this.ULTIMA_COMIDA = checkText(iframe.find('#sampler_ultima_comida').val()),
        this.EVENTOS_RELACIONADOS = checkText(iframe.find('#sampler_eventos_relacionados').val())
    // =============================> his.FACTOR_RIESGO; agregar
}

function EVALUACION_SECUNDARIA()
{
    this.iID_FRAP = idFRAP,
        this.TIPO_FRAP = 'online',

        this.DIAGNOSTICO_ELECTROGRAFICO = (checkText(iframe.find('#diagnostico_electrografico').val())),

        // -------> No son necesarias las validaciones?
        this.iDERIVACIONES = checkValue(iframe.find('input[name = es_derivaciones]:checked').val()),
        this.iCTLG_GLASGOW_MOTRIZ_ID = checkValue(iframe.find('input[name = glasgow_motora]:checked').val()),
        this.iCTLG_GLASGOW_VERBAL_ID = checkValue(iframe.find('input[name = glasgow_verbal]:checked').val()),
        this.iCTLG_GLASGOW_VISUAL_ID = checkValue(iframe.find('input[name = ocular]:checked').val()),

        //el rescate del tipo no es claro
        this.EVALUACION_GLASGOW = checkValue(iframe.find('input[name = glasgow_motora]:checked').val()) + checkValue(iframe.find('input[name = glasgow_verbal]:checked').val()) + checkValue(iframe.find('input[name = ocular]:checked').val()),
        // console.log(((iframe.find('input[name = glasgow_motora]:checked')).val()) + ((iframe.find('input[name = glasgow_verbal:checked')).val()) + ((iframe.find('input[name = ocular]:checked')).val()))
        this.iCTLG_SIGNOS_NEUROLOGICOS_ID = checkValue(iframe.find('input[name = es_signos_neurologicos]:checked').val()),
        this.iPUPILAS_IZQUIERDA = checkValue(iframe.find('input[name = pupilas_zquierda]:checked').size()),
        this.iPUPILAS_DERECHA = checkValue(iframe.find('input[name = pupilas_derecha]:checked').size()),
        this.iRITMO = checkValue(iframe.find('input[name = es_ritmo]:checked').size()),
        this.iPERISTALSIS = checkValue(iframe.find('input[name = peristalsis]:checked').size())

    // --> this.iFRECUENCIA_CARDIACA = 0, // (checkText(iframe.find('input[name = frecuencia_cardiaca]:checked')).val()),
    // -->this.iTEMPERATURA = 0, //(checkText(iframe.find('input[name = metabolico_temperatura]:checked')).val()),
    // -->this.iGLUCOMETRIA = 0 //(checkText(iframe.find('input[name = metabolico_iglucometria]:checked')).val())

}



function PARO_CARDIORESPIRATORIO()
{
    this.iID_FRAP = idFRAP,
        this.TIPO_FRAP = 'online',

        this.iOCURRIO = checkValue(iframe.find('input[name=pc_antes]:checked').size()),
        this.iCTLG_MOTIVOS_NOREANIMACION_ID_CTLG_MOTIVOS_NOREANIMACION =  checkValue(iframe.find('nput[name=pc_NOreanimacion]:checked').size()),
        this.iCTLG_TIPO_ETIOLOGIA_ID_CTLG_TIPO_ETIOLOGIA =  checkValue(iframe.find('input[name=pc_etiologia]:checked').size()),
        this.iRETORNO_CIRCULACION_ESPONTANEA =  checkValue(iframe.find('input[name=retorno]:checked').size()),
        this.iTIEMPO_REANIMACION = checkValue(iframe.find('input[name=paro_tiempo]:checked').size()),
        this.HORA_DETIENE_RCP = checkText(iframe.find('#paro_hora').val()),
        this.iPARO_ARRIBO = checkValue(iframe.find('input[name=paro_arribo]:checked').size()),
        this.iPARO_RCP = checkValue(iframe.find('input[name=paro_rcp]:checked').size()),
        this.iPARO_DESFIB = checkValue(iframe.find('input[name=paro_desfib]:checked').size()),
        this.iPARO_SVA = checkValue(iframe.find('input[name=paro_sva]:checked').val()),
        this.iREANIMACION = checkValue(iframe.find('input[name=reanimacion]:checked').size())
}

function EMERGENCIA_RESULTADO()
{
    this.iID_FRAP = idFrap,
        this.TIPO_FRAP = 'online',

        this.iRESULTADO = checkValue(iframe.find('input[name=resultado_emergencia]:checked').size()),
        this.iTRASLADO = checkValue(iframe.find('input[name=resultado_traslado]:checked').size()),
        this.iPRIORIDAD_FINAL = checkValue(iframe.find('input[name=pridad_final]:checked').size()),
        this.FOLIO_RECEPCION = checkText(iframe.find('#folio_recepcion').val()),
        this.MEDICO_RECIBE = checkText(iframe.find('#medico_recibe').val()),
        this.DENOMINACION = checkText(iframe.find('#matricula').val())
    //this.FIRMA_MEDICO =imgFirmaMedico;
}

function FRAP_OTROS()
{
    this.iID_FRAP = idFRAP,
        this.TIPO_FRAP = 'online',

        this.DEPENDENCIA = checkText(iframe.find('#otros_dependencia').val()),
        this.UNIDADES = checkText(iframe.find('#otros_unidades').val()),
        this.NOMBRE = checkText(iframe.find('#otros_nombre').val())

}

function CONSENTIMIENTO()
{
    this.iID_FRAP = idFRAP,
        this.TIPO_FRAP = 'online',

        this.NOMBRE_PACIENTE = checkText(iframe.find('#consentimiento_nombre_paciente').val()),
        this.NOMBRE_TESTIGO = checkText(iframe,find('#consentimiento_nombre_testigo').val())
    //this.FIRMA_PACIENTE = (imgConsentimientoFirmaPaciente != '') ? imgConsentimientoFirmaPaciente : '-';
    //this.FIRMA_TESTIGO = (imgConsentimientoFirmaTestigo != '') ? imgConsentimientoFirmaTestigo : '-';
}




// AQUI INICIAN SUBSECCIONES DE: TRATAMIENTO

function MANEJO_VIA_AEREA()
{
    this.iASPIRACION = checkValue(iframe.find('input[name=aspiracion]:checked').size()),
        this.iCTLG_DISPOSITIVO_APERTURA_ID_CTLG_DISPOSITIVO_APERTURA = checkValue(iframe.find('input[name=dispositivo_apertura]:checked').size()),
        this.iCTLG_MANEJO_VIA_AEREA_ID_CTLG_MANEJO_VIA_AEREA = checkValue(iframe.find('input[name=manejo_via_aerea]:checked').size())
    //this.INTUBACION_ID_INTUBACION; agregar
}

function ASISTENCIA_VENTILATORIA()
{
    this.DISPOSITIVO = checkValue(iframe.find('input[name=dispositivo]:checked').size()),
        this.iFRECUENCIA = checkText(iframe.find('#asistencia_frecuencia').val()),
        this.iVOLUMEN = (iframe.find('#asistencia_volumen').val() !='') ? iframe.find('#asistencia_volumen').val() : 0,
        this.MODALIDAD_VENTILATORIA = checkText(iframe.find('#asistencia_modalidad').val())
}

function OXIGENO_TERAPIA()
{
        this.iLITROS_MINUTO = (iframe.find('#oxi_litros').val() !='') ? iframe.find('#oxi_litros').val() : 0,
        this.iCTLG_OXIGENOTERAPIA_ID = checkText(iframe.find('input[name=tipo_oxigenoterapia]:checked').size())
}

function DESCOMPRESION_PLEURAL()
{
    this.iCALIBRE = (iframe.find('#hemitorax_calibre').val() != '') ? iframe.find('#hemitorax_calibre').val() : 0,
        this.iCTLG_HEMITORAX_ID_CTLG_HEMITORAX = checkValue(iframe.find('input[name=hemitorax]:checked').val()) // verify local
}

function CONTROL_HEMORRAGIAS()
{
    this.iCTLG_CONTROL_HEMORAGIAS_ID = checkValue(iframe.find('input[name=control_hemorragia]:checked').size()),
        this.HORA_COLOCACION = checkText(iframe.find('#control_hemorragia_HORA').val())
}


function ACCESO_CIRCULATORIO()
{
    // check all local
    this.iCTLG_VIA_ACCESO_ID_CTLG_VIA_ACCESO = checkValue(iframe.find('input[name=acceso_via_acceso]:checked').val()),
        this.iCTLG_ZONA_COLOCACION_ID = checkValue(iframe.find('input[name=acceso_zona]:checked').val()),
        this.iCTLG_SOLUCION_ID_CTLG_SOLUCION = checkValue(iframe.find('input[name=acceso_tipo]:checked').val()),
        this.iBOMBA_INFUSION = checkValue(iframe.find('input[name=acceso_bomba]:checked').val()),
        this.iCALIBRE = (iframe.find('#acceso_calibre').val() != '' ) ? iframe.find('#acceso_calibre').val() : 0,
        this.iVOLUMEN_INFUNDIDO = (iframe.find('#acceso_volumen').val() !='') ? iframe.find('#acceso_volumen').val() : 0,
        this.HORA_COLOCACION = (iframe.find('#acceso_hora').val() !='') ? iframe.find('#acceso_hora').val() : '00 : 00'
}

function INTERVENCIONES()
{
    this.iCONTROL_CERVICAL = checkValue(iframe.find('input[name=intervenciones_control]:checked').size()),
        this.iEMPAQUETAMIENTO = checkValue(iframe.find('input[name=intervenciones_empaquetamiento]:checked').size()),
        this.iCURACION_VENDAJE = checkValue(iframe.find('input[name=intervenciones_curacion]:checked').size()),
        this.iINMOVILIZACION_EXTREMIDADES = checkValue(iframe.find('input[name=intervenciones_inmobilizacion]:checked').size())
}

function TERAPIA_ELECTRICA()
{
    this.iDESCARGAS = checkValue(iframe.find('#terapia_descargas').val()),
        this.iJOULES = checkValue(iframe.find('#terapia_joules').val()),
        this.iMA = checkValue(iframe.find('#terapia_ma').val()),
        this.iFRECUENCIA = checkValue(iframe.find('#terapia_frecuencia').val())
    //this.terapia_tipo = $('input[name=terapia_tipo]:checked').val(); // check local
}

function TRATAMIENTO()
{
    // add all parts
    this.iID_FRAP = idFRAP,
        this.TIPO_FRAP = 'online',
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
        this.OBSERVACIONES = (iframe.find('#tratamiento_observaciones').val() != '') ? iframe.find('#tratamiento_observaciones').val() : '-'
}

function CLINICO()
{
    this.iID_FRAP = idFRAP,
        this.TIPO_FRAP = 'online',

        this.DIAGNOSTICO_SINDROMATICO = checkText(iframe.find('#diagnostico_sindromatico').val()),
        this.iCTLG_ORIGEN_PROBABLE_ID = checkValue(iframe.find('input[name=origen_probable]:checked').size()),
        this.OBSERVACIONES = checkText(iframe.find('#ds_observaciones').val())
}

function TRAUMA()
{
    this.iID_FRAP = idFRAP,
        this.TIPO_FRAP = 'online',

        this.iINTENCIONALIDAD = checkValue(iframe.find('input[name=trauna_intencionalidad]:checked').size()),
        this.iCTLG_AGENTE_CAUSAL_GENERAL_ID = checkValue(iframe.find('input[name=trauna_ac]:checked').size()),
        this.iCTLG_AGENTE_CAUSAL_ESPECIFICO_ID = checkValue(iframe.find('input[name=trauna_ace]:checked').size()),
        this.OBSERVACIONES = checkText(iframe.find('#trauma_observaciones').val())
}


function VIAL()
{
        this.iID_FRAP = idFRAP,
        this.TIPO_FRAP = 'online',

        this.iCTLG_TIPO_ACCIDENTE_VIAL_ID = checkValue(iframe.find('input[name=vial_tipo]:checked').size()),
        this.iCTLG_TIPO_LESIONADO_ID = checkValue(iframe.find('input[name=vial_lesionado]:checked').size()),
        this.iCTLG_ACTOR_VIAL_ID = checkValue(iframe.find('input[name=vial_actor]:checked').size()),
        this.iCTLG_ATROPELLADO_POR_ID = checkValue(iframe.find('input[name=vial_tropella]:checked').size()),
        this.iEYECTADO = checkValue(iframe.find('input[name=vial_eyectado]:checked').size()),
        this.iDECESOS = checkValue(iframe.find('input[name=vial_decesos]:checked').size()),
        this.iPRENSADO = checkValue(iframe.find('input[name=vial_presado]:checked').size()),
        this.iCASCO = checkValue(iframe.find('input[name=vial_casco]:checked').size()),
        this.iCTLG_IMPACTO_ID = checkValue(iframe.find('input[name=vial_impacto]:checked').size()),
        this.iCTLG_VOLANTE_ID = checkValue(iframe.find('input[name=vial_volante]:checked').size()),
        this.iCTLG_PARABRISAS_ID = checkValue(iframe.find('input[name=vial_parabrisas]:checked').size()),
        this.iCTLG_BOLSA_AIRE_ID = checkValue(iframe.find('input[name=vial_bolsas]:checked').size()),
        this.iCTLG_CINTURON_SEGURIDAD_ID = checkValue(iframe.find('input[name=vial_cinturon]:checked').size()),
        this.OBSERVACIONES = checkText(iframe.find('#vial_observaciones').val())
}

function GINECOLOGICO()
{
    this.iID_FRAP = idFRAP,
        this.TIPO_FRAP = 'online',

        this.iGESTA = (iframe.find('#ginecologico_gesta').val() != '') ? iframe.find('#ginecologico_gesta').val() : 0,
        this.iPARA = (iframe.find('#ginecologico_para').val() != '') ? iframe.find('#ginecologico_para').val() : 0,
        this.iCESARIA = (iframe.find('#ginecologico_cesarea').val() != '') ? iframe.find('#ginecologico_cesarea').val() : 0,
        this.iABORTOS = (iframe.find('#ginecologico_abortos').val() != '') ? iframe.find('#ginecologico_abortos').val() : 0,
        this.iSEMANAS_GESTACION = (iframe.find('#ginecologico_semanas').val() != '') ? iframe.find('#ginecologico_semanas').val() : 0,
        this.FUM = (iframe.find('#fum').val() != '') ? iframe.find('#fum').val() : '-',
        this.HORA_INICIO_CONTRACCIONES = (iframe.find('#ginecologico_hora').val() != '') ? iframe.find('#ginecologico_hora').val() : '-',
        this.iFRECUENCIA = (iframe.find('#ginecologico_frecuencia').val() != '') ? iframe.find('#ginecologico_frecuencia').val() : 0,
        this.iDURACION = (iframe.find('#ginecologico_duracion').val() != '') ? iframe.find('#ginecologico_duracion').val() : 0,
        this.HORA_NACIOMIENTO = (iframe.find('#ginecologico_semanas').val() != '') ? iframe.find('#ginecologico_semanas').val() : '-',
        this.iPLACENTA_EXPULSADA = (iframe.find('input[name=placenta]:checked').size() > 0 ? iframe.find('input[name=placenta]:checked').val(): 0),
        this.LUGAR_NACIMIENTO = (iframe.find('#ginecologico_lugarN').val() != '') ? iframe.find('#ginecologico_lugarN').val() : '-',
        this.iPRODUCTO_VIVO = (iframe.find('input[name=producto]:checked').size() > 0 ? iframe.find('input[name=producto]:checked').val(): 0),
        this.iSEXO = (iframe.find('input[name=producto_sexo]:checked').size() > 0 ? iframe.find('input[name=producto_sexo]:checked').val(): 0),
        this.iCONTROL_PARENTAL = (iframe.find('input[name=control_parental]:checked').size() > 0 ? iframe.find('input[name=control_parental]:checked').val(): 0),
        this.iEMBARAZO_ALTO_RIESGO = (iframe.find('input[name=emarazo_riesgo]:checked').size() > 0 ? iframe.find('input[name=emarazo_riesgo]:checked').val(): 0),
        this.iESQUEMA_MADURACION_PULMONAR = (iframe.find('input[name=maduracion_pulmonar]:checked').size() > 0 ? iframe.find('input[name=maduracion_pulmonar]:checked').val(): 0),
        this.iAPGAR1 = (iframe.find('#apgar1').val() != '') ? iframe.find('#apgar1').val() : 0,
        this.iAPGAR5 = (iframe.find('#apgar5').val() != '') ? iframe.find('#apgar5').val() : 0,
        this.iAPGAR10 = (iframe.find('#apgar10').val() != '') ? iframe.find('#apgar10').val() : 0,
        this.iSILVERMAN = (iframe.find('#silvermann').val() != '') ? iframe.find('#silvermann').val() : 0,
        this.iMEMBRANAS_INTEGRAS = (iframe.find('input[name=membranas]:checked').size() > 0 ? iframe.find('input[name=membranas]:checked').val(): 0),
        this.OBSERVACIONES = (iframe.find('#ginecologico_observaciones').val() != '') ? iframe.find('#ginecologico_observaciones').val() : '-'
}


function FRAP_LEGAL()
{
    this.iID_FRAP = idFRAP,
        this.TIPO_FRAP = 'online',

        this.PERTENENCIAS = checkText(iframe.find('#legal_pertenencias').val()),
        this.NOMBRE = checkText(iframe.find('#recibe_pertenencias').val()),
        //this.FIRMA = (imgFirmaRecibe != '') ? imgFirmaRecibe : '-';
        this.TOMA_CONOCIMIENTO = checkText(iframe.find('#legal_toma').val()),
        this.OBSERVACIONES = checkText(iframe.find('#legal_observaciones').val())
}

function NEGATIVA()
{
    // verify all local
    this.NOMBRE_PACIENTE = checkText(iframe.find('#negativa_nombre_paciente').val()),
        this.NOMBRE_TESTIGO = checkText(iframe.find('#negativa_nombre_testigo').val())
    //this.FIRMA_TESTIGO =  (imgNegativaFirmaTestigo != '') ? imgNegativaFirmaTestigo : '-';
    //this.FIRMA_PACIENTE = (imgNegativaFirmaPaciente !='') ? imgNegativaFirmaPaciente : '-';
}

// Inicia la validación de insumos

function INSUMOS_NIVEL_BASICO()
{
    // verify all local ***

    this.SONDA_ASPIRACION = (((iframe.find('#sonda_aspiracion').val() != 'Selecciona un valor') || (!iframe.find('#sonda_aspiracion').val()))) ? iframe.find('#sonda_aspiracion').val() :0,
        this.PUNTAS_NASALES = check_insumos(iframe.find('#puntas_nasales').val()),
        this.MASCARILLA_ADULTO = check_insumos(iframe.find('#mascarilla_adulto').val()),
        this.PUNZOCATH_14 = check_insumos(iframe.find('#punzocath_14').val()),
        this.PUNZOCATH_16 = check_insumos(iframe.find('#punzocath_16').val()),
        this.PUNZOCATH_18 = check_insumos(iframe.find('#punzocath_18').val()),
        this.PUNZOCATH_20 = check_insumos(iframe.find('#punzocath_20').val()),
        this.PUNZOCATH_22 = check_insumos(iframe.find('#punzocath_22').val()),
        this.VENOPACK_NORMOGOTERO = check_insumos(iframe.find('#venopack').val()),
        this.JERINGA_5_CC = check_insumos(iframe.find('#jeringa_5').val()),
        this.JERINGA_10_CC = check_insumos(iframe.find('#jeringa_10').val()),
        this.GUANTES = check_insumos(iframe.find('#guantes').val()),
        this.GASA_SIMPLE = check_insumos(iframe.find('#gasa_simple').val()),
        this.VENDA_ELASTICA_5_CM = (iframe.find('#venda_elastica_5').val()),
        this.VENDA_ELASTICA_10_CM = (iframe.find('#venda_elastica_10').val()),
        this.VENDA_ELASTICA_30_CM = (iframe.find('#venda_elastica_30').val()),
        this.TIRA_REACTIVA = (iframe.find('#tira_reactiva').val()),
        this.LANCETA = check_insumos(iframe.find('#lanceta').val()),
        this.NaCL_9 = check_insumos(iframe.find('#nacl_9').val()),
        this.HARTMANN = check_insumos(iframe.find('#hartmann').val()),
        this.GLUCOSA_5 = check_insumos(iframe.find('#glucosa_5').val()),
        this.GLUCOSA_10 = check_insumos(iframe.find('#glucosa_10').val()),
        this.GLUCOSA_50 = check_insumos(iframe.find('#glucosa_50').val()),
        this.MIXTA = check_insumos(iframe.find('#mixta').val()),
        this.SABANA_DESECHABLE = check_insumos(iframe.find('#sabana_desechable').val()),
        this.EQUIPO_PARTO = check_insumos(iframe.find('#equipo_parto').val())
}

function INSUMOS_NIVEL_INTERMEDIO()
{
    // verify all local ***

    this.TUBO_ENDROTRAQUEAL_75 = check_insumos(iframe.find('#tubo_endrotrauqeal_75').val()),
        this.TUBO_ENDROTRAQUEAL_8 = check_insumos(iframe.find('#tubo_endrotrauqeal_8').val()),
        this.TUBO_ENDROTRAQUEAL_85 = check_insumos(iframe.find('#tubo_endrotrauqeal_85').val()),
        this.MASCARILLA_LARINGEA = check_insumos(iframe.find('#mascarilla_laringea').val()),
        this.MASCARILLA_PEDIATRICA = check_insumos(iframe.find('#mascarilla_faringea').val()),
        this.CANULA_OROFARINGEA = check_insumos(iframe.find('#canula_orofaringea').val()),
        this.VENOPACK_MICROGOTERO = check_insumos(iframe.find('#venopack_microgotero').val()),
        this.JERINGA_INSULINA = check_insumos(iframe.find('#jeringa_insulina').val()),
        this.CLAMPS_UMBILICALES = check_insumos(iframe.find('#clambs_umbilicales').val()),
        this.ELECTRODOS_ADULTO = check_insumos(iframe.find('#electrodos_adulto').val()),
        this.ELECTRODOS_PEDIATRICOS = check_insumos(iframe.find('#electrodos_pediatricos').val()),
        this.FORMATO_REGISTRO_ATENCION_PREHOSPITALARIA = check_insumos(iframe.find('#papel_electrocardiograma').val())
}


function INSUMOS_NIVEL_AVANZADO()
{
    // verify all local ***

    this.TUBO_ENDROTRAQUEAL_35 = (iframe.find('#tubo_endrotrauqeal_35').val()),
        this.TUBO_ENDROTRAQUEAL_4 = check_insumos(iframe.find('#tubo_endrotrauqeal_4').val()),
        this.TROCAR_TORACICO_14 = check_insumos(iframe.find('#trocar_toracico_14').val()),
        this.TROCAR_TORACICO_16 = check_insumos(iframe.find('#trocar_toracico_16').val()),
        this.TROCAR_TORACICO_18 = check_insumos(iframe.find('#trocar_toracico_18').val()),
        this.SONDA_NASOGASTRICA = check_insumos(iframe.find('#sonda_nasogastrica').val()),
        this.PARCHES_MARCAPASOS = check_insumos(iframe.find('#parches_marcapasos').val()),
        this.OTRO = check_insumos(iframe.find('#insumos_otros').val())
}

















var tbPaciente = {};

// JC
var tbEvaluacion_primaria = {};
var tbEvaluacion_secundaria = {};
var tbParo_cardioRespiratorio = {};
var tbEmergencia_resultado = {};
var tbFrap_otros = {};
var tbFrap_legal = {};
var tbConsentimiento = {};
var tbTratamiento = {};
var tbClinico = {};
var tbTrauma = {};
var tbVial = {};

var tbGinecologico = {};
var tbNegativa = {};
var tbInsumos_nivelBasico = {};
var tbInsumos_nivelIntermedio = {};
var tbInsumos_nivelAvanzado = {};

var tbMedia_filiacion = {};

// Funciones para guardar de forma local

/*
function guardarPaciente(){

    idFRAP = $.jStorage.get("idFRAP");



    frap.secciones.direccion = new DIRECCION();
    frap.secciones.paciente = new PACIENTE();


     //tbPaciente = new PACIENTE();

    tbPaciente = $.extend(frap.secciones.paciente,frap.secciones.direccion);

     frap.secciones.paciente = tbPaciente;

     dataBase.saveTable('PACIENTE', tbPaciente);
    frap.enviar();
}
*/






// MARK: Funciones de recopilación de datos


function guardarPaciente()
{
    idFRAP = $.jStorage.get("idFRAP");


    // HTML -> objeto frap : correspondiendo con el modelo de la base de datos del servidor
    //=========================================================================================
    frap.secciones.direccion = new DIRECCION(); // modificar de acuerdo al modelo
    frap.secciones.paciente = new PACIENTE();


    // objecto frap -> DB loca : gestiona las secciones de objeto frap en objectos TB-Name para guardar en base de datos
    //=========================================================================================
    tbPaciente = $.extend(frap.secciones.paciente, frap.secciones.direccion);


    //frap.secciones.paciente = tbPaciente;

    dataBase.saveTable('PACIENTE', tbPaciente);

    // modifica el estado de una entrada del objeto
    estado_secciones['PACIENTE']=1;

    console.log(estado_secciones['PACIENTE']);
    // guarda el objeto actual
    $.jStorage.set("estado_secciones", estado_secciones);
    $.jStorage.set("estado_frap", String('1'),{});

    //frap.enviar();

}

function guardarMediaFiliacion()
{
    idFRAP = $.jStorage.get("idFRAP");

    frap.secciones.media_filiacion = new MEDIA_FILIACION();

    tbMedia_filiacion = frap.secciones.media_filiacion;

    dataBase.saveTable('MEDIA_FILIACION', tbMedia_filiacion);

}



function guardarEvaluacion_primaria()
{
    idFRAP = $.jStorage.get("idFRAP");

    frap.secciones.evaluacion_primaria = new EVALUACION_PRIMARIA();


    tbEvaluacion_primaria = frap.secciones.evaluacion_primaria;

    //frap.secciones.evaluacion_primaria = tbEvaluacion_primaria;

    dataBase.saveTable('EVALUACION_PRIMARIA', tbEvaluacion_primaria);

   // frap.enviar();
}


function guardarEvaluacion_secundaria()
{
    idFRAP = $.jStorage.get("idFRAP");

    frap.secciones.simbologia_dolor = new SEMIOLOGIA_DOLOR();
    frap.secciones.sampler = new SAMPLER();
    frap.secciones.evaluacion_secundaria = new EVALUACION_SECUNDARIA();

    tbEvaluacion_secundaria = $.extend(frap.secciones.evaluacion_secundaria, ($.extend(frap.secciones.simbologia_dolor, frap.secciones.sampler)));

    // frap.secciones.evaluacion_secundaria = tbEvaluacion_secundaria;



    // Factores de riesgo
    // 1) llenar el objecto



    // 2) guardar la tabla



    var funciones = [];
    var testF;


    //console.log(iframe.find('#fr_has'));
    //console.log(iframe.find('#fr_has').is(':checked'));


    if( iframe.find('#fr_has').is(':checked') ){
        var fn = function(){
            var dfd = $.Deferred();
            var tabla={
                "iFRAP_ID" : idFRAP,
                "TIPO_FRAP" : tipoFRAP,
                "iCTLG_FACTOR_RIESGO" : '1'
            };

            dataBase.saveTableA('FACTORES',tabla, function(){
                dfd.resolve();
            });

            return dfd.promise();
        };


        funciones.push(fn());
    }

    if( iframe.find('#fr_dislipidemias').is(':checked') ){
        var fn  = function(){
            var dfd = $.Deferred();
            var tabla={
                "iFRAP_ID" : idFRAP,
                "TIPO_FRAP" : tipoFRAP,
                "iCTLG_FACTOR_RIESGO" : '2'
            };

            dataBase.saveTableA('FACTORES',tabla, function(){
                dfd.resolve();
            });

            return dfd.promise();

        };
        funciones.push(fn());
    }



    if( iframe.find('#fr_diabetes').is(':checked') ){
        var fn = function(){
            var dfd2 = $.Deferred();
            var tabla={
                "iFRAP_ID" : idFRAP,
                "TIPO_FRAP" : tipoFRAP,
                "iCTLG_FACTOR_RIESGO" : '3'
            };

            dataBase.saveTableA('FACTORES',tabla, function(){
                dfd2.resolve();
            });
            return dfd2.promise();
        };
        funciones.push(fn());

    }

    if( iframe.find('#fr_obesidad').is(':checked') ){
        var fn = function(){
            var dfd = $.Deferred();
            var tabla={
                "iFRAP_ID" : idFRAP,
                "TIPO_FRAP" : tipoFRAP,
                "iCTLG_FACTOR_RIESGO" : '4'
            };

            dataBase.saveTableA('FACTORES',tabla, function(){
                dfd.resolve();
            });
            return dfd.promise();
        };
        funciones.push(fn());

    }

    if( iframe.find('#fr_tabaquismo').is(':checked') ){
        var fn = function(){
            var dfd = $.Deferred();
            var tabla={
                "iFRAP_ID" : idFRAP,
                "TIPO_FRAP" : tipoFRAP,
                "iCTLG_FACTOR_RIESGO" : '5'
            };
            dataBase.saveTableA('FACTORES',tabla, function(){
                dfd.resolve();
            });
            return dfd.promise();
        };
        funciones.push(fn());

    }

    if( iframe.find('#fr_sedentarismo').is(':checked') ){
        var fn = function(){
            var dfd = $.Deferred();
            var tabla={
                "iFRAP_ID" : idFRAP,
                "TIPO_FRAP" : tipoFRAP,
                "iCTLG_FACTOR_RIESGO" : '6'
            };
            dataBase.saveTableA('FACTORES',tabla, function(){
                dfd.resolve();
            });
            return dfd.promise();
        };
        funciones.push(fn());

    }

    if( iframe.find('#fr_herencia').is(':checked') ){
        var fn = function(){
            var dfd = $.Deferred();
            var tabla={
                "iFRAP_ID" : idFRAP,
                "TIPO_FRAP" : tipoFRAP,
                "iCTLG_FACTOR_RIESGO" : '7'
            };
            dataBase.saveTableA('FACTORES',tabla, function(){
                dfd.resolve();
            });
            return dfd.promise();
        };
        funciones.push(fn());

    }

    if( iframe.find('#fr_estres').is(':checked') ){
        var fn = function(){
            var dfd = $.Deferred();
            var tabla={
                "iFRAP_ID" : idFRAP,
                "TIPO_FRAP" : tipoFRAP,
                "iCTLG_FACTOR_RIESGO" : '8'
            };

            dataBase.saveTableA('FACTORES',tabla, function(){
                dfd.resolve();
            });

            return dfd.promise();
        };
        funciones.push(fn());

    }

    if( iframe.find('#fr_alcoholismo').is(':checked') ){
        var fn = function(){
            var dfd = $.Deferred();
            var tabla={
                "iFRAP_ID" : idFRAP,
                "TIPO_FRAP" : tipoFRAP,
                "iCTLG_FACTOR_RIESGO" : '9'
            };

            dataBase.saveTableA('FACTORES',tabla, function(){
                dfd.resolve();
            });

            return dfd.promise();
        };
        funciones.push(fn());

    }

    if( iframe.find('#fr_edad').is(':checked') ){
        var fn = function(){
            var dfd = $.Deferred();
            var tabla={
                "iFRAP_ID" : idFRAP,
                "TIPO_FRAP" : tipoFRAP,
                "iCTLG_FACTOR_RIESGO" : '10'
            };

            dataBase.saveTableA('FACTORES',tabla, function(){
                dfd.resolve();
            });

            return dfd.promise();
        };
        funciones.push(fn());

    }

    // una funcion extra para extrae los hallas, éstos ya estan listos
    var fn = function(){
        var dfd = $.Deferred();

        dataBase.onSuccess = function(tx, results) {
            console.log('adentro Hallasgos');

            var  hallazgos ={};

            var len = results.rows.length;

            for (var i = 0; i < len; i++) {

                hallazgos["registro"+i]={ "iCTLG_LESIONES_ID":results.rows.item(i).CTLG_LESIONES_ID, "iCOORDENADA_X":(results.rows.item(i).COORDENADA_X), "iCOORDENADA_Y":(results.rows.item(i).COORDENADA_Y)};
                console.log(hallazgos["registro"+i]);

            }
            //console.log(len);
            frap.secciones.hallazgos = [];

            if(len !=0){
                frap.secciones.hallazgos = hallazgos;
            }
            dfd.resolve();
            //console.log('en rescate factores');
            //console.log(frap.secciones.evaluacion_secundaria.factores);
        };

        console.log('sacar');
        console.log('idFRAP'+idFRAP);
        console.log('tipoFRAP'+tipoFRAP);

        dataBase.getTable('HALLAZGOS_FISICOS', '*', " WHERE FRAP_ID ="+idFRAP+ " AND TIPO_FRAP='"+tipoFRAP+"' ");

        return dfd.promise();
    };
    funciones.push(fn());



    $.when.apply(null,funciones).done(function () {
        console.log('todas terminaron');

        dataBase.onSuccess = function(tx, r) {
            console.log(" when call");

            frap.cargas.loadES_Factores();
        };


        dataBase.saveTable('EVALUACION_SECUNDARIA', tbEvaluacion_secundaria);




    });
    /*
    $.when.apply(null, funciones).done(function () {
        console.log('todas terminaron');

        dataBase.onSuccess = function(tx, r) {
            console.log(" defult: Your SQLite query was successful!");
            alert(" defult: Your SQLite query was successful!");

            if(dataBase.tableName != ''){
                // alert("Querry successfull for table "+ dataBase.tableName);
            }
            else {
                //alert("Querry successfull");
            }

            frap.cargas.loadES_Factores();
        }


        dataBase.saveTable('EVALUACION_SECUNDARIA', tbEvaluacion_secundaria);

    }).fail(function () {
        alert('unexpected error must close');
    });
    */



/*
    $.when(funciones).done(function () {
        console.log('todas terminaron');

        dataBase.onSuccess = function(tx, r) {
            console.log(" defult: Your SQLite query was successful!");
            alert(" defult: Your SQLite query was successful!");

            if(dataBase.tableName != ''){
                // alert("Querry successfull for table "+ dataBase.tableName);
            }
            else {
                //alert("Querry successfull");
            }

            frap.cargas.loadES_Factores();
        }


        dataBase.saveTable('EVALUACION_SECUNDARIA', tbEvaluacion_secundaria);

    });
*/



/*
// Create a deferred object
    var dfd = $.Deferred();

    dfd
    // .done() can take any number of functions or arrays of functions
        .done( funciones )
        // We can chain done methods, too
        .done(function( n ) {
            console.log('terminaron todas');
            frap.cargas.loadES_Factores();
        });

    dfd.resolve( "and" );
*/



    //frap.secciones.evaluacion_secundaria.factores = getFactores();
    // frap.cargas.loadES_Factores();
    //frap.enviar();



}


function guardarParo_cardioRespiratorio()
{
    idFRAP = $.jStorage.get("idFRAP");


    frap.secciones.paro_cardioRespiratorio = new PARO_CARDIORESPIRATORIO();

    tbParo_cardioRespiratorio = frap.secciones.paro_cardioRespiratorio;

    frap.secciones.paciente = tbPaciente;

    dataBase.saveTable('PARO_CARDIORESPIRATORIO', tbPaciente);
}

function guardar_tratamiento()
{
    idFRAP = $.jStorage.get("idFRAP");


    frap.secciones.manejo_via_aerea = new MANEJO_VIA_AEREA();
    frap.secciones.asistencia_ventilatoria = new ASISTENCIA_VENTILATORIA();
    frap.secciones.oxigenoterapia = new OXIGENO_TERAPIA();
    frap.secciones.desc_ple = new DESCOMPRESION_PLEURAL();
    frap.secciones.control_hemorragias = new CONTROL_HEMORRAGIAS();
    frap.secciones.acceso_circulatorio = new ACCESO_CIRCULATORIO();
    frap.secciones.intervenciones = new INTERVENCIONES();
    frap.secciones.terapia_electrica = new TERAPIA_ELECTRICA();
    frap.secciones.tratamiento = new TRATAMIENTO();

    //Pude hacer esto en una linea, pero es mejor para el debug y la corrección de errores

    union1 = $.extend(frap.secciones.manejo_via_aerea, frap.secciones.asistencia_ventilatoria);
    union2 = $.extend(frap.secciones.oxigenoterapia, frap.desc_ple);
    union3 = $.extend(frap.secciones.control_hemorragias, frap.secciones.acceso_circulatorio);
    union4 = $.extend(frap.secciones.intervenciones, frap.secciones.terapia_electrica);

    unionUniniones = $.extend(union1, union2);
    unionUniniones2 = $.extend(unionUniniones, union3);
    unionUniniones3 = $.extend(unionUniniones2, union4);


    tbTratamiento = $.extend(unionUniniones3, frap.secciones.tratamiento);

    //frap.secciones.tratamiento = tbTratamiento;

    dataBase.saveTable('TRATAMIENTO', tbTratamiento);


    //frap.enviar();
}

function guardar_emergencia_resultado()
{
    frap.secciones.emergencia_resultado = new EMERGENCIA_RESULTADO();

    tbEmergencia_resultado = frap.secciones.emergencia_resultado;
    frap.secciones.emergencia_resultado = tbEmergencia_resultado;

    dataBase.saveTable('EMERGENCIA_RESULTADO', tbEmergencia_resultado);
}

function guardar_otros()
{
    frap.secciones.otros = new FRAP_OTROS();

    tbFrap_otros = frap.secciones.otros;
    frap.secciones.otros = tbFrap_otros;

    dataBase.saveTable('FRAP_OTROS', tbFrap_otros);
}

function guardar_legal()
{
    frap.secciones.legal = new FRAP_LEGAL();
    tbFrap_legal = frap.secciones.legal;

    dataBase.saveTable('FRAP_LEGAL', tbFrap_legal);

}

function guardar_consentimiento()
{
    frap.secciones.consentimiento = new CONSENTIMIENTO();

    tbConsentimiento = frap.secciones.consentimiento;
    frap.secciones.consentimiento = tbConsentimiento;

    dataBase.saveTable('CONSENTIMIENTO', tbConsentimiento);

}

function guardar_clinico()
{

    frap.secciones.clinico = new CLINICO();

    tbClinico = frap.secciones.clinico;
    frap.secciones.clinico = tbClinico;

    dataBase.saveTable('CLINICO', tbClinico);

    frap.enviar();
}

function guardar_trauma()
{
    frap.secciones.trauma = new TRAUMA();

    tbTrauma = frap.secciones.trauma;
    frap.secciones.trauma = tbTrauma;

    dataBase.saveTable('TRAUMA',tbTrauma);

    //frap.enviar();

}

function guardar_vial()
{


    frap.secciones.vial = new VIAL();
    tbVial = frap.secciones.vial;

    dataBase.saveTable('VIAL', tbVial);

    //frap.enviar();
}


function guardar_ginecologico()
{
    frap.secciones.ginecologico = new GINECOLOGICO();
    tbGinecologico = frap.secciones.ginecologico;

    dataBase.saveTable('GINECOLOGICO', tbGinecologico);

    frap.enviar();
}

function guardar_negativa()
{
    frap.secciones.negativa = new NEGATIVA();
    tbNegativa = frap.secciones.negativa;

    dataBase.saveTable('NEGATIVA', tbNegativa);
}

function guardar_insumosBasico()
{
    frap.secciones.insumosBasicos = new INSUMOS_NIVEL_BASICO();
    tbInsumos_nivelBasico = frap.secciones.insumosBasicos;

    dataBase.saveTable('INSUMOS_NIVEL_BASICO', tbInsumos_nivelBasico);
}

function guardar_insumosMedio()
{
    frap.secciones.insumosMedio = new INSUMOS_NIVEL_INTERMEDIO();
    tbInsumos_nivelIntermedio = frap.secciones.insumosMedio;

    dataBase.saveTable('INSUMOS_NIVEL_INTERMEDIO', tbInsumos_nivelIntermedio);
}

function guardar_insumosAvanzado()
{
    frap.secciones.insumosAvanzados = new INSUMOS_NIVEL_AVANZADO();
    tbInsumos_nivelAvanzado = frap.secciones.insumosAvanzados;

    dataBase.saveTable('INSUMOS_NIVEL_AVANZADO', tbInsumos_nivelAvanzado);
}












function getFactores(){

    var  hallazgo ={};

    var query = "SELECT * FROM FACTORES WHERE FRAP_ID ="+idFRAP+ " AND TIPO_FRAP='"+tipoFRAP+"' ";

    var db = window.openDatabase(shortName, version, displayName, maxSize);

    db.transaction(
        function(tx) {
            tx.executeSql(query, [],
                function(tx, rs) {

                    var len = rs.rows.length;

                    for (var i = 0; i < len; i++) {

                        hallazgo["registro"+i]={ "iCTLG_FACTOR_RIESGO":rs.rows.item(i).CTLG_FACTOR_RIESGO};

                    }
                },
                function(tx, error) {
                    alert('Error Signos: ' + error.message);
                });
        });

    return hallazgo;

}


// Funciones Obsoletas !? para guardar de forma local


//function guardarPaciente()


// ********************************************
// *AQUÍ INICIAMOS LA MODIFICACÓN DE EL CODIGO*
// ********************************************




// var tbEvaluacion_primaria = {};
// var tbEvaluacion_secundaria = {};










// fill Cliente
function successCliente(tx, results) {
    //alert('cargando usuario');

    var len = results.rows.length;
    if (len>0){
        $('#mediaFiliacion').val(results.rows.item(0).MEDIA_FILIACION);

        if( (results.rows.item(0).MEDIA_FILIACION !==' ') && (contadorMF==0) ){
            //alert('checar');
            //alert(results.rows.item(0).MEDIA_FILIACION);
            //$("#media_filiacion").prop("checked", true);
            //$("#media_filiacion").attr("checked", true);
            //document.getElementById("media_filiacion").checked = true;
            document.getElementById('media_filiacion').click();

            contadorMF++;
        }

        sec_paciente.iID_FRAP = results.rows.item(0).NOMBRE
        $('#nombre').val(results.rows.item(0).NOMBRE );



        $('#a_paterno').val(results.rows.item(0).APELLIDO_PATERNO );
        $('#a_materno').val(results.rows.item(0).APELLIDO_MATERNO );
        $('#fecha_nacimiento').val(results.rows.item(0).EDAD );
        $('#calle').val(results.rows.item(0).CALLE );
        $('#numero').val(results.rows.item(0).NUMERO_EXTERIOR );
        $('#colonia').val(results.rows.item(0).COLONIA );
        $('#delegacion').val(results.rows.item(0).DELEGACION );

        $('#cp').val(results.rows.item(0).CODIGO_POSTAL );
        $('#telefono').val(results.rows.item(0).TELEFONO );
        $('#ocupacion').val(results.rows.item(0).OCUPACION );

        $('#estado').val(results.rows.item(0).ESTADO );

        $('input:radio[name=servicio_medico][value='+results.rows.item(0).SERVICIO_MEDICO+']').click();
        $('input:radio[name=sexo][value='+results.rows.item(0).SEXOS_ID_SEXOS+']').click();
        $('input:radio[name=motivo_atencion][value='+results.rows.item(0).MOTIVO_ATENCION+']').click();

        // alert('Se cargo el paciente');

    }
    //cargarEvaluacionPrimaria(tipoE, idE);

}

/*function guardarEvaluacion_secundaria()
{
    idFRAP = $.jStorage.get("idFRAP");


    tbEvaluacion_secundaria = new EVALUACION_SECUNDARIA();
    dataBase.saveTable('EVALUACION_SECUNDARIA', tbEvaluacion_secundaria);
}*/





// code added by la Z

function recontruirFRAP(){
    setFromDB( 'PACIENTE', '*', " WHERE ID_FRAP = "+id+" and TIPO_FRAP='"+tipo+"' ", successCliente);
}

function setFromDB(){
    dataBase.getTable('PACIENTE', '*', " WHERE ID_FRAP = "+id+" and TIPO_FRAP='"+tipo+"' ", successCliente);
}

function obtenerPaciente(){
    dataBase.getTable('PACIENTE', '*', " WHERE ID_FRAP = "+id+" and TIPO_FRAP='"+tipo+"' ", successCliente);
}




// funciones de envio


function enviarFRAP(){
    var tipo = $('input[name=motivo_atencion]:checked').val();

    var fs ={};
    fs['FRAP']=[];

    fs['DIRECCION']=[];
    fs['PACIENTE']=[];

    fs['EVALUACION_PRIMARIA']=[];
    fs['SIMBOLIGIA_DOLOR']=[];
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




    frap_elementos["DIRECCION"] ={"intentos":0,"enviado":false, "datos" :sec_direccion};
    frap_elementos["PACIENTE"] ={"intentos":0,"enviado":false, "datos" :sec_paciente};


    // ajax amonia

}




function showMotivo(seccion_motivo){

    //seccion_motivo = "clinico";
    $.jStorage.set("motivo_atencion", String(seccion_motivo),{});
    //alert(seccion_motivo);
    console.log(seccion_motivo);

    /*
       var tipo = $('input[name=motivo_atencion]:checked').val();
       var seccion ='';

        var motivos = ["trauma", "clinico", "ginecologico", "vial"];

       switch(tipo) {
           case "1":
               seccion = "trauma";
               break;
           case "2":
               seccion = "clinico";
               break;
           case "3":
               seccion = "ginecologico";
               break;
           case "4":
               seccion = "vial";
               break;
       }

      // alert(seccion);
       motivos.forEach(ocultar);

       $('#'+seccion).css('display','inline-block');

       swiper.update();
       */
}




