import React from 'react';

class CongressionalImage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageSources: [
        `https://theunitedstates.io/images/congress/225x275/${props.memberId}.jpg`,
        `http://bioguide.congress.gov/bioguide/photo/${props.memberId[0]}/${props.memberId}.jpg`,
      ],
      imgSrcIndex: 0,
    };
    this.handleError = this.handleError.bind(this);
  }

  handleError() {
    if (this.state.imgSrcIndex < this.state.imageSources.length) {
      this.setState({ imgSrcIndex: this.state.imgSrcIndex + 1 });
    }
  }

  render() {
    const { memberId } = this.props;
    const src = this.state.imageSources[this.state.imgSrcIndex];
    return this.state.imgSrcIndex >= this.state.imageSources.length ? (
      <div className="faux-image" style={{ backgroundImage: "url('/assets/house_seal.png')" }} />
    ) : (
      <img id={`${memberId}-img`} alt="text" onError={this.handleError} src={src} />
    );
  }
}

export default CongressionalImage;
