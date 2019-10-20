// get station array from pm25 variable
var station_list = pm25["region_metadata"];

feat_array = [];

for(i=0;i<station_list.length;i++){	
       var station = station_list[i]
       var loc = station["label_location"]
       var lat = loc["latitude"]
       var lon = loc["longitude"]

       // create point feature
       var feat = new ol.Feature({
       		geometry: new ol.geom.Point(
       			ol.proj.fromLonLat([lon, lat])
			)
       });

       feat_array.push(feat);
}

var layer = new ol.layer.Vector({
	source: new ol.source.Vector({
		features: feat_array
	})
});

map.addLayer(layer);

// console.log(pm25);

// for (var myproperty in pm25){
//          console.log(myproperty);
// }

// var mymeta = pm25["region_metadata"];
// console.log(mymeta);

// var myitems = pm25["items"]; 
// console.log(myitems);

// var myitems = pm25["region_metadata"];
//        var west_station = myitems[0];
//        console.log(west_station

// for(i=0;i<5;i++){
//          console.log(i);
// }

// var station_meta = pm25["region_metadata"];
//        for(i=0;i<5;i++){
//          console.log(station_meta[i]);
// }

//  var station_list = pm25["region_metadata"];
//        for(i=0;i<5;i++){
//          var station = station_list[i]
//          var loc = station["label_location"]
//          var lat = loc["latitude"]
//          var lon = loc["longitude"]
//          console.log(lat,lon);
// }