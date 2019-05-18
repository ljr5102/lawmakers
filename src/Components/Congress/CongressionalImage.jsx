import React from 'react';
import PropTypes from 'prop-types';

const chamberToDefaultImage = {
  rep: "url('/assets/house_seal.png')",
  sen: "url('/assets/senate_seal.png')",
};

class CongressionalImage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageSources: [
        `https://theunitedstates.io/images/congress/${props.size}/${props.memberId}.jpg`,
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
    const { memberId, chamber } = this.props;
    const src = this.state.imageSources[this.state.imgSrcIndex];
    return this.state.imgSrcIndex >= this.state.imageSources.length ? (
      <div className="faux-image" style={{ backgroundImage: chamberToDefaultImage[chamber] }} />
    ) : (
      <img id={`${memberId}-img`} alt="text" onError={this.handleError} src={src} />
    );
  }
}

CongressionalImage.propTypes = {
  memberId: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  chamber: PropTypes.string.isRequired,
};

export default CongressionalImage;
