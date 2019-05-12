import React from 'react';

class CongressionalImage extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { memberId } = this.props;
    return (
      <img alt="text" src={`https://theunitedstates.io/images/congress/225x275/${memberId}.jpg`} />
    );
  }
}

export default CongressionalImage;
