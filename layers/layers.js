var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Parcelles_Thuir_1 = new ol.format.GeoJSON();
var features_Parcelles_Thuir_1 = format_Parcelles_Thuir_1.readFeatures(json_Parcelles_Thuir_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parcelles_Thuir_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parcelles_Thuir_1.addFeatures(features_Parcelles_Thuir_1);
var lyr_Parcelles_Thuir_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Parcelles_Thuir_1, 
                style: style_Parcelles_Thuir_1,
                interactive: true,
    title: 'Parcelles_Thuir<br />\
    <img src="styles/legend/Parcelles_Thuir_1_0.png" /> 800 - 10000<br />\
    <img src="styles/legend/Parcelles_Thuir_1_1.png" /> 600 - 800<br />\
    <img src="styles/legend/Parcelles_Thuir_1_2.png" /> 400 - 600<br />\
    <img src="styles/legend/Parcelles_Thuir_1_3.png" /> 200 - 400<br />\
    <img src="styles/legend/Parcelles_Thuir_1_4.png" /> 0 - 200<br />'
        });
var format_CPThuir_2 = new ol.format.GeoJSON();
var features_CPThuir_2 = format_CPThuir_2.readFeatures(json_CPThuir_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CPThuir_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CPThuir_2.addFeatures(features_CPThuir_2);
var lyr_CPThuir_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CPThuir_2, 
                style: style_CPThuir_2,
                interactive: true,
    title: 'CP-Thuir<br />\
    <img src="styles/legend/CPThuir_2_0.png" /> Centre<br />\
    <img src="styles/legend/CPThuir_2_1.png" /> HLM<br />\
    <img src="styles/legend/CPThuir_2_2.png" /> Lotissement<br />'
        });
var format_SiteCP_3 = new ol.format.GeoJSON();
var features_SiteCP_3 = format_SiteCP_3.readFeatures(json_SiteCP_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SiteCP_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SiteCP_3.addFeatures(features_SiteCP_3);
var lyr_SiteCP_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SiteCP_3, 
                style: style_SiteCP_3,
                interactive: true,
                title: '<img src="styles/legend/SiteCP_3.png" /> Site CP'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_Parcelles_Thuir_1.setVisible(true);lyr_CPThuir_2.setVisible(true);lyr_SiteCP_3.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_Parcelles_Thuir_1,lyr_CPThuir_2,lyr_SiteCP_3];
lyr_Parcelles_Thuir_1.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'geo_parcel': 'geo_parcel', 'idu': 'idu', 'tex': 'tex', 'geo_sectio': 'geo_sectio', 'nomcommune': 'nomcommune', 'codecommun': 'codecommun', 'surface_ge': 'surface_ge', 'contenance': 'contenance', 'adresse': 'adresse', 'urbain': 'urbain', 'code': 'code', 'comptecomm': 'comptecomm', 'voie': 'voie', 'proprietai': 'proprietai', 'propriet_1': 'propriet_1', 'lot': 'lot', });
lyr_CPThuir_2.set('fieldAliases', {'id': 'id', 'Type': 'Type', 'Nbrhabitat': 'Nbrhabitat', });
lyr_SiteCP_3.set('fieldAliases', {'id': 'id', });
lyr_Parcelles_Thuir_1.set('fieldImages', {'ogc_fid': 'TextEdit', 'geo_parcel': 'TextEdit', 'idu': 'TextEdit', 'tex': 'TextEdit', 'geo_sectio': 'TextEdit', 'nomcommune': 'TextEdit', 'codecommun': 'TextEdit', 'surface_ge': 'TextEdit', 'contenance': 'TextEdit', 'adresse': 'TextEdit', 'urbain': 'TextEdit', 'code': 'TextEdit', 'comptecomm': 'TextEdit', 'voie': 'TextEdit', 'proprietai': 'TextEdit', 'propriet_1': 'TextEdit', 'lot': 'TextEdit', });
lyr_CPThuir_2.set('fieldImages', {'id': 'TextEdit', 'Type': 'TextEdit', 'Nbrhabitat': 'TextEdit', });
lyr_SiteCP_3.set('fieldImages', {'id': 'TextEdit', });
lyr_Parcelles_Thuir_1.set('fieldLabels', {'ogc_fid': 'no label', 'geo_parcel': 'no label', 'idu': 'no label', 'tex': 'no label', 'geo_sectio': 'no label', 'nomcommune': 'no label', 'codecommun': 'no label', 'surface_ge': 'no label', 'contenance': 'no label', 'adresse': 'no label', 'urbain': 'no label', 'code': 'no label', 'comptecomm': 'no label', 'voie': 'no label', 'proprietai': 'no label', 'propriet_1': 'no label', 'lot': 'no label', });
lyr_CPThuir_2.set('fieldLabels', {'id': 'no label', 'Type': 'no label', 'Nbrhabitat': 'no label', });
lyr_SiteCP_3.set('fieldLabels', {'id': 'no label', });
lyr_SiteCP_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});