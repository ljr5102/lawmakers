import React from 'react';
import PropTypes from 'prop-types';

class CongressionalImage extends React.Component {
  constructor(props) {
    super(props);

    const { size, memberId } = props;
    this.state = {
      imageSources: [
        `https://theunitedstates.io/images/congress/${size}/${memberId}.jpg`,
        `http://bioguide.congress.gov/bioguide/photo/${memberId[0]}/${memberId}.jpg`,
      ],
      imgSrcIndex: 0,
    };
    this.handleError = this.handleError.bind(this);
  }

  handleError() {
    const { imgSrcIndex, imageSources } = this.state;
    if (imgSrcIndex < imageSources.length) {
      this.setState({ imgSrcIndex: imgSrcIndex + 1 });
    }
  }

  render() {
    const { memberId, chamber } = this.props;
    const { imageSources, imgSrcIndex } = this.state;
    const src = imageSources[imgSrcIndex];
    return imgSrcIndex >= imageSources.length ? (
      <div className={`faux-image ${chamber}`} />
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
