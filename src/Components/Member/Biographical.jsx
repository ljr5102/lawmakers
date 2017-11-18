import React from 'react';
import { Map, fromJS } from 'immutable';
import CongressionalMap from './CongressionalMap';

const chamber = Map({
  rep: 'House of Representatives',
  sen: 'Senate',
});

const convertDistrict = (dist) => {
  if (dist === undefined) {
    return null;
  } else if (dist === 0) {
    return 'AL';
  } else if (dist.toString().length < 2) {
    return `0${dist}`;
  }
  return dist.toString();
};

class Biographical extends React.Component {
  constructor() {
    super();
  }


  componentWillMount() {
    const { member, load } = this.props;
    const district = convertDistrict(member.get('district'));
    const notState = ['AS', 'DC', 'GU', 'MP', 'PR', 'VI'].indexOf(member.get('state')) > -1;
    if (district && !notState) {
      load(`${member.get('state')}-${district}`);
    }
  }


  componentWillReceiveProps(nextProps) {
    if (nextProps.member.get('id') !== this.props.member.get('id')) {
      const district = convertDistrict(nextProps.member.get('district'));
      const notState = ['AS', 'DC', 'GU', 'MP', 'PR', 'VI'].indexOf(nextProps.member.get('state')) > -1;
      if (district && !notState) {
        return this.props.load(`${nextProps.member.get('state')}-${district}`)
      }
      return this.props.clearMapData();
    }
  }

  componentWillUnmount() {
    this.props.clearMapData();
  }

  render() {
    const { member, lat, lng, zoom, isLoading } = this.props;
    const district = convertDistrict(member.get('district'));
    const code = `${member.get('state')}-${district}`;
    const notState = ['AS', 'DC', 'GU', 'MP', 'PR', 'VI'].indexOf(member.get('state')) > -1;
    return !isLoading || !district || notState ? (
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
