import { connect } from 'react-redux';
import { setActiveTab } from '../../Actions';
import Tab from './Tab';

const mapDispatchToProps = dispatch => ({
  handleClick: (tab) => {
    dispatch(setActiveTab(tab));
  },
});

export default connect(null, mapDispatchToProps)(Tab);
