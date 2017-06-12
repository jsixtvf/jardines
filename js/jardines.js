      
    var ncargas = 1;

 $(document).ready(function() {


     $(window).scroll(function() {



         if ($(window).scrollTop() + $(window).height() > $(document).height() - 90) {

               $.getJSON("https://rawgit.com/jsixtvf/jardines/master/json/jardines"+ncargas+".json", 
                        function(jsonArray) {ponerJardines(jsonArray);}
               );

          
             ncargas++;
         }


              function ponerJardines(jsonArray) {
             $.each(jsonArray, function(ncargas, noticia) {
                 $("#vacio").append($("<div id='noticia"+(i+2)+"'><h1>"+noticia.titulo+
                                 "</h1><p>"+noticia.descripcion+"</p><img src='https://rawgit.com/jsixtvf/jardines/master/"+noticia.foto+"'></div>");        
                        );

                  });
            }

 
     });
 });
