      var ncargas=0;

      $(document).ready(function(){
                  

        $(window).scroll(function(){
             
        
                   
            if($(window).scrollTop()+$(window).height() > $(document).height()-90 && ncargas==0){
                  
                  alert("FUNCIONA1");
              //pintarJSON();
              //$(function pintarJSON(){
              $.getJSON( "https://cdn.rawgit.com/jsixtvf/jardines/7027bf9b/json/jardines1.json", function( jsonObject ) {
              ponerJardines( jsonObject );
              
              });  
              ncargas++;
            }
                  
            if($(window).scrollTop()+$(window).height() > $(document).height()-90 && ncargas==1){
                  alert("FUNCIONA2");
              $.getJSON( "https://cdn.rawgit.com/jsixtvf/jardines/7027bf9b/json/jardines2.json", function( jsonObject ) {
              ponerJardines( jsonObject );
              
              });  
              ncargas++;
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
            
           

           function ponerJardines(json){
                 $.each( json, function( i, jardines ) {
                     $("#vacio").append( $('<div>',
              { id: '"jardines"+ncargas+."json"', text: jardines.titulo+" "+jardines.foto+" "+jardines.descripcion+" "+jardines.fecha }));

                 }); 
            }
            
            
 });

      
