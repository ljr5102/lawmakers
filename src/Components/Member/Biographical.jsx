import React from 'react';
import { Map } from 'immutable';
import CongressionalMap from './CongressionalMap';
import CongressionalMapNew from './CongressionalMapNew';

const partyToImage = Map({
  Republican: 'elephant',
  Democrat: 'donkey',
});

const colors = Map({
  Democrat: '#0560d2',
  Republican: '#bf0900',
});

class Biographical extends React.Component {
  componentWillMount() {
    const { member, load } = this.props;
    load(member);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.member.get('id') !== this.props.member.get('id')) {
      this.props.load(nextProps.member);
    }
  }

  componentWillUnmount() {
    this.props.clearMapData();
  }

  render() {
    const { member, lat, lng, zoom, isLoading, shouldShowMap, code, state, geoJson } = this.props;
    const leftKlass = shouldShowMap ? 'mem-mid-left' : 'mem-mid-left hide'
    const useUpgradedMap = true;
    return !isLoading ? (
      <div className="mem-mid">
        <div className={leftKlass}>
          {shouldShowMap ? (
            useUpgradedMap ? (
              <CongressionalMapNew lat={lat} lng={lng} zoom={zoom} geoJson={geoJson} color={colors.get(member.get('party'))} />
            ) : (
              <CongressionalMap lat={lat} lng={lng} code={code} state={state} zoom={zoom} />
            )
          ) : null}
        </div>
        <div className="mem-mid-right">
          <div className={partyToImage.get(member.get('party'))} />
          <img alt="text" src={`https://theunitedstates.io/images/congress/450x550/${member.get('id')}.jpg`} />
        </div>
      </div>
    ) : null;
  }
}

export default Biographical;
