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
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <div>
            Other biographical data
          </div>
          <div>
            <img style={{ width: 450, height: 550 }} alt="text" src={`https://theunitedstates.io/images/congress/450x550/${member.get('id')}.jpg`} />
          </div>
        </div>
      </div>
    ) : (
      <div>Loading...</div>
    );
  }
}

export default MemberDisplay;
