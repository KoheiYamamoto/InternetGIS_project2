function myFunction() {
  
	$.getJSON('https://spreadsheets.google.com/feeds/cells/1qdQ6XMukUAY8XdG7jXEqDedA_EU0rlowuEfBn8jAyR0/od6/public/values?alt=json',function(data){
		var pm25 = data;
		console.log(pm25);

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

		   console.log(feat_array);

		var layer = new ol.layer.Vector({
			source: new ol.source.Vector({
				features: feat_array
			})
		});

		map.addLayer(layer);
	});

}

// This is to show pm25 values next to the map
function showInfo(){
	$.getJSON('https://api.data.gov.sg/v1/environment/pm25',function(data){
		// get pm25 values from items
		var west = data["items"][0]["readings"]["pm25_one_hourly"]["west"]
		var east = data["items"][0]["readings"]["pm25_one_hourly"]["east"]
		var central = data["items"][0]["readings"]["pm25_one_hourly"]["central"]
		var south = data["items"][0]["readings"]["pm25_one_hourly"]["south"]
		var north = data["items"][0]["readings"]["pm25_one_hourly"]["north"]

		console.log(west, east, central, south, north);

		// show the texts on html
		var w = document.getElementById("info_west");
		w.innerHTML = "west: " + west;
		var e = document.getElementById("info_east");
		e.innerHTML = "east: " + east;
		var c = document.getElementById("info_central");
		c.innerHTML = "central: " + central;
		var s = document.getElementById("info_south");
		s.innerHTML = "south: " + south;
		var n = document.getElementById("info_north");
		n.innerHTML = "north: " + north;

	});	
}

// {
// var output = '<ul>';  
// $.each(data, function(key,val){
//   output += '<li>'+ val.name + " " + val.zipcode+ '</li>';
// });
// output += '</ul>';
// $('#update').html(output);
// }

// var pm25 = 
// {
// 	"region_metadata":
// 	[
// 		{"name":"west","label_location":{"latitude":1.35735,"longitude":103.7}},
//         {"name":"east","label_location":{"latitude":1.35735,"longitude":103.94}},
// 		{"name":"central","label_location":{"latitude":1.35735,"longitude":103.82}},
// 		{"name":"south","label_location":{"latitude":1.29587,"longitude":103.82}},
// 		{"name":"north","label_location":{"latitude":1.41803,"longitude":103.82}}
// 	],
// 	"items":
// 	[
// 		{"timestamp":"2019-09-14T01:00:00+08:00",
//            "update_timestamp":"2019-09-14T01:08:52+08:00",
// 		   "readings":{"pm25_one_hourly":{"west":30,"east":25,"central":31,"south":27,"north":33}}},
// 		{"timestamp":"2019-09-14T02:00:00+08:00",
// 		   "update_timestamp":"2019-09-14T02:08:52+08:00",
// 		   "readings":{"pm25_one_hourly":{"west":23,"east":21,"central":21,"south":30,"north":27}}},
// 		{"timestamp":"2019-09-14T03:00:00+08:00",
// 		   "update_timestamp":"2019-09-14T03:08:52+08:00",
// 		   "readings":{"pm25_one_hourly":{"west":38,"east":24,"central":23,"south":23,"north":26}}},
// 		{"timestamp":"2019-09-14T04:00:00+08:00",
// 		  "update_timestamp":"2019-09-14T04:08:52+08:00",
// 		  "readings":{"pm25_one_hourly":{"west":28,"east":24,"central":25,"south":28,"north":28}}},
// 		{"timestamp":"2019-09-14T05:00:00+08:00",
// 		  "update_timestamp":"2019-09-14T05:08:52+08:00",
// 		  "readings":{"pm25_one_hourly":{"west":27,"east":27,"central":25,"south":31,"north":25}}},
// 		{"timestamp":"2019-09-14T06:00:00+08:00",
// 		  "update_timestamp":"2019-09-14T06:08:52+08:00",
// 		  "readings":{"pm25_one_hourly":{"west":31,"east":26,"central":23,"south":24,"north":26}}},
// 		{"timestamp":"2019-09-14T07:00:00+08:00",
// 		  "update_timestamp":"2019-09-14T07:08:52+08:00",
// 		  "readings":{"pm25_one_hourly":{"west":26,"east":30,"central":25,"south":35,"north":27}}},
// 		{"timestamp":"2019-09-14T08:00:00+08:00",
// 		  "update_timestamp":"2019-09-14T08:08:52+08:00",
// 		  "readings":{"pm25_one_hourly":{"west":40,"east":36,"central":19,"south":32,"north":28}}},
// 		{"timestamp":"2019-09-14T09:00:00+08:00",
// 		  "update_timestamp":"2019-09-14T09:08:52+08:00",
// 		  "readings":{"pm25_one_hourly":{"west":58,"east":26,"central":26,"south":31,"north":31}}},
// 		{"timestamp":"2019-09-14T10:00:00+08:00",
// 		  "update_timestamp":"2019-09-14T10:08:54+08:00",
// 		  "readings":{"pm25_one_hourly":{"west":65,"east":26,"central":36,"south":32,"north":50}}},
// 		{"timestamp":"2019-09-14T11:00:00+08:00",
// 		  "update_timestamp":"2019-09-14T11:08:52+08:00",
// 		  "readings":{"pm25_one_hourly":{"west":66,"east":33,"central":47,"south":40,"north":66}}},
// 		{"timestamp":"2019-09-14T12:00:00+08:00",
// 		  "update_timestamp":"2019-09-14T12:08:54+08:00",
// 		  "readings":{"pm25_one_hourly":{"west":69,"east":58,"central":61,"south":67,"north":64}}},
// 		{"timestamp":"2019-09-14T13:00:00+08:00",
// 		  "update_timestamp":"2019-09-14T13:08:52+08:00",
// 		  "readings":{"pm25_one_hourly":{"west":70,"east":57,"central":58,"south":59,"north":61}}},
// 		{"timestamp":"2019-09-14T14:00:00+08:00",
// 		  "update_timestamp":"2019-09-14T14:08:52+08:00",
// 		  "readings":{"pm25_one_hourly":{"west":72,"east":73,"central":66,"south":78,"north":59}}},
// 		{"timestamp":"2019-09-14T15:00:00+08:00",
// 		  "update_timestamp":"2019-09-14T15:08:52+08:00",
// 		  "readings":{"pm25_one_hourly":{"west":123,"east":90,"central":89,"south":159,"north":68}}},
// 		{"timestamp":"2019-09-14T16:00:00+08:00",
// 		  "update_timestamp":"2019-09-14T16:08:52+08:00",
// 		  "readings":{"pm25_one_hourly":{"west":158,"east":90,"central":111,"south":116,"north":100}}},
// 		{"timestamp":"2019-09-14T17:00:00+08:00",
// 		  "update_timestamp":"2019-09-14T17:08:52+08:00",
// 		  "readings":{"pm25_one_hourly":{"west":133,"east":77,"central":82,"south":89,"north":84}}},
// 		{"timestamp":"2019-09-14T18:00:00+08:00",
// 		  "update_timestamp":"2019-09-14T18:08:52+08:00",
// 		  "readings":{"pm25_one_hourly":{"west":98,"east":87,"central":65,"south":82,"north":67}}},
// 		{"timestamp":"2019-09-14T19:00:00+08:00",
// 		  "update_timestamp":"2019-09-14T19:08:52+08:00",
// 		  "readings":{"pm25_one_hourly":{"west":84,"east":92,"central":67,"south":92,"north":71}}},
// 		{"timestamp":"2019-09-14T20:00:00+08:00",
// 		  "update_timestamp":"2019-09-14T20:08:52+08:00",
// 		  "readings":{"pm25_one_hourly":{"west":81,"east":119,"central":75,"south":123,"north":80}}},
// 		{"timestamp":"2019-09-14T21:00:00+08:00",
// 		  "update_timestamp":"2019-09-14T21:08:52+08:00",
// 		  "readings":{"pm25_one_hourly":{"west":101,"east":96,"central":86,"south":125,"north":93}}},
// 		{"timestamp":"2019-09-14T22:00:00+08:00",
// 		  "update_timestamp":"2019-09-14T22:08:52+08:00",
// 		  "readings":{"pm25_one_hourly":{"west":91,"east":81,"central":72,"south":87,"north":92}}},
// 		{"timestamp":"2019-09-14T23:00:00+08:00",
// 		  "update_timestamp":"2019-09-14T23:08:52+08:00",
// 		  "readings":{"pm25_one_hourly":{"west":82,"east":98,"central":78,"south":97,"north":77}}}
// 	],
// 	"api_info":{"status":"healthy"}
// }