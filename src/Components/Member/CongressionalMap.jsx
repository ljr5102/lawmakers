import React from 'react';

class CongressionalMap extends React.Component {
  componentDidMount() {
    const { lat, lng, zoom, code, state } = this.props;
    const congressionalQuery = {
      select: 'col4',
      from: '1lnXJhKK1dX3dbzyq6S0gok4F44QpImPrqP4cd-Lk',
      where: `col2 \x3d \x27${code}\x27`,
    };
    const senateQuery = {
      select: 'col1',
      from: '1VIlPVQuZyyUaT4j5X_KqGEmuZysxMaW2kshvLZ4V',
      where: `col0 \x3d \x27${state}\x27`,
    };
    const query = code ? congressionalQuery : senateQuery;
    const isMobile = (navigator.userAgent.toLowerCase().indexOf('android') > -1) ||
      (navigator.userAgent.match(/(iPod|iPhone|iPad|BlackBerry|Windows Phone|iemobile)/));
    if (isMobile) {
      const viewport = document.querySelector('meta[name=viewport]');
      viewport.setAttribute('content', 'initial-scale=1.0, user-scalable=no');
    }
    const mapDiv = document.getElementById('googft-mapCanvas');
    mapDiv.style.width = isMobile ? '100%' : '500px';
    mapDiv.style.height = isMobile ? '100%' : '300px';
    const map = new google.maps.Map(mapDiv, {
      // -98.998661 lng, 38.4981225 lat
      center: new google.maps.LatLng(lat, lng),
      zoom: zoom,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    });
    map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(document.getElementById('googft-legend-open'));
    map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(document.getElementById('googft-legend'));

    const layer = new google.maps.FusionTablesLayer({
      map,
      heatmap: { enabled: false },
      query,
      options: {
        styleId: 2,
        templateId: 2,
      },
    });

    if (isMobile) {
      const legend = document.getElementById('googft-legend');
      const legendOpenButton = document.getElementById('googft-legend-open');
      const legendCloseButton = document.getElementById('googft-legend-close');
      legend.style.display = 'none';
      legendOpenButton.style.display = 'block';
      legendCloseButton.style.display = 'block';
      legendOpenButton.onclick = () => {
        legend.style.display = 'block';
        legendOpenButton.style.display = 'none';
      };
      legendCloseButton.onclick = () => {
        legend.style.display = 'none';
        legendOpenButton.style.display = 'block';
      };
    }
  }

  render() {
    return (
      <div
        style={{
          height: 300, margin: 0, padding: 0, width: 500,
        }}
        id="googft-mapCanvas"
      />
    );
  }
}

export default CongressionalMap;
