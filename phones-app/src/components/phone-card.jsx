/* eslint-disable react/prop-types */
import { Component } from "react";

class PhoneCard extends Component {
  state = {};

  cancelHandler = () => {
    this.props.closeCard();
  };

  render() {
    return (
      <div className="card">
        <div className="card-header">Player Modal</div>
        <div className="card-body">Enter data ...</div>
        <div className="card-footer">
          <button className="btn btn-warning m-1" onClick={this.cancelHandler}>
            Cancel
          </button>
          <button className="btn btn-success m-1">Save</button>
        </div>
      </div>
    );
  }
}

export default PhoneCard;
