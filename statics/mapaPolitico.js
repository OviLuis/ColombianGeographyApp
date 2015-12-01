var map;


function mapaP(){
	
	var image= new google.maps.MarkerImage('../img/bandera3.png', new google.maps.Size(32,32));
	var mapOptions={
		center: new google.maps.LatLng(4.6840363,-72.1363275),
		zoom: 6,
		mapTypeId: google.maps.MapTypeId.HYBRID
	};
 	map= new google.maps.Map(document.getElementById('mapPolitico'), mapOptions);
  
 var markerAmazonas;
 var amazonas = '<div id="content" class="departamentos">'+
      '<p> Amazonas es uno de los 32 departamentos de Colombia, ' +
      'ubicado en la parte sur del país, '+
      'en gran parte al sur de la línea ecuatorial. '+
      'Es el departamento colombiano más grande en cuanto a extensión territorial y'+
      'se compone en su totalidad de territorio de la Selva Amazónica. '+
      '</p>'+
      '</div>';

  var infoAmazonas = new google.maps.InfoWindow({
    content: amazonas
  });
  var placeAmazonas= new google.maps.LatLng(-1.2025172,-72.8145242);
  markerAmazonas = new google.maps.Marker({
    position: placeAmazonas,
    title: "Amazonas, Capital: Leticia",
    map: map,
    icon: "http://www.enciclopediacolombiana.com/enciclopediacolombiana/departamentos/banderas/amazonas_sm.jpg"
  });
  markerAmazonas.addListener('click', function() {
    infoAmazonas.open(map, markerAmazonas);
  });

  var markerAntioquia;
 var antioquia = '<div id="content" class="departamentos">'+
      '<p> Antioquia es un departamento de Colombia, localizado al noroeste del país. Ocupa un territorio de 63.612 km²  ' +
      'que limita al norte con el mar Caribe y con el departamento de Córdoba;'+
      ' al occidente con el departamento del Chocó; al oriente con los departamentos de Bolívar, '+
      'Santander y Boyacá; y al sur con los departamentos de Caldas y Risaralda.'+
      '</p>'+
      '</div>';

  var infoAntioquia = new google.maps.InfoWindow({
    content: antioquia
  });
  var placeAntioquia= new google.maps.LatLng(6.453133, -75.806599);
  markerAntioquia = new google.maps.Marker({
    position: placeAntioquia,
    title: "Antioquia, Capital: Medellín",
    map: map,
    icon: "http://www.enciclopediacolombiana.com/enciclopediacolombiana/departamentos/banderas/antioquia_sm.jpg"
  });
  markerAntioquia.addListener('click', function() {
    infoAntioquia.open(map, markerAntioquia);
  });

  var markerArauca;
 var arauca = '<div id="content" class="departamentos">'+
      '<p> Arauca es uno de los 32 departamentos de Colombia. Está situado en el extremo norte de la región de la Orinoquia del país. Limita al norte y al este con Venezuela, al sur con los departamentos de Vichada y Casanare, y por el oeste con Boyacá </p>'+
      '</div>';

  var infoArauca = new google.maps.InfoWindow({
    content: arauca
  });
  var placeArauca= new google.maps.LatLng(6.274510, -71.039568);
  markerArauca = new google.maps.Marker({
    position: placeArauca,
    title: "Arauca, Capital: Arauca",
    map: map,
    icon: "http://www.enciclopediacolombiana.com/enciclopediacolombiana/departamentos/banderas/arauca_sm.jpg"
  });
  markerArauca.addListener('click', function() {
    infoArauca.open(map, markerArauca);
  });
  
  var markerAtlantico;
 var atlantico = '<div id="content" class="departamentos">'+
      '<p> El Atlántico es uno de los 32 departamentos en que está dividida políticamente la República de Colombia. Está ubicado en la Región Caribe de Colombia y su capital es Barranquilla. Tiene una superficie de 3,319 km² y cuenta con 2,373,550 habitantes. Es el departamento más poblado de la Costa Caribe colombiana. </p>'+
      '</div>';

  var infoAntlantico = new google.maps.InfoWindow({
    content: atlantico
  });
  var placeAtlantico= new google.maps.LatLng(10.595002, -74.752315);
  markerAtlantico = new google.maps.Marker({
    position: placeAtlantico,
    title: "Atlantico, Capital: Barranquilla",
    map: map,
    icon: "http://www.enciclopediacolombiana.com/enciclopediacolombiana/departamentos/banderas/atlantico_sm.jpg"
  });
  markerAtlantico.addListener('click', function() {
    infoAntlantico.open(map, markerAtlantico);
  });

  var markerBolivar;
 var bolivar = '<div id="content" class="departamentos">'+
      '<p> Bolívar es uno de los 32 departamentos de Colombia. Fue uno de los nueve estados originales de los Estados Unidos de Colombia.7 Se encuentra ubicado al norte del país, en la Región Caribe. Su población es de 2025388 habitantes, y su capital Cartagena de Indias. Tiene una superficie de 25.798 km². </p>'+
      '</div>';

  var infoBolivar = new google.maps.InfoWindow({
    content: bolivar
  });
  var placeBolivar= new google.maps.LatLng(10.323532, -75.392038);
  markerBolivar = new google.maps.Marker({
    position: placeBolivar,
    title: "Bolivar, Capital: Cartagena",
    map: map,
    icon: "http://www.enciclopediacolombiana.com/enciclopediacolombiana/departamentos/banderas/bolivar_sm.jpg"
  });
  markerBolivar.addListener('click', function() {
    infoBolivar.open(map, markerBolivar);
  });

  var markerBoyaca;
 var boyaca = '<div id="content" class="departamentos">'+
      '<p> Boyacá es uno de los 32 departamentos de Colombia. Se encuentra ubicado en el centro nororiental del país, siendo Tunja su capital. Se creó durante la reforma constitucional de la Confederación Granadina del 22 de mayo de 1858. Su territorio ocupa una superficie de 23.189 km². </p>'+
      '</div>';

  var infoBoyaca = new google.maps.InfoWindow({
    content: boyaca
  });
  var placeBoyaca= new google.maps.LatLng(5.537909, -73.357309);
  markerBoyaca = new google.maps.Marker({
    position: placeBoyaca,
    title: "Boyaca, Capital: Tunja",
    map: map,
    icon: "http://www.enciclopediacolombiana.com/enciclopediacolombiana/departamentos/banderas/boyaca_sm.jpg"
  });
  markerBoyaca.addListener('click', function() {
    infoBoyaca.open(map, markerBoyaca);
  });

  var markerCaldas;
 var caldas = '<div id="content" class="departamentos">'+
      '<p> Caldas es un departamento de Colombia, con una superficie de 7.888 km² y una población proyectada para 2013 de 984.115 habitantes. Su capital es Manizales. </p>'+
      '</div>';

  var infoCaldas = new google.maps.InfoWindow({
    content: caldas
  });
  var placeCaldas= new google.maps.LatLng(5.024900, -75.472973);
  markerCaldas = new google.maps.Marker({
    position: placeCaldas,
    title: "Caldas, Capital: Manizales",
    map: map,
    icon: "http://www.enciclopediacolombiana.com/enciclopediacolombiana/departamentos/banderas/caldas_sm.jpg"
  });
  markerCaldas.addListener('click', function() {
    infoCaldas.open(map, markerCaldas);
  });

  var markerCaqueta;
 var caqueta = '<div id="content" class="departamentos">'+
      '<p> Caquetá inicia en el pie de monte andino y termina en los escarpes de Araracuara, en plena selva amazónica. Grandes ríos bañan el territorio, todos afluentes del río Caquetá, que le sirve de límite por el sur. Entre estos ríos destacan el Ajajú o Apaporis, el Yarí, el Caguán y el Orteguaza, navegables por embarcaciones menores. </p>'+
      '</div>';

  var infoCaqueta = new google.maps.InfoWindow({
    content: caqueta
  });
  var placeCaqueta= new google.maps.LatLng(1.534983, -75.576016);
  markerCaqueta = new google.maps.Marker({
    position: placeCaqueta,
    title: "Caqueta, Capital: Florencia",
    map: map,
    icon: "http://www.enciclopediacolombiana.com/enciclopediacolombiana/departamentos/banderas/caqueta_sm.jpg"
  });
  markerCaqueta.addListener('click', function() {
    infoCaqueta.open(map, markerCaqueta);
  });

 var markerCasanare;
 var casanare = '<div id="content" class="departamentos">'+
      '<p>Casanare es uno de los 32 departamentos de Colombia, siendo uno de los más grandes en extensión (44.490 km²), que representa el 3.9% del territorio nacional y el 17.55% de la Orinoquía colombiana. El nombre del departamento proviene del vocablo saliva Casanari, que significa Río de Aguas Negras. </p>'+
      '</div>';

  var infoCasanare = new google.maps.InfoWindow({
    content: casanare
  });
  var placeCasanare= new google.maps.LatLng(5.264609, -72.379332);
  markerCasanare = new google.maps.Marker({
    position: placeCasanare,
    title: "Casanare, Capital: Yopal",
    map: map,
    icon: "http://www.enciclopediacolombiana.com/enciclopediacolombiana/departamentos/banderas/casanare_sm.jpg"
  });
  markerCasanare.addListener('click', function() {
    infoCasanare.open(map, markerCasanare);
  });

  var markerCauca;
 var cauca = '<div id="content" class="departamentos">'+
      '<p>El Cauca es uno de los 32 departamentos de Colombia. Se encuentra localizado al suroccidente del país, y su capital es Popayán. Tiene una superficie de 29.308 km². </p>'+
      '</div>';

  var infoCauca = new google.maps.InfoWindow({
    content: cauca
  });
  var placeCauca= new google.maps.LatLng(2.390306, -76.552457);
  markerCauca = new google.maps.Marker({
    position: placeCauca,
    title: "Cauca, Capital: Popayán",
    map: map,
    icon: "http://www.enciclopediacolombiana.com/enciclopediacolombiana/departamentos/banderas/cauca_sm.jpg"
  });
  markerCauca.addListener('click', function() {
    infoCauca.open(map, markerCauca);
  });

  var markerCesar;
 var cesar = '<div id="content" class="departamentos">'+
      '<p>El Cesar es uno de los 32 departamentos de Colombia. Está situado en la zona noreste del país, posee una extensión de 22.905 km² y una población de 1.166.420 habitantes. </p>'+
      '</div>';

  var infoCesar = new google.maps.InfoWindow({
    content: cesar
  });
  var placeCesar= new google.maps.LatLng(10.419359, -73.394336);
  markerCesar = new google.maps.Marker({
    position: placeCesar,
    title: "Cesar, Capital: Valledupar",
    map: map,
    icon: "http://www.enciclopediacolombiana.com/enciclopediacolombiana/departamentos/banderas/cesar_sm.jpg"
  });
  markerCesar.addListener('click', function() {
    infoCesar.open(map, markerCesar);
  });

  var markerChoco;
 var choco = '<div id="content" class="departamentos">'+
      '<p>Chocó es uno de los treinta y dos departamentos de Colombia, localizado en el noroeste del país, en la región del Pacífico colombiano. Comprende las selvas del Darién y las cuencas de los ríos Atrato y San Juan. Su capital es la ciudad de Quibdó. Es el único departamento de Colombia con costas en los océanos Pacífico y Atlántico. Es igualmente el único departamento limítrofe con Panamá.  </p>'+
      '</div>';

  var infoChoco = new google.maps.InfoWindow({
    content: choco
  });
  var placeChoco= new google.maps.LatLng(5.670105, -76.640389);
  markerChoco = new google.maps.Marker({
    position: placeChoco,
    title: "Chocó, Capital: Quibdó",
    map: map,
    icon: "http://www.enciclopediacolombiana.com/enciclopediacolombiana/departamentos/banderas/choco_sm.jpg"
  });
  markerChoco.addListener('click', function() {
    infoChoco.open(map, markerChoco);
  });

  var markerCordoba;
 var cordoba = '<div id="content" class="departamentos">'+
      '<p> Córdoba es uno de los 32 departamentos de Colombia. Está localizado al norte del país, en la Región Caribe. Limita al norte con el mar Caribe, al nororiente con el Departamento de Sucre y al sur con el Departamento de Antioquia. Fue creado en 1952 y su capital es Montería.  </p>'+
      '</div>';

  var infoCordoba = new google.maps.InfoWindow({
    content: cordoba
  });
  var placeCordoba= new google.maps.LatLng(8.602572, -75.789879);
  markerCordoba = new google.maps.Marker({
    position: placeCordoba,
    title: "Córdoba, Capital: Montería",
    map: map,
    icon: "http://www.enciclopediacolombiana.com/enciclopediacolombiana/departamentos/banderas/cordoba_sm.jpg"
  });
  markerCordoba.addListener('click', function() {
    infoCordoba.open(map, markerCordoba);
  });

var markerCundinamarca;
 var cundinamarca = '<div id="content" class="departamentos">'+
      '<p> Cundinamarca es uno de los 32 departamentos de Colombia. Ocupa una superficie de 24.210 km²; su población, según proyecciones para 2015, es de 2.680.041 habitantes (sin Bogotá) y de 10.558.824 incluyéndola. Fue creado el 5 de agosto de 1886 bajo los términos de la constitución del mismo año. Está ubicado en el centro del país y su capital es Bogotá.  </p>'+
      '</div>';

  var infoCundinamarca = new google.maps.InfoWindow({
    content: cundinamarca
  });
  var placeCundinamarca= new google.maps.LatLng(4.616527, -74.081131);
  markerCundinamarca = new google.maps.Marker({
    position: placeCundinamarca,
    title: "Cundinamarca, Capital: Bogotá",
    map: map,
    icon: "http://www.enciclopediacolombiana.com/enciclopediacolombiana/departamentos/banderas/cundinamarca_sm.jpg"
  });
  markerCundinamarca.addListener('click', function() {
    infoCundinamarca.open(map, markerCundinamarca);
  });

  var markerGuainia;
 var guainia = '<div id="content" class="departamentos">'+
      '<p> Guainía es uno de los 32 departamentos de Colombia. Se encuentra localizado al oriente del país. Antiguamente era una comisaría, pero desde 1991 es oficialmente un departamento. </p>'+
      '</div>';

  var infoGuainia = new google.maps.InfoWindow({
    content: guainia
  });
  var placeGuainia= new google.maps.LatLng(3.782476, -67.852705);
  markerGuainia = new google.maps.Marker({
    position: placeGuainia,
    title: "Guainía, Capital: Puerto Inírida",
    map: map,
    icon: "http://www.enciclopediacolombiana.com/enciclopediacolombiana/departamentos/banderas/guainia_sm.jpg"
  });
  markerGuainia.addListener('click', function() {
    infoGuainia.open(map, markerGuainia);
  });

var markerGuaviare;
 var guaviare = '<div id="content" class="departamentos">'+
      '<p> Guaviare es uno de los 32 departamentos de Colombia. Fue creado el 4 de julio de 1991 por la nueva Constitución Política de Colombia. Hasta ese día era un territorio nacional con carácter de Comisaría, la cual había sido segregada de la entonces también Comisaría del Vaupés, el 23 de diciembre de 1977. </p>'+
      '</div>';

  var infoGuaviare = new google.maps.InfoWindow({
    content: guaviare
  });
  var placeGuaviare= new google.maps.LatLng(2.444282, -72.266054);
  markerGuaviare = new google.maps.Marker({
    position: placeGuaviare,
    title: "Guaviare, Capital: San José del Guaviare",
    map: map,
    icon: "http://www.enciclopediacolombiana.com/enciclopediacolombiana/departamentos/banderas/guaviare_sm.jpg"
  });
  markerGuaviare.addListener('click', function() {
    infoGuaviare.open(map, markerGuaviare);
  });
}
