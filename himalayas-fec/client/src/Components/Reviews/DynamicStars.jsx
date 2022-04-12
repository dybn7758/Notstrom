import React from "react";

class DynamicStars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      starsArr: [0, 0, 0, 0, 0],
      oldArr: [0, 0, 0, 0, 0],
    };

    this.handleStarsHover = this.handleStarsHover.bind(this);
    this.handleStarsClick = this.handleStarsClick.bind(this);
    this.handleStarsLeave = this.handleStarsLeave.bind(this);
  }

  handleStarsHover(event) {
    event.preventDefault();
    let rating = parseInt(event.target.getAttribute("value")) + 1;
    let newArr = [];
    while (newArr.length < 5) {
      if (rating > 0) {
        rating--;
        newArr.push(1);
      } else {
        newArr.push(0);
      }
    }
    this.setState({
      starsArr: newArr,
    });
  }

  handleStarsClick(event) {
    event.preventDefault();
    // console.log("🤘", Number(event.target.id));
    this.setState({
      oldArr: this.state.starsArr,
    });
  }

  handleStarsLeave(event) {
    event.preventDefault();
    this.setState({
      starsArr: this.state.oldArr,
    });
  }

  render() {
    return (
      <div>
        <h3>Rate out of 5 Stars</h3>
        {this.state.starsArr.map((item, i) => {
          return (
            <div
              className="single-star-container"
              value={i}
              key={i}
              onMouseOver={this.handleStarsHover}
              onMouseLeave={this.handleStarsLeave}
            >
              <div
                className="single-star-fill"
                style={{ width: `${parseInt(item * 31)}px` }}
              >
                <img
                  className="single-star-outline"
                  src="star.png"
                  value={i}
                  id={i + 1}
                  onClick={this.handleStarsClick}
                ></img>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default DynamicStars;
