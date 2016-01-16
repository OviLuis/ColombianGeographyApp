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
var placeAmazonas= new google.maps.LatLng(-3.966555, -69.991130);
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
'<p> Antioquia es un departamento de Colombia, localizado al noroeste del país. Ocupa un territorio de 63.612 km² ' +
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
'<p>Chocó es uno de los treinta y dos departamentos de Colombia, localizado en el noroeste del país, en la región del Pacífico colombiano. Comprende las selvas del Darién y las cuencas de los ríos Atrato y San Juan. Su capital es la ciudad de Quibdó. Es el único departamento de Colombia con costas en los océanos Pacífico y Atlántico. Es igualmente el único departamento limítrofe con Panamá. </p>'+
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
'<p> Córdoba es uno de los 32 departamentos de Colombia. Está localizado al norte del país, en la Región Caribe. Limita al norte con el mar Caribe, al nororiente con el Departamento de Sucre y al sur con el Departamento de Antioquia. Fue creado en 1952 y su capital es Montería. </p>'+
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
'<p> Cundinamarca es uno de los 32 departamentos de Colombia. Ocupa una superficie de 24.210 km²; su población, según proyecciones para 2015, es de 2.680.041 habitantes (sin Bogotá) y de 10.558.824 incluyéndola. Fue creado el 5 de agosto de 1886 bajo los términos de la constitución del mismo año. Está ubicado en el centro del país y su capital es Bogotá. </p>'+
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
var markerHuila;
var huila = '<div id="content" class="departamentos">'+
'<p> Huila es uno de los 32 departamentos de Colombia, está localizado al suroccidente del país en la región andina. Su capital es Neiva, considerada como una de las ciudades más importantes del sur de Colombia. Fue creado por la ley 46 del 29 de abril de 1905, constituido por la provincia de Neiva y la del sur, pertenecientes al antiguo Estado Soberano del Tolima. </p>'+
'</div>';
var infoHuila = new google.maps.InfoWindow({
content: huila
});
var placeHuila= new google.maps.LatLng(2.929689, -75.260032);
markerHuila = new google.maps.Marker({
position: placeHuila,
title: "Huila, Capital: Neiva",
map: map,
icon: "http://www.enciclopediacolombiana.com/enciclopediacolombiana/departamentos/banderas/huila_sm.jpg"
});
markerHuila.addListener('click', function() {
infoHuila.open(map, markerHuila);
});
var markerLaGuajira;
var laGuajira = '<div id="content" class="departamentos">'+
'<p> La Guajira es uno de los 32 departamentos en que se constituye Colombia. Está situado al noreste del país y pertenece al grupo de departamentos de la Región Caribe colombiana. Limita al norte y al oeste con el mar Caribe, al este con Venezuela; al sur con el departamento del Cesar y al suroeste con el departamento del Magdalena. </p>'+
'</div>';
var infoLaGuajira = new google.maps.InfoWindow({
content: laGuajira
});
var placeLaGuajira= new google.maps.LatLng(11.517158, -72.917030);
markerLaGuajira = new google.maps.Marker({
position: placeLaGuajira,
title: "La Guajira, Capital: Riohacha",
map: map,
icon: "http://www.enciclopediacolombiana.com/enciclopediacolombiana/departamentos/banderas/guajira_sm.jpg"
});
markerLaGuajira.addListener('click', function() {
infoLaGuajira.open(map, markerLaGuajira);
});
var markerMagdalena;
var magdalena = '<div id="content" class="departamentos">'+
'<p>Magdalena es uno de los 32 departamentos de Colombia. Fue uno de los originales nueve estados que conformaron los Estados Unidos de Colombia. Está al norte del país, en la Región Caribe Colombiana. La capital del departamento es Santa Marta. El Departamento toma el nombre del río que lo baña por su lado occidental Magdalena. en el norte limita con el Mar Caribe, al sur con el departamento de Bolívar, al oriente con los departamentos de Cesar y La Guajira, y al occidente con los departamentos de Atlántico y Bolívar. Su territorio ocupa una superficie de 23.188 km². </p>'+
'</div>';
var infoMagdalena = new google.maps.InfoWindow({
content: magdalena
});
var placeMagdalena= new google.maps.LatLng(11.229736, -74.009631);
markerMagdalena = new google.maps.Marker({
position: placeMagdalena,
title: "Magdalena, Capital: Santa Marta",
map: map,
icon: "http://www.enciclopediacolombiana.com/enciclopediacolombiana/departamentos/banderas/magdalena_sm.jpg"
});
markerMagdalena.addListener('click', function() {
infoMagdalena.open(map, markerMagdalena);
});
var markerMeta;
var meta = '<div id="content" class="departamentos">'+
'<p>El departamento del Meta es uno de los 32 departamentos de Colombia, localizado en la región central del país, cuyo territorio se extiende desde el denominado piedemonte llanero hasta los Llanos Orientales. Su capital es la ciudad de Villavicencio, el principal centro urbano de la Orinoquía colombiana y a tan sólo 89,9 kilómetros al sur de Bogotá, la capital del país.7 El departamento del Meta es uno de los más extensos de Colombia, con un área de 85.770 km², que equivalen al 7,5% del territorio nacional, y posee una gran riqueza hídrica debido a los numerosos afluentes del río Orinoco que cruzan el departamento y que nacen en la Cordillera Oriental. </p>'+
'</div>';
var infoMeta = new google.maps.InfoWindow({
content: meta
});
var placeMeta= new google.maps.LatLng(4.105258, -73.616573);
markerMeta = new google.maps.Marker({
position: placeMeta,
title: "Meta, Capital: Villavicencio",
map: map,
icon: "http://www.enciclopediacolombiana.com/enciclopediacolombiana/departamentos/banderas/meta_sm.jpg"
});
markerMeta.addListener('click', function() {
infoMeta.open(map, markerMeta);
});
var markerNarino;
var narino = '<div id="content" class="departamentos">'+
'<p>Nariño es un departamento de Colombia ubicado al suroeste del país, sobre la frontera con Ecuador y con orillas en el océano Pacífico. Su capital es San Juan de Pasto. </p>'+
'</div>';
var infoNarino = new google.maps.InfoWindow({
content: narino
});
var placeNarino= new google.maps.LatLng(1.198260, -77.265549);
markerNarino = new google.maps.Marker({
position: placeNarino,
title: "Nariño, Capital: Pasto",
map: map,
icon: "http://www.enciclopediacolombiana.com/enciclopediacolombiana/departamentos/banderas/narino_sm.jpg"
});
markerNarino.addListener('click', function() {
infoNarino.open(map, markerNarino);
});
var markerNortedeSantander;
var nortedeSantander = '<div id="content" class="departamentos">'+
'<p>Norte de Santander es uno de los 32 departamentos de Colombia. Está ubicado en la zona nororiental del país sobre la frontera con Venezuela.7 Forma parte de la región Andina. Tiene 40 municipios agrupados en 6 subregiones, 2 provincias y un área metropolitana. Su capital es la ciudad de Cúcuta. </p>'+
'</div>';
var nortedeSantander = new google.maps.InfoWindow({
content: nortedeSantander
});
var placeNortedeSantander= new google.maps.LatLng(7.868116, -72.521235);
markerNortedeSantander = new google.maps.Marker({
position: placeNortedeSantander,
title: "Norte de Santander, Capital: Cucuta",
map: map,
icon: "http://www.enciclopediacolombiana.com/enciclopediacolombiana/departamentos/banderas/norte_santander_sm.jpg"
});
markerNortedeSantander.addListener('click', function() {
infoNortedeSantander.open(map, markerNortedeSantander);
});
var markerPutumayo;
var putumayo = '<div id="content" class="departamentos">'+
'<p>El Putumayo es uno de los 32 departamentos de Colombia y se encuentra al suroeste del país, al norte de las fronteras con Ecuador provincia de Sucumbíos y Perú departamento de Loreto. Al norte se encuentran los departamentos de Cauca y Caquetá, al oeste el departamento de Nariño y al este el departamento del Amazonas. El territorio del departamento hace parte además de la región amazónica colombiana. Tiene una superficie de 24.885 km². </p>'+
'</div>';
var Putumayo = new google.maps.InfoWindow({
content: putumayo
});
var placePutumayo= new google.maps.LatLng(1.152262, -76.730442);
markerPutumayo = new google.maps.Marker({
position: placePutumayo,
title: "Putumayo, Capital: Mocoa",
map: map,
icon: "http://www.enciclopediacolombiana.com/enciclopediacolombiana/departamentos/banderas/putumayo_sm.jpg"
});
markerPutumayo.addListener('click', function() {
infoPutumayo.open(map, markerPutumayo);
});
var markerQuindio;
var quindio = '<div id="content" class="departamentos">'+
'<p>El Quindío es uno de los 32 departamentos de Colombia. Se encuentra en la región oeste-central del país. Su capital es Armenia. Se encuentra ubicado en la región andina, forma parte del Eje Cafetero y de la región paisa, lo cual se hace evidente al visitar uno de los parques más atractivos de Colombia, el Parque Nacional del Café.</p>'+
'</div>';
var quindio = new google.maps.InfoWindow({
content: quindio
});
var placeQuindio= new google.maps.LatLng(4.549618, -75.680925);
markerQuindio = new google.maps.Marker({
position: placeQuindio,
title: "Quindio, Capital: Armenia",
map: map,
icon: "http://www.enciclopediacolombiana.com/enciclopediacolombiana/departamentos/banderas/quindio_sm.jpg"
});
markerQuindio.addListener('click', function() {
infoQuindio.open(map, markerQuindio);
});
var markerRisaralda;
var risaralda = '<div id="content" class="departamentos">'+
'<p>Risaralda es uno de los 32 departamentos6 de Colombia. Cuenta con una población de 951.945 habitantes. La capital es Pereira que cuenta con el 49% de su población total y los principales municipios son Dosquebradas, Santa Rosa de Cabal y La Virginia.</p>'+
'</div>';
var risaralda = new google.maps.InfoWindow({
content: risaralda
});
var placeRisaralda= new google.maps.LatLng(4.795989, -75.696032);
markerRisaralda = new google.maps.Marker({
position: placeRisaralda,
title: "Risaralda, Capital: Pereira",
map: map,
icon: "http://www.enciclopediacolombiana.com/enciclopediacolombiana/departamentos/banderas/risaralda_sm.jpg"
});
markerRisaralda.addListener('click', function() {
infoRisaralda.open(map, markerRisaralda);
});
var markerAndresyProvidencia;
var andresyProvidencia = '<div id="content" class="departamentos">'+
'<p>El Archipiélago de San Andrés, Providencia y Santa Catalina (inglés y sanandresano: Archipelago of San Andrés, Providencia and Santa Catalina) es un departamento de Colombia localizado al occidente del mar Caribe, a 775 kilómetros (480 millas náuticas) al noroeste de la costa Atlántica del país y a 220 km (140 millas náuticas) de las costas orientales de Nicaragua.</p>'+
'</div>';
var andresyProvidencia = new google.maps.InfoWindow({
content: andresyProvidencia
});
var placeAndresyProvidencia= new google.maps.LatLng(12.5591608,-81.7331177);
markerAndresyProvidencia = new google.maps.Marker({
position: placeAndresyProvidencia,
title: "San Andres y Providencia, Capital: San Andres",
map: map,
icon: "http://www.enciclopediacolombiana.com/enciclopediacolombiana/departamentos/banderas/san_andres_sm.jpg"
});
markerAndresyProvidencia.addListener('click', function() {
infoAndresyProvidencia.open(map, markerAndresyProvidencia);
});
var markerSantander;
var santander = '<div id="content" class="departamentos">'+
'<p>Santander es un departamento de Colombia localizado en la zona nororiental del país en la región Andina. Es la sexta división político-administrativa en aglomeración de personas y la cuarta economía nacional por su PIB. Su capital Bucaramanga es la novena ciudad en población y la quinta zona metropolitana más poblada del país.</p>'+
'</div>';
var santander = new google.maps.InfoWindow({
content: santander
});
var placeSantander= new google.maps.LatLng(7.128282, -73.091509);
markerSantander = new google.maps.Marker({
position: placeSantander,
title: "Santander, Capital: Bucaramanga",
map: map,
icon: "http://www.enciclopediacolombiana.com/enciclopediacolombiana/departamentos/banderas/santander_sm.jpg"
});
markerSantander.addListener('click', function() {
infoSantander.open(map, markerSantander);
});
var markerSucre;
var sucre = '<div id="content" class="departamentos">'+
'<p>Sucre es uno de los 32 departamentos de Colombia. Está localizado al norte del país, en la región Caribe de Colombia. Limita al norte y al oriente con el departamento de Bolívar, al noroccidente con el mar Caribe, en el golfo de Morrosquillo, al sur y occidente con el departamento de Córdoba.</p>'+
'</div>';
var infoSucre = new google.maps.InfoWindow({
content: sucre
});
var placeSucre= new google.maps.LatLng(9.281917, -75.388991);
markerSucre = new google.maps.Marker({
position: placeSucre,
title: "Sucre, Capital: Sincelejo",
map: map,
icon: "http://www.enciclopediacolombiana.com/enciclopediacolombiana/departamentos/banderas/sucre_sm.jpg"
});
markerSucre.addListener('click', function() {
infoSucre.open(map, markerSucre);
});
var markerTolima;
var tolima = '<div id="content" class="departamentos">'+
'<p>Tolima es uno de los 32 departamentos de Colombia, situado en la región Andina, en el centro-occidente del país. Limita por el norte y el occidente con el departamento de Caldas; por el oriente con el departamento de Cundinamarca; por el sur con los departamentos del Huila y Cauca, y por el occidente con los departamentos de Valle del Cauca, Quindío y Risaralda.7 Tiene una superficie de 23.562 km² y su capital es Ibagué.</p>'+
'</div>';
var tolima = new google.maps.InfoWindow({
content: tolima
});
var placeTolima= new google.maps.LatLng(4.454882, -75.193425);
markerTolima = new google.maps.Marker({
position: placeTolima,
title: "Tolima, Capital: Ibague",
map: map,
icon: "http://www.enciclopediacolombiana.com/enciclopediacolombiana/departamentos/banderas/tolima_sm.jpg"
});
markerTolima.addListener('click', function() {
infoTolima.open(map, markerTolima);
});
var markerValle;
var valle = '<div id="content" class="departamentos">'+
'<p>El Valle del Cauca es uno de los 32 departamentos de Colombia, situado en el suroccidente del país. Gran parte del departamento está entre la Cordillera Occidental y la Cordillera Central de los Andes, en el valle geográfico del río Cauca de donde proviene su nombre. </p>'+
'</div>';
var valle = new google.maps.InfoWindow({
content: valle
});
var placeValle= new google.maps.LatLng(3.457521, -76.583195);
markerValle = new google.maps.Marker({
position: placeValle,
title: "Valle del Cauca, Capital: Cali",
map: map,
icon: "http://www.enciclopediacolombiana.com/enciclopediacolombiana/departamentos/banderas/valle_sm.jpg"
});
markerValle.addListener('click', function() {
infoValle.open(map, markerValle);
});
var markerVaupes;
var vaupes = '<div id="content" class="departamentos">'+
'<p>Vaupés (también referido como el Vaupés) es uno de los 32 departamentos de Colombia, situado en la Amazonía colombiana. Posee una superficie de 54.135 km² y una población para 2012 de 42 392 habitantes, en su gran mayoría indígenas. </p>'+
'</div>';
var vaupes = new google.maps.InfoWindow({
content: vaupes
});
var placeVaupes= new google.maps.LatLng(1.259381, -70.188659);
markerVaupes = new google.maps.Marker({
position: placeVaupes,
title: "Vaupés, Capital: Mitú",
map: map,
icon: "http://www.enciclopediacolombiana.com/enciclopediacolombiana/departamentos/banderas/vaupes_sm.jpg"
});
markerVaupes.addListener('click', function() {
infoVaupes.open(map, markerVaupes);
});
var markerVichada;
var vichada = '<div id="content" class="departamentos">'+
'<p>Vichada es uno de los 32 departamentos de Colombia. Está localizado en la región oriental de Colombia, dentro del cual se encuentra el Parque nacional El Tuparro. Es además el segundo Departamento más grande de Colombia, después de Amazonas.</p>'+
'</div>';
var vichada = new google.maps.InfoWindow({
content: vichada
});
var placeVichada= new google.maps.LatLng(6.186094, -67.714494);
markerVichada = new google.maps.Marker({
position: placeVichada,
title: "Vichada, Capital: Puerto Carreño",
map: map,
icon: "http://www.enciclopediacolombiana.com/enciclopediacolombiana/departamentos/banderas/vichada_sm.jpg"
});
markerVichada.addListener('click', function() {
infoVichada.open(map, markerVichada);
});
}

