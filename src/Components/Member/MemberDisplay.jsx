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
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ padding: 5, fontSize: 22, color: 'white', fontWeight: 'bold', textDecoration: 'underline' }}>
              Biographical Data:
            </div>
            <div style={{ padding: 5, fontSize: 20, color: 'white' }}>
              DOB: {member.get('birthday')}
            </div>
            <div style={{ padding: 5, fontSize: 20, color: 'white' }}>
              Religion: {member.get('religion')}
            </div>
            <div style={{ padding: 5, fontSize: 20, color: 'white' }}>
              Party: {member.get('party')}
            </div>
          </div>
          <div style={{ border: '1px solid white' }}>
            <img style={{ width: 450, height: 550 }} alt="text" src={`https://theunitedstates.io/images/congress/450x550/${member.get('id')}.jpg`} />
          </div>
        </div>
        <div>
          Term Data
        </div>
      </div>
    ) : (
      <div>Loading...</div>
    );
  }
}

export default MemberDisplay;
