


function validador (){

    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;

    if (user =='yandre1@misena.edu.co' & pass == '12345678') {
        location.href ="./index.html";
    }
    
    else  { document.getElementById ("validador").innerHTML = 'Por favor Ingrese parametros Correctos'
    }

    
}
    