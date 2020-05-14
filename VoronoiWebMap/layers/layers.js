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
var format_Clipped_1 = new ol.format.GeoJSON();
var features_Clipped_1 = format_Clipped_1.readFeatures(json_Clipped_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clipped_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clipped_1.addFeatures(features_Clipped_1);
var lyr_Clipped_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Clipped_1, 
                style: style_Clipped_1,
                interactive: false,
                title: '<img src="styles/legend/Clipped_1.png" /> Clipped'
            });

lyr_CartoLight_0.setVisible(true);lyr_Clipped_1.setVisible(true);
var layersList = [lyr_CartoLight_0,lyr_Clipped_1];
lyr_Clipped_1.set('fieldAliases', {'Address': 'Address', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Clipped_1.set('fieldImages', {'Address': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Clipped_1.set('fieldLabels', {'Address': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_Clipped_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});