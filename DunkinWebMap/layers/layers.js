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
var format_states_1 = new ol.format.GeoJSON();
var features_states_1 = format_states_1.readFeatures(json_states_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_states_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_states_1.addFeatures(features_states_1);
var lyr_states_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_states_1, 
                style: style_states_1,
                interactive: true,
                title: '<img src="styles/legend/states_1.png" /> states'
            });
var format_Count_2 = new ol.format.GeoJSON();
var features_Count_2 = format_Count_2.readFeatures(json_Count_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Count_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Count_2.addFeatures(features_Count_2);
var lyr_Count_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Count_2, 
                style: style_Count_2,
                interactive: true,
    title: 'Count<br />\
    <img src="styles/legend/Count_2_0.png" /> 0<br />\
    <img src="styles/legend/Count_2_1.png" /> 0-25<br />\
    <img src="styles/legend/Count_2_2.png" /> 25-250<br />\
    <img src="styles/legend/Count_2_3.png" /> 251-850<br />\
    <img src="styles/legend/Count_2_4.png" /> 851-1451<br />'
        });

lyr_CartoLight_0.setVisible(true);lyr_states_1.setVisible(true);lyr_Count_2.setVisible(true);
var layersList = [lyr_CartoLight_0,lyr_states_1,lyr_Count_2];
lyr_states_1.set('fieldAliases', {'STATE_NAME': 'STATE_NAME', 'DRAWSEQ': 'DRAWSEQ', 'STATE_FIPS': 'STATE_FIPS', 'SUB_REGION': 'SUB_REGION', 'STATE_ABBR': 'STATE_ABBR', });
lyr_Count_2.set('fieldAliases', {'STATE_NAME': 'State ', 'DRAWSEQ': 'DRAWSEQ', 'STATE_FIPS': 'STATE_FIPS', 'SUB_REGION': 'SUB_REGION', 'STATE_ABBR': 'STATE_ABBR', 'NUMPOINTS': '# of Dunkin\' Donuts', });
lyr_states_1.set('fieldImages', {'STATE_NAME': 'TextEdit', 'DRAWSEQ': 'Range', 'STATE_FIPS': 'TextEdit', 'SUB_REGION': 'TextEdit', 'STATE_ABBR': 'TextEdit', });
lyr_Count_2.set('fieldImages', {'STATE_NAME': 'TextEdit', 'DRAWSEQ': 'Hidden', 'STATE_FIPS': 'Hidden', 'SUB_REGION': 'Hidden', 'STATE_ABBR': 'Hidden', 'NUMPOINTS': 'TextEdit', });
lyr_states_1.set('fieldLabels', {'STATE_NAME': 'no label', 'DRAWSEQ': 'no label', 'STATE_FIPS': 'no label', 'SUB_REGION': 'no label', 'STATE_ABBR': 'no label', });
lyr_Count_2.set('fieldLabels', {'STATE_NAME': 'inline label', 'NUMPOINTS': 'inline label', });
lyr_Count_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});