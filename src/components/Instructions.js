import React, { Component } from 'react';
import { connect } from 'react-redux';
import { expandInstructions, collapseInstructions } from '../actions/settings';

class Instructions extends Component {
  render() {
    return (
      <div>
        <br />
        { this.props.instructionsExpanded ? (
          <div>
            <h3>Some instructions</h3>
            <br />
            <button onClick={this.props.collapseInstructions}>Hide instructions</button>
          </div>
        ) : (
          <div>
            <button onClick={this.props.expandInstructions}>See instructions</button>
          </div>
        )}
      </div>
    );
  }
}

export default connect(
  state => ({ instructionsExpanded: state.instructionsExpanded }),
  { expandInstructions, collapseInstructions }
)(Instructions);
