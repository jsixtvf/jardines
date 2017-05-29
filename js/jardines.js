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
    $.getJSON( "json/jardines.json", function( jsonObject ) {
        ponerJardines( jsonObject );
    });

});

function ponerJardines(json){
     $.each( json, function( i, jardines ) {
         
         //$("#jardines").append( "<option value='" + coad.slug + "'>" + coad.coad + "</option>" );
         $("vacio").append( $('<div>', { id: "jardines"+(i+1), text: jardines.titulo+" "+jardines.img+" "+jardines.descripcion+" "+
                                            jardines.fecha }));
         
     }); 
}



    
    
    
    
/*  $(function() {
   var people = [];
   $.getJSON('people.json', function(data) {
       $.each(data.person, function(i, f) {
          var tblRow = "<tr>" + "<td>" + f.firstName + "</td>" +
           "<td>" + f.lastName + "</td>" + "<td>" + f.job + "</td>" + "<td>" + f.roll + "</td>" + "</tr>"
           $(tblRow).appendTo("#userdata tbody");
     });
   });
});

var data = JSON.parse(txt);  //parse the JSON
data.employees.push({        //add the employee
    firstName:"Mike",
    lastName:"Rut",
    time:"10:00 am",
    email:"rut@bah.com",
    phone:"800-888-8888",
    image:"images/mike.jpg"
});
txt = JSON.stringify(data); 

*/
