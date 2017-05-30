var int ncargas=0;

cargarJSON(){
    
    $(window).scroll(function(){
        
        if($(window).scrollTop()+$(window).height() > $(document).height()-90 && ncargas<2){
           pintarJSON();
           ncargas++;
           }
    
    });
    
}

$(function pintarJSON(){
    //cargar comunidades
    $.getJSON( "https://cdn.rawgit.com/jsixtvf/jardines/8a6699df/json/jardines.json", function( jsonObject ) {
        ponerJardines( jsonObject );
    });

});

function ponerJardines(json){
     $.each( json, function( i, jardines ) {
         
         //$("#jardines").append( "<option value='" + coad.slug + "'>" + coad.coad + "</option>" );
         $('#vacio').append( $('<div>', { id: "jardines"+ ncargas + ".json, text: jardines.titulo+" "+jardines.foto+" "+jardines.descripcion+" "+jardines.fecha }));
         
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
