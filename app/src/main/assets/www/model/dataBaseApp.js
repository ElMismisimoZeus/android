/***********************************************************************************************
 *                                      TABLE : FRAP
 *----------------------------------------------------------------------------------------------
 *  La tabla FRAP aloja la cabecera de los frap off-line y de auqellos que sehallan llenado e forma
 *  parcial, pra lograr recuperar el avance  y lograr la funcionalidad de la acció fuera de línea
 *
 *        Atributo          Valores Posibles
 *   -----------------|-------------------------
 *    ESTATUS         | iniciado , concluido
 *    AVANCE          | nombre de la página de máximo avance en el llenado
 *    TIPO            | valor que indica si es creado offLine o bien onLine
 *
 ************************************************************************************************/
var control_e ='';

var sql_edo_secciones ="CREATE TABLE IF NOT EXISTS EDO_SECCIONES ("+
    "ID_SERVICE INTEGER,"+
    "ID_FRAP INTEGER,"+

    "PACIENTE INTEGER,"+
    "MEDIA_FILIACION INTEGER," +
    "EVALUACION_PRIMARIA INTEGER,"+ // Evualua el estado general del FRAP
    "EVALUACION_SECUNDARIA INTEGER,"+ // Guarda el avance en el llenado
    "TRATAMIENTO INTEGER,"+ // Booleano que evalua si el FRAP ya se guardo en el servidor

    "PARO_CARDIORESPIRATORIO INTEGER,"+
    "CLINICO INTEGER,"+
    "VIAL INTEGER,"+
    "TRAUMA INTEGER,"+
    "GINECOLOGICO INTEGER,"+
    "TRATAMIENTO INTEGER," +
    "EMERGENCIA_RESULTADO INTEGER,"+
    "CONSENTIMIENTO INTEGER"+
    "FRAP_OTROS INTEGER,"+
    "FRAP_LEGAL INTEGER,"+
    "NEGATIVA TEXT,"+
    "INSUMOS_NIVEL_BASICO INTEGER,"+
    "INSUMOS_NIVEL_INTERMEDIO INTEGER,"+
    "INSUMOS_NIVEL_AVANZADO INTEGER,"+
    "MEDICAMENTOS INTEGER,"+
    "REGISTRO_SIGNOS_VITALES INTEGER,"+
    "HALLAZGOS_FISICOS INTEGER,"+
    "FACTORES INTEGER," +
    ")";

var sql_frap =   "CREATE TABLE IF NOT EXISTS SERVICIO ("+
    "ID_SERVICE INTEGER,"+
    "ID_FRAP INTEGER,"+
    "TIPO TEXT,"+
    "ESTATUS TEXT,"+ // Evualua el estado general del FRAP
    "AVANCE TEXT,"+ // Guarda el avance en el llenado
    "ENVIADO INTEGER,"+ // Booleano que evalua si el FRAP ya se guardo en el servidor
    "CAUSA TEXT,"+
    "CALLE TEXT,"+
    "COLONIA TEXT ,"+
    "MUNICIPIO TEXT,"+
    "ESTADO TEXT,"+
    "LATITUD REAL," +
    "LONGITUD REAL,"+
    "FECHA TEXT"+
    ")";



var sql_paciente =   "CREATE TABLE IF NOT EXISTS PACIENTE ("+
    "ID_FRAP INTEGER,"+
    "TIPO_FRAP TEXT,"+
    //
    //"MEDIA_FILIACION TEXT," +
    "NOMBRE TEXT,"+
    "APELLIDO_PATERNO TEXT,"+
    "APELLIDO_MATERNO TEXT,"+
    "FECHA_NACIMIENTO TEXT,"+
    "EDAD TEXT,"+
    "TELEFONO TEXT," +
    "OCUPACION TEXT," +
    "ID_CTLG_SEXOS INTEGER,"+
    "ID_CTLG_SERVICIO_MEDICO INTEGER,"+
    "CALLE TEXT,"+
    "NUMERO_EXTERIOR INTEGER,"+
    "COLONIA INTEGER,"+
    "DELEGACION INTEGER,"+
    "ESTADO INTEGER," +
    "CP INTEGER," +
    "ID_CTLG_MOTIVO_ATENCION INTEGER" +
    ")";



var sql_media_filiacion =   "CREATE TABLE IF NOT EXISTS MEDIA_FILIACION ("+

    "ID_FRAP INTEGER,"+
    "TIPO_FRAP TEXT,"+

    "ID_CTLG_MEDIA_FILIACION_ACCESORIOS INTEGER,"+
    "ID_CTLG_MEDIA_FILIACION_CABELLO INTEGER,"+
    "ID_CTLG_MEDIA_FILIACION_CABELLO_COLOR INTEGER,"+
    "ID_CTLG_MEDIA_FILIACION_COLOR_OJOS INTEGER,"+
    "ID_CTLG_MEDIA_FILIACION_COLOR_PIEL INTEGER,"+
    "ID_CTLG_MEDIA_FILIACION_COMPLEXION INTEGER,"+
    "ID_CTLG_MEDIA_FILIACION_NARIZ INTEGER,"+
    "ID_CTLG_MEDIA_FILIACION_PARTE_CUERPO INTEGER,"+
    "ID_CTLG_MEDIA_FILIACION_ROPA INTEGER,"+
    "ID_CTLG_MEDIA_FILIACION_SENIAS INTEGER,"+
    "ID_CTLG_MEDIA_FILIACION_SENIA_LUGAR INTEGER,"+
    "ID_CTLG_MEDIA_FILIACION_TAMANIO INTEGER,"+
    "ID_CTLG_MEDIA_FILIACION_VOLUMEN INTEGER"+
    ")";



var sql_tableta =   "CREATE TABLE IF NOT EXISTS TABLETA ("+
    "ID_ESTADO INTEGER,"+
    "UUID TEXT"+
    ")";









// first change in data base

var sql_evaluacion_primaria = "CREATE TABLE IF NOT EXISTS EVALUACION_PRIMARIA("+

    "ID_FRAP INTEGER,"+
    "TIPO_FRAP TEXT,"+

    "ID_CTLG_PRIORIDAD INTEGER,"+
    "ID_CTLG_NIVEL_CONCIENCIA INTEGER,"+
    "ID_CTLG_VIA_AEREA INTEGER,"+
    "ID_CTLG_VENTILACION INTEGER,"+
    "ID_CTLG_CALIDAD_VENTILACION INTEGER,"+
    "ID_CTLG_PULSOS INTEGER,"+
    "ID_CTLG_PULSOS_CALIDAD INTEGER,"+
    "ID_CTLG_RITMO INTEGER,"+
    "ID_CTLG_COLORACION INTEGER,"+
    "ID_CTLG_TEMPERATURA INTEGER,"+
    "ID_CTLG_CONDICION INTEGER,"+
    "POSICION INTEGER"+
    ")";

var sql_evaluacion_secundaria = "CREATE TABLE IF NOT EXISTS EVALUACION_SECUNDARIA("+


    "ID_FRAP INTEGER,"+
    "TIPO_FRAP TEXT,"+

    "APARICION INTEGER,"+
    "LOCALIZACION TEXT,"+
    "IRRADIACION TEXT,"+
    "CARACTERISTICAS TEXT,"+
    "ALIVIO TEXT,"+
    "HORA_INICIO TEXT,"+
    "INTENSIDAD INTEGER,"+

    "SINTOMAS TEXT,"+
    "ALERGIAS TEXT,"+
    "MEDICAMENTOS TEXT,"+
    "PADECIMIENTOS TEXT,"+
    "ULTIMA_COMIDA TEXT,"+
    "EVENTOS_RELACIONADOS TEXT,"+

    "DIAGNOSTICO_ELECTROGRAFICO TEXT," +
    "DERIVACIONES INTEGER," +
    "ID_CTLG_GLASGOW_MOTRIZ INTEGER," +
    "ID_CTLG_GLASGOW_VERBAL INTEGER," +
    "ID_CTLG_GLASGOW_VISUAL INTEGER," +
    "EVALUACION_GLASGOW TEXT," +
    "ID_CTLG_SIGNOS_NEUROLOGICOS INTEGER," +
    "PUPILAS_IZQUIERDA INTEGER," +
    "PUPILAS_DERECHA INTEGER," +
    "RITMO INTEGER," +
    "PERISTALSIS INTEGER," +
    "FRECUENCIA_CARDIACA INTEGER,"  +
    "TEMPERATURA INTEGER," +
    "GLUCOMETRIA INTEGER" +
    ")";



/////////////////7
////////////////7 Aqui agregaremos nuevas tablas
///////////////7

var sql_paro_cardiorespiratorio =  "CREATE TABLE IF NOT EXISTS PARO_CARDIORESPIRATORIO ("+
    "ID_FRAP INTEGER,"+
    "TIPO_FRAP TEXT,"+
    "OCURRIO INTEGER," +
    "ID_CTLG_MOTIVOS_NOREANIMACION INTEGER, "+
    "ID_CTLG_TIPO_REANIMACION INTEGER, " +
    "ID_CTLG_TIPO_ETIOLOGIA INTEGER,"+
    "RETORNO_CIRCULACION_ESPONTANEA INTEGER," +
    "TIEMPO_REANIMACION INTEGER,"+
    "HORA_DETIENE_RPC TEXT," +
    "PARO_ARRIBO INTEGER," +
    "PARO_RPC INTEGER,"  +
    "PARO_DESFIB INTEGER," +
    "PARO_SVA INTEGER," +
    "REANIMACION INTEGER" +
    ")";


var sql_clinico =  "CREATE TABLE IF NOT EXISTS CLINICO ("+
    "ID_FRAP INTEGER,"+
    "TIPO_FRAP TEXT,"+
    "DIAGNOSTICO_SINDROMATICO TEXT," +
    "ID_CTLG_ORIGEN_PROBABLE INTEGER,"+
    "OBSERVACIONES TEXT"+
    ")";



var sql_vial =  "CREATE TABLE IF NOT EXISTS VIAL ("+
    "ID_FRAP INTEGER,"+
    "TIPO_FRAP TEXT,"+

    "ID_CTLG_TIPO_ACCIDENTE_VIAL INTEGER,"+
    "ID_CTLG_TIPO_LESIONADO INTEGER," +
    "ID_CTLG_ACTOR_VIAL INTEGER,"+
    "ID_CTLG_ATROPELLADO_POR INTEGER,"+
    "EYECTADO INTEGER,"+
    "DECESOS INTEGER,"+
    "PRENSADO INTEGER,"+
    "CASCO INTEGER,"+
    "ID_CTLG_IMPACTO INTEGER,"+
    "ID_CTLG_VOLANTE INTEGER,"+
    "ID_CTLG_PARABRISAS INTEGER,"+
    "ID_CTLG_BOLSA_AIRE INTEGER,"+
    "ID_CTLG_CINTURON_SEGURIDAD INTEGER,"+
    "OBSERVACIONES TEXT"+
    ")";


var sql_trauma =  "CREATE TABLE IF NOT EXISTS TRAUMA ("+
    "ID_FRAP INTEGER,"+
    "TIPO_FRAP TEXT,"+
    "INTENCIONALIDAD TEXT," +
    "ID_CTLG_AGENTE_CAUSAL_GENERAL INTEGER,"+
    "ID_CTLG_AGENTE_CAUSAL_ESPECIFICO INTEGER,"+
    "OBSERVACIONES TEXT"+
    ")";



var sql_ginecologico =  "CREATE TABLE IF NOT EXISTS GINECOLOGICO ("+
    "ID_FRAP INTEGER,"+
    "TIPO_FRAP TEXT,"+
    "GESTA INTEGER,"+
    "PARA INTEGER,"+
    "CESARIA INTEGER,"+
    "ABORTOS INTEGER,"+
    "SEMANAS_GESTACION INTEGER,"+
    "FUM TEXT,"+
    "HORA_INICIO_CONTRACCIONES TEXT,"+
    "FRECUENCIA INTEGER,"+
    "DURACION INTEGER,"+


    "HORA_NACIOMIENTO TEXT,"+
    "PLACENTA_EXPULSADA INTEGER,"+
    "LUGAR_NACIMIENTO TEXT,"+
    "PRODUCTO_VIVO INTEGER,"+
    "SEXO INTEGER,"+
    "CONTROL_PARENTAL INTEGER,"+
    "EMBARAZO_ALTO_RIESGO INTEGER,"+
    "ESQUEMA_MADURACION_PULMONAR INTEGER,"+
    "APGAR1 INTEGER,"+
    "APGAR5 INTEGER,"+
    "APGAR10 INTEGER,"+
    "SILVERMAN INTEGER,"+
    "MEMBRANAS_INTEGRAS INTEGER,"+
    "OBSERVACIONES TEXT"+
    ")";


var sql_tratamiento =  "CREATE TABLE IF NOT EXISTS TRATAMIENTO ("+
    "ID_FRAP INTEGER,"+
    "TIPO_FRAP TEXT,"+
    "ASPIRACION INTEGER,"+
    "ID_CTLG_DISPOSITIVO_APERTURA INTEGER,"+
    "ID_CTLG_MANEJO_VIA_AEREA INTEGER," +
    "DISPOSITIVO INTEGER," +
    "FRECUENCIA INTEGER,"+
    "VOLUMEN INTEGER," +
    "MODALIDAD_VENTILATORIA TEXT,"+
    "LITROS_MINUTO INTEGER,"+
    "ID_CTLG_OXIGENOTERAPIA INTEGER," +
    "ID_CTLG_HEMITORAX INTEGER" +
    "CALIBRE INTEGER,"+
    "HORA_COLOCACION TEXT,"+
    "ID_CTLG_CONTROL_HEMORAGIAS INTEGER,"+
    "ID_CTLG_VIA_ACCESO INTEGER,"+
    "CTLG_ZONA_COLOCACION_ID INTEGER," +
    "CTLG_SOLUCION_ID_CTLG_SOLUCION INTEGER,"+
    "BOMBA_INFUSION INTEGER,"+
    "CALIBRE INTEGER,"+
    "VOLUMEN_INFUNDIDO INTEGER,"+
    "CONTROL_CERVICAL INTEGER,"+
    "EMPAQUETAMIENTO INTEGER,"+
    "CURACION_VENDAJE INTEGER,"+
    "INMOVILIZACION_EXTREMIDADES INTEGER,"+
    "DESCARGAS INTEGER,"+
    "JOULES INTEGER,"+
    "MA INTEGER,"+
    "FRECUENCIA INTEGER,"+
    "OBSERVACIONES TEXT"+
    ")";


var sql_resultado =  "CREATE TABLE IF NOT EXISTS EMERGENCIA_RESULTADO ("+
    "ID_FRAP INTEGER,"+
    "TIPO_FRAP TEXT,"+
    "RESULTADO INTEGER,"+
    "TRASLADO INTEGER,"+
    "PRIORIDAD_FINAL INTEGER,"+
    "FOLIO_RECEPCION TEXT,"+
    "MEDICO_RECIBE TEXT,"+
    "DENOMINACION TEXT," +
    "FIRMA_MEDICO TEXT"+
    ")";


var sql_consentimiento =  "CREATE TABLE IF NOT EXISTS CONSENTIMIENTO ("+
    "ID_FRAP INTEGER,"+
    "TIPO_FRAP TEXT,"+
    "NOMBRE_PACIENTE TEXT,"+
    "NOMBRE_TESTIGO TEXT,"+
    "FIRMA_PACIENTE TEXT,"+
    "FIRMA_TESTIGO TEXT"+
    ")";


var sql_otros =  "CREATE TABLE IF NOT EXISTS FRAP_OTROS ("+
    "ID_FRAP INTEGER,"+
    "TIPO_FRAP TEXT,"+
    "DEPENDENCIA TEXT,"+
    "UNIDADES TEXT,"+
    "NOMBRE TEXT"+
    ")";


var sql_legal =  "CREATE TABLE IF NOT EXISTS FRAP_LEGAL ("+
    "ID_FRAP INTEGER,"+
    "TIPO_FRAP TEXT,"+
    "PERTENENCIAS TEXT,"+
    "NOMBRE TEXT,"+
    "FIRMA TEXT,"+
    "TOMA_CONOCIMIENTO TEXT,"+
    "OBSERVACIONES TEXT"+
    ")";



var sql_negativa =  "CREATE TABLE IF NOT EXISTS NEGATIVA ("+
    "ID_FRAP INTEGER,"+
    "TIPO_FRAP TEXT,"+
    "NOMBRE_PACIENTE TEXT,"+
    "NOMBRE_TESTIGO TEXT,"+
    "FIRMA_PACIENTE TEXT,"+
    "FIRMA_TESTIGO TEXT"+
    ")";


var sql_insumos_basicos = "CREATE TABLE IF NOT EXISTS INSUMOS_NIVEL_BASICO"+
    "("+
    "ID_FRAP INTEGER,"+
    "TIPO_FRAP TEXT,"+
    "SONDA_ASPIRACION INTEGER ,"+
    "PUNTAS_NASALES INTEGER ,"+
    "MASCARILLA_ADULTO INTEGER ,"+
    "PUNZOCATH_14 INTEGER ,"+
    "PUNZOCATH_16 INTEGER ,"+
    "PUNZOCATH_18 INTEGER ,"+
    "PUNZOCATH_20 INTEGER ,"+
    "PUNZOCATH_22 INTEGER ,"+
    "VENOPACK_NORMOGOTERO INTEGER ,"+
    "JERINGA_5_CC INTEGER ,"+
    "JERINGA_10_CC INTEGER ,"+
    "GUANTES INTEGER ,"+
    "GASA_SIMPLE INTEGER ,"+
    "VENDA_ELASTICA_5_CM INTEGER ,"+
    "VENDA_ELASTICA_10_CM INTEGER ,"+
    "VENDA_ELASTICA_30_CM INTEGER ,"+
    "TIRA_REACTIVA INTEGER ,"+
    "LANCETA INTEGER ,"+
    "NaCL_9 INTEGER ,"+
    "HARTMANN INTEGER ,"+
    "GLUCOSA_5 INTEGER ,"+
    "GLUCOSA_10 INTEGER ,"+
    "GLUCOSA_50 INTEGER ,"+
    "MIXTA INTEGER ,"+
    "SABANA_DESECHABLE INTEGER ,"+
    "EQUIPO_PARTO INTEGER "+
    ")";



var sql_insumos_intermedio ="CREATE TABLE IF NOT EXISTS INSUMOS_NIVEL_INTERMEDIO"+
    "("+
    "ID_FRAP INTEGER,"+
    "TIPO_FRAP TEXT,"+
    "TUBO_ENDROTRAQUEAL_75 INTEGER ,"+
    "TUBO_ENDROTRAQUEAL_8 INTEGER ,"+
    "TUBO_ENDROTRAQUEAL_85 INTEGER ,"+
    "MASCARILLA_LARINGEA INTEGER ,"+
    "MASCARILLA_PEDIATRICA INTEGER ,"+
    "CANULA_OROFARINGEA INTEGER ,"+
    "VENOPACK_MICROGOTERO INTEGER ,"+
    "JERINGA_INSULINA INTEGER ,"+
    "CLAMPS_UMBILICALES INTEGER ,"+
    "ELECTRODOS_ADULTO INTEGER ,"+
    "ELECTRODOS_PEDIATRICOS INTEGER ,"+
    "FORMATO_REGISTRO_ATENCION_PREHOSPITALARIA INTEGER "+
    ") ";




var sql_insumos_avanzados = "CREATE TABLE IF NOT EXISTS INSUMOS_NIVEL_AVANZADO"+
    "("+
    "ID_FRAP INTEGER,"+
    "TIPO_FRAP TEXT,"+
    "TUBO_ENDROTRAQUEAL_35 INTEGER ,"+
    "TUBO_ENDROTRAQUEAL_4 INTEGER ,"+
    "TROCAR_TORACICO_14 INTEGER ,"+
    "TROCAR_TORACICO_16 INTEGER ,"+
    "TROCAR_TORACICO_18 INTEGER ,"+
    "ELECTRODOS_PEDIATRICOS INTEGER ,"+
    "SONDA_NASOGASTRICA INTEGER ,"+
    "PARCHES_MARCAPASOS INTEGER ,"+
    "OTRO INTEGER "+
    ") ";



// Script of DataBase


var sql_medicamentos = "CREATE TABLE IF NOT EXISTS MEDICAMENTOS ("+
    "ID_MEDICAMENTOS INTEGER PRIMARY KEY AUTOINCREMENT,"+
    "HORA TEXT,"+
    "MEDICAMENTO TEXT,"+
    "DOSIS TEXT,"+
    "ID_MEDICAMENTO_VIA_ADMINISTRACION INTEGER,"+
    "TIPO_FRAP TEXT,"+
    "FRAP_FRAP_ID INTEGER"+
    ")";


var sql_signosVitales = "CREATE TABLE IF NOT EXISTS REGISTRO_SIGNOS_VITALES ("+
    "ID_REGISTRO_SIGNOS_VITALES INTEGER,"+
    "HORA datetime ,"+
    "FC INTEGER ,"+
    "FR INTEGER ,"+
    "TAS INTEGER ,"+
    "TAD INTEGER ,"+
    "SAO2 INTEGER ,"+
    "TEMPERATURA REAL ,"+
    "GLUCOSA INTEGER ,"+
    "GLASGOW_TOTAL INTEGER ,"+
    "RESULTADO_SIGNOS_VITALES INTEGER ,"+
    "CTLG_GLASGOW_MOTRIZ_ID INTEGER ,"+
    "CTLG_GLASGOW_VERBAL_ID INTEGER ,"+
    "CTLG_GLASGOW_VISUAL_ID INTEGER ,"+
    "TIPO_FRAP TEXT,"+
    "FRAP_FRAP_ID INTEGER)";


var sql_hallazgos = "CREATE TABLE IF NOT EXISTS HALLAZGOS_FISICOS ("+
    "ID_HALLAZGOS_FISICOS INTEGER PRIMARY KEY AUTOINCREMENT,"+
    "CTLG_LESIONES_ID INTEGER,"+
    "COORDENADA_X INTEGER,"+
    "COORDENADA_Y INTEGER,"+
    "TIPO_FRAP TEXT,"+
    "FRAP_ID INTEGER)";


var sql_factores = "CREATE TABLE IF NOT EXISTS FACTORES ("+
    "ID_CTLG_FACTOR_RIESGO  INTEGER,"+
    "TIPO_FRAP TEXT,"+
    "FRAP_ID INTEGER)";



var shortName = 'FRAP';
var version = '11.0';
var displayName = 'FRAP';
var maxSize = 200000;


var dataBase = {};
dataBase.db = null;
dataBase.tableName='';

dataBase.openDb = function() {
    dataBase.db = window.openDatabase(shortName, version, displayName, maxSize);
};

dataBase.createSchema = function(){
    //alert('entro');
    dataBase.db.transaction(function(tx){

        // tx.executeSql(sql_tableta);
        dataBase.tableName ='sql_frap';
        tx.executeSql(sql_frap,[],  dataBase.onSuccess, dataBase.onError);

        dataBase.tableName ='sql_signosVitales';
        tx.executeSql(sql_signosVitales,[], dataBase.onSuccess, dataBase.onError);

        dataBase.tableName ='sql_medicamentos';
        tx.executeSql(sql_medicamentos,[], dataBase.onSuccess, dataBase.onError);

        dataBase.tableName ='sql_hallazgos';
        tx.executeSql(sql_hallazgos,[], dataBase.onSuccess, dataBase.onError);

        dataBase.tableName ='sql_factores';
        tx.executeSql(sql_factores,[], dataBase.onSuccess, dataBase.onError);

        //aqui se agregó latabla media filiacion
        dataBase.tableName = 'sql_media_filiacion';
        tx.executeSql(sql_media_filiacion, [], dataBase.onSuccess, dataBase.onError);

        dataBase.tableName ='sql_paciente';
        tx.executeSql(sql_paciente,[], dataBase.onSuccess, dataBase.onError);

        dataBase.tableName ='sql_evaluacion_primaria';
        tx.executeSql(sql_evaluacion_primaria,[], dataBase.onSuccess, dataBase.onError);

        dataBase.tableName ='sql_evaluacion_secundaria';
        tx.executeSql(sql_evaluacion_secundaria,[], dataBase.onSuccess, dataBase.onError);

        dataBase.tableName ='sql_paro_cardiorespiratorio';
        tx.executeSql(sql_paro_cardiorespiratorio,[], dataBase.onSuccess, dataBase.onError);

        // alert('termino');


        // cambios de las nuevas tablas


        dataBase.tableName ='sql_clinico';
        tx.executeSql(sql_clinico,[], dataBase.onSuccess, dataBase.onError);

        dataBase.tableName ='sql_vial';
        tx.executeSql(sql_vial,[], dataBase.onSuccess, dataBase.onError);

        dataBase.tableName ='sql_trauma';
        tx.executeSql(sql_trauma,[], dataBase.onSuccess, dataBase.onError);

        dataBase.tableName ='sql_ginecologico';
        tx.executeSql(sql_ginecologico,[], dataBase.onSuccess, dataBase.onError);

        dataBase.tableName ='sql_tratamiento';
        tx.executeSql(sql_tratamiento,[], dataBase.onSuccess, dataBase.onError);

        dataBase.tableName ='sql_resultado';
        tx.executeSql(sql_resultado,[], dataBase.onSuccess, dataBase.onError);

        dataBase.tableName ='sql_consentimiento';
        tx.executeSql(sql_consentimiento,[], dataBase.onSuccess, dataBase.onError);

        dataBase.tableName ='sql_otros';
        tx.executeSql(sql_otros,[], dataBase.onSuccess, dataBase.onError);

        dataBase.tableName ='sql_legal';
        tx.executeSql(sql_legal,[], dataBase.onSuccess, dataBase.onError);

        dataBase.tableName ='sql_negativa';
        tx.executeSql(sql_negativa,[], dataBase.onSuccess, dataBase.onError);

        dataBase.tableName ='sql_insumos_intermedio';
        tx.executeSql(sql_insumos_intermedio,[], dataBase.onSuccess, dataBase.onError);

        dataBase.tableName ='sql_insumos_basicos';
        tx.executeSql(sql_insumos_basicos,[], dataBase.onSuccess, dataBase.onError);

        dataBase.tableName ='sql_insumos_avanzados';
        tx.executeSql(sql_insumos_avanzados,[], dataBase.onSuccess, dataBase.onError);
/**/




    },
        function(err) {
            console.log("Error processing TRANSACTION: "+err);
    },function() {
            console.log("success TRANSACTION!");
    });
};

dataBase.deleteSchema = function(){
    dataBase.db.transaction(function(tx){

       // alert('hi');
        tx.executeSql("DROP TABLE SERVICIO",[], dataBase.onSuccess,dataBase.onError);

        tx.executeSql("DROP TABLE MEDICAMENTOS",[], dataBase.onSuccess,dataBase.onError);
        tx.executeSql("DROP TABLE REGISTRO_SIGNOS_VITALES",[], dataBase.onSuccess,dataBase.onError);
        tx.executeSql("DROP TABLE HALLAZGOS_FISICOS",[], dataBase.onSuccess,dataBase.onError);
        tx.executeSql("DROP TABLE FACTORES",[], dataBase.onSuccess,dataBase.onError);

        tx.executeSql("DROP TABLE PACIENTE",[], dataBase.onSuccess,dataBase.onError);






        tx.executeSql("DROP TABLE MEDIA_FILIACION", [], dataBase.onSuccess, dataBase.onError);















        tx.executeSql("DROP TABLE EVALUACION_PRIMARIA", [], dataBase.onSuccess, dataBase.onError);
        tx.executeSql("DROP TABLE EVALUACION_SECUNDARIA", [], dataBase.onSuccess, dataBase.onError);


        // Aqui agregamos el drop de las tablas recien creadas

        tx.executeSql("DROP TABLE PARO_CARDIORESPIRATORIO", [], dataBase.onSuccess, dataBase.onError);
        tx.executeSql("DROP TABLE CLINICO", [], dataBase.onSuccess, dataBase.onError);
        tx.executeSql("DROP TABLE VIAL", [], dataBase.onSuccess, dataBase.onError);
        tx.executeSql("DROP TABLE TRAUMA", [], dataBase.onSuccess, dataBase.onError);
        tx.executeSql("DROP TABLE GINECOLOGICO", [], dataBase.onSuccess, dataBase.onError);
        tx.executeSql("DROP TABLE TRATAMIENTO", [], dataBase.onSuccess, dataBase.onError);
        tx.executeSql("DROP TABLE EMERGENCIA_RESULTADO", [], dataBase.onSuccess, dataBase.onError);
        tx.executeSql("DROP TABLE CONSENTIMIENTO", [], dataBase.onSuccess, dataBase.onError);
        tx.executeSql("DROP TABLE FRAP_OTROS", [], dataBase.onSuccess, dataBase.onError);
        tx.executeSql("DROP TABLE FRAP_LEGAL", [], dataBase.onSuccess, dataBase.onError);
        tx.executeSql("DROP TABLE NEGATIVA", [], dataBase.onSuccess, dataBase.onError);
        tx.executeSql("DROP TABLE INSUMOS_NIVEL_BASICO", [], dataBase.onSuccess, dataBase.onError);
        tx.executeSql("DROP TABLE INSUMOS_NIVEL_INTERMEDIO", [], dataBase.onSuccess, dataBase.onError);
        tx.executeSql("DROP TABLE AVANZADO", [], dataBase.onSuccess, dataBase.onError);


    }, dataBase.onSuccess, dataBase.onError);
};


dataBase.saveTableA =  function(table, elements, cb){
    var fields = '';
    var values = '';
    var first = 0;


    $.each(elements, function(key, value) {
        if(first == 0){
            var isNum = key.substring(0, 1);

            if(isNum == 'i'){
                fields = fields + key.substring(1) ;
                values = values + value ;
            }
            else{
                fields = fields + key;
                values = values + "'" + value + "'";
            }
        }
        else{
            var isNum = key.substring(0, 1);
            if(isNum == 'i'){
                fields = fields + ',' + key.substring(1) ;
                values = values + ',' + value ;
            }
            else{
                fields = fields + ','+ key;
                values = values + ',' + "'" + value + "'" ;
            }
        }
        first++;
    });
    var query = 'INSERT INTO ' + table + '('+fields+') VALUES('+ values +')';

    //alert(query);

    dataBase.tableName = table;

    dataBase.db.transaction(function(tx){
        tx.executeSql(query,[],  cb,dataBase.onError);
    });


};

dataBase.saveTable =  function(table, elements){
    var fields = '';
    var values = '';
    var first = 0;

    console.log('va a salvar');

    $.each(elements, function(key, value) {
        if(first == 0){
            var isNum = key.substring(0, 1);

            if(isNum == 'i'){
                fields = fields + key.substring(1) ;
                values = values + value ;
            }
            else{
                fields = fields + key;
                values = values + "'" + value + "'";
            }
        }
        else{
            var isNum = key.substring(0, 1);
            if(isNum == 'i'){
                fields = fields + ',' + key.substring(1) ;
                values = values + ',' + value ;
            }
            else{
                fields = fields + ','+ key;
                values = values + ',' + "'" + value + "'" ;
            }
        }
        first++;
    });
    var query = 'INSERT INTO ' + table + '('+fields+') VALUES('+ values +')';

    console.log(query);
    //alert(query);

    dataBase.tableName = table;

    dataBase.db.transaction(function(tx){
                                tx.executeSql(query,[],  dataBase.onSuccess,dataBase.onError);
                            });


};

dataBase.getTable = function(table, elements, where){

    var query = 'SELECT ' + elements + ' FROM '+table + where;
   // alert(query);

    dataBase.db.transaction(function(tx){
        tx.executeSql(query,[],  dataBase.onSuccess,dataBase.onError);
    });


};

// super cambio

dataBase.getTableS = function(table, elements, where, cbs){

    var query = 'SELECT ' + elements + ' FROM '+table + where;
    // alert(query);

    dataBase.db.transaction(function(tx){
        tx.executeSql(query,[],  cbs, dataBase.onError);
    });


};

dataBase.onSuccess = function(tx, ResultSet) {



    var opciones ='';
    for (var property in ResultSet) {
       opciones = opciones+property+' , ';
    }

    var opcionest ='';
    for (var property in tx) {
        opcionest = opcionest+property+' , ';
    }
    console.log(" defult: Your SQLite query was successful!"+opcionest+'   '+opciones );
//    alert(" defult: Your SQLite query was successful!");

    if(dataBase.tableName != ''){
       // alert("Querry successfull for table "+ dataBase.tableName);
    }
    else {
        //alert("Querry successfull");
    }
};

dataBase.onError = function(tx, error) {
    console.log("SQLite Error: " + error.message+' code'+error.code);



    var opciones ='';
    for (var property in error) {
        opciones = opciones+property+' , ';
    }

    var opcionest ='';
    for (var property in tx) {
        opcionest = opcionest+property+' , ';
    }
    console.log(" Error en SQL  "+opcionest+'   '+opciones );



   // alert("SQLite Error: " + e.message);
    if(dataBase.tableName != ''){
        console.log('error'+dataBase.tableName );
        // alert("SQLite Error on table: " + e.message);
        //alert("Querry successfull for table "+ dataBase.tableName);
    }
    else {
        //alert("SQLite Error: " + e.message);
    }

};

dataBase.callBack = function(){};
