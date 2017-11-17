import { connect } from 'react-redux';
import Biographical from './Biographical';
import { getMemberMapData } from '../../Actions';

const mapStateToProps = ({ congressionalMap }) => ({
  lng: congressionalMap.get('lng'),
  lat: congressionalMap.get('lat'),
  zoom: congressionalMap.get('zoom'),
});

const mapDispatchToProps = dispatch => ({
  load: code => dispatch(getMemberMapData(code)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Biographical);
