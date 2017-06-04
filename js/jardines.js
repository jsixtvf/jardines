      var ncargas=0;

      $(document).ready(function(){
                  

        $(window).scroll(function(){
             
        
                   
            if($(window).scrollTop()+$(window).height() > $(document).height()-90){
                  
                //  alert("FUNCIONA1");  //pintarJSON();  //$(function pintarJSON(){
                  
                  if(ncargas<1){
              $.getJSON( "json/jardines1.json", function( jsonObject ) {
              ponerJardines( jsonObject );
              
              });  
                   
               }
                  ncargas++;
            }
              
              
              
              if($(window).scrollTop()+$(window).height() > $(document).height()-90){
                 if(ncargas==1){
              $.getJSON( "json/jardines2.json", function( jsonObject ) {
              ponerJardines( jsonObject );
              
              });  
                  
                }
                     ncargas++;
            }
              

           function ponerJardines(json){
                 $.each( json, function( ncargas, jardines ) {
                     $("#vacio").append( $('<div>',
              { id: '"jardines"+ncargas+".json"', text:jardines.titulo+" "+jardines.foto+" "+jardines.descripcion+" "+jardines.fecha}));
 
                 }); 
            }
            
            
      });
             });
            
            /*   if($(window).scrollTop()+$(window).height() > $(document).height()-90 && ncargas>=1 ){
           
                //  alert("FUNCIONA2"+ncargas);
              $.getJSON( "https://cdn.rawgit.com/jsixtvf/jardines/b0fa60fb/json/jardines2.json", function( jsonObject ) {
              ponerJardines( jsonObject );
              
              });  
              ncargas++;
            } 
 
       
            
            
            $("ji").click(function() {
              window.location = $(this).find("a").attr("href"); 
              return false;
            });

            $("jr").click(function() {
              window.location = $(this).find("a").attr("href"); 
              return false;
            });
            
          */  

      
