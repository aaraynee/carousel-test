import React, { Component } from 'react';

import Carousel from './Carousel/carousel'

export default class App extends Component {
  render() {
    return (
      <div className="uk-container uk-padding">
        <h3>Carousel Test</h3>
        <Carousel />
      </div>
    );
  }
}
