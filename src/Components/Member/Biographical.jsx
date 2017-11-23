import React from 'react';
import { Map } from 'immutable';
import CongressionalMap from './CongressionalMap';

const partyToImage = Map({
  Republican: 'elephant',
  Democrat: 'donkey',
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
    const { member, lat, lng, zoom, isLoading, shouldShowMap, code } = this.props;
    return !isLoading ? (
      <div className="mem-mid">
        <div className="mem-mid-left">
          {shouldShowMap ? <CongressionalMap lat={lat} lng={lng} code={code} zoom={zoom} /> : null}
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
