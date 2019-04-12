import React from 'react';

class CongressionalMapNew extends React.Component {
  componentDidMount() {
    this.addMap();
  }

  addMap() {
    const mapboxAccessToken = 'pk.eyJ1IjoibGpyNTEwMiIsImEiOiJjanNhaHhybjcxZ3dzNDlxY25pbmtvaGRjIn0.NARlOWu0ZLhPNtosCnItYQ';
    const  { lat, lng, zoom, geoJson, color } = this.props
    const mymap = L.map('leaflet-map').setView(L.latLng(lat, lng), zoom);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + mapboxAccessToken, {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox.streets',
    }).addTo(mymap);
    L.geoJSON([geoJson], {
      style: {
        color,
      },
    }).addTo(mymap);
  }

  render() {
    return (
      <div id="leaflet-map" style={{ height: 300, width: 500, margin: 0, padding: 0 }} />
    );
  }
}

export default CongressionalMapNew;
