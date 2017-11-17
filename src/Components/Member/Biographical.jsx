import React from 'react';
import { Map, fromJS } from 'immutable';
import CongressionalMap from './CongressionalMap';

const chamber = Map({
  rep: 'House of Representatives',
  sen: 'Senate',
});

class Biographical extends React.Component {
  constructor() {
    super();
  }

  componentWillMount() {
    const { member, load } = this.props;
    if (member.get('district')) {
      load(`${member.get('state')}-${member.get('district').toString()}`);
    }
  }
  render() {
    const { member, lat, lng, zoom } = this.props;
    const code = `${member.get('state')}-${member.get('district').toString()}`;
    return lat ? (
      <div className="mem-mid">
        <div className="mem-mid-left">
          <CongressionalMap lat={lat} lng={lng} code={code} zoom={zoom} />
        </div>
        <div className="mem-mid-right">
          <img alt="text" src={`https://theunitedstates.io/images/congress/450x550/${member.get('id')}.jpg`} />
        </div>
      </div>
    ) : null;
  }
};

export default Biographical;
