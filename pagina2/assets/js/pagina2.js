function Suma()
    {
        
        var select1 = document.getElementById('select1').value;
        var select2 = document.getElementById('select2').value;
        var select3 = document.getElementById('select3').value;

        var respuesta = document.getElementById ("#resultado")

        
        var numero1 = parseInt(select1);
        var numero2 = parseInt(select2);
        var numero3 = parseInt(select3)

       password=(numero1=9, numero2=1, numero3=1)

     if (password==true) {
        respuesta= document.querySelector("#resultado");
        respuesta.innerHTML = ("Password correcto");
     } else {
        if(password==false)
        respuesta.innerHTML = ("Password Incorrecto" );
     }



    }