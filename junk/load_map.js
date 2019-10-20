// get OpenStreetMap layer //
var osm_layer = new ol.layer.Tile({
         source: new ol.source.OSM()
       });
       //place on map//
        var map = new ol.Map({
layers: [osm_layer],
target: document.getElementById('map'), view: new ol.View({
center: ol.proj.fromLonLat([103.819839, 1.352083]),
zoom: 11 })
});