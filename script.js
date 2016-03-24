var mymap = L.map('map').setView([51.50, -0.14], 11);

L.tileLayer ('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}/.png?access_token={accessToken}', {
 	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
     maxZoom: 11,
     id: 'cbeale2.cim3lwohp00xcbjlwhb0gwz7r',
     accessToken: 'pk.eyJ1IjoiY2JlYWxlMiIsImEiOiJjaW0zcGNyZmswMHFjdzFtNjMwb3I1ZGsyIn0.Y2_vAMkYv0QjOFdqu3M68w'
 }).addTo(mymap);
