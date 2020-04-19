var wms_layers = [];


        var lyr_CartoLight_0 = new ol.layer.Tile({
            'title': 'Carto Light',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_WebMapPoints_1 = new ol.format.GeoJSON();
var features_WebMapPoints_1 = format_WebMapPoints_1.readFeatures(json_WebMapPoints_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WebMapPoints_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WebMapPoints_1.addFeatures(features_WebMapPoints_1);
var lyr_WebMapPoints_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WebMapPoints_1, 
                style: style_WebMapPoints_1,
                interactive: true,
    title: 'WebMapPoints<br />\
    <img src="styles/legend/WebMapPoints_1_0.png" /> 1.0 - 1.0<br />\
    <img src="styles/legend/WebMapPoints_1_1.png" /> 1.0 - 3.0<br />\
    <img src="styles/legend/WebMapPoints_1_2.png" /> 3.0 - 5.0<br />\
    <img src="styles/legend/WebMapPoints_1_3.png" /> 5.0 - 9.0<br />\
    <img src="styles/legend/WebMapPoints_1_4.png" /> 9.0 - 19.0<br />'
        });

lyr_CartoLight_0.setVisible(true);lyr_WebMapPoints_1.setVisible(true);
var layersList = [lyr_CartoLight_0,lyr_WebMapPoints_1];
lyr_WebMapPoints_1.set('fieldAliases', {'Number of Females': 'Number of Females', 'Number of Males': 'Number of Males', 'Total Number': 'Total Number', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_WebMapPoints_1.set('fieldImages', {'Number of Females': 'Range', 'Number of Males': 'Range', 'Total Number': 'Range', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_WebMapPoints_1.set('fieldLabels', {'Number of Females': 'inline label', 'Number of Males': 'inline label', 'Total Number': 'inline label', 'Latitude': 'inline label', 'Longitude': 'inline label', });
lyr_WebMapPoints_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});