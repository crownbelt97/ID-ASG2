// JavaScript Document
// MAPBOX JAVASCRIPT
	mapboxgl.accessToken = 'pk.eyJ1IjoiY3Jvd25iZWx0OTciLCJhIjoiY2xkYnBnMmY5MDJ2NjNxb2RqaXIxbTFtZCJ9.9RTj1A45j5vwyIjBWNAlNA';
const map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v12',
center: [463.742842, 1.334201],
zoom: 15
});

 const marker1 = new mapboxgl.Marker()
.setLngLat([463.742842,1.334201])
.addTo(map);

map.addControl(
new MapboxDirections({
accessToken: mapboxgl.accessToken
})
);
