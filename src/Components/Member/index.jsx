import React from 'react';
import PropTypes from 'prop-types';
import DetailedMember from './DetailedMember';
import '../../Styles/Member.scss';

const Member = ({ match }) => (
  <div className="mem">
    <div className="mem-group">
      <DetailedMember id={match.params.id} />
    </div>
  </div>
);

Member.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool.isRequired,
    params: PropTypes.shape({ id: PropTypes.string.isRequired }),
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default Member;
