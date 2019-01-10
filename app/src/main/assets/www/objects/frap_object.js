

var frap = {};


// variables de identificación del FRAP
frap.id = 0;
frap.tipo = '';

// Agregar fragmentos
frap.secciones = {};

frap.secciones.direccion = [];
frap.secciones.paciente = [];
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
    frap.secciones.direccion = new frap.initDireccion();
    frap.secciones.paciente =  new frap.initPaciente();
    frap.secciones.media_filiacion =  new frap.initMediaFiliacion();

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

frap.initPaciente = function(){

    this.CTLG_SERVICIO_MEDICO = 0
    // pass this.iSERVICIO_MEDICO = 0,



};



frap.initDireccion = function(){

    this.CALLE =' ',
    this.iNUMERO = 0,

    // change text by options, ie, .val -> input
    //this.COLONIA = ( iframe.find('#colonia').val() != '') ? iframe.find('#colonia').val() : ' ',
    //this.DELEGACION = ( iframe.find('#delegacion').val() != '') ? iframe.find('#delegacion').val() : ' ',
    //this.iESTADO = ( iframe.find('#estado').val() != '') ? iframe.find('#estado').val() : 0 ,
    //this.iCODIGO_POSTAL = ( iframe.find('#cp').val() != '') ? iframe.find('#cp').val() : 0 ,

    this.COLONIA  = '-',
    this.DELEGACION  = 0,
    this.iCTLG_ESTADOS_ID_ESTADOS  = 0,
    this.iCP = 0


};

frap.initMediaFiliacion = function(){

}

frap.initDatosPaciente = function(){

    this.NOMBRE = '-',
    this.APELLIDO_PATERNO = '-',
    this.APELLIDO_MATERNO = '-',
    this.iSEXOS_ID_SEXOS  = 0,
    this.EDAD = '-',
    this.FECHA_NACIMIENTO = '',


    this.TELEFONO = '-' ,
    this.OCUPACION = '-',
    this.CORREO_ELECTRONICO = '-',
    this.iMOTIVO_ATENCION =0
}


frap.initEvaluacionPrimaria = function(){

    this.iCTLG_NIVEL_CONCIENCIA_ID = 0,
    this.iCTLG_VENTILACION_ID = 0,
    this.iCTLG_CALIDAD_VENTILACION_ID = 0,
    this.iCTLG_PULSOS_ID = 0,
    this.iCTLG_COLORACION_ID = 0,
    this.iCTLG_CONDICION_ID = 0,
    this.iCTLG_TEMPERATURA_ID = 0,
    this.iPOSICION = 0,
    this.iCTLG_PRIORIDAD_ID = 0,
    this.iCTLG_PULSOS_CALIDAD_ID = 0,
    this.iCTLG_RITMO_ID = 0,
    this.iCTLG_VIA_AEREA_ID = 0,
    this.iCTLG_EMERGENCIA_MOTIVOS = 0

};


frap.initSEMIOLOGIA_DOLOR = function (){
    this.iAPARICION = 0,
    this.LOCALIZACION = '-',
    this.IRRADIACION = '-',
    this.CARACTERISTICAS = '-',
    this.ALIVIO =  '-',
    this.HORA_INICIO = '-',
    this.iINTENSIDAD = 0
};

frap.initSAMPLER = function (){
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

frap.initMANEJO_VIA_AEREA = function(){
    this.iASPIRACION = 0,
    this.iCTLG_DISPOSITIVO_APERTURA_ID_CTLG_DISPOSITIVO_APERTURA = 0,
    this.iCTLG_MANEJO_VIA_AEREA_ID_CTLG_MANEJO_VIA_AEREA = 0
};

frap.initASISTENCIA_VENTILATORIA = function(){
    this.iCTLG_DISPOSITIVO_ID_CTLG_DISPOSITIVO = 0,
    this.iFRECUENCIA = 0,
    this.iVOLUMEN = 0,
    this.MODALIDAD_VENTILATORIA = '-'
};

frap.initOXIGENO_TERAPIA = function(){
    this.iLITROS_MINUTO = 0,
    this.iCTLG_OXIGENOTERAPIA_ID = 0
};

frap.initDESCOMPRESION_PLEURAL = function(){
    this.iCALIBRE = 0,
    this.iCTLG_HEMITORAX_ID_CTLG_HEMITORAX = 0
};

frap.initCONTROL_HEMORRAGIAS = function(){
    this.iCTLG_CONTROL_HEMORAGIAS_ID = 0,
    this.HORA_COLOCACION = '-'
};


frap.initACCESO_CIRCULATORIO = function(){
    // check all local
    this.iCTLG_VIA_ACCESO_ID_CTLG_VIA_ACCESO = 0,
    this.iCTLG_ZONA_COLOCACION_ID = 0,
    this.iCTLG_SOLUCION_ID_CTLG_SOLUCION = 0,
    this.iBOMBA_INFUSION = 0,
    this.iCALIBRE = 0,
    this.iVOLUMEN_INFUNDIDO = 0,
    this.HORA_COLOCACION = '0:0'
};

frap.initINTERVENCIONES = function(){
    this.iCONTROL_CERVICAL = 0,
    this.iEMPAQUETAMIENTO = 0,
    this.iCURACION_VENDAJE = 0,
    this.iINMOVILIZACION_EXTREMIDADES = 0
};

frap.initTERAPIA_ELECTRICA = function(){
    this.iDESCARGAS = 0,
    this.iJOULES = 0,
    this.iMA = 0,
    this.iFRECUENCIA = 0

};

frap.initTRATAMIENTO = function(){
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
    this.iCTLG_ORIGEN_PROBABLE_ID = 0,
    this.OBSERVACIONES = '-'
};

frap.initVIAL = function(){
    this.iCTLG_TIPO_ACCIDENTE_VIAL_ID = 0,
    this.iCTLG_TIPO_LESIONADO_ID = 0,
    this.iCTLG_ACTOR_VIAL_ID = 0,
    this.iCTLG_ATROPELLADO_POR_ID = 0,
    this.iEYECTADO = 0,
    this.iDECESOS = 0,
    this.iPRENSADO = 0,
    this.iCASCO = 0,
    this.iCTLG_IMPACTO_ID = 0,
    this.iCTLG_VOLANTE_ID = 0,
    this.iCTLG_PARABRISAS_ID = 0,
    this.iCTLG_BOLSA_AIRE_ID = 0,
    this.iCTLG_CINTURON_SEGURIDAD_ID = 0,
    this.OBSERVACIONES = '-'
};

frap.initGINECOLOGICO = function(){
    this.iGESTA = 0,
    this.iPARA = 0,
    this.iCESARIA = 0,
    this.iABORTOS = 0,
    this.iSEMANAS_GESTACION = 0,
    this.FUM = '-',
    this.HORA_INICIO_CONTRACCIONES = '-',
    this.iFRECUENCIA = 0,
    this.iDURACION = 0,
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
    this.OBSERVACIONES = '-'
};























// funciones de CARGA
//============================================================================
//============================================================================




frap.secciones.load = function(){

    frap.cargas.loadPaciente();

};

frap.cargas = {};



frap.cargas.loadES_Factores = function (){

    dataBase.onSuccess = function(tx, results) {
       // console.log('adentro loadF');

        var factores = {};
        var len = results.rows.length;

        for (var i = 0; i < len; i++) {

            factores["registro"+i]={ "iCTLG_FACTOR_RIESGO":results.rows.item(i).CTLG_FACTOR_RIESGO};
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
    };


    dataBase.getTable('FACTORES', '*', " WHERE FRAP_ID ="+idFRAP+ " AND TIPO_FRAP='"+tipoFRAP+"' ");
}


frap.recuperacion = {};

frap.recuperacion['PACIENTE']= function(){

    console.log('dentro de la funcion paciente');



    //Aquí comienza mi edición @JC_Worthing
    dataBase.onSuccess = function(tx, results)
    {
        var len = results.rows.length;

        if (len < 0)
        {

            frap.secciones.paciente["NOMBRE"] = { "PACIENTE":results.rows.item(0).PACIENTE};
            console.log(frap.secciones.paciente["NOMBRE"]);

        }

        //console.log('en rescate factores');
        //console.log(frap.secciones.evaluacion_secundaria.factores);

        //frap.enviar();
    };


    dataBase.getTable('PACIENTE', '*', " WHERE ID_FRAP ="+idFRAP+ " AND TIPO_FRAP='"+tipoFRAP+"' ");

};

frap.recuperacion['EVALUACION_PRIMARIA'] = function(){
    console.log('dentro de la funcion EVALUACION_PRIMARIA');
};

frap.recuperacion['EVALUACION_SECUNDARIA'] = function(){
    console.log('dentro de la funcion EVALUACION_SECUNDARIA');
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

            frap.secciones.evaluacion_primaria = results.rows.item(0).CTLG_NIVEL_CONCIENCIA_ID;
            frap.secciones.evaluacion_primaria = results.rows.item(0).CTLG_VIA_AEREA_ID;

            frap.secciones.evaluacion_primaria  = results.rows.item(0).CTLG_VENTILACION_ID;
            frap.secciones.evaluacion_primaria = results.rows.item(0).CTLG_CALIDAD_VENTILACION_ID;

            frap.secciones.evaluacion_primaria = results.rows.item(0).CTLG_PULSOS_ID;
            frap.secciones.evaluacion_primaria = results.rows.item(0).CTLG_COLORACION_ID;
            frap.secciones.evaluacion_primaria = results.rows.item(0).CTLG_CONDICION_ID;
            frap.secciones.evaluacion_primaria = results.rows.item(0).CTLG_TEMPERATURA_ID;
            frap.secciones.evaluacion_primaria = results.rows.item(0).POSICION;
            frap.secciones.evaluacion_primaria = results.rows.item(0).PRIORIDAD;
            frap.secciones.evaluacion_primaria = results.rows.item(0).CALIDAD;
            frap.secciones.evaluacion_primaria = results.rows.item(0).RITMO;

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
            frap.secciones.paciente.iCTLG_ESTADOS_ID_ESTADOS = results.rows.item(0).CTLG_ESTADOS_ID_ESTADOS;

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

fs['DIRECCION']=[];
fs['PACIENTE']=[];
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







// Creacion de los fragmentos
//=============================================================================

var frap_elementos = {};


frap.preparar = function (){


    //console.log('datos para el envio ');
//    console.log(frap.secciones.paciente);


    frap_elementos["DIRECCION"] ={"intentos":0,"enviado":false, "datos" :frap.secciones.direccion};
    frap_elementos["PACIENTE"] ={"intentos":0,"enviado":false, "datos" :frap.secciones.paciente};
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

    frap_elementos["FACTORES_RIESGO"] ={"intentos":0,"enviado":false, "datos" :frap.secciones.evaluacion_secundaria.factores};
    frap_elementos["HALLAZGOS_FISICOS"] ={"intentos":0,"enviado":false, "datos" :frap.secciones.hallazgos};


    console.log('fiajte trauma');
    console.log(frap.secciones.trauma);

    frap_elementos["TRAUMA"] ={"intentos":0,"enviado":false, "datos" :frap.secciones.trauma};


    console.log('fiajte clinico');
    console.log(frap.secciones.clinico);
    frap_elementos["CLINICO"] ={"intentos":0,"enviado":false, "datos" :frap.secciones.clinico};


    console.log('fiajte vial');
    console.log(frap.secciones.vial);
    frap_elementos["VIAL"] ={"intentos":0,"enviado":false, "datos" :frap.secciones.vial};


    console.log('fiajte ginecologico');
    console.log(frap.secciones.ginecologico);
    frap_elementos["GINECOLOGICO"] ={"intentos":0,"enviado":false, "datos" :frap.secciones.ginecologico};

    //frap_elementos["CLINICO"] ={"intentos":0,"enviado":false, "datos" :frap.secciones.clinico};
    //frap_elementos["GINECOLOGICO"] ={"intentos":0,"enviado":false, "datos" :frap.secciones.ginecologico};
    //frap_elementos["VIAL"] ={"intentos":0,"enviado":false, "datos" :frap.secciones.vial};




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
    var estado;

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
        url: url_con+'/saveFRAP',
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
                //console.log('enviando');
                //console.log('==========================');
                //console.log(value["datos"]);
                //console.log(JSON.stringify(value["datos"]));
                //console.log(JSON.stringify({"fragmento": key, "id": id, "datos": value["datos"]}));

                var request = $.ajax({
                    type: 'POST',
                    url: url_con+'/saveFRAP',
                    //url: 'https://opowerdev.net/web_services/FRAP/usuario/saveFRAP',
                    dataType: "json",
                    data: JSON.stringify({"fragmento": key, "id": id, "datos": value["datos"]}),
                    contentType: "application/json; charset=utf-8",
                    success: function (data, textStatus, jqXHR) {
                        // alert(JSON.stringify(data));

                    },
                    error: function (respuesta) {
                        alert("post_rror! llamada elemento:" +key);
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
