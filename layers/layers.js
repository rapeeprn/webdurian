var wms_layers = [];


        var lyr_ESRIWorldTopo_0 = new ol.layer.Tile({
            'title': 'ESRI World Topo',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Amphoe_PROV_1 = new ol.format.GeoJSON();
var features_Amphoe_PROV_1 = format_Amphoe_PROV_1.readFeatures(json_Amphoe_PROV_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Amphoe_PROV_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Amphoe_PROV_1.addFeatures(features_Amphoe_PROV_1);
var lyr_Amphoe_PROV_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Amphoe_PROV_1, 
                style: style_Amphoe_PROV_1,
                interactive: true,
    title: 'Amphoe_PROV<br />\
    <img src="styles/legend/Amphoe_PROV_1_0.png" /> มากที่สุด<br />\
    <img src="styles/legend/Amphoe_PROV_1_1.png" /> มาก<br />\
    <img src="styles/legend/Amphoe_PROV_1_2.png" /> พอใช้<br />\
    <img src="styles/legend/Amphoe_PROV_1_3.png" /> เหมาะสมน้อย<br />'
        });

lyr_ESRIWorldTopo_0.setVisible(true);lyr_Amphoe_PROV_1.setVisible(true);
var layersList = [lyr_ESRIWorldTopo_0,lyr_Amphoe_PROV_1];
lyr_Amphoe_PROV_1.set('fieldAliases', {'AMP_CODE': 'AMP_CODE', 'PRV_CODE': 'PRV_CODE', 'AMP_NAME_T': 'AMP_NAME_T', 'AMP_NAME_E': 'AMP_NAME_E', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'TH_Provinc': 'TH_Provinc', 'TH_Provi_1': 'TH_Provi_1', 'ClassDurian_%durian': 'ClassDurian_%durian', 'ClassDurian_durian': 'ClassDurian_durian', });
lyr_Amphoe_PROV_1.set('fieldImages', {'AMP_CODE': 'Hidden', 'PRV_CODE': 'Hidden', 'AMP_NAME_T': 'TextEdit', 'AMP_NAME_E': 'TextEdit', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', 'TH_Provinc': 'TextEdit', 'TH_Provi_1': 'TextEdit', 'ClassDurian_%durian': 'Hidden', 'ClassDurian_durian': 'TextEdit', });
lyr_Amphoe_PROV_1.set('fieldLabels', {'AMP_NAME_T': 'no label', 'AMP_NAME_E': 'no label', 'TH_Provinc': 'no label', 'TH_Provi_1': 'no label', 'ClassDurian_durian': 'no label', });
lyr_Amphoe_PROV_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});