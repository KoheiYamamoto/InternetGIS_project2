var pm25;
$.getJSON('https://api.data.gov.sg/v1/transport/taxi-availability', function(data) {
  pm25 = data;
  console.log(pm25);
  var taxi_loc= pm25['features'][0]['geometry']['coordinates'];


  feat_array=[];
  for(i=0;i<taxi_loc.length;i++){
        var taxi=taxi_loc[i]
        var feat= new ol.Feature({ //obtain this from openlayers
          geometry: new ol.geom.Point(
            ol.proj.fromLonLat([taxi[0], taxi[1]]) //take lat long values to create a new feature (a point object)
          )
        });
        feat.setStyle(styleFunction);
        function styleFunction() {
          return [
            new ol.style.Style({
              image:new ol.style.Circle({
      				radius:2,
      				fill: new ol.style.Fill({color: 'blue'}),
              stroke: new ol.style.Stroke({color: 'black', width: 1}),
            }),
            })
          ];
        }
        feat_array.push(feat);
      }
  var layer=new ol.layer.Vector({
        source: new ol.source.Vector({
          features:feat_array
    })
  });
  map.addLayer(layer);
});
