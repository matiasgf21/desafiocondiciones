function Suma()
    {
        
        var my_input1 = document.getElementById('input1').value;
        var my_input2 = document.getElementById('input2').value;
        var my_input3 = document.getElementById('input3').value;

        var parrafo = document.getElementById ("secret-result")

        
        var sum = parseInt(my_input1) + parseInt(my_input2)+ parseInt(my_input3);
       

     if (sum<=10) {
        parrafo= document.querySelector('#secret-result');
        parrafo.innerHTML = ("Llevas " + sum + " Stickers" );
     } else {
        parrafo.innerHTML = ("Llevas demasiados stickers" );
     }



    
    }
