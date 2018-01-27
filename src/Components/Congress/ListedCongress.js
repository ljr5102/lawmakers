import { connect } from 'react-redux';
import CongressionalList from './CongressionalList';

const mapStateToProps = ({ congressmen, filter }) => ({
  filter,
  congressmen,
});

export default connect(mapStateToProps)(CongressionalList);
