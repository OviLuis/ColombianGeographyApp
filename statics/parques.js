var map;
var current_map = null;

function muestraMapa(){
    var mapOptions={
        center: new google.maps.LatLng(4.6840363,-72.1363275),
        zoom: 5,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map= new google.maps.Map(document.getElementById('map_canvas'), mapOptions);

    var iconBase = 'http://www.parquesnacionales.gov.co/portal/wp-content/themes/pnn/images/';
                                            var pro1821 = new google.maps.LatLng(-0.656286043, -70.25942031);
                                        var marker1821 = new google.maps.Marker({
                                            position: pro1821,
                                            map: map,
                                            title: "Parque Nacional Natural Yaigojé Apaporis",
                                            icon: iconBase + 'forest2.png'
                                        });
                                        var contentString1821 = '' +
                                                '<div >' +
                                                '<h2>Parque Nacional Natural Yaigojé Apaporis</h2>' +
                                                '<p>' +
                                                '' +
                                                'Descripción del ÁreaLa iniciativa para la creación del Área Protegida, nace de las Autoridades Tradicionales Indígenas, agrupadas en la Asociación de Capitanes Indígenas Yaigoje Apaporis, ACIYA, con miras a fortalecer los mecanismos de protección y conservación integral de este territorio y en particular de los valores culturales' +
                                                '</p>' +
                                                '<a href="http://www.parquesnacionales.gov.co/portal/es/parques-nacionales/parque-nacional-natural-yaigoje-apaporis/">Ir al parque.</a>' +
                                                '</div>';
                                        var infowindow1821 = new google.maps.InfoWindow({
                                            content: contentString1821                                        });
                                        google.maps.event.addListener(marker1821, 'click', function() {
                                            //map.setCenter(marker1821.getPosition());
                                            if (current_map != null) {
                                                current_map.close();
                                            }
                                            current_map = infowindow1821;
                                            infowindow1821.open(map, marker1821);
                                            map.setCenter(marker1821.getPosition());
                                        });

                                         var pro581 = new google.maps.LatLng(2.972042718, -78.20567596);
                                        var marker581 = new google.maps.Marker({
                                            position: pro581,
                                            map: map,
                                            title: "Parque Nacional Natural Gorgona",
                                            icon: iconBase + 'map.png'
                                        });
                                        var contentString581 = '' +
                                                '<div >' +
                                                '<h2>Parque Nacional Natural Gorgona</h2>' +
                                                '<p>' +
                                                '' +
                                                'Descripción del Área:Gorgona es un pequeño paraíso de diversidad y un lugar privilegiado para la investigación científica.Uno de los rasgos más sorprendentes de Gorgona salta a la vista desde alta mar: una frondosa y exuberante selva tropical desciende directamente desde las pequeñas cumbres nubladas hasta el azul intenso de las aguas' +
                                                '</p>' +
                                                '<a href="http://www.parquesnacionales.gov.co/portal/es/ecoturismo/region-pacifico/parque-nacional-natural-gorgona/">Ir al parque.</a>' +
                                                '</div>';
                                        var infowindow581 = new google.maps.InfoWindow({
                                            content: contentString581                                        });
                                        google.maps.event.addListener(marker581,'click', function() {
                                            //map.setCenter(marker581.getPosition());
                                            if (current_map != null) {
                                                current_map.close();
                                            }
                                            current_map = infowindow581;
                                            infowindow581.open(map, marker581);
                                            map.setCenter(marker581.getPosition());
                                        });

                                        var pro1810 = new google.maps.LatLng(1.293810279, -76.35681178);
                                        var marker1810 = new google.maps.Marker({
                                            position: pro1810,
                                            map: map,
                                            title: "Parque Nacional Natural Serranía de los Churumbelos",
                                            icon: iconBase + 'forest2.png'
                                        });
                                        var contentString1810 = '' +
                                                '<div >' +
                                                '<h2>Parque Nacional Natural Serranía de los Churumbelos</h2>' +
                                                '<p>' +
                                                '' +
                                                'Descripción del ÁreaEl Parque Nacional Natural Serranía de los Churumbelos Auka Wasi, es un área protegida pública del Sistema de Parques Nacionales Naturales de Colombia declarada mediante la resolución 1311 de 2007. Tiene una extensión de aproximada de 97.189,6 hectáreas, un amplio gradiente altitudinal que va desde los 400 hasta los' +
                                                '</p>' +
                                                '<a href="http://www.parquesnacionales.gov.co/portal/es/parques-nacionales/parque-nacional-natural-serrania-de-los-churumbelos/">Ir al parque.</a>' +
                                                '</div>';
                                        var infowindow1810 = new google.maps.InfoWindow({
                                            content: contentString1810                                        });
                                        google.maps.event.addListener(marker1810, 'click', function() {
                                            //map.setCenter(marker1810.getPosition());
                                            if (current_map != null) {
                                                current_map.close();
                                            }
                                            current_map = infowindow1810;
                                            infowindow1810.open(map, marker1810);
                                            map.setCenter(marker1810.getPosition());
                                        });

                                        var pro1783 = new google.maps.LatLng(9.923176096, -76.14963127);
                                        var marker1783 = new google.maps.Marker({
                                            position: pro1783,
                                            map: map,
                                            title: "Parque Nacional Natural Corales de Profundidad",
                                            icon: iconBase + 'forest2.png'
                                        });
                                        var contentString1783 = '' +
                                                '<div >' +
                                                '<h2>Parque Nacional Natural Corales de Profundidad</h2>' +
                                                '<p>' +
                                                '' +
                                                'El Parque Nacional Natural Corales de Profundidad es una de tres localidades identificadas a la fecha en el Caribe colombiano con una abundancia significativa de corales escleractíneos azooxantelados y una alta diversidad de invertebrados asociados a ellos. Se ha estimado que, junto con las formaciones coralinas profundas identificadas en aguas' +
                                                '</p>' +
                                                '<a href="http://www.parquesnacionales.gov.co/portal/es/parques-nacionales/parque-nacional-natural-corales-de-profundidad/">Ir al parque.</a>' +
                                                '</div>';
                                        var infowindow1783 = new google.maps.InfoWindow({
                                            content: contentString1783                                        });
                                        google.maps.event.addListener(marker1783, 'click', function() {
                                            //map.setCenter(marker1783.getPosition());
                                            if (current_map != null) {
                                                current_map.close();
                                            }
                                            current_map = infowindow1783;
                                            infowindow1783.open(map, marker1783);
                                            map.setCenter(marker1783.getPosition());
                                        });

                                        var pro1781 = new google.maps.LatLng(9.943553303, -75.10453438);
                                        var marker1781 = new google.maps.Marker({
                                            position: pro1781,
                                            map: map,
                                            title: "Santuario de Flora y Fauna Los Colorados",
                                            icon: iconBase + 'map.png'
                                        });
                                        var contentString1781 = '' +
                                                '<div >' +
                                                '<h2>Santuario de Flora y Fauna Los Colorados</h2>' +
                                                '<p>' +
                                                '' +
                                                'Datos Generales o Información General:El visitante del Santuario de Fauna y Flora Los Colorados tendrá la oportunidad de conocer una zona representativa de Bosque Seco Tropical (BsT), siendo el relicto mejor conservado y más grande de BsT en la región de los Montes de María o Serranía de San Jacinto; así, sus principales objetos de' +
                                                '</p>' +
                                                '<a href="http://www.parquesnacionales.gov.co/portal/es/ecoturismo/region-caribe/santuario-de-flora-y-fauna-los-colorados/">Ir al parque.</a>' +
                                                '</div>';
                                        var infowindow1781 = new google.maps.InfoWindow({
                                            content: contentString1781                                        });
                                        google.maps.event.addListener(marker1781, 'click', function() {
                                            //map.setCenter(marker1781.getPosition());
                                            if (current_map != null) {
                                                current_map.close();
                                            }
                                            current_map = infowindow1781;
                                            infowindow1781.open(map, marker1781);
                                            map.setCenter(marker1781.getPosition());
                                        });

                                        var pro631 = new google.maps.LatLng(10.93209468, -73.59858309);
                                        var marker631 = new google.maps.Marker({
                                            position: pro631,
                                            map: map,
                                            title: "Parque Nacional Natural Sierra Nevada de Santa Marta",
                                            icon: iconBase + 'map.png'
                                        });
                                        var contentString631 = '' +
                                                '<div >' +
                                                '<h2>Parque Nacional Natural Sierra Nevada de Santa Marta</h2>' +
                                                '<p>' +
                                                '' +
                                                'Descripción del ÁreaLa Sierra es la cuna de los Tayrona, una civilización indígena monumental que existió en el país. Aún viven allí descendientes de esa cultura con alrededor de 70.000 indígenas de las etnias Kogui, Arhuaco, Kankuamo y Wiwa. Es la formación montañosa litoral más elevada del mundo, con dos picos de 5.775 m de' +
                                                '</p>' +
                                                '<a href="http://www.parquesnacionales.gov.co/portal/es/ecoturismo/region-caribe/parque-nacional-natural-sierra-nevada-de-santa-marta-2/">Ir al parque.</a>' +
                                                '</div>';
                                        var infowindow631 = new google.maps.InfoWindow({
                                            content: contentString631                                        });
                                        google.maps.event.addListener(marker631, 'click', function() {
                                            //map.setCenter(marker631.getPosition());
                                            if (current_map != null) {
                                                current_map.close();
                                            }
                                            current_map = infowindow631;
                                            infowindow631.open(map, marker631);
                                            map.setCenter(marker631.getPosition());
                                        });


                                        var pro1896 = new google.maps.LatLng(4.533928273, -73.72205483);
                                        var marker1896 = new google.maps.Marker({
                                            position: pro1896,
                                            map: map,
                                            title: "Parque Nacional Natural Chingaza",
                                            icon: iconBase + 'map.png'
                                        });
                                        var contentString1896 = '' +
                                                '<div >' +
                                                '<h2>Parque Nacional Natural Chingaza</h2>' +
                                                '<p>' +
                                                '' +
                                                'Descripción del Área:El Parque está ubicado en la cordillera oriental de los andes, al noreste de Bogotá,; conformado por 11 municipios, 7 de Cundinamarca: Fómeque, Choachí, La Calera, Guasca, Junin, Gachalá y Medina, y 4 municipios del Meta: San Juanito, El Calvario, Restrepo y Cumaral.El 95 por ciento del área se encuentra en la macro' +
                                                '</p>' +
                                                '<a href="http://www.parquesnacionales.gov.co/portal/es/ecoturismo/region-amazonia-y-orinoquia/parque-nacional-natural-chingaza/">Ir al parque.</a>' +
                                                '</div>';
                                        var infowindow1896 = new google.maps.InfoWindow({
                                            content: contentString1896                                        });
                                        google.maps.event.addListener(marker1896, 'click', function() {
                                            //map.setCenter(marker1896.getPosition());
                                            if (current_map != null) {
                                                current_map.close();
                                            }
                                            current_map = infowindow1896;
                                            infowindow1896.open(map, marker1896);
                                            map.setCenter(marker1896.getPosition());
                                        });


                                        var pro1485 = new google.maps.LatLng(5.25106093, -68.47650807);
                                        var marker1485 = new google.maps.Marker({
                                            position: pro1485,
                                            map: map,
                                            title: "Parque Nacional Natural El Tuparro",
                                            icon: iconBase + 'map.png'
                                        });
                                        var contentString1485 = '' +
                                                '<div >' +
                                                '<h2>Parque Nacional Natural El Tuparro</h2>' +
                                                '<p>' +
                                                '' +
                                                'El Parque Tuparro podría describirse paisajísticamente como una extensa sabana verde surcada por grandes ríos con potentes raudales y playas doradas, pequeños caños de aguas cristalinas, bosques de galería, morichales y saladillales, además de enormes rocas cristalinas en forma de cerros redondeados. Aquí se calcula la presencia de más' +
                                                '</p>' +
                                                '<a href="http://www.parquesnacionales.gov.co/portal/es/ecoturismo/region-amazonia-y-orinoquia/parque-nacional-natural-el-tuparro/">Ir al parque.</a>' +
                                                '</div>';
                                        var infowindow1485 = new google.maps.InfoWindow({
                                            content: contentString1485                                        });
                                        google.maps.event.addListener(marker1485, 'click', function() {
                                            //map.setCenter(marker1485.getPosition());
                                            if (current_map != null) {
                                                current_map.close();
                                            }
                                            current_map = infowindow1485;
                                            infowindow1485.open(map, marker1485);
                                            map.setCenter(marker1485.getPosition());
                                        });
}

                                
                                        
                                                        
                                                        
                                                       
                                                        
                                                       
                /*


                 // Bounds for UK
                                var strictBounds = new google.maps.LatLngBounds(
                                        new google.maps.LatLng(14.030015, -82.068729),
                                        new google.maps.LatLng(-4.477856, -65.503922)
                                        );*/
                                //Define custom WMS tiled layer
                                /*SDLLayer = new google.maps.ImageMapType({
                                    getTileUrl: function(coord, zoom) {

                                        var proj = map.getProjection();
                                        var zfactor = Math.pow(2, zoom);
                                        // get Long Lat coordinates

                                        var top = proj.fromPointToLatLng(new google.maps.Point(coord.x * 256 / zfactor, coord.y * 256 / zfactor));
                                        var bot = proj.fromPointToLatLng(new google.maps.Point((coord.x + 1) * 256 / zfactor, (coord.y + 1) * 256 / zfactor));
                                        //corrections for the slight shift of the SLP (mapserver)
                                        var deltaX = 0.0013;
                                        var deltaY = 0.00058;
                                        //create the Bounding box string
                                        var bbox = (top.lng() + deltaX) + "," +
                                                (bot.lat() + deltaY) + "," +
                                                (bot.lng() + deltaX) + "," +
                                                (top.lat() + deltaY);
                                        

                                        //var url = "http://mapas.parquesnacionales.gov.co:9090/geoserver/pnn_9_sinap/wms?service=WMS";
                                        
                                        //var url = "http://mapas.parquesnacionales.gov.co/wms/services/IGAC/PNN_IGAC/MapServer/WMSServer?SERVICE=WMS";
                                       // var url = "http://mapas.parquesnacionales.gov.co/wms/services//PNN/Areas_Protegidas/MapServer/WMSServer?SERVICE=WMS&style=default";


                                        url += "&version=1.1.0";
                                        url += "&request=GetMap";
                                        //url += "&layers=pnn_9_sinap:parques_nacionales";
                                        url += "&layers=0";
                                        url += "&styles=";
                                        url += "&bbox=" + bbox + "";
                                        //url += "bbox=-82.0,-3.822,-67.819,13.394";
                                        url += "&width=960";
                                        url += "&height=900";
                                        url += "&srs=EPSG:4326";
                                        url += "&format=image/png";
                                        url += "&transparent=true";
                                        return url; // return URL for the tile
                                    },
                                    tileSize: new google.maps.Size(256, 256),
                                    opacity: 1, // setting image TRANSPARENCY 
                                    isPng: true
                                });
                                //add WMS layer
                                map.overlayMapTypes.push(SDLLayer);*/




                               
                                ///////


                                

                                

                           
