import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({ label, handleClick }) => (
  <div
    role="tab"
    onClick={() => handleClick(label)}
    onKeyPress={() => handleClick(label)}
    tabIndex={0}
  >
    {label}
  </div>
);

Tab.propTypes = {
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Tab;
