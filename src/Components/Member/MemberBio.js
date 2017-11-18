import { connect } from 'react-redux';
import Biographical from './Biographical';
import { getMemberMapData, clearMapData } from '../../Actions';

const mapStateToProps = ({ congressionalMap }) => ({
  lng: congressionalMap.get('lng'),
  lat: congressionalMap.get('lat'),
  zoom: congressionalMap.get('zoom'),
  isLoading: congressionalMap.get('isLoading'),
});

const mapDispatchToProps = dispatch => ({
  load: code => dispatch(getMemberMapData(code)),
  clearMapData: () => dispatch(clearMapData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Biographical);
