
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

//frap.secciones.evaluacion_secundaria.factores =[];



frap.secciones.manejo_via_aerea = [];
frap.secciones.asistencia_ventilatoria = [];
frap.secciones.oxigenoterapia = [];
frap.secciones.desc_ple = [];
frap.secciones.control_hemorragias = [];
frap.secciones.acceso_circulatorio = [];
frap.secciones.intervenciones = [];
frap.secciones.terapia_electrica = [];
frap.secciones.tratamiento = [];


frap.secciones.trauma=[];
frap.secciones.clinico = [];
frap.secciones.vial = [];
frap.secciones.ginecologico = [];



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
    frap.secciones.control_hemorragias = new frap.initCONTROL_HEMORRAGIAS();
    frap.secciones.acceso_circulatorio = new frap.initACCESO_CIRCULATORIO();
    frap.secciones.intervenciones = new frap.initINTERVENCIONES();
    frap.secciones.terapia_electrica = new frap.initTERAPIA_ELECTRICA();
    frap.secciones.tratamiento = new frap.initTRATAMIENTO();

    frap.secciones.trauma = new frap.initTRAUMA();
    frap.secciones.clinico = new frap.initCLINICO();
    frap.secciones.vial = new frap.initVIAL();
    frap.secciones.ginecologico = new frap.initGINECOLOGICO();


};



// funciones de inicialización - Valores por dedult
//============================================================================


frap.initFRAP = function (status, validation, number){
        this.FOLIO = number,
        this.ESTATUS = status,
        this.VALIDACION = validation,
        this.iCTLG_TIPO_SERVICIO = idService,
        this.iID_SERVICIO_MEDICO = ( iframe.find('input[name=servicio_medico]:checked').size() > 0 ? iframe.find('input[name=servicio_medico]:checked').val(): 0)
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
    this.ESTADO = objAux.ESTADO
    // this.NUMERO_EXTERIOR = objAux.NUMERO_EXTERIOR,
    // this.NUMERO_INTERIOR = objAux.NUMERO_INTERIOR,
    //this.COLONIA  = objAux.,
    // this.DELEGACION  = objAux,
    //this.iCP = objAux


};


frap.auxiliares.DatosPaciente = function(){
    this.NOMBRE = objAux.NOMBRE,
    this.APELLIDO_PATERNO = objAux.APELLIDO_PATERNO,
    this.APELLIDO_MATERNO = objAux.APELLIDO_MATERNO,
    this.FECHA_NACIMIENTO = objAux.FECHA_NACIMIENTO,
    this.TELEFONO = objAux.TELEFONO,
    this.OCUPACION = objAux.OCUPACION

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
        this.iPOSICION = objAux.iPOSICION,
        this.iID__CTLG_PRIORIDAD = objAux.iID_CTLG_PRIORIDAD,
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
    // this.iAPARICION = objAux.iAPARICION;
    this.LOCALIZACION = objAux.LOCALIZACION;
    this.IRRADIACION = objAux.IRRADIACION;
    this.CARACTERISTICAS = objAux.CARACTERISTICAS;
    this.ALIVIO = objAux.ALIVIO;
    this.HORA_INICIO = objAux.HORA_INICIO;
    this.iINTENSIDAD = objAux.iINTENSIDAD;

};




















frap.initPaciente = function(){
    this.iID_CTLG_SERVICIO_MEDICO = 0
    // pass this.iSERVICIO_MEDICO = 0,
};



frap.initDireccion = function(){
        this.CALLE =' ',
        this.iNUMERO_EXTERIOS =0,
        this.iNUMERO_INTERIOR =0,
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
    this.FECHA_NACIMIENTO = 0000-00-00,
    this.TELEFONO =  0,
    this.OCUPACION = '-'
    this.iID_CTLG_SEXOS  = 0
    //this.iMOTIVO_ATENCION =0
    //this.CORREO_ELECTRONICO = '-'
};


frap.initMotivoAtencion = function()
{
    this.iID_MOTIVO_ATENCION = 0,
    this.iID_CTLG_MOTIVO_ATENCION =0,
        this.MOTIVO = 0
};





frap.initEvaluacionPrimaria = function(){

    this.iID_CTLG_NIVEL_CONCIENCIA = 0,
    this.iID_CTLG_VENTILACION = 0,
    this.iID_CTLG_CALIDAD_VENTILACION = 0,
    this.iID_CTLG_PULSOS = 0,
    this.iID_CTLG_COLORACION = 0,
    this.iID_CTLG_CONDICION = 0,
    this.iID_CTLG_TEMPERATURA = 0,
    this.iPOSICION = 0,
    this.iID__CTLG_PRIORIDAD = 0,
    this.iID_CTLG_PULSOS_CALIDAD = 0,
    this.iID_CTLG_RITMO = 0,
    this.iID_CTLG_VIA_AEREA = 0
    //this.iID_CTLG_EMERGENCIA_MOTIVOS = 0

};


frap.initSEMIOLOGIA_DOLOR = function (){
    this.iID_SEMIOLOGIA_DOLOR = 0,
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
    this.iID_SAMPLER = 0,

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
    this.iCTLG_GLASGOW_MOTRIZ_ID =  0,
    this.iCTLG_GLASGOW_VERBAL_ID = 0,
    this.iCTLG_GLASGOW_VISUAL_ID = 0,
    this.EVALUACION_GLASGOW = '-',
    this.iCTLG_SIGNOS_NEUROLOGICOS_ID = 0,
    this.iPUPILAS_IZQUIERDA = 0,
    this.iPUPILAS_DERECHA = 0,
    this.iRITMO = 0,
    this.iPERISTALSIS = 0,
    this.iFRECUENCIA_CARDIACA = 0,
    this.iTEMPERATURA = 0,
    this.iGLUCOMETRIA = 0,
        this.factores = []
};



// Inicio Tratamiento

frap.initMANEJO_VIA_AEREA = function()
{
    this.iID_MANEJO_VIA_AEREA = 0,
    this.iID_CTLG_DISPOSITIVO_APERTURA = 0,
    this.iID_CTLG_MANEJO_VIA_AEREA = 0,
        this.iASPIRACION = 0,
        this.iID_INTUBACION = 0
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
    this.iID_CTLG_OXIGENOTERAPIA = 0
};

frap.initDESCOMPRESION_PLEURAL = function(){
    this.iCALIBRE = 0,
    this.iID_CTLG_HEMITORAX = 0
};

frap.initCONTROL_HEMORRAGIAS = function(){
    this.iID_CTLG_CONTROL_HEMORAGIAS = 0,
    this.HORA_COLOCACION = '-'
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
        frap.secciones.evaluacion_secundaria.factores = [];

        if(len !=0){
            frap.secciones.evaluacion_secundaria.factores = factores;
        }

        //console.log('en rescate factores');
        //console.log(frap.secciones.evaluacion_secundaria.factores);

        //frap.enviar();


        estado_secciones['EVALUACION_SECUNDARIA'] = 1;

        $.jStorage.set("estado_secciones", estado_secciones);
    };


    dataBase.getTableS('FACTORES', '*', " WHERE FRAP_ID ="+idFRAP+ " AND TIPO_FRAP='"+tipoFRAP+"' ", cb);
};


frap.recuperacion = {};

frap.recuperacion['PACIENTE']= function(){

    console.log('dentro de la funcion paciente');
    console.log('idFRAP    '+ idFRAP);
    console.log('TIPO_FRAP    '+ tipoFRAP);



    //Aquí comienza mi edición @JC_Worthing
    var cb = function(tx, results)
    {
        var len = results.rows.length;

        console.log(len + " Aquiiiii");

        console.log('idFRAP    '+ idFRAP);
        console.log('TIPO_FRAP    '+ tipoFRAP);

        console.log(results.rows);

        console.log(results.rows.item);


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

            //SERVICIO MEDICO
            objAux.iID_CTLG_SERVICIO_MEDICO = results.rows.item(0).ID_CTLG_SERVICIO_MEDICO;
            console.log(objAux.iID_CTLG_SERVICIO_MEDICO );

            //DIRECCION


            objAux.CALLE = results.rows.item(0).CALLE;
            


            console.log(objAux.CALLE + "objAux.CALLE");
            console.log(results.rows.item(0).CALLE + "results.rows.item(0).CALLE ");

            objAux.ESTADO = results.rows.item(0).ESTADO;



            // Motivos atencion

            objAux.iID_CTLG_MOTIVO_ATENCION = results.rows.item(0).ID_CTLG_MOTIVO_ATENCION;
            console.log(objAux.iID_CTLG_MOTIVO_ATENCION );


            frap.secciones.paciente = new frap.auxiliares.Paciente();
            frap.secciones.direccion_paciente = new frap.auxiliares.Direccion();
            frap.secciones.datos_paciente = new frap.auxiliares.DatosPaciente();
            frap.secciones.motivo_atencion = new frap.auxiliares.MotivoAtencion();


            console.log(frap);

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
    dataBase.getTable('MEDIA_FILIACION', '*', " WHERE ID_FRAP ="+idFRAP+ " AND TIPO_FRAP='"+tipoFRAP+"' ", cb );

};




frap.recuperacion['EVALUACION_PRIMARIA'] = function()
{
    var cb  = function(tx, results) {
        var len = results.rows.length;

        console.log('evaliuacion primaria');
        console.log('idFRAP    '+ idFRAP);
        console.log('TIPO_FRAP    '+ tipoFRAP);

        console.log(results.rows);

        console.log(results.rows.item);


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
            objAux.iPOSICION = results.rows.item(0).POSICION;

            frap.secciones.evaluacion_primaria = new frap.auxiliares.EvaluacionPrimaria();
        }
    };

    //dataBase.getTable('EVALUACION_PRIMARIA', '*', " WHERE ID_FRAP ="+idFRAP+ " AND TIPO_FRAP='"+tipoFRAP+"' ");
    dataBase.getTableS('EVALUACION_PRIMARIA', '*', " WHERE ID_FRAP ="+idFRAP+ " AND TIPO_FRAP='"+tipoFRAP+"' ", cb);
};






frap.recuperacion['EVALUACION_SECUNDARIA'] = function(){

    console.log('dentro de la funcion EVALUACION_SECUNDARIA');


    var cb  = function(tx, results) {
        var len = results.rows.length;

        //console.log('evaliuacion secundaria');
        console.log('idFRAP    '+ idFRAP);
        console.log('TIPO_FRAP    '+ tipoFRAP);

        console.log(results.rows);

        console.log(results.rows.item);


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


            console.log(objAux);
            frap.secciones.sampler = new frap.auxiliares.Sampler();
            frap.secciones.simbologia_dolor = new frap.auxiliares.SimbologiaDolor();
            frap.secciones.evaluacion_secundaria = new frap.auxiliares.EvaluacionSecundaria();

            console.log(frap);
        }
    };

    //dataBase.getTable('EVALUACION_PRIMARIA', '*', " WHERE ID_FRAP ="+idFRAP+ " AND TIPO_FRAP='"+tipoFRAP+"' ");
    dataBase.getTableS('EVALUACION_SECUNDARIA', '*', " WHERE ID_FRAP ="+idFRAP+ " AND TIPO_FRAP='"+tipoFRAP+"' ", cb);


};




frap.recuperacion['TRATAMIENTO'] = function(){
    console.log('dentro de la funcion TRATAMIENTO');
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
            frap.secciones.paciente.iNUMERO = results.rows.item(0).NUMERO;
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
fs['DATOS_PACIENTE']=[];
fs['DIRECCION_PACIENTE']=[];
fs['MEDIA_FILIACION']=[];


fs['EVALUACION_PRIMARIA']=[];





fs['SEMIOLOGIA_DOLOR']=[]; // correcto SIMBOLIGIA_DOLOR pero nbo jala :) por el nombre de la tabla maestro
fs['SAMPLER']=[];
fs['EVALUACION_SECUNDARIA']=[];

fs['MANEJO_VIA_AEREA']=[];
fs['ASISTENCIA_VENTILATORIA']=[];
fs['OXIGENO_TERAPIA']=[];
fs['DESCOMPRESION_PLEURAL']=[];
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







// Creacion de los fragmentos
//=============================================================================

var frap_elementos = {};


frap.preparar = function (){


    //console.log('datos para el envio ');
//    console.log(frap.secciones.paciente);


    frap_elementos["MOTIVO_ATENCION"] ={"intentos":0,"enviado":false, "datos" :frap.secciones.motivo_atencion};
    frap_elementos["PACIENTE"] ={"intentos":0,"enviado":false, "datos" :frap.secciones.paciente};
    frap_elementos["DATOS_PACIENTE"] ={"intentos":0,"enviado":false, "datos" :frap.secciones.datos_paciente};
    frap_elementos["DIRECCION_PACIENTE"] ={"intentos":0,"enviado":false, "datos" :frap.secciones.direccion_paciente};
    frap_elementos["MEDIA_FILIACION"] ={"intentos":0,"enviado":false, "datos" :frap.secciones.media_filiacion};





    frap_elementos["EVALUACION_PRIMARIA"] ={"intentos":0,"enviado":false, "datos" :frap.secciones.evaluacion_primaria};

    frap_elementos["SEMIOLOGIA_DOLOR"] ={"intentos":0,"enviado":false, "datos" :frap.secciones.simbologia_dolor};
    frap_elementos["SAMPLER"] ={"intentos":0,"enviado":false, "datos" :frap.secciones.sampler};
    frap_elementos["EVALUACION_SECUNDARIA"] ={"intentos":0,"enviado":false, "datos" :frap.secciones.evaluacion_secundaria};

    frap_elementos["MANEJO_VIA_AEREA"] ={"intentos":0,"enviado":false, "datos" :frap.secciones.manejo_via_aerea};
    frap_elementos["ASISTENCIA_VENTILATORIA"] ={"intentos":0,"enviado":false, "datos" :frap.secciones.asistencia_ventilatoria};
    frap_elementos["OXIGENO_TERAPIA"] ={"intentos":0,"enviado":false, "datos" :frap.secciones.oxigenoterapia};
    frap_elementos["DESCOMPRESION_PLEURAL"] ={"intentos":0,"enviado":false, "datos" :frap.secciones.desc_ple};
    frap_elementos["CONTROL_HEMORRAGIAS"] ={"intentos":0,"enviado":false, "datos" :frap.secciones.control_hemorragias};
    frap_elementos["ACCESO_CIRCULATORIO"] ={"intentos":0,"enviado":false, "datos" :frap.secciones.acceso_circulatorio};
    frap_elementos["INTERVENCIONES"] ={"intentos":0,"enviado":false, "datos" :frap.secciones.intervenciones};
    frap_elementos["TERAPIA_ELECTRICA"] ={"intentos":0,"enviado":false, "datos" :frap.secciones.terapia_electrica};
    frap_elementos["TRATAMIENTO"] ={"intentos":0,"enviado":false, "datos" :frap.secciones.tratamiento};

    console.log('fiajte factores');
    console.log(frap.secciones.evaluacion_secundaria.factores);
    frap_elementos["FACTORES_RIESGO"] ={"intentos":0,"enviado":false, "datos" :frap.secciones.evaluacion_secundaria.factores};



    frap_elementos["HALLAZGOS_FISICOS"] ={"intentos":0,"enviado":false, "datos" :frap.secciones.hallazgos};



    frap_elementos["TRAUMA"] ={"intentos":0,"enviado":false, "datos" :frap.secciones.trauma};


    frap_elementos["CLINICO"] ={"intentos":0,"enviado":false, "datos" :frap.secciones.clinico};
    frap_elementos["VIAL"] ={"intentos":0,"enviado":false, "datos" :frap.secciones.vial};
    frap_elementos["GINECOLOGICO"] ={"intentos":0,"enviado":false, "datos" :frap.secciones.ginecologico};


    frap_elementos["FRAP_OTROS"] ={"intentos":0,"enviado":false, "datos" :frap.secciones.otros};
    frap_elementos["CONSENTIMIENTO"] ={"intentos":0,"enviado":false, "datos" :frap.secciones.consentimiento};

    console.log('fiajte resultado');
    console.log(frap.secciones.emergencia_resultado);
    frap_elementos["EMERGENCIA_RESULTADO"] ={"intentos":0,"enviado":false, "datos" :frap.secciones.emergencia_resultado};

    console.log('fiajte legal');
    console.log(frap.secciones.legal);
    frap_elementos["FRAP_LEGAL"] ={"intentos":0,"enviado":false, "datos" :frap.secciones.legal};




};





/*******************************************************************************************
 *
 *   ENVIO DE LA INFORMACION
 *
 *******************************************************************************************/
//JSON.stringify({"fragmento":"FRAP_OBJECT","id":"1", "datos":fs})

frap.enviar = function() {

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


                        console.log(data.status);
                        console.log(data.validation);
                        console.log(data.number);

                        frap.secciones.frap =  new frap.initFRAP(data.status, data.validation, data.number);
                        frap_elementos["FRAP"] ={"intentos":0,"enviado":false, "datos" :frap.secciones.frap};

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

                                    $("#msgOk").dialog('open');

                                    // alert('se guardo FRAP con éxito');

                                    // location = "home_vehicules.html";
                                    // alert('FINISH-close-change');

                                    // Commit(id);

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
