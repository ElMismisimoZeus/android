
var objAux ={};

var frap = {};


// variables de identificación del FRAP
frap.id = 0;
frap.tipo = '';

// Agregar fragmentos
frap.secciones = {};


frap.secciones.paciente = [];
frap.secciones.direccion_paciente = [];
frap.secciones.datos_paciente = [];
frap.secciones.media_filiacion = [];
frap.secciones.motivo_atencion = [];


frap.secciones.paciente2 = [];
frap.secciones.evaluacion_primaria = [];

frap.secciones.simbologia_dolor = [];
frap.secciones.sampler = [];
frap.secciones.evaluacion_secundaria = [];

frap.secciones.hallazgos = [];
frap.secciones.factores = [];

//frap.secciones.evaluacion_secundaria.factores =[];



frap.secciones.manejo_via_aerea = [];
frap.secciones.asistencia_ventilatoria = [];
frap.secciones.oxigenoterapia = [];
frap.secciones.desc_ple = [];
frap.secciones.control_hemorragias = [];
frap.secciones.acceso_circulatorio = [];
frap.secciones.intervenciones = [];
frap.secciones.terapia_electrica = [];


//frap.secciones.control_hemorragias = [];

frap.secciones.tratamiento = [];


frap.secciones.trauma=[];
frap.secciones.clinico = [];
frap.secciones.vial = [];
frap.secciones.ginecologico = [];





frap.secciones.insumosBasicos = [];
frap.secciones.insumosMedio = [];
frap.secciones.insumosAvanzados = [];

frap.secciones.signos_vitales = [];






// Acciones de inicialización
//============================================================================
//============================================================================
frap.secciones.init = function(){

    frap.secciones.paciente =  new frap.initPaciente();
    frap.secciones.media_filiacion =  new frap.initMediaFiliacion();
    frap.secciones.datos_paciente = new frap.initDatosPaciente();
    frap.secciones.direccion_paciente = new frap.initDireccion();
    frap.secciones.motivo_atencion = new frap.initMotivoAtencion();



    //frap.secciones.paciente2 = new frap.initPaciente2();
    frap.secciones.evaluacion_primaria = new  frap.initEvaluacionPrimaria();

    frap.secciones.simbologia_dolor = new frap.initSEMIOLOGIA_DOLOR();
    frap.secciones.sampler = new frap.initSAMPLER();
    frap.secciones.evaluacion_secundaria = new frap.initEVALUACION_SECUNDARIA();
    //console.log(frap.secciones.evaluacion_secundaria);


    frap.secciones.manejo_via_aerea = new frap.initMANEJO_VIA_AEREA();
    frap.secciones.asistencia_ventilatoria = new frap.initASISTENCIA_VENTILATORIA();
    frap.secciones.oxigenoterapia = new frap.initOXIGENO_TERAPIA();
    frap.secciones.desc_ple = new frap.initDESCOMPRESION_PLEURAL();
    //frap.secciones.control_hemorragias = new frap.initCONTROL_HEMORRAGIAS();
    frap.secciones.acceso_circulatorio = new frap.initACCESO_CIRCULATORIO();
    frap.secciones.intervenciones = new frap.initINTERVENCIONES();
    frap.secciones.terapia_electrica = new frap.initTERAPIA_ELECTRICA();
    frap.secciones.tratamiento = new frap.initTRATAMIENTO();

    frap.secciones.trauma = new frap.initTRAUMA();
    frap.secciones.control_hemorragias = new frap.initCONTROL_HEMORRAGIAS();


    frap.secciones.clinico = new frap.initCLINICO();
    frap.secciones.vial = new frap.initVIAL();
    frap.secciones.ginecologico = new frap.initGINECOLOGICO();

    frap.secciones.insumosBasicos = new frap.iniINSUMOS_NIVEL_BASICO();
    frap.secciones.insumosMedio = new frap.iniINSUMOS_NIVEL_INTERMEDIO();
    frap.secciones.insumosAvanzados = new frap.initINSUMOS_NIVEL_AVANZADO();

};



// funciones de inicialización - Valores por dedult
//============================================================================


frap.initFRAP = function (status, validation, number, servicio){
        this.FOLIO = number,
        this.ESTATUS = status,
        this.VALIDACION = validation,
        this.iCTLG_TIPO_SERVICIO = 1,
            this.ID_SERVICIO =servicio // obtenerlo de ruben idService
        //this.iID_SERVICIO_MEDICO = ( iframe.find('input[name=servicio_medico]:checked').size() > 0 ? iframe.find('input[name=servicio_medico]:checked').val(): 0)
        //( iframe.find('input[name=motivo_atencion]:checked').size() > 0 ? iframe.find('input[name=motivo_atencion]:checked').val(): 0)
        //this.iCTLG_MOTIVO_ATENCION = ($('input[name=motivo_atencion]:checked').size() > 0 ? $('input[name=motivo_atencion]:checked').val(): 0)
};






frap.initPaciente2 = function(){

    // alert (iframe.find("#nombre").val()) ;
    frap.secciones.paciente.NOMBRE = ' ';
    frap.secciones.paciente.APELLIDO_PATERNO = ' ';
    frap.secciones.paciente.APELLIDO_MATERNO = ' ';
    frap.secciones.paciente.iSEXOS_ID_SEXOS  = 0;
    frap.secciones.paciente.EDAD = ' ';
    frap.secciones.paciente.iSERVICIO_MEDICO = 0;

    frap.secciones.paciente.TELEFONO = ' ' ;
    frap.secciones.paciente.OCUPACION = ' ';
    frap.secciones.paciente.iMOTIVO_ATENCION =0;


    //console.log(frap.secciones.paciente);

    //return frap.secciones.paciente;

};








// Funciones auxiliares

frap.auxiliares = {};

frap.auxiliares.Paciente = function(){
    this.iID_CTLG_SERVICIO_MEDICO = objAux.iID_CTLG_SERVICIO_MEDICO
};

frap.auxiliares.Direccion = function(){
    this.CALLE = objAux.CALLE,
    this.ESTADO = objAux.ESTADO,
    this.iNUMERO_EXTERIOR = objAux.iNUMERO_EXTERIOR,
    // this.NUMERO_INTERIOR = objAux.NUMERO_INTERIOR,
    this.COLONIA  = objAux.COLONIA,
    this.DELEGACION  = objAux.DELEGACION,
    this.iCP = objAux.iCP


};


frap.auxiliares.DatosPaciente = function(){
    this.NOMBRE = objAux.NOMBRE,
    this.APELLIDO_PATERNO = objAux.APELLIDO_PATERNO,
    this.APELLIDO_MATERNO = objAux.APELLIDO_MATERNO,
    this.FECHA_NACIMIENTO = objAux.FECHA_NACIMIENTO,
    this.TELEFONO = objAux.TELEFONO,
    this.OCUPACION = objAux.OCUPACION,
    this.CORREO_ELECTRONICO = objAux.CORREO_ELECTRONICO,
    this.ID_CTLG_SEXOS = objAux.ID_CTLG_SEXOS

};

frap.auxiliares.MediaFiliacion = function(){
    //this.iD_CTLG_MEDIA_FILIACION_ACCESORIOS = objAux.,
        this.iID_CTLG_MEDIA_FILIACION_CABELLO = objAux.iID_CTLG_MEDIA_FILIACION_CABELLO,
        this.iID_CTLG_MEDIA_FILIACION_CABELLO_COLOR = objAux.iID_CTLG_MEDIA_FILIACION_CABELLO_COLOR,
        this.iID_CTLG_MEDIA_FILIACION_COLOR_OJOS = objAux.iID_CTLG_MEDIA_FILIACION_COLOR_OJOS,
        this.iID_CTLG_MEDIA_FILIACION_COLOR_PIEL = objAux.iID_CTLG_MEDIA_FILIACION_COLOR_PIEL,
        this.iID_CTLG_MEDIA_FILIACION_COMPLEXION = objAux.iID_CTLG_MEDIA_FILIACION_COMPLEXION,
        this.iID_CTLG_MEDIA_FILIACION_NARIZ = objAux.iID_CTLG_MEDIA_FILIACION_NARIZ,
        this.iID_CTLG_MEDIA_FILIACION_PARTE_CUERPO = objAux.iID_CTLG_MEDIA_FILIACION_PARTE_CUERPO,
        //this.ID_CTLG_MEDIA_FILIACION_ROPA = objAux.ID_CTLG_MEDIA_FILIACION_ROPA,
        this.iID_CTLG_MEDIA_FILIACION_SENIAS = objAux.iID_CTLG_MEDIA_FILIACION_SENIAS,
        this.iID_CTLG_MEDIA_FILIACION_SENIA_LUGAR = objAux.iID_CTLG_MEDIA_FILIACION_SENIA_LUGAR,
        this.iID_CTLG_MEDIA_FILIACION_TAMANIO = objAux.iID_CTLG_MEDIA_FILIACION_TAMANIO,
        this.iID_CTLG_MEDIA_FILIACION_VOLUMEN = objAux.iID_CTLG_MEDIA_FILIACION_VOLUMEN
};


frap.auxiliares.MotivoAtencion = function(){
    this.iID_CTLG_MOTIVO_ATENCION = objAux.iID_CTLG_MOTIVO_ATENCION

};


frap.auxiliares.EvaluacionPrimaria = function()
{
        this.iID_CTLG_NIVEL_CONCIENCIA = objAux.iID_CTLG_NIVEL_CONCIENCIA,
        this.iID_CTLG_VENTILACION = objAux.iID_CTLG_VENTILACION,
        this.iID_CTLG_CALIDAD_VENTILACION = objAux.iID_CTLG_CALIDAD_VENTILACION,
        this.iID_CTLG_PULSOS = objAux.iID_CTLG_PULSOS,
        this.iID_CTLG_COLORACION = objAux.iID_CTLG_COLORACION,
        this.iID_CTLG_CONDICION = objAux.iID_CTLG_CONDICION,
        this.iID_CTLG_TEMPERATURA = objAux.iID_CTLG_TEMPERATURA,
        this.POSICION = objAux.POSICION,
        this.iID_CTLG_PRIORIDAD = objAux.iID_CTLG_PRIORIDAD,
        this.iID_CTLG_PULSOS_CALIDAD = objAux.iID_CTLG_PULSOS_CALIDAD,
        this.iID_CTLG_RITMO = objAux.iID_CTLG_RITMO,
        this.iID_CTLG_VIA_AEREA = objAux.iID_CTLG_VIA_AEREA
};

// every commented code must be uncommented by JC qhen is finish

frap.auxiliares.EvaluacionSecundaria = function()
{

    //this.DIAGNOSTICO_ELECTROGRAFICO = objAux.DIAGNOSTICO_ELECTROGRAFICO;
    //this.DERIVACIONES = objAux.DERIVACIONES;

    this.iID_CTLG_GLASGOW_MOTRIZ = objAux.iID_CTLG_GLASGOW_MOTRIZ;
    this.iID_CTLG_GLASGOW_VERBAL = objAux.iID_CTLG_GLASGOW_VERBAL;
    this.iID_CTLG_GLASGOW_VISUAL = objAux.iID_CTLG_GLASGOW_VISUAL;
    this.EVALUACION_GLASGOW = objAux.EVALUACION_GLASGOW;

    this.iID_CTLG_SIGNOS_NEUROLOGICOS = objAux.iID_CTLG_SIGNOS_NEUROLOGICOS;
    this.iPUPILAS_IZQUIERDA = objAux.iPUPILAS_IZQUIERDA;
    this.iPUPILAS_DERECHA = objAux.iPUPILAS_DERECHA;
    this.iRITMO = objAux.iRITMO;
    this.iPERISTALSIS = objAux.iPERISTALSIS;

    //this.iFRECUENCIA_CARDIACA = objAux.iFRECUENCIA_CARDIACA;
    //this.iTEMPERATURA = objAux.iTEMPERATURA;
    //this.iGLUCOMETRIA = objAux.iGLUCOMETRIA;
};

frap.auxiliares.Sampler = function()
{
    this.SINTOMAS = objAux.SINTOMAS;
    this.ALERGIAS = objAux.ALERGIAS;
    this.MEDICAMENTOS = objAux.MEDICAMENTOS;
    this.PADECIMIENTOS = objAux.PADECIMIENTOS;
    this.ULTIMA_COMIDA = objAux.ULTIMA_COMIDA;
    this.EVENTOS_RELACIONADOS = objAux.EVENTOS_RELACIONADOS;
};


frap.auxiliares.SimbologiaDolor = function()
{
    this.iAPARICION = objAux.iAPARICION;
    this.LOCALIZACION = objAux.LOCALIZACION;
    this.IRRADIACION = objAux.IRRADIACION;
    this.CARACTERISTICAS = objAux.CARACTERISTICAS;
    this.ALIVIO = objAux.ALIVIO;
    this.HORA_INICIO = objAux.HORA_INICIO;
    this.iINTENSIDAD = objAux.iINTENSIDAD;

};



frap.auxiliares.CONTROL_HEMORRAGIAS = function()
{
    this.iID_CTLG_CONTROL_HEMORRAGIAS = objAux.iID_CTLG_CONTROL_HEMORRAGIAS;
    this.HORA_COLOCACION = objAux.HORA_COLOCACION;

};



// Tratamiento
// ============================================================================================
frap.auxiliares.MANEJO_VIA_AEREA = function()
{
    this.iASPIRACION = objAux.iASPIRACION;
    this.iID_CTLG_MANEJO_VIA_AEREA = objAux.iID_CTLG_MANEJO_VIA_AEREA;
    this.iID_INTUBACION = objAux.ID_INTUBACION;
    this.iID_CTLG_DISPOSITIVO_APERTURA = objAux.iID_CTLG_DISPOSITIVO_APERTURA;
    this.iID_INTUBACION = 1;

};


frap.auxiliares.ASISTENCIA_VENTILATORIA = function()
{

    this.iID_CTLG_DISPOSITIVO = objAux.iID_CTLG_DISPOSITIVO;
    this.iVOLUMEN = objAux.iVOLUMEN;
    this.MODALIDAD_VENTILATORIA = objAux.MODALIDAD_VENTILATORIA;
    this.iFRECUENCIA = objAux.iFRECUENCIA;

};



frap.auxiliares.OXIGENO_TERAPIA = function()
{
    this.iLITROS_MINUTO = objAux.iLITROS_MINUTO;
    //this.iID_OXIGENO_TERAPIA = objAux.iID_OXIGENO_TERAPIA;
    this.iID_CTLG_OXIGENOTERAPIA = objAux.iID_CTLG_OXIGENOTERAPIA;
};


frap.auxiliares.DESCOMPRESION_PLEURAL = function()
{
    this.iID_CTLG_HEMITORAX = objAux.iID_CTLG_HEMITORAX;
    this.iCALIBRE = objAux.iCALIBRE;

};





frap.auxiliares.ACCESO_CIRCULATORIO = function()
{
    this.iID_CTLG_VIA_ACCESO = objAux.iID_CTLG_VIA_ACCESO;
    this.iID_CTLG_ZONA_COLOCACION = objAux.iID_CTLG_ZONA_COLOCACION;
    this.iID_CTLG_SOLUCION = objAux.iID_CTLG_SOLUCION;
    this.iBOMBA_INFUSION = objAux.iBOMBA_INFUSION;
    this.iCALIBRE = objAux.iCALIBRE;
    this.iVOLUMEN_INFUNDIDO = objAux.iVOLUMEN_INFUNDIDO;
    this.HORA_COLOCACION = objAux.HORA_COLOCACION;

};



frap.auxiliares.INTERVENCIONES = function()
{
    this.iCONTROL_CERVICAL = objAux.iCONTROL_CERVICAL;
    this.iEMPAQUETAMIENTO = objAux.iEMPAQUETAMIENTO;
    this.iCURACION_VENDAJE = objAux.iCURACION_VENDAJE;
    this.iINMOVILIZACION_EXTREMIDADES = objAux.iINMOVILIZACION_EXTREMIDADES;

};



frap.auxiliares.TERAPIA_ELECTRICA = function()
{
    this.iDESCARGAS = objAux.iDESCARGAS;
    this.iJOULES = objAux.iJOULES;
    this.iMARCAPASOS_TRANSCUTANEO = objAux.iMARCAPASOS_TRANSCUTANEO;
    this.iMA = objAux.iMA;
    this.iFRECUENCIA = objAux.iFRECUENCIA;
    this.iID_CTLG_TIPO_TERAPIA = objAux.iID_CTLG_TIPO_TERAPIA;
};



frap.auxiliares.TRATAMIENTO = function()
{
    this.OBSERVACIONES = objAux.OBSERVACIONES;

};










// added by JC

frap.auxiliares.Ginecologico = function()
{
    this.iGESTA = objAux.iGESTA;
    this.iPARA = objAux.iPARA;
    this.iCESARIA = objAux.iCESARIA;
    this.iABORTOS = objAux.iABORTOS;
    this.iSEMANAS_GESTACION = objAux.iSEMANAS_GESTACION;
    this.FUM = objAux.FUM;
    this.HORA_INICIO_CONTRACCIONES = objAux.HORA_INICIO_CONTRACCIONES;
    this.iFRECUENCIA = objAux.iFRECUENCIA;
    this.iDURACION = objAux.iDURACION;

    this.HORA_NACIOMIENTO = objAux.HORA_NACIOMIENTO;
    this.iPLACENTA_EXPULSADA = objAux.iPLACENTA_EXPULSADA;
    this.LUGAR_NACIMIENTO = objAux.LUGAR_NACIMIENTO;
    this.iPRODUCTO_VIVO = objAux.iPRODUCTO_VIVO;
    this.iSEXO = objAux.iSEXO;
    this.iCONTROL_PARENTAL = objAux.iCONTROL_PARENTAL;
    this.iEMBARAZO_ALTO_RIESGO = objAux.iEMBARAZO_ALTO_RIESGO;
    this.iESQUEMA_MADURACION_PULMONAR = objAux.iESQUEMA_MADURACION_PULMONAR;
    this.iAPGAR1 = objAux.iAPGAR1;
    this.iAPGAR5 = objAux.iAPGAR5;
    this.iAPGAR10 = objAux.iAPGAR10;
    this.iSILVERMAN = objAux.iSILVERMAN;
    this.iMEMBRANAS_INTEGRAS = objAux.iMEMBRANAS_INTEGRAS;
    this.OBSERVACIONES = objAux.OBSERVACIONES;
};


frap.auxiliares.Clinico = function()
{
    this.DIAGNOSTICO_SINDROMATICO = objAux.DIAGNOSTICO_SINDROMATICO;
    this.iID_CTLG_ORIGEN_PROBABLE = objAux.iID_CTLG_ORIGEN_PROBABLE;
    this.OBSERVACIONES = objAux.OBSERVACIONES;
};

frap.auxiliares.Trauma = function()
{
    this.iINTENCIONALIDAD = objAux.iINTENCIONALIDAD;
    this.iID_CTLG_AGENTE_CAUSAL_GENERAL = objAux.iID_CTLG_AGENTE_CAUSAL_GENERAL;
    this.iID_CTLG_AGENTE_CAUSAL_ESPECIFICO = objAux.iID_CTLG_AGENTE_CAUSAL_ESPECIFICO;
    this.OBSERVACIONES = objAux.OBSERVACIONES;
};

frap.auxiliares.Vial = function()
{
    this.iID_CTLG_TIPO_ACCIDENTE_VIAL = objAux.iID_CTLG_TIPO_ACCIDENTE_VIAL;
    this.iID_CTLG_TIPO_LESIONADO = objAux.iID_CTLG_TIPO_LESIONADO;
    this.iID_CTLG_ACTOR_VIAL = objAux.iID_CTLG_ACTOR_VIAL;
    this.iID_CTLG_IMPACTO = objAux.iID_CTLG_IMPACTO;
    this.iID_CTLG_VOLANTE = objAux.iID_CTLG_VOLANTE;
    this.iID_CTLG_PARABRISAS = objAux.iID_CTLG_PARABRISAS;
    this.iID_CTLG_BOLSA_AIRE = objAux.iID_CTLG_BOLSA_AIRE;
    this.iID_CTLG_CINTURON_SEGURIDAD = objAux.iID_CTLG_CINTURON_SEGURIDAD;
    this.iEYECTADO = objAux.iEYECTADO;
    this.iDECESOS = objAux.iDECESOS;
    this.iPRENSADO = objAux.iPRENSADO;
    this.iCASCO = objAux.iCASCO;
    this.OBSERVACIONES = objAux.OBSERVACIONES;
};



//insumos added by JC

frap.auxiliares.Insumos_Nivel_Basico = function()
{
    this.SONDA_ASPIRACION = objAux.SONDA_ASPIRACION;
    this.PUNTAS_NASALES = objAux.PUNTAS_NASALES;
    this.MASCARILLA_ADULTO = objAux.MASCARILLA_ADULTO;
    this.PUNZOCATH_14 = objAux.PUNZOCATH_14;
    this.PUNZOCATH_16 = objAux.PUNZOCATH_16;
    this.PUNZOCATH_18 = objAux.PUNZOCATH_18;
    this.PUNZOCATH_20 = objAux.PUNZOCATH_20;
    this.PUNZOCATH_22 = objAux.PUNZOCATH_22;
    this.VENOPACK_NORMOGOTERO = objAux.VENOPACK_NORMOGOTERO;
    this.JERINGA_5_CC = objAux.JERINGA_5_CC;
    this.JERINGA_10_CC = objAux.JERINGA_10_CC;
    this.GUANTES = objAux.GUANTES;
    this.GASA_SIMPLE = objAux.GASA_SIMPLE;
    this.VENDA_ELASTICA_5_CM = objAux.VENDA_ELASTICA_5_CM;
    this.VENDA_ELASTICA_10_CM = objAux.VENDA_ELASTICA_10_CM;
    this.VENDA_ELASTICA_30_CM = objAux.VENDA_ELASTICA_30_CM;
    this.TIRA_REACTIVA = objAux.TIRA_REACTIVA;
    this.LANCETA = objAux.LANCETA;
    this.NaCL_9 = objAux.NaCL_9;
    this.HARTMANN = objAux.HARTMANN;
    this.GLUCOSA_5 = objAux.GLUCOSA_5;
    this.GLUCOSA_10 = objAux.GLUCOSA_10;
    this.GLUCOSA_50 = objAux.GLUCOSA_50;
    this.MIXTA = objAux.MIXTA;
    this.SABANA_DESECHABLE = objAux.SABANA_DESECHABLE;
    this.EQUIPO_PARTO = objAux.EQUIPO_PARTO;
};

frap.auxiliares.Insumos_Nivel_Medio = function()
{
    this.TUBO_ENDROTRAQUEAL_75 = objAux.TUBO_ENDROTRAQUEAL_75;
    this.TUBO_ENDROTRAQUEAL_8 = objAux.TUBO_ENDROTRAQUEAL_8;
    this.TUBO_ENDROTRAQUEAL_85 = objAux.TUBO_ENDROTRAQUEAL_85;
    this.MASCARILLA_LARINGEA = objAux.MASCARILLA_LARINGEA;
    this.MASCARILLA_PEDIATRICA = objAux.MASCARILLA_PEDIATRICA;
    this.CANULA_OROFARINGEA = objAux.CANULA_OROFARINGEA;
    this.VENOPACK_MICROGOTERO = objAux.VENOPACK_MICROGOTERO;
    this.JERINGA_INSULINA = objAux.JERINGA_INSULINA;
    this.CLAMPS_UMBILICALES = objAux.CLAMPS_UMBILICALES;
    this.ELECTRODOS_ADULTO = objAux.ELECTRODOS_ADULTO;
    this.ELECTRODOS_PEDIATRICOS = objAux.ELECTRODOS_PEDIATRICOS;
    this.FORMATO_REGISTRO_ATENCION_PREHOSPITALARIA = objAux.FORMATO_REGISTRO_ATENCION_PREHOSPITALARIA;
};

frap.auxiliares.Insumos_Nivel_Avanzado = function()
{
    this.TUBO_ENDROTRAQUEAL_35 = objAux.TUBO_ENDROTRAQUEAL_35;
    this.TUBO_ENDROTRAQUEAL_4 = objAux.TUBO_ENDROTRAQUEAL_4;
    this.TROCAR_TORACICO_14 = objAux.TROCAR_TORACICO_14;
    this.TROCAR_TORACICO_16 = objAux.TROCAR_TORACICO_16;
    this.TROCAR_TORACICO_18 = objAux.TROCAR_TORACICO_18;
    this.SONDA_NASOGASTRICA = objAux.SONDA_NASOGASTRICA;
    this.PARCHES_MARCAPASOS = objAux.PARCHES_MARCAPASOS;
    this.OTRO = objAux.OTRO;
};




// added by laZ

frap.auxiliares.OTROS = function()
{
    this.DEPENDENCIAS = objAux.DEPENDENCIAS;
    this.UNIDADES = objAux.UNIDADES;
    this.NOMBRE = objAux.NOMBRE;
};

frap.auxiliares.CONSENTIMIENTO = function()
{
    this.NOMBRE_PACIENTE = objAux.NOMBRE_PACIENTE;
    this.NOMBRE_TESTIGO = objAux.NOMBRE_TESTIGO;
    this.FIRMA_PACIENTE = objAux.FIRMA_PACIENTE;
    this.FIRMA_TESTIGO= objAux.FIRMA_TESTIGO;
};

frap.auxiliares.LEGAL = function (){
    this.PERTENENCIAS = objAux.PERTENENCIAS;
    this.NOMBRE = objAux.NOMBRE;
    this.FIRMA = objAux.FIRMA;
    this.TOMA_CONOCIMIENTO = objAux.TOMA_CONOCIMIENTO;
    this.OBSERVACIONES = objAux.OBSERVACIONES;
};

frap.auxiliares.RESULTADO = function(){
    this.iRESULTADO = objAux.iRESULTADO;
    this.iTRASLADO = objAux.iTRASLADO;
    this.iPRIORIDAD_FINAL = objAux.iPRIORIDAD_FINAL;
    this.FOLIO_RECEPCION = objAux.FOLIO_RECEPCION;
    this.MEDICO_RECIBE = objAux.MEDICO_RECIBE;
    this.DENOMINACION = objAux.DENOMINACION;
};


// recuperando MULTI-REGISTROS

frap.auxiliares.FACTORES = function (){

};















frap.initPaciente = function(){
    this.iID_CTLG_SERVICIO_MEDICO = 0
    // pass this.iSERVICIO_MEDICO = 0,
};



frap.initDireccion = function(){
        this.CALLE =' ',
        this.iNUMERO_EXTERIOR =0,
        //this.iNUMERO_INTERIOR =0,
        this.COLONIA  = '-',
        this.DELEGACION  = '-',
        this.ESTADO ='-',
        this.iCP = 0
};

frap.initMediaFiliacion = function(){
        this.iID_CTLG_MEDIA_FILIACION_ACCESORIOS = 1,
        this.iID_CTLG_MEDIA_FILIACION_CABELLO = 1,
        this.iID_CTLG_MEDIA_FILIACION_CABELLO_COLOR = 1,
        this.iID_CTLG_MEDIA_FILIACION_COLOR_OJOS = 1,
        this.iID_CTLG_MEDIA_FILIACION_COLOR_PIEL = 1,
        this.iID_CTLG_MEDIA_FILIACION_COMPLEXION = 1,
        this.iID_CTLG_MEDIA_FILIACION_NARIZ = 1,
        this.iID_CTLG_MEDIA_FILIACION_PARTE_CUERPO = 1,
        this.iID_CTLG_MEDIA_FILIACION_ROPA = 1,
        this.iID_CTLG_MEDIA_FILIACION_SENIAS = 1,
        this.iID_CTLG_MEDIA_FILIACION_SENIA_LUGAR = 1,
        this.iID_CTLG_MEDIA_FILIACION_TAMANIO = 1,
        this.iID_CTLG_MEDIA_FILIACION_VOLUMEN = 1
};



frap.initDatosPaciente = function(){
    this.NOMBRE = '-',
    this.APELLIDO_PATERNO = '-',
    this.APELLIDO_MATERNO = '-',
    this.CORREO_ELECTRONICO = '-',
    this.EDAD = 0,
    this.FECHA_NACIMIENTO = 0000-00-00,
    this.TELEFONO =  0,
    this.OCUPACION = '-'
    this.iID_CTLG_SEXOS  = 1
    //this.iMOTIVO_ATENCION =0
    //this.CORREO_ELECTRONICO = '-'
};


frap.initMotivoAtencion = function()
{
    this.iID_MOTIVO_ATENCION = 1
};





frap.initEvaluacionPrimaria = function(){

    this.iID_CTLG_NIVEL_CONCIENCIA = 1,
    this.iID_CTLG_VENTILACION = 1,
    this.iID_CTLG_CALIDAD_VENTILACION = 1,
    this.iID_CTLG_PULSOS = 1,
    this.iID_CTLG_COLORACION = 1,
    this.iID_CTLG_CONDICION = 1,
    this.iID_CTLG_TEMPERATURA = 1,
    //this.iPOSICION = 1,
    this.iID_CTLG_PRIORIDAD = 1,
    this.iID_CTLG_PULSOS_CALIDAD = 1,
    this.iID_CTLG_RITMO = 1,
    this.iID_CTLG_VIA_AEREA = 1
    //this.iID_CTLG_EMERGENCIA_MOTIVOS = 0

};


frap.initSEMIOLOGIA_DOLOR = function (){
   // this.iID_SEMIOLOGIA_DOLOR = 0,
    //this.iAPARICION = 0,
    this.LOCALIZACION = '-',
    this.IRRADIACION = '-',
    this.CARACTERISTICAS = '-',
    this.ALIVIO =  '-',
    this.HORA_INICIO = '-',
    this.iINTENSIDAD = 0
};

frap.initSAMPLER = function ()
{
    //this.iID_SAMPLER = 0,

    this.SINTOMAS = '-',
    this.ALERGIAS = '-',
    this.MEDICAMENTOS = '-',
    this.PADECIMIENTOS = '-',
    this.ULTIMA_COMIDA = '-',
    this.EVENTOS_RELACIONADOS = '-'
};

frap.initEVALUACION_SECUNDARIA = function (){
    this.DIAGNOSTICO_ELECTROGRAFICO = '-',
    this.iDERIVACIONES = 0,
    this.iCTLG_GLASGOW_MOTRIZ = 6,
    this.iCTLG_GLASGOW_VERBAL = 5,
    this.iCTLG_GLASGOW_VISUAL = 4,
    this.EVALUACION_GLASGOW = '-',
    this.iCTLG_SIGNOS_NEUROLOGICOS = 5,
    this.iPUPILAS_IZQUIERDA = 0,
    this.iPUPILAS_DERECHA = 0,
    this.iRITMO = 0,
    this.iPERISTALSIS = 0,
    this.iFRECUENCIA_CARDIACA = 0,
    this.iTEMPERATURA = 0,
    this.iGLUCOMETRIA = 0
    //    this.factores = []
};



// Inicio Tratamiento

frap.initCONTROL_HEMORRAGIAS = function()
{
    this.iID_CTLG_CONTROL_HEMORRAGIAS = 0,
    this.HORA_COLOCACION = '00:00:00'
};


frap.initMANEJO_VIA_AEREA = function()
{
    this.iID_MANEJO_VIA_AEREA = 0,
    this.iID_CTLG_DISPOSITIVO_APERTURA = 0,
    this.iID_CTLG_MANEJO_VIA_AEREA = 0,
        this.iASPIRACION = 0,
        this.iID_INTUBACION = 1
};

frap.initASISTENCIA_VENTILATORIA = function(){
    this.iID_CTLG_DISPOSITIVO = 0,
    this.iFRECUENCIA = 0,
    this.iVOLUMEN = 0,
    this.MODALIDAD_VENTILATORIA = '-'
};

frap.initOXIGENO_TERAPIA = function()
{
    this.iID_OXIGENO_TERAPIA = 0,
    this.iLITROS_MINUTO = 0,
    this.iID_CTLG_OXIGENOTERAPIA = 1
};

frap.initDESCOMPRESION_PLEURAL = function(){
    this.iCALIBRE = 0,
    this.iID_CTLG_HEMITORAX = 1
};




frap.initACCESO_CIRCULATORIO = function(){
    // check all local
    this.iID_CTLG_VIA_ACCESO = 0,
    this.iID_CTLG_ZONA_COLOCACION = 0,
    this.iID_CTLG_SOLUCION = 0,
    this.iBOMBA_INFUSION = 0,
    this.iCALIBRE = 0,
    this.iVOLUMEN_INFUNDIDO = 0,
    this.HORA_COLOCACION = '0:0'
};

frap.initINTERVENCIONES = function()
{
    this.iID_INTERVENCIONES = 0,
    this.iCONTROL_CERVICAL = 0,
    this.iEMPAQUETAMIENTO = 0,
    this.iCURACION_VENDAJE = 0,
    this.iINMOVILIZACION_EXTREMIDADES = 0
};

frap.initTERAPIA_ELECTRICA = function(){
    this.iDESCARGAS = 0,
    this.iJOULES = 0,
        this.iMARCAPASOS_TRANSCUTANEO = 0,
    this.iMA = 0,
    this.iFRECUENCIA = 0

};

// MOD BY JC
////////////

frap.initTRATAMIENTO = function(){
    // add all parts
    /*
    this.ID_TRATAMIENTO = 0;

    this.MANEJO_VIA_AEREA_ID_MANEJO_VIA_AEREA = [];
    this.ASISTENCIA_VENTILATORIA_ID_ASISTENCIA_VENTILATORIA = [];
    this.OXIGENO_TERAPIA_ID_OXIGENO_TERAPIA = [];
    this.DESCOMPRESION_PLEURAL_ID_DESCOMPRESION_PLEURAL = [];
    this.CONTROL_HEMORRAGIAS_ID_CONTROL_HEMORRAGIAS = [];
    this.ACCESO_CIRCULATORIO_ID_ACCESO_CIRCULATORIO = [];
    this.INTERVENCIONES_ID_INTERVENCIONES = [];
    this.TERAPIA_ELECTRICA_ID_TERAPIA_ELECTRICA = [];
    */

    this.OBSERVACIONES = '-'
};



frap.initTRAUMA = function(){
    this.iINTENCIONALIDAD = 0,
    this.iCTLG_AGENTE_CAUSAL_GENERAL_ID = 0,
    this.iCTLG_AGENTE_CAUSAL_ESPECIFICO_ID = 0,
    this.OBSERVACIONES = '-'
};


frap.initCLINICO = function(){
    this.DIAGNOSTICO_SINDROMATICO = '-',
    this.iID_CTLG_ORIGEN_PROBABLE = 0,
    this.OBSERVACIONES = '-'
};

// Mod by JC_worthing

frap.initVIAL = function()
{
    //this.ID_FRAP

    this.iID_CTLG_CINTURON_SEGURIDAD = 0,

        this.iID_CTLG_BOLSA_AIRE = 0,

        this.iID_CTLG_PARABRISAS = 0,

        this.iID_CTLG_VOLANTE = 0,

        this.iID_CTLG_IMPACTO = 0,

        this.iID_CTLG_ATROPELLADO_POR = 0,

        this.iID_CTLG_ACTOR_VIAL = 0,

        this.iID_CTLG_TIPO_LESIONADO = 0,

        this.iID_CTLG_TIPO_ACCIDENTE_VIAL = 0,

        this.OBJETO_FIJO = 0,

        this.iEYECTADO = 0,

        this.iDECESOS = 0,

        this.iPRENSADO = 0,

        this.iCASCO = 0,

        this.OBSERVACIONES = '-'
};

frap.initGINECOLOGICO = function()
{
    this.iID_GINECOLOGICO = 0,
    this.iGESTA = 0,
    this.iPARA = 0,
    this.iCESARIA = 0,
    this.iABORTOS = 0,
    this.iSEMANAS_GESTACION = 0,
    this.FUM = '-',
    this.iFRECUENCIA = 0


    //this.HORA_INICIO_CONTRACCIONES = '-',
    //No existen registros  en la tabla
    /*this.iDURACION = 0,
    this.HORA_NACIOMIENTO = '-',
    this.iPLACENTA_EXPULSADA = 0,
    this.LUGAR_NACIMIENTO = '-',
    this.iPRODUCTO_VIVO = 0,
    this.iSEXO = 0,
    this.iCONTROL_PARENTAL = 0,
    this.iEMBARAZO_ALTO_RIESGO = 0,
    this.iESQUEMA_MADURACION_PULMONAR = 0,
    this.iAPGAR1 = 0,
    this.iAPGAR5 = 0,
    this.iAPGAR10 = 0,
    this.iSILVERMAN = 0,
    this.iMEMBRANAS_INTEGRAS = 0,
    this.OBSERVACIONES = '-' */
};

frap.iniINSUMOS_NIVEL_BASICO = function(){
    // verify all local ***

    //this.iID_INSUMOS_NIVEL_BASICO = 0,
    this.SONDA_ASPIRACION = 0,
        this.PUNTAS_NASALES = 0,
        this.MASCARILLA_ADULTO = 0,
        this.PUNZOCATH_14 = 0,
        this.PUNZOCATH_16 = 0,
        this.PUNZOCATH_18 = 0,
        this.PUNZOCATH_20 = 0,
        this.PUNZOCATH_22 = 0,
        this.VENOPACK_NORMOGOTERO = 0,
        this.JERINGA_5_CC = 0,
        this.JERINGA_10_CC = 0,
        this.GUANTES = 0,
        this.GASA_SIMPLE = 0,
        this.VENDA_ELASTICA_5_CM = 0,
        this.VENDA_ELASTICA_10_CM = 0,
        this.VENDA_ELASTICA_30_CM = 0,
        this.TIRA_REACTIVA = 0,
        this.LANCETA = 0,
        this.NaCL_9 = 0,
        this.HARTMANN = 0,
        this.GLUCOSA_5 = 0,
        this.GLUCOSA_10 = 0,
        this.GLUCOSA_50 = 0,
        this.MIXTA = 0,
        this.SABANA_DESECHABLE = 0,
        this.EQUIPO_PARTO = 0
};
frap.iniINSUMOS_NIVEL_INTERMEDIO = function() {
    // verify all local ***

    //this.iID_INSUMOS_NIVEL_INTERMEDIO = 0,
    this.TUBO_ENDROTRAQUEAL_75 = 0,
        this.TUBO_ENDROTRAQUEAL_8 = 0,
        this.TUBO_ENDROTRAQUEAL_85 = 0,
        this.MASCARILLA_LARINGEA = 0,
        this.MASCARILLA_PEDIATRICA = 0,
        this.CANULA_OROFARINGEA = 0,
        this.VENOPACK_MICROGOTERO = 0,
        this.JERINGA_INSULINA = 0,
        this.CLAMPS_UMBILICALES = 0,
        this.ELECTRODOS_ADULTO = 0,
        this.ELECTRODOS_PEDIATRICOS = 0,
        this.FORMATO_REGISTRO_ATENCION_PREHOSPITALARIA = 0
};


frap.initINSUMOS_NIVEL_AVANZADO = function() {
    // verify all local ***
    //this.iID_INSUMOS_NIVEL_AVANZADO = 0,
    this.TUBO_ENDROTRAQUEAL_35 = 0,
        this.TUBO_ENDROTRAQUEAL_4 = 0,
        this.TROCAR_TORACICO_14 = 0,
        this.TROCAR_TORACICO_16 = 0,
        this.TROCAR_TORACICO_18 = 0,
        this.SONDA_NASOGASTRICA = 0,
        this.PARCHES_MARCAPASOS = 0,
        this.OTRO = 0
};































// funciones de CARGA
//============================================================================
//============================================================================




frap.secciones.load = function(){

    frap.cargas.loadPaciente();

};

frap.cargas = {};






frap.cargas.loadES_Factores = function (){

    var cb = function(tx, results) {
        console.log('adentro loadF');

        var factores = {};
        var len = results.rows.length;

        for (var i = 0; i < len; i++) {

            factores["registro"+i]={ "iID_CTLG_FACTOR_RIESGO":results.rows.item(i).ID_CTLG_FACTOR_RIESGO};
            console.log(factores["registro"+i]);

        }
        //console.log(len);

        /*
         Error Verificar !!!!!! comented by la Z
        frap.secciones.evaluacion_secundaria.factores = [];

        if(len !=0){
            frap.secciones.evaluacion_secundaria.factores = factores;
        }
        */
        frap.secciones.factores =[];
        if(len !=0){
            frap.secciones.factores = factores;
        }



        //console.log('en rescate factores');
        //console.log(frap.secciones.factores);

        //frap.enviar();


        estado_secciones['EVALUACION_SECUNDARIA'] = 1;

        $.jStorage.set("estado_secciones", estado_secciones);
    };


    dataBase.getTableS('FACTORES', '*', " WHERE FRAP_ID ="+idFRAP+ " AND TIPO_FRAP='"+tipoFRAP+"' ", cb);
};


frap.recuperacion = {};

frap.recuperacion['PACIENTE']= function(){

    // console.log('dentro de la funcion paciente');
    // console.log('idFRAP    '+ idFRAP);
    // console.log('TIPO_FRAP    '+ tipoFRAP);



    //Aquí comienza mi edición @JC_Worthing
    var cb = function(tx, results)
    {
        var len = results.rows.length;

        // console.log(len + " Aquiiiii");

        // console.log('idFRAP    '+ idFRAP);
        // console.log('TIPO_FRAP    '+ tipoFRAP);

        // console.log(results.rows);

        // console.log(results.rows.item);


        $.each(results.rows, function (value){

            console.log('primero'+value);

        });

        $.each(results.rows.item, function (value){

            console.log('segindo'+value);

        });




        if (len > 0)
        {
            objAux.NOMBRE = results.rows.item(0).NOMBRE;
            objAux.APELLIDO_PATERNO = results.rows.item(0).APELLIDO_PATERNO;
            objAux.APELLIDO_MATERNO = results.rows.item(0).APELLIDO_MATERNO;
            objAux.FECHA_NACIMIENTO = results.rows.item(0).FECHA_NACIMIENTO;
            objAux.TELEFONO = results.rows.item(0).TELEFONO;
            objAux.OCUPACION = results.rows.item(0).OCUPACION;
            objAux.CORREO_ELECTRONICO = results.rows.item(0).CORREO_ELECTRONICO;
            objAux.ID_CTLG_SEXOS = results.rows.item(0).ID_CTLG_SEXOS;

            //SERVICIO MEDICO
            objAux.iID_CTLG_SERVICIO_MEDICO = results.rows.item(0).ID_CTLG_SERVICIO_MEDICO;
            // console.log(objAux.iID_CTLG_SERVICIO_MEDICO );

            //DIRECCION


            //objAux.CALLE = results.rows.item(0).CALLE;
            objAux.CALLE = results.rows.item(0).CALLE;
            objAux.iNUMERO_EXTERIOR = results.rows.item(0).NUMERO_EXTERIOR;
            objAux.COLONIA = results.rows.item(0).COLONIA;
            objAux.DELEGACION = results.rows.item(0).DELEGACION;
            objAux.iCP = results.rows.item(0).CP;
            objAux.iID_CTLG_ESTADOS = results.rows.item(0).ID_CTLG_ESTADOS;


            // console.log( "aquiiiiiiiiii numero " + objAux.iNUMERO_EXTERIOR);
            // console.log( "aquiiiiiiiiii cp " + objAux.iCP);

            // console.log(objAux.CALLE + "objAux.CALLE");
            // console.log(results.rows.item(0).CALLE + "results.rows.item(0).CALLE ");

            objAux.ESTADO = results.rows.item(0).ESTADO;



            // Motivos atencion // verificar por que esta pediendo el dato y no lo modifica

            objAux.iID_CTLG_MOTIVO_ATENCION = results.rows.item(0).MOTIVO;
            // console.log(objAux.iID_CTLG_MOTIVO_ATENCION );


            frap.secciones.paciente = new frap.auxiliares.Paciente();
            frap.secciones.direccion_paciente = new frap.auxiliares.Direccion();
            frap.secciones.datos_paciente = new frap.auxiliares.DatosPaciente();
            frap.secciones.motivo_atencion = new frap.auxiliares.MotivoAtencion();


            // console.log(frap);

            //$.jStorage.set("frap", frap);

        }

        //console.log('en rescate factores');
        //console.log(frap.secciones.evaluacion_secundaria.factores);

        //frap.enviar();
    };


    dataBase.getTableS('PACIENTE', '*', " WHERE ID_FRAP ="+idFRAP+ " AND TIPO_FRAP='"+tipoFRAP+"' ", cb);

   // dataBase.getTable('PACIENTE', '*', " WHERE ID_FRAP ="+idFRAP+ " AND TIPO_FRAP='"+tipoFRAP+"' ");

};

frap.recuperacion['MEDIA_FILIACION']= function(){


//Aquí comienza mi edición @JC_Worthing

    console.log('dentro de la funcion media filiacion');

    var cb = function(tx, results)
    {
        var len = results.rows.length;

        if (len > 0) {


            //MEDIA FILIACION
            objAux.iID_CTLG_MEDIA_FILIACION_CABELLO = results.rows.item(0).ID_CTLG_MEDIA_FILIACION_CABELLO;
            objAux.iID_CTLG_MEDIA_FILIACION_CABELLO_COLOR = results.rows.item(0).ID_CTLG_MEDIA_FILIACION_CABELLO_COLOR;
            objAux.iID_CTLG_MEDIA_FILIACION_VOLUMEN = results.rows.item(0).ID_CTLG_MEDIA_FILIACION_VOLUMEN;
            objAux.iID_CTLG_MEDIA_FILIACION_COLOR_OJOS = results.rows.item(0).ID_CTLG_MEDIA_FILIACION_COLOR_OJOS;
            objAux.iID_CTLG_MEDIA_FILIACION_COLOR_PIEL = results.rows.item(0).ID_CTLG_MEDIA_FILIACION_COLOR_PIEL;
            objAux.iID_CTLG_MEDIA_FILIACION_COMPLEXION = results.rows.item(0).ID_CTLG_MEDIA_FILIACION_COMPLEXION;
            objAux.iID_CTLG_MEDIA_FILIACION_NARIZ = results.rows.item(0).ID_CTLG_MEDIA_FILIACION_NARIZ;
            objAux.iID_CTLG_MEDIA_FILIACION_TAMANIO = results.rows.item(0).ID_CTLG_MEDIA_FILIACION_TAMANIO;
            objAux.iID_CTLG_MEDIA_FILIACION_SENIAS = results.rows.item(0).ID_CTLG_MEDIA_FILIACION_SENIAS;
            objAux.iID_CTLG_MEDIA_FILIACION_SENIA_LUGAR = results.rows.item(0).ID_CTLG_MEDIA_FILIACION_SENIA_LUGAR;
            objAux.iID_CTLG_MEDIA_FILIACION_PARTE_CUERPO = results.rows.item(0).ID_CTLG_MEDIA_FILIACION_PARTE_CUERPO;


            frap.secciones.media_filiacion = new frap.auxiliares.MediaFiliacion();


        }
    };


    console.log('idFRAP'+idFRAP);
    //dataBase.getTable('MEDIA_FILIACION', '*', " WHERE ID_FRAP ="+idFRAP+ " AND TIPO_FRAP='"+tipoFRAP+"' ");
    dataBase.getTableS('MEDIA_FILIACION', '*', " WHERE ID_FRAP ="+idFRAP+ " AND TIPO_FRAP='"+tipoFRAP+"' ", cb );

};




frap.recuperacion['EVALUACION_PRIMARIA'] = function()
{
    var cb  = function(tx, results) {
        var len = results.rows.length;

        // console.log('evaliuacion primaria');
        // console.log('idFRAP    '+ idFRAP);
        // console.log('TIPO_FRAP    '+ tipoFRAP);

        // console.log(results.rows);

        // console.log(results.rows.item);


        if (len > 0) {


            objAux.iID_CTLG_PRIORIDAD = results.rows.item(0).ID_CTLG_PRIORIDAD;
            objAux.iID_CTLG_NIVEL_CONCIENCIA = results.rows.item(0).ID_CTLG_NIVEL_CONCIENCIA;
            objAux.iID_CTLG_VIA_AEREA = results.rows.item(0).ID_CTLG_VIA_AEREA;
            objAux.iID_CTLG_VENTILACION = results.rows.item(0).ID_CTLG_VENTILACION;
            objAux.iID_CTLG_CALIDAD_VENTILACION = results.rows.item(0).ID_CTLG_CALIDAD_VENTILACION;
            objAux.iID_CTLG_PULSOS = results.rows.item(0).ID_CTLG_PULSOS;
            objAux.iID_CTLG_PULSOS_CALIDAD = results.rows.item(0).ID_CTLG_PULSOS_CALIDAD;
            objAux.iID_CTLG_RITMO = results.rows.item(0).ID_CTLG_RITMO;
            objAux.iID_CTLG_COLORACION = results.rows.item(0).ID_CTLG_COLORACION;
            objAux.iID_CTLG_TEMPERATURA = results.rows.item(0).ID_CTLG_TEMPERATURA;
            objAux.iID_CTLG_CONDICION = results.rows.item(0).ID_CTLG_CONDICION;
            objAux.POSICION = results.rows.item(0).POSICION;

            frap.secciones.evaluacion_primaria = new frap.auxiliares.EvaluacionPrimaria();
        }
    };

    //dataBase.getTable('EVALUACION_PRIMARIA', '*', " WHERE ID_FRAP ="+idFRAP+ " AND TIPO_FRAP='"+tipoFRAP+"' ");
    dataBase.getTableS('EVALUACION_PRIMARIA', '*', " WHERE ID_FRAP ="+idFRAP+ " AND TIPO_FRAP='"+tipoFRAP+"' ", cb);
};






frap.recuperacion['EVALUACION_SECUNDARIA'] = function(){

    // console.log('dentro de la funcion EVALUACION_SECUNDARIA');


    var cb  = function(tx, results) {
        var len = results.rows.length;

        //console.log('evaliuacion secundaria');
        //  console.log('idFRAP    '+ idFRAP);
        // console.log('TIPO_FRAP    '+ tipoFRAP);

        // console.log(results.rows);

        // console.log(results.rows.item);


        if (len > 0) {

            objAux.iAPARICION = results.rows.item(0).APARICION;
            objAux.LOCALIZACION = results.rows.item(0).LOCALIZACION;
            objAux.IRRADIACION = results.rows.item(0).IRRADIACION;
            objAux.CARACTERISTICAS = results.rows.item(0).CARACTERISTICAS;
            objAux.ALIVIO = results.rows.item(0).ALIVIO;
            objAux.HORA_INICIO = results.rows.item(0).HORA_INICIO;
            objAux.iINTENSIDAD = results.rows.item(0).INTENSIDAD;

            objAux.SINTOMAS = results.rows.item(0).SINTOMAS;
            objAux.ALERGIAS = results.rows.item(0).ALERGIAS;
            objAux.MEDICAMENTOS = results.rows.item(0).MEDICAMENTOS;
            objAux.PADECIMIENTOS = results.rows.item(0).PADECIMIENTOS;
            objAux.ULTIMA_COMIDA = results.rows.item(0).ULTIMA_COMIDA;
            objAux.EVENTOS_RELACIONADOS = results.rows.item(0).EVENTOS_RELACIONADOS;

            objAux.DIAGNOSTICO_ELECTROGRAFICO = results.rows.item(0).DIAGNOSTICO_ELECTROGRAFICO;
            objAux.DERIVACIONES = results.rows.item(0).DERIVACIONES;
            objAux.iID_CTLG_GLASGOW_MOTRIZ = results.rows.item(0).ID_CTLG_GLASGOW_MOTRIZ;
            objAux.iID_CTLG_GLASGOW_VERBAL = results.rows.item(0).ID_CTLG_GLASGOW_VERBAL;
            objAux.iID_CTLG_GLASGOW_VISUAL = results.rows.item(0).ID_CTLG_GLASGOW_VISUAL;
            objAux.EVALUACION_GLASGOW = results.rows.item(0).EVALUACION_GLASGOW;
            objAux.iID_CTLG_SIGNOS_NEUROLOGICOS = results.rows.item(0).ID_CTLG_SIGNOS_NEUROLOGICOS;
            objAux.iPUPILAS_IZQUIERDA = results.rows.item(0).PUPILAS_IZQUIERDA;
            objAux.iPUPILAS_DERECHA = results.rows.item(0).PUPILAS_DERECHA;
            objAux.iRITMO = results.rows.item(0).RITMO;
            objAux.iPERISTALSIS = results.rows.item(0).PERISTALSIS;
            objAux.iFRECUENCIA_CARDIACA = results.rows.item(0).FRECUENCIA_CARDIACA;
            objAux.iTEMPERATURA = results.rows.item(0).TEMPERATURA;
            objAux.iGLUCOMETRIA = results.rows.item(0).GLUCOMETRIA;


            // console.log(objAux);
            frap.secciones.sampler = new frap.auxiliares.Sampler();
            frap.secciones.simbologia_dolor = new frap.auxiliares.SimbologiaDolor();
            frap.secciones.evaluacion_secundaria = new frap.auxiliares.EvaluacionSecundaria();

            // console.log(frap);
        }
    };

    //dataBase.getTable('EVALUACION_PRIMARIA', '*', " WHERE ID_FRAP ="+idFRAP+ " AND TIPO_FRAP='"+tipoFRAP+"' ");
    dataBase.getTableS('EVALUACION_SECUNDARIA', '*', " WHERE ID_FRAP ="+idFRAP+ " AND TIPO_FRAP='"+tipoFRAP+"' ", cb);


};




frap.recuperacion['TRATAMIENTO'] = function(){

    // console.log('dentro de la funcion TRATAMIENTO');


    var cb  = function(tx, results) {
        var len = results.rows.length;

        //console.log('evaliuacion secundaria');
        //  console.log('idFRAP    '+ idFRAP);
        // console.log('TIPO_FRAP    '+ tipoFRAP);

        // console.log(results.rows);

        // console.log(results.rows.item);


        if (len > 0) {


            objAux.iASPIRACION = results.rows.item(0).ASPIRACION;
            objAux.iID_CTLG_MANEJO_VIA_AEREA = results.rows.item(0).ID_CTLG_MANEJO_VIA_AEREA;
            objAux.iID_INTUBACION = results.rows.item(0).ID_INTUBACION;
            objAux.iID_CTLG_DISPOSITIVO_APERTURA = results.rows.item(0).ID_CTLG_DISPOSITIVO_APERTURA;
            objAux.iID_CTLG_MANEJO_VIA_AEREA = results.rows.item(0).ID_CTLG_MANEJO_VIA_AEREA;
            objAux.iID_CTLG_DISPOSITIVO = results.rows.item(0).ID_CTLG_DISPOSITIVO;
            objAux.iVOLUMEN = results.rows.item(0).VOLUMEN;
            objAux.MODALIDAD_VENTILATORIA = results.rows.item(0).MODALIDAD_VENTILATORIA;
            objAux.iLITROS_MINUTO = results.rows.item(0).LITROS_MINUTO;
            objAux.iID_OXIGENO_TERAPIA = results.rows.item(0).ID_OXIGENO_TERAPIA;
            objAux.iID_CTLG_OXIGENOTERAPIA = results.rows.item(0).ID_CTLG_OXIGENOTERAPIA;
            objAux.iID_CTLG_HEMITORAX = results.rows.item(0).ID_CTLG_HEMITORAX;
            objAux.HORA_COLOCACION = results.rows.item(0).HORA_COLOCACION;
            //objAux.iID_CTLG_CONTROL_HEMORAGIAS = results.rows.item(0).ID_CTLG_CONTROL_HEMORRAGIAS;
            objAux.iID_CTLG_VIA_ACCESO = results.rows.item(0).ID_CTLG_VIA_ACCESO;
            objAux.iID_CTLG_ZONA_COLOCACION = results.rows.item(0).ID_CTLG_ZONA_COLOCACION;
            objAux.iID_CTLG_SOLUCION = results.rows.item(0).ID_CTLG_SOLUCION;
            objAux.iBOMBA_INFUSION = results.rows.item(0).BOMBA_INFUSION;
            objAux.iCALIBRE = results.rows.item(0).CALIBRE;
            objAux.iVOLUMEN_INFUNDIDO = results.rows.item(0).VOLUMEN_INFUNDIDO;
            objAux.iCONTROL_CERVICAL = results.rows.item(0).CONTROL_CERVICAL;
            objAux.iEMPAQUETAMIENTO = results.rows.item(0).EMPAQUETAMIENTO;
            objAux.iCURACION_VENDAJE = results.rows.item(0).CURACION_VENDAJE;
            objAux.iINMOVILIZACION_EXTREMIDADES = results.rows.item(0).INMOVILIZACION_EXTREMIDADES;
            objAux.iDESCARGAS = results.rows.item(0).DESCARGAS;
            objAux.iJOULES = results.rows.item(0).JOULES;
            objAux.iMARCAPASOS_TRANSCUTANEO = results.rows.item(0).MARCAPASOS_TRANSCUTANEO;
            objAux.iID_CTLG_TIPO_TERAPIA = results.rows.item(0).ID_CTLG_TIPO_TERAPIA;
            objAux.iMA = results.rows.item(0).MA;
            objAux.iFRECUENCIA = results.rows.item(0).FRECUENCIA;
            objAux.iID_TRATAMIENTO = results.rows.item(0).ID_TRATAMIENTO;
            objAux.OBSERVACIONES = results.rows.item(0).OBSERVACIONES;



            // console.log(objAux);

            frap.secciones.manejo_via_aerea = new frap.auxiliares.MANEJO_VIA_AEREA();
            frap.secciones.asistencia_ventilatoria = new frap.auxiliares.ASISTENCIA_VENTILATORIA();
            frap.secciones.oxigenoterapia = new frap.auxiliares.OXIGENO_TERAPIA();
            frap.secciones.desc_ple = new frap.auxiliares.DESCOMPRESION_PLEURAL();
            //frap.secciones.control_hemorragias = new frap.auxiliares.CONTROL_HEMORRAGIAS();
            frap.secciones.acceso_circulatorio = new frap.auxiliares.ACCESO_CIRCULATORIO();
            frap.secciones.intervenciones = new frap.auxiliares.INTERVENCIONES();
            frap.secciones.terapia_electrica = new frap.auxiliares.TERAPIA_ELECTRICA();

            frap.secciones.tratamiento = new frap.auxiliares.TRATAMIENTO();

            // console.log(frap);
        }
    };


    dataBase.getTableS('TRATAMIENTO', '*', " WHERE ID_FRAP ="+idFRAP+ " AND TIPO_FRAP='"+tipoFRAP+"' ", cb);
};




frap.recuperacion['CLINICO'] = function()
{

    // console.log('saca clinico');
    var cb = function(tx, results)
    {
        var len = results.rows.length;

        // console.log(results.rows);

        // console.log(results.rows.item);


        if (len > 0)
        {
            objAux.DIAGNOSTICO_SINDROMATICO = results.rows.item(0).DIAGNOSTICO_SINDROMATICO;
            objAux.iID_CTLG_ORIGEN_PROBABLE = results.rows.item(0).ID_CTLG_ORIGEN_PROBABLE;
            objAux.OBSERVACIONES = results.rows.item(0).OBSERVACIONES;


            frap.secciones.clinico = new frap.auxiliares.Clinico();


            //  console.log(frap);

            //$.jStorage.set("frap", frap);

        }

        //console.log('en rescate factores');
        //console.log(frap.secciones.evaluacion_secundaria.factores);

        //frap.enviar();
    };

    dataBase.getTableS('CLINICO', '*', " WHERE ID_FRAP ="+idFRAP+ " AND TIPO_FRAP='"+tipoFRAP+"' ", cb);
};


frap.recuperacion['CONTROL_HEMORRAGIAS'] = function()
{

    var cb = function(tx, results)
    {
        var len = results.rows.length;

        console.log("Aquiiii");
        console.log(results.rows);

        console.log(results.rows.item);


        if (len > 0)
        {
            objAux.iID_CTLG_CONTROL_HEMORRAGIAS = results.rows.item(0).ID_CTLG_CONTROL_HEMORRAGIAS;
            objAux.HORA_COLOCACION = results.rows.item(0).HORA_COLOCACION;
        }

        frap.secciones.control_hemorragias = new frap.auxiliares.CONTROL_HEMORRAGIAS();

        console.log('en rescate CONTROL_HEMORRAGIAS');
        console.log(frap.secciones.control_hemorragias);

    };

    dataBase.getTableS('CONTROL_HEMORRAGIAS', '*', " WHERE ID_FRAP ="+idFRAP+ " AND TIPO_FRAP='"+tipoFRAP+"' ", cb);
};




frap.recuperacion['TRAUMA'] = function()
{

    var cb = function(tx, results)
    {
        var len = results.rows.length;

        //  console.log(results.rows);

        // console.log(results.rows.item);


        if (len > 0)
        {
            objAux.iINTENCIONALIDAD = results.rows.item(0).INTENCIONALIDAD;
            objAux.iID_CTLG_AGENTE_CAUSAL_GENERAL = results.rows.item(0).ID_CTLG_AGENTE_CAUSAL_GENERAL;
            objAux.iID_CTLG_AGENTE_CAUSAL_ESPECIFICO = results.rows.item(0).ID_CTLG_AGENTE_CAUSAL_ESPECIFICO;
            objAux.OBSERVACIONES = results.rows.item(0).OBSERVACIONES;

            frap.secciones.trauma = new frap.auxiliares.Trauma();

            //   console.log(frap.secciones.trauma);

            //$.jStorage.set("frap", frap);

        }


    };

    dataBase.getTableS('TRAUMA', '*', " WHERE ID_FRAP ="+idFRAP+ " AND TIPO_FRAP='"+tipoFRAP+"' ", cb);
};



frap.recuperacion['VIAL'] = function()
{

    var cb = function(tx, results)
    {
        var len = results.rows.length;

        // console.log(results.rows);

        // console.log(results.rows.item);


        if (len > 0)
        {
            objAux.iID_CTLG_TIPO_ACCIDENTE_VIAL = results.rows.item(0).ID_CTLG_TIPO_ACCIDENTE_VIAL;
            objAux.iID_CTLG_TIPO_LESIONADO = results.rows.item(0).ID_CTLG_TIPO_LESIONADO;
            objAux.iID_CTLG_ACTOR_VIAL = results.rows.item(0).ID_CTLG_ACTOR_VIAL;
            objAux.iID_CTLG_ATROPELLADO_POR = results.rows.item(0).ID_CTLG_ATROPELLADO_POR;
            objAux.iID_CTLG_IMPACTO = results.rows.item(0).ID_CTLG_IMPACTO;
            objAux.iID_CTLG_VOLANTE = results.rows.item(0).ID_CTLG_VOLANTE;
            objAux.iID_CTLG_PARABRISAS = results.rows.item(0).ID_CTLG_PARABRISAS;
            objAux.iID_CTLG_BOLSA_AIRE = results.rows.item(0).ID_CTLG_BOLSA_AIRE;
            objAux.iID_CTLG_CINTURON_SEGURIDAD = results.rows.item(0).ID_CTLG_CINTURON_SEGURIDAD;
            objAux.iEYECTADO = results.rows.item(0).EYECTADO;
            objAux.iDECESOS = results.rows.item(0).DECESOS;
            objAux.iPRENSADO = results.rows.item(0).PRENSADO;
            objAux.iCASCO = results.rows.item(0).CASCO;
            objAux.OBSERVACIONES = results.rows.item(0).OBSERVACIONES;

            frap.secciones.vial = new frap.auxiliares.Vial();

            // console.log(frap.secciones.vial);

            //$.jStorage.set("frap", frap);

        }


    };

    dataBase.getTableS('VIAL', '*', " WHERE ID_FRAP ="+idFRAP+ " AND TIPO_FRAP='"+tipoFRAP+"' ", cb);
};


frap.recuperacion['GINECOLOGICO'] = function()
{

    var cb = function(tx, results)
    {
        var len = results.rows.length;

        // console.log(results.rows);

        // console.log(results.rows.item);


        if (len > 0)
        {

            objAux.iGESTA = results.rows.item(0).GESTA;
            objAux.iPARA = results.rows.item(0).PARA;
            objAux.iCESARIA = results.rows.item(0).CESARIA;
            objAux.iABORTOS = results.rows.item(0).ABORTOS;
            objAux.iSEMANAS_GESTACION = results.rows.item(0).SEMANAS_GESTACION;
            objAux.FUM = results.rows.item(0).FUM;
            objAux.HORA_INICIO_CONTRACCIONES = results.rows.item(0).HORA_INICIO_CONTRACCIONES;
            objAux.iFRECUENCIA = results.rows.item(0).FRECUENCIA;
            objAux.iDURACION = results.rows.item(0).DURACION;


            objAux.HORA_NACIOMIENTO = results.rows.item(0).HORA_NACIOMIENTO;
            objAux.iPLACENTA_EXPULSADA = results.rows.item(0).PLACENTA_EXPULSADA;
            objAux.LUGAR_NACIMIENTO = results.rows.item(0).LUGAR_NACIMIENTO;
            objAux.iPRODUCTO_VIVO = results.rows.item(0).PRODUCTO_VIVO;
            objAux.iSEXO = results.rows.item(0).SEXO;
            objAux.iCONTROL_PARENTAL = results.rows.item(0).CONTROL_PARENTAL;
            objAux.iEMBARAZO_ALTO_RIESGO = results.rows.item(0).EMBARAZO_ALTO_RIESGO;
            objAux.iESQUEMA_MADURACION_PULMONAR = results.rows.item(0).ESQUEMA_MADURACION_PULMONAR;
            objAux.iAPGAR1 = results.rows.item(0).APGAR1;
            objAux.iAPGAR5 = results.rows.item(0).APGAR5;
            objAux.iAPGAR10 = results.rows.item(0).APGAR10;
            objAux.iSILVERMAN = results.rows.item(0).SILVERMAN;
            objAux.iMEMBRANAS_INTEGRAS = results.rows.item(0).MEMBRANAS_INTEGRAS;
            objAux.OBSERVACIONES = results.rows.item(0).OBSERVACIONES;



            frap.secciones.ginecologico = new frap.auxiliares.Ginecologico();


            // console.log(frap.secciones.ginecologico);

            //$.jStorage.set("frap", frap);

        }

        //console.log('en rescate factores');
        //console.log(frap.secciones.evaluacion_secundaria.factores);

        //frap.enviar();
    };

    dataBase.getTableS('GINECOLOGICO', '*', " WHERE ID_FRAP ="+idFRAP+ " AND TIPO_FRAP='"+tipoFRAP+"' ", cb);
};





//insumos added by JC


frap.recuperacion['INSUMOS_NIVEL_BASICO'] = function()
{
    // console.log("en recuperacion de insumos_basicos de FRAP_OBJECT");

    // console.log('dentro de la funcion paciente');
    // console.log('idFRAP    '+ idFRAP);
    // console.log('TIPO_FRAP    '+ tipoFRAP);

    var cb = function(tx, results)
    {
        var len = results.rows.length;

        // console.log(results.rows);

        // console.log(results.rows.item);


        if (len > 0)
        {
            objAux.SONDA_ASPIRACION = results.rows.item(0).SONDA_ASPIRACION;
            objAux.PUNTAS_NASALES = results.rows.item(0).PUNTAS_NASALES;
            objAux.MASCARILLA_ADULTO = results.rows.item(0).MASCARILLA_ADULTO;
            objAux.PUNZOCATH_14 = results.rows.item(0).PUNZOCATH_14;
            objAux.PUNZOCATH_16 = results.rows.item(0).PUNZOCATH_16;
            objAux.PUNZOCATH_18 = results.rows.item(0).PUNZOCATH_18;
            objAux.PUNZOCATH_20 = results.rows.item(0).PUNZOCATH_20;
            objAux.PUNZOCATH_22 = results.rows.item(0).PUNZOCATH_22;
            objAux.VENOPACK_NORMOGOTERO = results.rows.item(0).VENOPACK_NORMOGOTERO;
            objAux.JERINGA_5_CC = results.rows.item(0).JERINGA_5_CC;
            objAux.JERINGA_10_CC = results.rows.item(0).JERINGA_10_CC;
            objAux.GUANTES = results.rows.item(0).GUANTES;
            objAux.GASA_SIMPLE = results.rows.item(0).GASA_SIMPLE;
            objAux.VENDA_ELASTICA_5_CM = results.rows.item(0).VENDA_ELASTICA_5_CM;
            objAux.VENDA_ELASTICA_10_CM = results.rows.item(0).VENDA_ELASTICA_10_CM;
            objAux.VENDA_ELASTICA_30_CM = results.rows.item(0).VENDA_ELASTICA_30_CM;
            objAux.TIRA_REACTIVA = results.rows.item(0).TIRA_REACTIVA;
            objAux.LANCETA = results.rows.item(0).LANCETA;
            objAux.NaCL_9 = results.rows.item(0).NaCL_9;
            objAux.HARTMANN = results.rows.item(0).HARTMANN;
            objAux.GLUCOSA_5 = results.rows.item(0).GLUCOSA_5;
            objAux.GLUCOSA_10 = results.rows.item(0).GLUCOSA_10;
            objAux.GLUCOSA_50 = results.rows.item(0).GLUCOSA_50;
            objAux.MIXTA = results.rows.item(0).MIXTA;
            objAux.SABANA_DESECHABLE = results.rows.item(0).SABANA_DESECHABLE;
            objAux.EQUIPO_PARTO = results.rows.item(0).EQUIPO_PARTO;

            frap.secciones.insumosBasicos = new frap.auxiliares.Insumos_Nivel_Basico();


            // console.log(frap.secciones.insumosBasicos);

            //$.jStorage.set("frap", frap);

        }
    };

    dataBase.getTableS('INSUMOS_NIVEL_BASICO', '*', " WHERE ID_FRAP ="+idFRAP+ " AND TIPO_FRAP='"+tipoFRAP+"' ", cb);
};

frap.recuperacion['INSUMOS_NIVEL_INTERMEDIO'] = function()
{
    // console.log("en recuperacion de insumos_medios de FRAP_OBJECT");

    // console.log('dentro de la funcion paciente');
    // console.log('idFRAP    '+ idFRAP);
    // console.log('TIPO_FRAP    '+ tipoFRAP);

    var cb = function(tx, results)
    {
        var len = results.rows.length;

        // console.log(results.rows);

        // console.log(results.rows.item);


        if (len > 0)
        {
            objAux.TUBO_ENDROTRAQUEAL_75 = results.rows.item(0).TUBO_ENDROTRAQUEAL_75;
            objAux.TUBO_ENDROTRAQUEAL_8 = results.rows.item(0).TUBO_ENDROTRAQUEAL_8;
            objAux.TUBO_ENDROTRAQUEAL_85 = results.rows.item(0).TUBO_ENDROTRAQUEAL_85;
            objAux.MASCARILLA_LARINGEA = results.rows.item(0).MASCARILLA_LARINGEA;
            objAux.MASCARILLA_PEDIATRICA = results.rows.item(0).MASCARILLA_PEDIATRICA;
            objAux.CANULA_OROFARINGEA = results.rows.item(0).CANULA_OROFARINGEA;
            objAux.VENOPACK_MICROGOTERO = results.rows.item(0).VENOPACK_MICROGOTERO;
            objAux.JERINGA_INSULINA = results.rows.item(0).JERINGA_INSULINA;
            objAux.CLAMPS_UMBILICALES = results.rows.item(0).CLAMPS_UMBILICALES;
            objAux.ELECTRODOS_ADULTO = results.rows.item(0).ELECTRODOS_ADULTO;
            objAux.ELECTRODOS_PEDIATRICOS = results.rows.item(0).ELECTRODOS_PEDIATRICOS;
            objAux.FORMATO_REGISTRO_ATENCION_PREHOSPITALARIA = results.rows.item(0).FORMATO_REGISTRO_ATENCION_PREHOSPITALARIA;


            frap.secciones.insumosMedio = new frap.auxiliares.Insumos_Nivel_Medio();

        }



        // console.log(frap.secciones.insumosMedio);

        //$.jStorage.set("frap", frap);
    };

    dataBase.getTableS('INSUMOS_NIVEL_INTERMEDIO', '*', " WHERE ID_FRAP ="+idFRAP+ " AND TIPO_FRAP='"+tipoFRAP+"' ", cb);
};


frap.recuperacion['INSUMOS_NIVEL_AVANZADO'] = function()
{
    // console.log("en recuperacion de insumos_avanzado de FRAP_OBJECT");

    // console.log('dentro de la funcion paciente');
    // console.log('idFRAP    '+ idFRAP);
    // console.log('TIPO_FRAP    '+ tipoFRAP);

    var cb = function(tx, results)
    {
        var len = results.rows.length;

        // console.log(results.rows);

        // console.log(results.rows.item);


        if (len > 0)
        {
            objAux.TUBO_ENDROTRAQUEAL_35 = results.rows.item(0).TUBO_ENDROTRAQUEAL_35;
            objAux.TUBO_ENDROTRAQUEAL_4 = results.rows.item(0).TUBO_ENDROTRAQUEAL_4;
            objAux.TROCAR_TORACICO_14 = results.rows.item(0).TROCAR_TORACICO_14;
            objAux.TROCAR_TORACICO_16 = results.rows.item(0).TROCAR_TORACICO_16;
            objAux.TROCAR_TORACICO_18 = results.rows.item(0).TROCAR_TORACICO_18;
            objAux.SONDA_NASOGASTRICA = results.rows.item(0).SONDA_NASOGASTRICA;
            objAux.PARCHES_MARCAPASOS = results.rows.item(0).PARCHES_MARCAPASOS;
            objAux.OTRO = results.rows.item(0).OTRO;


            frap.secciones.insumosAvanzados = new frap.auxiliares.Insumos_Nivel_Avanzado();

        }

        // console.log(frap.secciones.insumosAvanzados);

        //$.jStorage.set("frap", frap);
    };

    dataBase.getTableS('INSUMOS_NIVEL_AVANZADO', '*', " WHERE ID_FRAP ="+idFRAP+ " AND TIPO_FRAP='"+tipoFRAP+"' ", cb);
};



// added by la Z

frap.recuperacion['FRAP_OTROS'] = function()
{
    // console.log("en recuperacion de FRAP_OTROS");

    // console.log('dentro de la funcion FRAP_OTROS');
    // console.log('idFRAP    '+ idFRAP);
    // console.log('TIPO_FRAP    '+ tipoFRAP);

    var cb = function(tx, results)
    {
        var len = results.rows.length;

        // console.log(results.rows);

        // console.log(results.rows.item);


        if (len > 0)
        {
            objAux.DEPENDENCIAS = results.rows.item(0).DEPENDENCIAS;
            objAux.UNIDADES = results.rows.item(0).UNIDADES;
            objAux.NOMBRE = results.rows.item(0).NOMBRE;

            frap.secciones.otros = new frap.auxiliares.OTROS();

        }

        // console.log(frap.secciones.otros);

        //$.jStorage.set("frap", frap);
    };

    dataBase.getTableS('FRAP_OTROS', '*', " WHERE ID_FRAP ="+idFRAP+ " AND TIPO_FRAP='"+tipoFRAP+"' ", cb);
};




frap.recuperacion['CONSENTIMIENTO'] = function()
{
     console.log("en recuperacion de CONSENTIMIENTO");

    // console.log('dentro de la funcion FRAP_OTROS');
    // console.log('idFRAP    '+ idFRAP);
    // console.log('TIPO_FRAP    '+ tipoFRAP);

    var cb = function(tx, results)
    {
        var len = results.rows.length;

        // console.log(results.rows);

        // console.log(results.rows.item);


        if (len > 0)
        {


        objAux.NOMBRE_PACIENTE = results.rows.item(0).NOMBRE_PACIENTE;
        objAux.NOMBRE_TESTIGO = results.rows.item(0).NOMBRE_TESTIGO;
        objAux.FIRMA_PACIENTE = results.rows.item(0).FIRMA_PACIENTE;
        objAux.FIRMA_TESTIGO = results.rows.item(0).FIRMA_TESTIGO;


        frap.secciones.consentimiento = new frap.auxiliares.CONSENTIMIENTO();

        }

        // console.log(frap.secciones.otros);

        //$.jStorage.set("frap", frap);
    };

    dataBase.getTableS('CONSENTIMIENTO', '*', " WHERE ID_FRAP ="+idFRAP+ " AND TIPO_FRAP='"+tipoFRAP+"' ", cb);
};





// =====================================================================================================================
// Recuperando MULTI-REGISTROS
// =====================================================================================================================
// =====================================================================================================================

frap.recuperacion['MEDICAMENTOS'] = function()
{
    // console.log("en recuperacion de MEDICAMENTOS");

    // console.log('dentro de la funcion MEDICAMENTOS');
    // console.log('idFRAP    '+ idFRAP);
    // console.log('TIPO_FRAP    '+ tipoFRAP);

    var cb = function(tx, results)
    {
        var len = results.rows.length;

        // console.log(results.rows);

        // console.log(results.rows.item);

        var  medicamento ={};

        var len = results.rows.length;

        //alert('long:'+len +" id:"+idFRAP);
        for (var i = 0; i < len; i++) {

            medicamento["registro"+i]={ "HORA":results.rows.item(i).HORA, "MEDICAMENTO":results.rows.item(i).MEDICAMENTO, "DOSIS":results.rows.item(i).DOSIS, "iID_CTLG_MEDICAMENTO_VIA_ADMINISTRACION":results.rows.item(i).ID_MEDICAMENTO_VIA_ADMINISTRACION};
            //medicamento["registro"+i]={ "HORA":results.rows.item(i).HORA, "MEDICAMENTO":results.rows.item(i).MEDICAMENTO, "DOSIS":results.rows.item(i).DOSIS, "iID_MEDICAMENTO_VIA_ADMINISTRACION":results.rows.item(i).ID_MEDICAMENTO_VIA_ADMINISTRACION};

        }

        frap.secciones.medicamentos = [];

        if(len !=0){
            frap.secciones.medicamentos = medicamento;
        }




        console.log('esto medicamneto');
        console.log(frap.secciones.medicamentos);

        //$.jStorage.set("frap", frap);
    };

    dataBase.getTableS('MEDICAMENTOS', '*', " WHERE ID_FRAP ="+idFRAP+ " AND TIPO_FRAP='"+tipoFRAP+"' ", cb);
};


frap.recuperacion['HALLAZGOS_FISICOS'] = function()
{
    // console.log("en recuperacion de insumos_avanzado de HALLAZGOS_FISICOS");

    // console.log('dentro de la funcion HALLAZGOS_FISICOS');
    // console.log('idFRAP    '+ idFRAP);
    // console.log('TIPO_FRAP    '+ tipoFRAP);

    var cb = function(tx, results)
    {

        // console.log(results.rows);
        // console.log(results.rows.item);


        var  hallazgos ={};

        var len = results.rows.length;

        for (var i = 0; i < len; i++) {

            hallazgos["registro"+i]={ "iCTLG_LESIONES_ID":results.rows.item(i).CTLG_LESIONES_ID, "iCOORDENADA_X":(results.rows.item(i).COORDENADA_X), "iCOORDENADA_Y":(results.rows.item(i).COORDENADA_Y)};
            // console.log(hallazgos["registro"+i]);

        }
        //console.log(len);
        frap.secciones.hallazgos = [];

        if(len !=0){
            frap.secciones.hallazgos = hallazgos;
        }

        console.log(frap.secciones.hallazgos);

        //$.jStorage.set("frap", frap);
    };

    dataBase.getTableS('HALLAZGOS_FISICOS', '*', " WHERE FRAP_ID ="+idFRAP+ " AND TIPO_FRAP='"+tipoFRAP+"' ", cb);
};

frap.recuperacion['SIGNOS_VITALES'] = function()
{
    // console.log("en recuperacion de insumos_avanzado de SIGNOS_VITALES");

    // console.log('dentro de la funcion SIGNOS_VITALES');
    // console.log('idFRAP    '+ idFRAP);
    // console.log('TIPO_FRAP    '+ tipoFRAP);

    var cb = function(tx, results)
    {

        // console.log(results.rows);
        // console.log(results.rows.item);


        var  signos ={};

        var len = results.rows.length;

        for (var i = 0; i < len; i++) {

            signos["registro"+i]={ "HORA":results.rows.item(i).HORA, "iFC":results.rows.item(i).FC, "iFR":results.rows.item(i).FR, "iTAS":results.rows.item(i).TAS, "iTAD":results.rows.item(i).TAD, "iSAO2":results.rows.item(i).SAO2, "iTEMPERATURA":results.rows.item(i).TEMPERATURA, "iGLUCOSA":results.rows.item(i).GLUCOSA, "iID_CTLG_GLASGOW_MOTRIZ":results.rows.item(i).ID_CTLG_GLASGOW_MOTRIZ, "iID_CTLG_GLASGOW_VERBAL":results.rows.item(i).ID_CTLG_GLASGOW_VERBAL, "iID_CTLG_GLASGOW_VISUAL":results.rows.item(i).ID_CTLG_GLASGOW_VISUAL};
            //signos["registro"+i]={ "iCTLG_LESIONES_ID":results.rows.item(i).CTLG_LESIONES_ID, "iCOORDENADA_X":(results.rows.item(i).COORDENADA_X), "iCOORDENADA_Y":(results.rows.item(i).COORDENADA_Y)};
            // console.log(signos["registro"+i]);

        }
        //console.log(len);
        frap.secciones.signos_vitales = [];

        if(len !=0){
            frap.secciones.signos_vitales = signos;
        }

        // console.log(frap.secciones.signos_vitales);

        //$.jStorage.set("frap", frap);
    };

    dataBase.getTableS('REGISTRO_SIGNOS_VITALES', '*', " WHERE ID_FRAP ="+idFRAP+ " AND TIPO_FRAP='"+tipoFRAP+"' ", cb);
};


frap.recuperacion['FACTORES'] = function()
{
    // console.log("en recuperacion de insumos_avanzado de FACTORES");

    // console.log('dentro de la funcion FACTORES');
    // console.log('idFRAP    '+ idFRAP);
    // console.log('TIPO_FRAP    '+ tipoFRAP);

    var cb = function(tx, results)
    {

        // console.log(results.rows);
        // console.log(results.rows.item);

        var  factores ={};

        var len = results.rows.length;

        for (var i = 0; i < len; i++) {

            factores["registro"+i]={ "iCTLG_FACTOR_RIESGO":results.rows.item(i).CTLG_LESIONES_ID};

        }


        //console.log(len);
        frap.secciones.factores = [];

        if(len !=0){
            frap.secciones.factores = factores;
        }

        // console.log(frap.secciones.factores);

        //$.jStorage.set("frap", frap);
    };

    dataBase.getTableS('FACTORES', '*', " WHERE FRAP_ID ="+idFRAP+ " AND TIPO_FRAP='"+tipoFRAP+"' ", cb);
};


frap.recuperacion['EMERGENCIA_RESULTADO'] = function()
{
    console.log("en recuperacion de EMERGENCIA_RESULTADO");

    console.log('dentro de la funcion EMERGENCIA_RESULTADO');
    console.log('idFRAP    '+ idFRAP);
    console.log('TIPO_FRAP    '+ tipoFRAP);

    var cb = function(tx, results)
    {
        var len = results.rows.length;

        console.log(results.rows);

        console.log(results.rows.item);


        if (len > 0)
        {
            objAux.iRESULTADO = results.rows.item(0).RESULTADO;
            objAux.iTRASLADO = results.rows.item(0).TRASLADO;
            objAux.iPRIORIDAD_FINAL = results.rows.item(0).PRIORIDAD_FINAL;
            objAux.FOLIO_RECEPCION = results.rows.item(0).FOLIO_RECEPCION;
            objAux.MEDICO_RECIBE = results.rows.item(0).MEDICO_RECIBE;
            objAux.DENOMINACION = results.rows.item(0).DENOMINACION;




            frap.secciones.emergencia_resultado = new frap.auxiliares.RESULTADO();

        }

        console.log(frap.secciones.emergencia_resultado);

        //$.jStorage.set("frap", frap);
    };

    dataBase.getTableS('EMERGENCIA_RESULTADO', '*', " WHERE ID_FRAP ="+idFRAP+ " AND TIPO_FRAP='"+tipoFRAP+"' ", cb);
};

frap.recuperacion['FRAP_LEGAL'] = function()
{
    console.log("en recuperacion de FRAP_LEGAL");

    console.log('dentro de la funcion FRAP_LEGAL');
    console.log('idFRAP    '+ idFRAP);
    console.log('TIPO_FRAP    '+ tipoFRAP);

    var cb = function(tx, results)
    {
        var len = results.rows.length;

        //console.log(results.rows);

        //console.log(results.rows.item);


        if (len > 0)
        {

            objAux.PERTENENCIAS = results.rows.item(0).PERTENENCIAS;
            objAux.NOMBRE = results.rows.item(0).NOMBRE;
            objAux.FIRMA = results.rows.item(0).FIRMA;

            objAux.TOMA_CONOCIMIENTO = results.rows.item(0).TOMA_CONOCIMIENTO;
            objAux.OBSERVACIONES = results.rows.item(0).OBSERVACIONES;


            frap.secciones.legal = new frap.auxiliares.LEGAL();

        }

        console.log(frap.secciones.legal);

        //$.jStorage.set("frap", frap);
    };

    dataBase.getTableS('FRAP_LEGAL', '*', " WHERE ID_FRAP ="+idFRAP+ " AND TIPO_FRAP='"+tipoFRAP+"' ", cb);
};



































// codigo sin probar


frap.cargas.loadEvaluacionPrimaria = function(){
    // asignar succes
    dataBase.onSuccess = function(tx, results) {
        var len = results.rows.length;
        if (len>0){

            frap.secciones.evaluacion_primaria = results.rows.item(0).ID_CTLG_NIVEL_CONCIENCIA;
            frap.secciones.evaluacion_primaria = results.rows.item(0).ID_CTLG_VIA_AEREA;

            frap.secciones.evaluacion_primaria  = results.rows.item(0).ID_CTLG_VENTILACION;
            frap.secciones.evaluacion_primaria = results.rows.item(0).ID_CTLG_CALIDAD_VENTILACION;

            frap.secciones.evaluacion_primaria = results.rows.item(0).ID_CTLG_PULSOS;
            frap.secciones.evaluacion_primaria = results.rows.item(0).ID_CTLG_COLORACION;
            frap.secciones.evaluacion_primaria = results.rows.item(0).ID_CTLG_CONDICION;
            frap.secciones.evaluacion_primaria = results.rows.item(0).ID_CTLG_TEMPERATURA;
            //frap.secciones.evaluacion_primaria = results.rows.item(0).POSICION;
            frap.secciones.evaluacion_primaria = results.rows.item(0).ID_CTLG_PRIORIDAD;
            frap.secciones.evaluacion_primaria = results.rows.item(0).ID_CTLG_PULSOS_CALIDAD;
            frap.secciones.evaluacion_primaria = results.rows.item(0).ID_CTLG_RITMO;

            //alert('Se cargo el EP');
        }

            //cargarEvaluacionSecundaria(tipoE, idE);

        };



    dataBase.getTable('EVALUACION_PRIMARIA', '*', " WHERE ID_FRAP = "+id+" and TIPO_FRAP='"+tipo+"' ");

};

frap.cargas.loadDireccion = function(){

    // asignar succes
    dataBase.onSuccess = function(tx, results) {
        //alert('cargando usuario');

        var len = results.rows.length;
        if (len>0){
            frap.secciones.paciente.CALLE = results.rows.item(0).CALLE;
            frap.secciones.paciente.iNUMERO_EXTERIOR = results.rows.item(0).NUMERO_EXTERIOR;
            frap.secciones.paciente.COLONIA = results.rows.item(0).COLONIA;
            frap.secciones.paciente.DELEGACION = results.rows.item(0).DELEGACION;
            frap.secciones.paciente.iCP = results.rows.item(0).CP;
            frap.secciones.paciente.iID_CTLG_ESTADOS = results.rows.item(0).ID_CTLG_ESTADOS;


        }
        frap.cargas.loadEvaluacionPrimaria();

    };

    dataBase.getTable('PACIENTE', '*', " WHERE ID_FRAP = "+id+" and TIPO_FRAP='"+tipo+"' ");


};


frap.cargas.loadPaciente = function(){

    // asignar succes
    dataBase.onSuccess = function(tx, results) {
        //alert('cargando usuario');

        var len = results.rows.length;
        if (len>0){
            frap.secciones.direccion = results.rows.item(0).MEDIA_FILIACION;


            frap.secciones.paciente.NOMBRE = results.rows.item(0).NOMBRE ;
            frap.secciones.paciente.APELLIDO_PATERNO = results.rows.item(0).APELLIDO_PATERNO;
            frap.secciones.paciente.APELLIDO_MATERNO = results.rows.item(0).APELLIDO_MATERNO;
            frap.secciones.paciente.EDAD = results.rows.item(0).EDAD;
            frap.secciones.paciente.iSERVICIO_MEDICO = results.rows.item(0).SERVICIO_MEDICO;
            frap.secciones.paciente.iSEXOS_ID_SEXOS = results.rows.item(0).SEXOS_ID_SEXOS;
            frap.secciones.paciente.iMOTIVO_ATENCION = results.rows.item(0).MOTIVO_ATENCION;
            frap.secciones.paciente.TELEFONO = results.rows.item(0).TELEFONO;
            frap.secciones.paciente.OCUPACION = results.rows.item(0).OCUPACION;

            //alert('Se cargo el paciente');

        }
        frap.cargas.loadDireccion();

    };

    dataBase.getTable('PACIENTE', '*', " WHERE ID_FRAP = "+id+" and TIPO_FRAP='"+tipo+"' ");

};


frap.secciones.set = function(){};













// funciones de Evio al servidor
//============================================================================
//============================================================================



// Variable de control
var fs ={};
fs['FRAP']=[];


fs['MOTIVO_ATENCION']=[];
fs['PACIENTE']=[];
fs['DIRECCION_PACIENTE']=[];
fs['DATOS_PACIENTE']=[];

fs['MEDIA_FILIACION']=[];


fs['EVALUACION_PRIMARIA']=[];


fs['EVALUACION_SECUNDARIA']=[];
fs['SEMIOLOGIA_DOLOR']=[]; // correcto SIMBOLIGIA_DOLOR pero nbo jala :) por el nombre de la tabla maestro
fs['SAMPLER']=[];


fs['MANEJO_VIA_AEREA']=[];
fs['ASISTENCIA_VENTILATORIA']=[];
fs['OXIGENO_TERAPIA']=[];
fs['DESCOMPRENSION_PLEURAL']=[];

fs['CONTROL_HEMORRAGIAS']=[];
fs['ACCESO_CIRCULATORIO']=[];
fs['INTERVENCIONES']=[];
fs['TERAPIA_ELECTRICA']=[];

fs['TRATAMIENTO']=[];



fs['FACTORES_RIESGO']=[];
fs['HALLAZGOS_FISICOS']=[];


fs['TRAUMA']=[];
fs['CLINICO']=[];
fs['GINECOLOGICO']=[];
fs['VIAL']=[];

fs['FRAP_OTROS']=[];
fs['CONSENTIMIENTO']=[];

fs['EMERGENCIA_RESULTADO']=[];
fs['FRAP_LEGAL']=[];



fs['INSUMOS_NIVEL_BASICO']=[];
fs['INSUMOS_NIVEL_INTERMEDIO']=[];
fs['INSUMOS_NIVEL_AVANZADO']=[];

fs['REGISTRO_SIGNOS_VITALES']=[];
fs['MEDICAMENTOS']=[];

fs['AUDITORIA']=[];





// Creacion de los fragmentos
//=============================================================================

var frap_elementos = {};


frap.preparar = function (){


    //console.log('datos para el envio ');
//    console.log(frap.secciones.paciente);


    frap_elementos["MOTIVO_ATENCION"] ={"intentos":0,"enviado":false, "datos" :frap.secciones.motivo_atencion};
    frap_elementos["PACIENTE"] ={"intentos":0,"enviado":false, "datos" :frap.secciones.paciente};
    frap_elementos["DATOS_PACIENTE"] ={"intentos":0,"enviado":false, "datos" :frap.secciones.datos_paciente};

    //console.log('fijate DIRECCION_PACIENTE');
    //console.log(frap.secciones.direccion_paciente);
    frap_elementos["DIRECCION_PACIENTE"] ={"intentos":0,"enviado":false, "datos" :frap.secciones.direccion_paciente};
    frap_elementos["MEDIA_FILIACION"] ={"intentos":0,"enviado":false, "datos" :frap.secciones.media_filiacion};





    frap_elementos["EVALUACION_PRIMARIA"] ={"intentos":0,"enviado":false, "datos" :frap.secciones.evaluacion_primaria};

    //console.log('SEMIOLOGIA_DOLOR');
    //console.log(frap.secciones.simbologia_dolor);
    frap_elementos["SEMIOLOGIA_DOLOR"] ={"intentos":0,"enviado":false, "datos" :frap.secciones.simbologia_dolor};
    frap_elementos["SAMPLER"] ={"intentos":0,"enviado":false, "datos" :frap.secciones.sampler};
    frap_elementos["EVALUACION_SECUNDARIA"] ={"intentos":0,"enviado":false, "datos" :frap.secciones.evaluacion_secundaria};


    //console.log('MANEJO_VIA_AEREA');
    //console.log(frap.secciones.manejo_via_aerea);
    frap_elementos["MANEJO_VIA_AEREA"] ={"intentos":0,"enviado":false, "datos" :frap.secciones.manejo_via_aerea};
    frap_elementos["ASISTENCIA_VENTILATORIA"] ={"intentos":0,"enviado":false, "datos" :frap.secciones.asistencia_ventilatoria};
    frap_elementos["OXIGENO_TERAPIA"] ={"intentos":0,"enviado":false, "datos" :frap.secciones.oxigenoterapia};
    frap_elementos["DESCOMPRENSION_PLEURAL"] ={"intentos":0,"enviado":false, "datos" :frap.secciones.desc_ple};

    frap_elementos["CONTROL_HEMORRAGIAS"] ={"intentos":0,"enviado":false, "datos" :frap.secciones.control_hemorragias};
    frap_elementos["ACCESO_CIRCULATORIO"] ={"intentos":0,"enviado":false, "datos" :frap.secciones.acceso_circulatorio};
    frap_elementos["INTERVENCIONES"] ={"intentos":0,"enviado":false, "datos" :frap.secciones.intervenciones};
    frap_elementos["TERAPIA_ELECTRICA"] ={"intentos":0,"enviado":false, "datos" :frap.secciones.terapia_electrica};
    frap_elementos["TRATAMIENTO"] ={"intentos":0,"enviado":false, "datos" :frap.secciones.tratamiento};

    //console.log('fiajte factores');
    //console.log(frap.secciones.factores);
    frap_elementos["FACTORES_RIESGO"] ={"intentos":0,"enviado":false, "datos" :frap.secciones.factores};



    frap_elementos["HALLAZGOS_FISICOS"] ={"intentos":0,"enviado":false, "datos" :frap.secciones.hallazgos};



    frap_elementos["TRAUMA"] ={"intentos":0,"enviado":false, "datos" :frap.secciones.trauma};


    frap_elementos["CLINICO"] ={"intentos":0,"enviado":false, "datos" :frap.secciones.clinico};
    frap_elementos["VIAL"] ={"intentos":0,"enviado":false, "datos" :frap.secciones.vial};
    frap_elementos["GINECOLOGICO"] ={"intentos":0,"enviado":false, "datos" :frap.secciones.ginecologico};


    frap_elementos["FRAP_OTROS"] ={"intentos":0,"enviado":false, "datos" :frap.secciones.otros};
    frap_elementos["CONSENTIMIENTO"] ={"intentos":0,"enviado":false, "datos" :frap.secciones.consentimiento};

    //console.log('fiajte resultado');
    //console.log(frap.secciones.emergencia_resultado);
    frap_elementos["EMERGENCIA_RESULTADO"] ={"intentos":0,"enviado":false, "datos" :frap.secciones.emergencia_resultado};

    //console.log('fiajte legal');
    //console.log(frap.secciones.legal);
    frap_elementos["FRAP_LEGAL"] ={"intentos":0,"enviado":false, "datos" :frap.secciones.legal};


    frap_elementos["INSUMOS_NIVEL_BASICO"] ={"intentos":0,"enviado":false, "datos" :frap.secciones.insumosBasicos};
    frap_elementos["INSUMOS_NIVEL_INTERMEDIO"] ={"intentos":0,"enviado":false, "datos" :frap.secciones.insumosMedio};
    frap_elementos["INSUMOS_NIVEL_AVANZADO"] ={"intentos":0,"enviado":false, "datos" :frap.secciones.insumosAvanzados};

    console.log('fiajte medicamentos');
    console.log(frap.secciones.medicamentos);

    frap_elementos["MEDICAMENTOS"] ={"intentos":0,"enviado":false, "datos" :frap.secciones.medicamentos};

    frap_elementos["REGISTRO_SIGNOS_VITALES"] ={"intentos":0,"enviado":false, "datos" :frap.secciones.signos_vitales};





};





/*******************************************************************************************
 *
 *   ENVIO DE LA INFORMACION
 *
 *******************************************************************************************/
//JSON.stringify({"fragmento":"FRAP_OBJECT","id":"1", "datos":fs})

frap.enviar = function() {

    parent.enviandoInformacion();




    frap.preparar();

    var token;
    var url_con;
    //var estado;

    estado = $.jStorage.get("estado");
    token = $.jStorage.get("token");


    // Llamada al servidor dispatcher
    $.ajax({
        type: 'POST',
        contentType: 'application/json',
        url: 'http://opowerdev.net/web_services/Despachador/usuario/getURL',
        //url: 'http://opowerdev.net/web_services/FRAP/usuario/login',
        dataType: "json",
        data: JSON.stringify({"Estado": estado}),
        contentType: "application/json; charset=utf-8",
        success: function (data, textStatus, jqXHR) {


            console.log(data.estado);
            console.log(data.token);
            console.log(data.url);
            console.log(data.version);
            url_con =data.url;

            console.log(token);

            if(token===data.token){



                $.ajax({
                    type: 'POST',
                    url: url_con + '/validarFRAP',
                    //url: 'https://opowerdev.net/web_services/FRAP/usuario/saveFRAP',
                    dataType: "json",
                    data: JSON.stringify({
                        "ID_usuario": id_usuario,
                        "session": id_sesion,
                        "estado": estado,
                        "ID_servicio": idService
                    }),
                    //data: JSON.stringify({"fragmento": "FRAP_OBJECT", "id": "1", "datos": fs}),
                    contentType: "application/json; charset=utf-8",
                    success: function (data, textStatus, jqXHR) {

                        var numF = '';

                        console.log(data.status);
                        console.log(data.validation);
                        console.log(data.number);

                        numF = data.number;

                        if(data.status){
                            frap.secciones.frap =  new frap.initFRAP(data.status, data.validation, data.number, idService);
                        }else{
                            frap.secciones.frap =  new frap.initFRAP('true', '22222', '23', 1);
                        }

                        //frap.secciones.frap =  new frap.initFRAP(data.status, data.validation, data.number);
                        frap_elementos["FRAP"] = {"intentos":0,"enviado":false, "datos" :frap.secciones.frap};

                        console.log('fiajte frap');
                        console.log(frap.secciones.frap);

                        $.ajax({
                            type: 'POST',
                            url: url_con + '/saveFRAP',
                            //url: 'https://opowerdev.net/web_services/FRAP/usuario/saveFRAP',
                            dataType: "json",
                            data: JSON.stringify({"fragmento": "FRAP_OBJECT", "id": "1", "datos": fs}),
                            contentType: "application/json; charset=utf-8",
                            success: function (data, textStatus, jqXHR) {

                                // Se crea el FRAP con éxito por lo que se recupera el ID
                                // .datos_respuesta.idFRAP
                                //=============================================================================
                                //alert(JSON.stringify(data));
                                var id = data.idData;
                                //console.log('id_data');
                                //console.log(id);


                                var promises = [];
                                //alert('envio de fragmentos');

                                $.each(frap_elementos, function (key, value) {

                                    //alert(JSON.stringify(value["datos"]));
                                    //send(key, value["datos"], id);


                                    // alert(JSON.stringify({"fragmento":key,"id":id, "datos":value["datos"]}));
                                    //var json_object = 'fragmento='+key+'&datos='+JSON.stringify(value["datos"]);
                                    //alert(json_object);
                                    console.log('enviando');
                                    console.log('==========================');
                                    console.log(value["datos"]);
                                    //console.log(JSON.stringify(value["datos"]));
                                    console.log(JSON.stringify({"fragmento": key, "id": id, "datos": value["datos"]}));

                                    var request = $.ajax({
                                        type: 'POST',
                                        url: url_con + '/saveFRAP',
                                        //url: 'https://opowerdev.net/web_services/FRAP/usuario/saveFRAP',
                                        dataType: "json",
                                        data: JSON.stringify({"fragmento": key, "id": id, "datos": value["datos"]}),
                                        contentType: "application/json; charset=utf-8",
                                        success: function (data, textStatus, jqXHR) {
                                            // alert(JSON.stringify(data));

                                        },
                                        error: function (respuesta) {
                                            console.log(respuesta);
                                            console.log(respuesta.detalles);
                                            alert("post_error! llamada elemento:" + key);
                                            alert(respuesta);
                                        }
                                    });


                                    promises.push(request);


                                });

                                $.when.apply(null, promises).done(function () {

                                    //$("#msgOk").dialog('open');

                                    // alert('se guardo FRAP con éxito');

                                    // location = "home_vehicules.html";
                                    // alert('FINISH-close-change');

                                    frap.commit(id, url_con, numF);
                                     //Commit(id);

                                }).fail(function () {
                                    alert('unexpected error must close');
                                });


                            },
                            error: function (jqXHR, textStatus, errorThrown) {
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

                    }, error: function (jqXHR, textStatus, errorThrown) {

                        // reportar error de conexión y salir de la app ppara volver a entrar y ya sea que conecte o iniar el modo offline
                        alert('conexion a get validation');
                    }
                }); // fin del ajax de get validation


            }else{
                // notificar que la aplicación debe reiniciar y cerrar
                console.log('else');
                $.mobile.loading( "hide" );
                $("#msgErrorText").html('Error CON 02: La configuración del servidor ha cambiado, la aplicación debe reiniciarse');
                changeConf = 1;

                $("#msgError").dialog('open');
            }



        }, error: function (jqXHR, textStatus, errorThrown) {

            // reportar error de conexión y salir de la app ppara volver a entrar y ya sea que conecte o iniar el modo offline
            alert('conexion');
        }

    });

};


frap.commit = function(id, url_con, numF){

   // alert (JSON.stringify({"idFD": id}) );
    $.ajax({
        type: 'POST',
        url: url_con + '/commit',
        dataType: "json",
        data: JSON.stringify({"idFD": id}),
        contentType: "application/json; charset=utf-8",
        success: function (data, textStatus, jqXHR) {

            frap.setFRAP(url_con, data.idFS, numF);
            //alert('succes commit');

        },
        error: function (jqXHR, textStatus, errorThrown) {
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



};

frap.setFRAP =  function(url_con, idFS, numeroF){


    //alert (JSON.stringify({"idFD": id}) );
    $.ajax({
        type: 'POST',
        url: url_con + '/setFRAP',
        dataType: "json",
        data: JSON.stringify({"ID_usuario": id_usuario,
            "session":id_sesion,
            "estado":estado,
            "ID_servicio":idService,
            "ID_frap":idFS,
            "Numero":numeroF
        }),
        contentType: "application/json; charset=utf-8",
        success: function (data, textStatus, jqXHR) {

            parent.cierraEnviando();
            $("#msgOk").dialog('open');



            //alert('success set');

        },
        error: function (jqXHR, textStatus, errorThrown) {
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


};
