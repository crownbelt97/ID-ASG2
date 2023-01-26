// JavaScript Document
// MAPBOX JAVASCRIPT
	mapboxgl.accessToken = 'pk.eyJ1IjoiY3Jvd25iZWx0OTciLCJhIjoiY2xkYnBnMmY5MDJ2NjNxb2RqaXIxbTFtZCJ9.9RTj1A45j5vwyIjBWNAlNA';
const map2 = new mapboxgl.Map({
container: 'map2',
style: 'mapbox://styles/mapbox/streets-v12',
center: [463.742842, 1.334201],
zoom: 15
});

mapboxgl.accessToken = 'pk.eyJ1IjoiY3Jvd25iZWx0OTciLCJhIjoiY2xkYnBnMmY5MDJ2NjNxb2RqaXIxbTFtZCJ9.9RTj1A45j5vwyIjBWNAlNA';
const map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v12',
center: [103.822500, 1.264928],
zoom: 15
});

mapboxgl.accessToken = 'pk.eyJ1IjoiY3Jvd25iZWx0OTciLCJhIjoiY2xkYnBnMmY5MDJ2NjNxb2RqaXIxbTFtZCJ9.9RTj1A45j5vwyIjBWNAlNA';
const map3 = new mapboxgl.Map({
container: 'map3',
style: 'mapbox://styles/mapbox/streets-v12',
center: [103.8319, 1.3039],
zoom: 15
});

mapboxgl.accessToken = 'pk.eyJ1IjoiY3Jvd25iZWx0OTciLCJhIjoiY2xkYnBnMmY5MDJ2NjNxb2RqaXIxbTFtZCJ9.9RTj1A45j5vwyIjBWNAlNA';
const map4 = new mapboxgl.Map({
container: 'map4',
style: 'mapbox://styles/mapbox/streets-v12',
center: [103.8583, 1.2950],
zoom: 15
});

 const marker = new mapboxgl.Marker()
.setLngLat([103.822500, 1.264928])
.addTo(map);

map.addControl(
new mapboxgl.GeolocateControl({
positionOptions: {
enableHighAccuracy: true
},
// When active the map will receive updates to the device's location as it changes.
trackUserLocation: true,
// Draw an arrow next to the location dot to indicate which direction the device is heading.
showUserHeading: true
})
);

 const marker2 = new mapboxgl.Marker()
.setLngLat([463.742842, 1.334201])
.addTo(map2);

map2.addControl(
new mapboxgl.GeolocateControl({
positionOptions: {
enableHighAccuracy: true
},
// When active the map will receive updates to the device's location as it changes.
trackUserLocation: true,
// Draw an arrow next to the location dot to indicate which direction the device is heading.
showUserHeading: true
})
);


 const marker3 = new mapboxgl.Marker()
.setLngLat([103.8319, 1.3039])
.addTo(map3);

map3.addControl(
new mapboxgl.GeolocateControl({
positionOptions: {
enableHighAccuracy: true
},
// When active the map will receive updates to the device's location as it changes.
trackUserLocation: true,
// Draw an arrow next to the location dot to indicate which direction the device is heading.
showUserHeading: true
})
);

 const marker4 = new mapboxgl.Marker()
.setLngLat([103.8583, 1.2950])
.addTo(map4);

map4.addControl(
new mapboxgl.GeolocateControl({
positionOptions: {
enableHighAccuracy: true
},
// When active the map will receive updates to the device's location as it changes.
trackUserLocation: true,
// Draw an arrow next to the location dot to indicate which direction the device is heading.
showUserHeading: true
})
);

map.addControl(
new MapboxDirections({
accessToken: mapboxgl.accessToken
})
);

