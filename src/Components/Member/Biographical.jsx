import React from 'react';
import { Map, fromJS } from 'immutable';
import CongressionalMap from './CongressionalMap';

const chamber = Map({
  rep: 'House of Representatives',
  sen: 'Senate',
});

window.getData = () => {
  const apiLink = 'https://www.googleapis.com/fusiontables/v2/';
  const rowFetchSql = "SELECT ROWID, geometry from " + "1lnXJhKK1dX3dbzyq6S0gok4F44QpImPrqP4cd-Lk" + " where Code = 'AZ-09';";
  const param = "query?sql=" + rowFetchSql;
  const key = "&key=AIzaSyD8SMlcDgmqT3zUusiEpCZFKB4E0N9SiOk";
  return fetch(apiLink + param + key, { method: 'GET', 'Content-Type': 'application/json' }).then(resp => resp.json()).then((json) => {
    const x = fromJS(json);
    const geoObj = x.get('rows').get(0).get(1);
    let geometry;
    if (geoObj.get('geometry')) {
      geometry = geoObj.get('geometry').get('coordinates').get(0);
    } else {
      geometry = geoObj.get('geometries').flatMap(el => el.get('coordinates')).flatten(1);
    }
    const maxLng = geometry.maxBy(el => el.get(0)).get(0);
    const minLng = geometry.minBy(el => el.get(0)).get(0);
    const maxLat = geometry.maxBy(el => el.get(1)).get(1);
    const minLat = geometry.minBy(el => el.get(1)).get(1);
    const lngDiff = maxLng - minLng;
    const latDiff = maxLat - minLat;
    console.log('longDiff: ', lngDiff)
    console.log('latDiff: ', latDiff)
    // max diff of 12 still about 6
    // maxx diff of 8 -> 6
    // max diff of 6 roughly zoom of 6
    // max diff of 2 -> 7, maybe 8
    // max diff of 1.05 -> 8
    // max diff of 0.8 about 9
    // max diff of 0.37 -> 10
    // max diff of 0.34 -> 10
    // max diff of 0.2 10, closer to 11?
    // max diff of 0.17 -> 11
    // max diff of 0.09, 12
  });
};

const Biographical = ({ member }) => (
  <div className="mem-mid">
    <div className="mem-mid-left">
      <CongressionalMap zoom={6} />
    </div>
    <div className="mem-mid-right">
      <img alt="text" src={`https://theunitedstates.io/images/congress/450x550/${member.get('id')}.jpg`} />
    </div>
  </div>
);

export default Biographical;
