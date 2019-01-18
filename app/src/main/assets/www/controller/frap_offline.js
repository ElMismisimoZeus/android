
$( document ).ready(function() {

    dataBase.openDb();

    // llena los registros de frap incompleto y completos

    dataBase.getTableS(' SERVICIO ', ' * ', " WHERE ENVIADO=0 AND ESTATUS='iniciado' ", function(tx, results){

        var len = results.rows.length;
        //alert('len:'+len);
        for (var i = 0; i < len; i++) {

            var t = results.rows.item(i).TIPO; //'onLine';
            var w = results.rows.item(i).ID_FRAP;
            //alert(t);
            //alert('loadFRAP('+t +')');

            fragment = create(
                '<li class="collection-item avatar" onclick="loadFRAP(\''+t+'\', '+w+', \'TRUE\')" >'+
                '<span class="title">'+results.rows.item(i).CAUSA +'</span>'+
                '<p>'+results.rows.item(i).FECHA +' <br>'+
                ' '+ results.rows.item(i).COLONIA+' - '+results.rows.item(i).MUNICIPIO +
                '</p>'+
                '</li>'
            );


            document.getElementById('frapIncompleto').appendChild(fragment);

        }
    } );




    dataBase.getTableS(' SERVICIO ', ' * ', " WHERE ENVIADO=0 AND ESTATUS='concluido' ", function(tx, results){

        var len = results.rows.length;
        //alert('len:'+len);
        for (var i = 0; i < len; i++) {

            var t = results.rows.item(i).TIPO; //'onLine';
            var w = results.rows.item(i).ID_FRAP;
            //alert(t);
            //alert('loadFRAP('+t +')');


            fragment = create(
                '<li class="collection-item avatar">'+
                '<span class="title">'+results.rows.item(i).CAUSA +'</span>'+
                '<p>'+results.rows.item(i).FECHA +' <br>'+
                ' '+ results.rows.item(i).COLONIA+' - '+results.rows.item(i).MUNICIPIO +
                '</p>'+
                '</li>'
            );



            document.getElementById('frapCompleto').appendChild(fragment);

        }

    } );



});




// Función para agregar elementos dinamicamente en el DOM
function create(htmlStr) {
    var frag = document.createDocumentFragment(),
        temp = document.createElement('ul');
    temp.innerHTML = htmlStr;
    while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
    }
    return frag;
}


function loadFRAP(tipo, id, onLine){
    // alert('hola cargando'+tipo+', '+id);
    window.location="servicio.html?usuario="+usuario+"&session="+session+"&service="+service+"&ID_TRIPULACIONES="+ID_TRIPULACIONES+"&message="+message+"&id="+id+"&tipo="+tipo+"&onLine="+onLine+"&state="+state+"&stateIndex="+stateIndex;
}