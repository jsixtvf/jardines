      var ncargas=0;

      $(document).ready(function(){
                  

        $(window).scroll(function(){

            if($(window).scrollTop()+$(window).height() > $(document).height()-90 && ncargas<2){
              /*alert("FUNCIONA");
                pintarJSON();*/
                  
              //$(function pintarJSON(){
              $.getJSON( "https://cdn.rawgit.com/jsixtvf/jardines/8a6699df/json/jardines.json", function( jsonObject ) {
              ponerJardines( jsonObject );
              });
              });
               ncargas++;
             //}

        });

    });



      function ponerJardines(json){
           $.each( json, function( i, jardines ) {
               $('#vacio').append( $('<div>',
        { id: '"jardines"+ncargas+."json"', text: jardines.titulo+" "+jardines.foto+" "+jardines.descripcion+" "+jardines.fecha }));

           }); 
      }



      $("ji").click(function() {
        window.location = $(this).find("a").attr("href"); 
        return false;
      });

      $("jr").click(function() {
        window.location = $(this).find("a").attr("href"); 
        return false;
      });
