      var ncargas=0;

      $(document).ready(function(){
                  

        $(window).scroll(function(){
             
         while(ncargas<2){
                   
            if($(window).scrollTop()+$(window).height() > $(document).height()-90 ){
                  
              alert("FUNCIONA");
              
              //pintarJSON();
              //$(function pintarJSON(){
                  
              if(ncargas=0){ 
              $.getJSON( "https://cdn.rawgit.com/jsixtvf/jardines/7027bf9b/json/jardines1.json", function( jsonObject ) {
              ponerJardines( jsonObject );
              });  
            }
                  
              if(ncargas=1){
              $.getJSON( "https://cdn.rawgit.com/jsixtvf/jardines/7027bf9b/json/jardines2.json", function( jsonObject ) {
              ponerJardines( jsonObject );
              });   
            }
                 
               ncargas++;
                  
             }
               
         }

          });
            
            
      $("ji").click(function() {
        window.location = $(this).find("a").attr("href"); 
        return false;
      });

      $("jr").click(function() {
        window.location = $(this).find("a").attr("href"); 
        return false;
      });
            
           
            
        });

  


      function ponerJardines(json){
           $.each( json, function( i, jardines ) {
               $("#vacio").append( $('<div>',
        { id: '"jardines"+ncargas+."json"', text: jardines.titulo+" "+jardines.foto+" "+jardines.descripcion+" "+jardines.fecha }));

           }); 
      }


 
            
    
      
            
            
            
