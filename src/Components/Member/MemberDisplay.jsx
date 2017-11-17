import React from 'react';
import { Link } from 'react-router-dom';
import HeaderLinks from './HeaderLinks';
import MemberBio from './MemberBio';
import Historical from './Historical';
import Contact from './Contact';

class MemberDisplay extends React.Component {
  componentWillMount() {
    this.props.member || this.props.load();
  }

  render() {
    const { member, nextId, previousId } = this.props;
    return member ? (
      <div className="mem-disp">
        <HeaderLinks nextId={nextId} previousId={previousId} />
        <div className="mem-top">
          {member.get('name')}
        </div>
        <MemberBio member={member} />
        <Historical member={member} />
        <Contact member={member} />
      </div>
    ) : (
      <div>Loading...</div>
    );
  }
}

export default MemberDisplay;
