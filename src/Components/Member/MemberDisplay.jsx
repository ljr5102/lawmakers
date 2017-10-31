import React from 'react';

class MemberDisplay extends React.Component {
  componentWillMount() {
    this.props.member || this.props.load();
  }

  render() {
    const { member } = this.props;
    return member ? (
      <div className="mem-disp">
        <div className="mem-top">
          {member.get('name')}
        </div>
        <div className="mem-mid">
          <div className="mem-mid-left">
            <div>
              <div className="header">
                Biographical Data:
              </div>
              <div className="data">
                <div>
                  DOB: {member.get('birthday')}
                </div>
                <div>
                  Religion: {member.get('religion') || 'N/A'}
                </div>
              </div>
            </div>
            <div>
              <div className="header">
                Congressional Data:
              </div>
              <div className="data">
                <div>
                  Chamber: {member.get('chamber') === 'rep' ? 'House of Representatives' : 'Senate'}
                </div>
                <div>
                  State: {member.get('state')}
                </div>
                <div>
                  District: {member.get('district')}
                </div>
                <div>
                  Party: {member.get('party')}
                </div>
              </div>
            </div>
          </div>
          <div className="mem-mid-right">
            <img alt="text" src={`https://theunitedstates.io/images/congress/450x550/${member.get('id')}.jpg`} />
          </div>
        </div>
      </div>
    ) : (
      <div>Loading...</div>
    );
  }
}

export default MemberDisplay;
