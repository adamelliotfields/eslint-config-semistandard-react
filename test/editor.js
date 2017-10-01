/* Editor Tests
 *
 * Open this file in your text editor to test your ESLint editor extension
 *****************************************************************************/

/* eslint no-undef: "off", no-unused-vars: "off" */

// no-duplicates

import * as Foo from './foo';
import { Bar } from './foo';

// no-webpack-loader-syntax

require('my-loader!./my-module');

// first

import Baz from './Foo';

// no-deprecated-api

const fs = require('fs');
fs.exists('./foo.js', () => {
  console.log(true);
});

// param-names

const myPromise = new Promise((ok, fail) => {
  ok();
});

// jsx-no-undef
// jsx-boolean-value
// jsx-equals-spacing
// jsx-curly-spacing
// jsx-no-duplicate-props
// jsx-no-bind
// jsx-tag-spacing

const Hello = () => (
  <Greeting
    personal = { true }
    personal
    onClick={this.handleClick.bind(this)}/>
);

// no-unused-prop-types
// no-did-update-set-state
// prop-types

class Component extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired
  };

  componentDidUpdate () {
    this.setState({
      oldState: this.props.newState
    });
  }
}

// self-closing-comp
// no-unknown-property

const Container = () => <div class='container'></div>;

// array-bracket-even-spacing

const arr = [ 1, 2, 3, 4];

// object-curly-even-spacing
// computed-property-even-spacing

const obj = { [ key]: 'value'};

// no-callback-literal

callback('error');
