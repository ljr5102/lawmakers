import React from 'react';
import PropTypes from 'prop-types';
import '../../Styles/spinner.scss';

const Spinner = ({ styles }) => (
  <div className="lds-css ng-scope" style={styles}>
    <div className="lds-gear" style={{ height: '100%' }}>
      <div>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  </div>
);


Spinner.propTypes = {
  styles: PropTypes.object,
};

Spinner.defaultProps = {
  styles: {
    position: 'absolute',
    left: '48%',
    top: '48%',
    width: '65px',
  },
};

export default Spinner;
