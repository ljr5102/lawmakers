import { connect } from 'react-redux';
import { setActiveTab } from '../../Actions';
import Tab from './Tab';

const mapStateToProps = ({ tab }) => ({
  active: tab.get('active'),
});

const mapDispatchToProps = dispatch => ({
  handleClick: (tab) => {
    dispatch(setActiveTab(tab));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Tab);
