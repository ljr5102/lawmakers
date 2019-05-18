import React from 'react';
import { Map } from 'immutable';
import CongressionalMap from './CongressionalMap';
import CongressionalImage from '../Congress/CongressionalImage';

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
    return !isLoading ? (
      <div className="mem-mid">
        <div className={leftKlass}>
          {shouldShowMap ? (
            <CongressionalMap lat={lat} lng={lng} zoom={zoom} geoJson={geoJson} color={colors.get(member.get('party'))} />
          ) : null}
        </div>
        <div className="mem-mid-right">
          <div className={partyToImage.get(member.get('party'))} />
          <CongressionalImage memberId={member.get('id')} size="450x550" />
        </div>
      </div>
    ) : null;
  }
}

export default Biographical;
