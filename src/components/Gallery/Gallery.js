import React, { Component } from "react";
import bar from "../../assets/images/bar.png";
import train from "../../assets/images/train.png";
import restaurant from "../../assets/images/restaurant.png";
import Button from "@material-ui/core/Button";

class Gallery extends Component {
  state = {
    index: 0,
    picList: [bar, train, restaurant],
  };

  onClickNext = () => {
    if (this.state.index + 1 === this.state.picList.length) {
      this.setState({
        index: 0,
      });
    } else {
      this.setState({
        index: this.state.index + 1,
      });
    }
  };
  onClickPrevious = () => {
    if (this.state.index - 1 === -1) {
      this.setState({
        index: this.state.picList.length - 1,
      });
    } else {
      this.setState({
        index: this.state.index - 1,
      });
    }
  };

  render() {
    return (
      <div className="center-box ml-auto mr-auto">
        <img
          src={this.state.picList[this.state.index]}
          className="gallery-img"
        />
        <br />
        <Button
          className="mt-2 mb-3 mr-5 btnWidth"
          variant="contained"
          onClick={this.onClickPrevious}
        
          > Previous
        </Button>
        <Button
          className="mt-2 mb-3 btnWidth"
          variant="contained"
          color="primary"
          onClick={this.onClickNext}
        >
          Next
        </Button>
      </div>
    );
  }
}

export default Gallery;
