import { connect } from 'react-redux';
import CongressionalList from './CongressionalList';

const mapStateToProps = ({ congressmen }) => ({
  congressmen,
});

export default connect(mapStateToProps)(CongressionalList);
