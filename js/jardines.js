$(function(){
    //cargar comunidades
    $.getJSON( "json/jardines.json", function( jsonObject ) {
        ponerJardines( jsonObject );
    });

});

function ponerJardines(json){
     $.each( json, function( i, jardines ) {
         
         //$("#jardines").append( "<option value='" + coad.slug + "'>" + coad.coad + "</option>" );
         $('#jardines').append($('<option>', { value: , text :  }));
       
     }); 
}