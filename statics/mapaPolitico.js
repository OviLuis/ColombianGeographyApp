var map;
var marker;

function mapaP(){
	
	var image= new google.maps.MarkerImage('../img/bandera3.png', new google.maps.Size(32,32));
	var mapOptions={
		center: new google.maps.LatLng(4.6840363,-72.1363275),
		zoom: 5,
		mapTypeId: google.maps.MapTypeId.HYBRID
	};
 	map= new google.maps.Map(document.getElementById('mapPolitico'), mapOptions);
      var contentString = '<div id="content" class="departamentos">'+
      '<p> Amazonas es uno de los 32 departamentos de Colombia, ' +
      'ubicado en la parte sur del país, '+
      'en gran parte al sur de la línea ecuatorial. '+
      'Es el departamento colombiano más grande en cuanto a extensión territorial y'+
      'se compone en su totalidad de territorio de la Selva Amazónica. '+
      '</p>'+
      '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
 	var place= new google.maps.LatLng(-1.2025172,-72.8145242);
 	marker = new google.maps.Marker({
 		position: place,
 		title: "Amazonas, Capital: Leticia",
 		map: map
 	});
 	marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
}
