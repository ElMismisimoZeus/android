
// JavaScript Document
function login(){
		var username=document.getElementById("Username").value;
		var pass=document.getElementById("password").value;
		var edo=$('#estado').val();
		//alert(edo);
		estado = edo;

		$.ajax({
                type: 'POST',
                contentType: 'application/json',
                url: 'http://opowerdev.net/web_services/FRAP/usuario/login',
                dataType: "json",
                data: JSON.stringify({"Usuario":username,"Pass":pass, "Estado":edo}),
                contentType: "application/json; charset=utf-8",
                //data: JSON.parse('{"Usuario":"zeus.perez@opower.net","Pass":"griego"}'),
                success: function(data, textStatus, jqXHR){
                    //alert(data.message);

                    id_sesion = data.ID_SESSION;
                    id_usuario = data.ID_USUARIO;

                    //data.profile;

                    if(data.status =="TRUE"){
                        $("#dialog1 p").html(data.cuerpo);
                        $("#dialog1").dialog('open');
                    }
                    else{
                        $("#dialog2 p").html(data.cuerpo);
                        $("#dialog2").dialog('open');
                    }

                    //$("#dialog1").attr("title",data.cuerpo);



                },
                error: function(jqXHR, textStatus, errorThrown){
                    alert('addWine error: ' + textStatus);
                }
            });


	    /*
		if(nombre=="Username" && pass=="password"){

			
			location="home.html";
		}
		else{
			$("#dialog1").dialog('open');
			//alert("Datos incorrectos");
			//location="index-login.html";
		}
		*/
	
	}