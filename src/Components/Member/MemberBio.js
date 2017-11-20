import { connect } from 'react-redux';
import Biographical from './Biographical';
import { getMemberMapData, clearMapData, hideMap } from '../../Actions';

const mapStateToProps = ({ congressionalMap }) => ({
  lng: congressionalMap.get('lng'),
  lat: congressionalMap.get('lat'),
  zoom: congressionalMap.get('zoom'),
  isLoading: congressionalMap.get('isLoading'),
  shouldShowMap: congressionalMap.get('shouldShowMap'),
  code: congressionalMap.get('code'),
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

const mapDispatchToProps = dispatch => ({
  load: (member) => {
    dispatch(clearMapData());
    const district = convertDistrict(member.get('district'));
    const notState = ['AS', 'DC', 'GU', 'MP', 'PR', 'VI'].indexOf(member.get('state')) > -1;
    if (!district || notState) {
      return dispatch(hideMap());
    }
    const code = `${member.get('state')}-${district}`;
    return dispatch(getMemberMapData(code));
  },
  clearMapData: () => dispatch(clearMapData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Biographical);
