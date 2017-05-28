
cargarJSON(){
    
    $(window).scroll(function(){
        
        if($(window).scrollTop()+$(window).height() > $(document).height()-90){
           pintarJSON();
           }
    
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
         $('#jardines').append($('<option>', { value: , text :  }));
       
     }); 
}


/*var data = JSON.parse(txt);  //parse the JSON
data.employees.push({        //add the employee
    firstName:"Mike",
    lastName:"Rut",
    time:"10:00 am",
    email:"rut@bah.com",
    phone:"800-888-8888",
    image:"images/mike.jpg"
});
txt = JSON.stringify(data); */
