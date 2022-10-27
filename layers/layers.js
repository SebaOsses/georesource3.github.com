var wms_layers = [];


        var lyr_ESRIShadedRelief_0 = new ol.layer.Tile({
            'title': 'ESRI Shaded Relief',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Lago_1 = new ol.format.GeoJSON();
var features_Lago_1 = format_Lago_1.readFeatures(json_Lago_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lago_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lago_1.addFeatures(features_Lago_1);
var lyr_Lago_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lago_1, 
                style: style_Lago_1,
                interactive: true,
                title: '<img src="styles/legend/Lago_1.png" /> Lago'
            });
var lyr_FavorabilidadGeotrmica_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Favorabilidad Geotérmica.",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/FavorabilidadGeotrmica_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-8152610.699141, -5954594.236074, -8069685.015797, -5852472.566411]
                            })
                        });
var lyr_Zonaspotencialesdeaguassubterrneas_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Zonas potenciales de aguas subterráneas.",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Zonaspotencialesdeaguassubterrneas_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-8152593.744904, -5954591.662389, -8069509.642500, -5852311.012882]
                            })
                        });
var format_Potencial_4 = new ol.format.GeoJSON();
var features_Potencial_4 = format_Potencial_4.readFeatures(json_Potencial_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Potencial_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Potencial_4.addFeatures(features_Potencial_4);
var lyr_Potencial_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Potencial_4, 
                style: style_Potencial_4,
                interactive: true,
    title: 'Potencial<br />\
    <img src="styles/legend/Potencial_4_0.png" /> Muy bajo<br />\
    <img src="styles/legend/Potencial_4_1.png" /> Bajo<br />\
    <img src="styles/legend/Potencial_4_2.png" /> Medio<br />\
    <img src="styles/legend/Potencial_4_3.png" /> Alto<br />\
    <img src="styles/legend/Potencial_4_4.png" /> Muy alto<br />'
        });
var format_Favorabilidad_5 = new ol.format.GeoJSON();
var features_Favorabilidad_5 = format_Favorabilidad_5.readFeatures(json_Favorabilidad_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Favorabilidad_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Favorabilidad_5.addFeatures(features_Favorabilidad_5);
var lyr_Favorabilidad_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Favorabilidad_5, 
                style: style_Favorabilidad_5,
                interactive: true,
    title: 'Favorabilidad<br />\
    <img src="styles/legend/Favorabilidad_5_0.png" /> Muy baja<br />\
    <img src="styles/legend/Favorabilidad_5_1.png" /> Baja<br />\
    <img src="styles/legend/Favorabilidad_5_2.png" /> Media<br />\
    <img src="styles/legend/Favorabilidad_5_3.png" /> Alta<br />\
    <img src="styles/legend/Favorabilidad_5_4.png" /> Muy alta<br />'
        });

lyr_ESRIShadedRelief_0.setVisible(true);lyr_Lago_1.setVisible(true);lyr_FavorabilidadGeotrmica_2.setVisible(true);lyr_Zonaspotencialesdeaguassubterrneas_3.setVisible(true);lyr_Potencial_4.setVisible(true);lyr_Favorabilidad_5.setVisible(true);
var layersList = [lyr_ESRIShadedRelief_0,lyr_Lago_1,lyr_FavorabilidadGeotrmica_2,lyr_Zonaspotencialesdeaguassubterrneas_3,lyr_Potencial_4,lyr_Favorabilidad_5];
lyr_Lago_1.set('fieldAliases', {'Id': 'Id', });
lyr_Potencial_4.set('fieldAliases', {'id': 'id', 'Valor': 'Valor', 'Potencial': 'Potencial', });
lyr_Favorabilidad_5.set('fieldAliases', {'id': 'id', 'A': 'A', });
lyr_Lago_1.set('fieldImages', {'Id': 'Range', });
lyr_Potencial_4.set('fieldImages', {'id': 'TextEdit', 'Valor': 'TextEdit', 'Potencial': 'TextEdit', });
lyr_Favorabilidad_5.set('fieldImages', {'id': 'TextEdit', 'A': 'TextEdit', });
lyr_Lago_1.set('fieldLabels', {'Id': 'no label', });
lyr_Potencial_4.set('fieldLabels', {'id': 'no label', 'Valor': 'no label', 'Potencial': 'no label', });
lyr_Favorabilidad_5.set('fieldLabels', {'id': 'no label', 'A': 'no label', });
lyr_Favorabilidad_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});