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

 const marker = new mapboxgl.Marker()
.setLngLat([103.822500, 1.264928])
.addTo(map);

map.addControl(
new MapboxDirections({
accessToken: mapboxgl.accessToken
})
);

/* 	mapboxgl.accessToken = 'pk.eyJ1IjoiY3Jvd25iZWx0OTciLCJhIjoiY2xkYnBnMmY5MDJ2NjNxb2RqaXIxbTFtZCJ9.9RTj1A45j5vwyIjBWNAlNA';
const map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v12',
center: [463.742842, 1.334201],
zoom: 15
});


*/